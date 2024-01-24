import  { instance } from '@/app/helper/httpsHelper'
export const addtask=async (task)=>{
    // 1. Get the task from the user input
    const tasks = await instance.post('api/task',task)
    const result=tasks.data
    console.log(result,'data is here');
}