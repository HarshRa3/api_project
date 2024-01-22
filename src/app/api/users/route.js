import { ResponseMessage } from "@/app/helper/ResponseErrorMessage";
import { connectdb } from "@/app/helper/db";
import { User } from "@/app/models/users";
connectdb();
export const GET = async () => {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    return ResponseMessage(`Error message is ${error} `, null, false, 500);
  }
  return ResponseMessage("User Getting Successfully", users, true, 200);
};
export const POST = async (request) => {
  try {
    const { name, email, password, about, profileUrl } = await request.json();
    updatedUser = await User.create({
      name,
      email,
      password,
      about,
      profileUrl,
    });

    return ResponseMessage(
      "Topic and description has been created",
      updatedUser,
      true,
      200
    );
  } catch (error) {
    return ResponseMessage(`Error message is ${error}`, null, false, 500);
  }
};
export const DELETE = async (request) => {
  const id = request.nextUrl.searchParams.get("id");
  try {
    await User.findByIdAndDelete(id);
    return ResponseMessage("User deleted Successfully", null, true, 200);
  } catch (error) {
    return ResponseMessage(`Error message is ${error} `, null, false, 500);
  }
};
