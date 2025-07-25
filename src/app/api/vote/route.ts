import { NextResponse } from "next/server";

let votes: { winner: string; loser: string }[] = [];

export async function POST(req: Request) {
  const { winner, loser } = await req.json();

  votes.push({ winner, loser });

  return NextResponse.json({ success: true });
}
