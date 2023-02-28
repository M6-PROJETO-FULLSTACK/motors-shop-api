import { Request, Response } from "express"
import recoverPasswordService from "../../services/session/recoverPassword.service"

const recoverPasswordController = async (req:Request, res:Response) => {
    const {email} = req.body

    try {
        const recovered = await recoverPasswordService(email)
    
        return res.status(200).json({message: 'Email send with success'})
        
    } catch (error) {
        return res.status(400).json({message: 'Error sending email, try again later'})
    }
}

export default recoverPasswordController