import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUserLogin } from "../../interfaces/User";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import AppError from "../../errors/appError";

const userLoginService = async ({email, password}:IUserLogin) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const account = users.find(user => user.email === email)

    if(!account){
        throw new AppError('Wrong email or password', 401)
    }
    if(!bcrypt.compareSync(password, account.password)){
        throw new AppError('Wrong email or password', 401)
    }

    const token = jwt.sign(
        {email:email},
        String(process.env.SECRET_KEY),
        {expiresIn: '12h'}
    )

    return token
}

export default userLoginService