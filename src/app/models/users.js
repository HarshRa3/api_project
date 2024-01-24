import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: [true, "Please provide an Email Address"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    },
    about: String,
    profileUrl: String    
});

export const User = mongoose.models.users || mongoose.model('users', userSchema);
