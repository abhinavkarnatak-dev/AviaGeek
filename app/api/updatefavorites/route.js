import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function PATCH(req) {
  const { email, favorites } = await req.json();

  try {
    await connectMongoDB();

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        { status: 404 }
      );
    }
    user.favorites = favorites;

    try {
      await user.save();
      return new Response(
        JSON.stringify({ message: "Favorites updated successfully" }),
        { status: 200 }
      );
    } catch (error) {
      if (error.name === "VersionError") {
        console.error("Version conflict detected, retrying...");

        const updatedUser = await User.findOneAndUpdate(
          { email },
          { $set: { favorites } },
          { new: true, runValidators: true }
        );

        if (!updatedUser) {
          return new Response(
            JSON.stringify({ error: "User not found or failed to update" }),
            { status: 404 }
          );
        }

        return new Response(
          JSON.stringify({ message: "Favorites updated successfully after retrying" }),
          { status: 200 }
        );
      }

      console.error("Error during user save:", error);
      return new Response(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error updating favorites:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
