import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entities"
import AppError from "../../errors/appError"
import {createTransport} from 'nodemailer'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

const recoverPasswordService = async (email:string) =>{
    const userRepository = AppDataSource.getRepository(User)
    
    const user = await userRepository.find({
        where:{
            email
        }
    })

    if(!user){
        throw new AppError('Unser not found', 404)
    }

    const trasporter = createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PWD
            }
    })

    const newPassword = crypto.randomBytes(6).toString('hex')

    trasporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Recover Password',
        html: `
        <p>Hello!<br>
        <br>
        Your new Motors shop password is:<b> ${newPassword}</b><br>
        <br>
        <a href="http://localhost:3000/login"> Click here</a> to login </p>`

    }).then(async () => {
            const password = await bcrypt.hash(newPassword, 8)
            
            await userRepository.update(user[0].id ,{
                password: password
            })

    }).catch(() => {
        throw new AppError('Error sending email, try again later', 400)
    })
}
 
export default recoverPasswordService