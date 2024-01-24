import { ResponseMessage } from "@/app/helper/ResponseErrorMessage";
import { connectdb } from "@/app/helper/db";
import { Tasks } from "@/app/models/Tasks";
connectdb();
export const GET = async (request, { params }) => {
  const { taskId } = params;
  try {
    const singleTask = await Tasks.findById(taskId);
    return ResponseMessage(
      `Getting single data is succesfully `,
      singleTask,
      true,
      200
    );
  } catch (error) {
    return ResponseMessage(`Error message is ${error} `, null, false, 500);
  }
};
export const PUT = async (request, { params }) => {
  const { taskId } = params;
  const { title, content,status } = await request.json();
  try {
    const UpdatedData = await Tasks.findByIdAndUpdate(
      taskId,
      { title, content,status },
      { new: true }
    );
    return ResponseMessage(
      `Task has been updated successfully`,
      UpdatedData,
      true,
      200
    );
  } catch (error) {
    return ResponseMessage(`Error message is ${error} `, null, false, 500);
  }
};
export const DELETE = async (request, { params }) => { const { taskId } = params; try {
  await Tasks.deleteOne({_id:taskId})
  return ResponseMessage('Task Has been deleted',null,true,200)
} catch (error) {
  return ResponseMessage(`Error message is ${error} `, null, false, 500);  
}}
