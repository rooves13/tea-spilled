import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  // Example: list images or return sample image URLs
  // (You'll likely want to query your Cloudinary account or use stored URLs)
  
  const images = [
    cloudinary.url("sample1.jpg"),
    cloudinary.url("sample2.jpg"),
  ];

  return NextResponse.json(images);
}
