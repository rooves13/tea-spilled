import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dir = path.join(process.cwd(), "public/images");
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f));
  return NextResponse.json(files);
}
