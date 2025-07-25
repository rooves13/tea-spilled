"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [images, setImages] = useState<string[]>([]);
  const [pair, setPair] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/images")
      .then((r) => r.json())
      .then((data) => {
        setImages(data);
        pickPair(data);
      });
  }, []);

  function pickPair(list: string[]) {
    if (list.length < 2) return;
    let a = list[Math.floor(Math.random() * list.length)];
    let b;
    do {
      b = list[Math.floor(Math.random() * list.length)];
    } while (a === b);
    setPair([a, b]);
  }

  function vote(winner: string, loser: string) {
    fetch("/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ winner, loser }),
    });
    pickPair(images);
  }

  return (
    <main style={{ textAlign: "center", padding: 20 }}>
      <h1>Photo Battle</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        {pair.map((img, i) => (
          <img
            key={img}
            src={`/images/${img}`}
            alt="photo"
            width={300}
            height={300}
            style={{ cursor: "pointer", borderRadius: 8 }}
            onClick={() => vote(img, pair[1 - i])}
          />
        ))}
      </div>
      <p>
        <a href="/leaderboard">View Leaderboard</a>
      </p>
    </main>
  );
}
