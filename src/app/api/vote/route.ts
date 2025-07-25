import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function POST(request: Request) {
  const { winner, loser } = await request.json();

  const db = await open({
    filename: ".data/votes.db",
    driver: sqlite3.Database,
  });

  await db.run(
    "CREATE TABLE IF NOT EXISTS votes (winner TEXT, loser TEXT)"
  );

  await db.run("INSERT INTO votes (winner, loser) VALUES (?, ?)", [
    winner,
    loser,
  ]);

  return NextResponse.json({ success: true });
}
