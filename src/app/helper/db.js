import mongoose from "mongoose"
export const connectdb=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL,{
            dbName:'work_manager'
        })
        console.log('Database has been connected successfully');
        // console.log(connction);
    } catch (error) {
        console.log("Error while connecting to the database");
        console.log(error);
    }
}
