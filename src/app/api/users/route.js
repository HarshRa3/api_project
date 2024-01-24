import { ResponseMessage } from "@/app/helper/ResponseErrorMessage";
import { connectdb } from "@/app/helper/db";
import { User } from "@/app/models/users";
import bcrypt from 'bcryptjs'

// Establish database connection
connectdb();

// GET endpoint - Fetch all users
export const GET = async () => {
  try {
    const users = await User.find();
    return ResponseMessage("Users retrieved successfully", users, true, 200);
  } catch (error) {
    return ResponseMessage(`Error: ${error.message}`, null, false, 500);
  }
};

// POST endpoint - Create a new user
export const POST = async (request) => {
  const { name, email, password, about, profileUrl } = await request.json();
  try {
    const hashpassword=await bcrypt.hash(password,parseInt(process.env.BCRYPT_SALT))
    const newUser = await User.create({
      name,
      email,
      password:hashpassword,
      about,
      profileUrl,
    });
    return ResponseMessage("User created successfully", newUser, true, 200);
  } catch (error) {
    return ResponseMessage(`Error: ${error.message}`, null, false, 500);
  }
};

// DELETE endpoint - Delete a user
export const DELETE = async (request) => {
  const id = request.nextUrl.searchParams.get("id");
  try {
    await User.findByIdAndDelete(id);
    return ResponseMessage("User deleted successfully", null, true, 200);
  } catch (error) {
    return ResponseMessage(`Error: ${error.message}`, null, false, 500);
  }
};
