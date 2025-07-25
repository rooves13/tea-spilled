import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function GET() {
  const db = await open({
    filename: ".data/votes.db",
    driver: sqlite3.Database,
  });

  await db.run(
    "CREATE TABLE IF NOT EXISTS votes (winner TEXT, loser TEXT)"
  );

  const rows = await db.all(`
    SELECT image,
      SUM(CASE WHEN image = winner THEN 1 ELSE 0 END) AS wins,
      SUM(CASE WHEN image = loser THEN 1 ELSE 0 END) AS losses
    FROM (
      SELECT winner AS image FROM votes
      UNION ALL
      SELECT loser AS image FROM votes
    )
    GROUP BY image
    ORDER BY wins DESC
  `);

  return NextResponse.json(rows);
}
