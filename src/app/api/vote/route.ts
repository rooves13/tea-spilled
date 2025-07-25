// src/app/api/vote/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  // Log or fake store the vote
  return NextResponse.json({ success: true, received: body });
}
