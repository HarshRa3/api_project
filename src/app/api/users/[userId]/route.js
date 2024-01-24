import { ResponseMessage } from "@/app/helper/ResponseErrorMessage";
import { connectdb } from "@/app/helper/db";
import { User } from "@/app/models/users";
connectdb()
export const GET= async (request,{params})=>{
const {userId}=params
    try {
       const singleUser  = await User.findById(userId)
    return ResponseMessage('Getting Single User SuccessFully',singleUser,true,200)
    } catch (error) {
        return ResponseMessage(`Error message is ${error} `,null,false,500) 
       }
}
export const PUT= async (request,{params})=>{
    const {userId}=params
    const {name,password,about,profileUrl}=await request.json()
    try {
     const upadatedUser=await User.findByIdAndUpdate(userId,{name,password,about,profileUrl},{new:true}).select('-password');
    return ResponseMessage('User Updated successfully',upadatedUser,true,200)
    
    } catch (error) {
        return ResponseMessage(`Error message is ${error} `,null,false,500)
    }
}