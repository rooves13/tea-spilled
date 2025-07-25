// src/app/api/leaderboard/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const leaderboard = [
    { name: 'Alice', votes: 42 },
    { name: 'Bob', votes: 37 },
    { name: 'Charlie', votes: 25 },
  ];

  return NextResponse.json(leaderboard);
}
