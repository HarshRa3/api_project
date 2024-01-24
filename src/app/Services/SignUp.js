import  { instance } from '@/app/helper/httpsHelper'
export const signUpUser=async (user)=>{
    // 1. Get the task from the user input
    const users = await instance.post('api/users',user)
    // const result=user.data
    // console.log(result,'data is here');
    console.log(users);
}