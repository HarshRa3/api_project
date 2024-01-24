import { ResponseMessage } from "@/app/helper/ResponseErrorMessage"
import { User } from "@/app/models/users"
import bcrypt from 'bcryptjs'
export const POST=async (request)=>{
    const {email,password}=await request.json()
    try {
        const user=await User.findOne({email:email})
        if(user===null){
            throw new Error('User not found !!')
        }
        const matched=bcrypt.compareSync(password,user.password)
        if(!matched){
            throw new Error('Password is not match')
        }
    } catch (error) {
        return ResponseMessage(`Error is: ${error}`,null,false,500)
    }
}