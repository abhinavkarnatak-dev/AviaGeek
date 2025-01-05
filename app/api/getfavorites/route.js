import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    await connectMongoDB();

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ favorites: user.favorites || [] }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}