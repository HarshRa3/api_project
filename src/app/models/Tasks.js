import mongoose from 'mongoose'
const taskSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    addedDate:{
        type: Date,
        default: Date.now()

    },
    status:{
        type: String,  
        enum: ['pending', 'completed'],
        default:'pending',
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
     
    }
})
export const Tasks = mongoose.models.Tasks || mongoose.model('Tasks',taskSchema);