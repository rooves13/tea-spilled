"use client";

import { useEffect, useState } from "react";

type Stat = { image: string; wins: number; losses: number };

export default function Leaderboard() {
  const [data, setData] = useState<Stat[]>([]);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((r) => r.json())
      .then(setData);
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Leaderboard</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 20,
        }}
      >
        {data.map(({ image, wins, losses }) => (
          <div key={image} style={{ textAlign: "center" }}>
            <img
              src={`/images/${image}`}
              alt={image}
              width={200}
              height={200}
              style={{ borderRadius: 8 }}
            />
            <p>
              Wins: {wins} | Losses: {losses}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
