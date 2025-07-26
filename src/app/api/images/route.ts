import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    // List images from Cloudinary in a specific folder (or root)
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "your-folder/", // if you use folders, otherwise remove this line
      max_results: 100,
      resource_type: "image",
    });

    // Map to array of public_ids (image names)
    const images = result.resources.map((img) => img.public_id);

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
