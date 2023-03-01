import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUserLogin } from "../../interfaces/User";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import AppError from "../../errors/appError";

const userLoginService = async ({email, password}:IUserLogin) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const user = users.find(user => user.email === email)

    if(!user){
        throw new AppError('Wrong email or password', 401)
    }
    if(!bcrypt.compareSync(password, user.password)){
        throw new AppError('Wrong email or password', 401)
    }

    const token = jwt.sign(
        {email:email},
        String(process.env.SECRET_KEY),
        {expiresIn: '12h'}
    )

    return {user,token}
}

export default userLoginService