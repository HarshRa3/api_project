import { ResponseMessage } from "@/app/helper/ResponseErrorMessage"
import { Tasks } from "@/app/models/Tasks"

export const GET=async (requese,{params})=>{
    const {userId}=params
    try {
       const allTaskOfSingleUser= await Tasks.find({userId:userId})
       return ResponseMessage("Task getting successfully",allTaskOfSingleUser,true,200)
    } catch (error) {
        return ResponseMessage(`Error message is ${error} `, null, false, 500);
    }
}