import { NextResponse } from "next/server";

let votes: { winner: string; loser: string }[] = [];

export async function GET() {
  const counts: Record<string, { wins: number; losses: number }> = {};

  for (const { winner, loser } of votes) {
    counts[winner] = counts[winner] || { wins: 0, losses: 0 };
    counts[loser] = counts[loser] || { wins: 0, losses: 0 };

    counts[winner].wins++;
    counts[loser].losses++;
  }

  const leaderboard = Object.entries(counts).map(([image, { wins, losses }]) => ({
    image,
    wins,
    losses,
  }));

  return NextResponse.json(leaderboard);
}
