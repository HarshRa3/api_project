import { ResponseMessage } from "@/app/helper/ResponseErrorMessage";
import { connectdb } from "@/app/helper/db";
import { Tasks } from "@/app/models/Tasks";
connectdb();
export const GET = async (request) => {
  let task = [];
  try {
    task = await Tasks.find();
    return ResponseMessage("Task getting successfully",task,true,200);
  } catch (error) {
    return ResponseMessage(`Error message is ${error} `, null, false, 500);
  }

};
export const POST = async (request) => {
  try {
    const { title, content, userId ,status} = await request.json();
    await Tasks.create({ title, content, userId,status});
    return ResponseMessage("Task been created successfully",null,true,200);
  } catch (error) {
    return ResponseMessage( `error is ${error}`,null,false,500);
  }
};
