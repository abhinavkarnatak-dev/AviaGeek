import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req) {
  try {
    const { name } = await req.json();

    if (!name) {
      return new Response(JSON.stringify({ message: "Name is required" }), {
        status: 400,
      });
    }

    await connectMongoDB();

    const updatedUser = await User.findOneAndUpdate(
      {},
      { $set: { name: name } },
      { new: true }
    );

    if (!updatedUser) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Profile updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating profile:", error);
    return new Response(
      JSON.stringify({
        message: "Error updating profile",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}