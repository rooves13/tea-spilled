"use client";

import { useEffect, useState } from "react";

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dlufaisfi/image/upload";

export default function Leaderboard() {
  const [data, setData] = useState<
    { image: string; wins: number; losses: number }[]
  >([]);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Leaderboard</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
        }}
      >
        {data.map(({ image, wins, losses }) => (
          <div key={image} style={{ textAlign: "center" }}>
            <img
              src={`${CLOUDINARY_BASE_URL}/${image}`}
              alt={image}
              width={200}
              height={200}
              style={{ borderRadius: 12 }}
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
