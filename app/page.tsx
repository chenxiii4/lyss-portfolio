"use client";

import { useState } from "react";

/* ───────── DATA ───────── */
const sections = [
  {
    title: "拍攝 × 企劃 × 剪輯 全案製作",
    items: [
      {
        name: "i人挑戰送花給陌生人",
        subtitle: "精準打擊 i 人痛點",
        links: [
          {
            label: "Instagram Reel",
            url: "https://www.instagram.com/reel/DTDRKXSkgbK/",
          },
        ],
      },
      {
        name: "療癒自己的一百件事",
        links: [
          {
            label: "Instagram Reel",
            url: "https://www.instagram.com/reel/DVYZrwvEokB/",
          },
        ],
      },
    ],
  },
  {
    title: "剪輯作品",
    items: [
      {
        name: "日常",
        links: [{ label: "TikTok", url: "https://vt.tiktok.com/ZSxmWFCkR/" }],
      },
      {
        name: "紀錄片",
        links: [{ label: "TikTok", url: "https://vt.tiktok.com/ZSxmWMjY6/" }],
      },
      {
        name: "探店系列",
        links: [
          { label: "高雄小吃", url: "https://vt.tiktok.com/ZSxmWuFpd/" },
          { label: "嘉義餐廳", url: "https://vt.tiktok.com/ZSxmWG7NA/" },
        ],
      },
    ],
  },
  {
    title: "長片 Vlog",
    items: [
      {
        name: "旅遊",
        links: [{ label: "YouTube", url: "https://youtu.be/Lx5pq5xSokU" }],
      },
      {
        name: "日常",
        links: [{ label: "YouTube", url: "https://youtu.be/_11r3NGsjWA" }],
      },
    ],
  },
];

/* ───────── CARD ───────── */
function WorkCard({ item }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        border: "1px solid #333",
        padding: 16,
        marginBottom: 12,
        cursor: "pointer",
        background: "#111",
        color: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div>{item.name}</div>
          {item.subtitle && (
            <div style={{ fontSize: 12, opacity: 0.6 }}>
              {item.subtitle}
            </div>
          )}
        </div>
        <div>{open ? "−" : "+"}</div>
      </div>

      {open && (
        <div style={{ marginTop: 10 }}>
          {item.links.map((link: any, i: number) => (
            <div key={i}>
              <a href={link.url} target="_blank" style={{ color: "#F3C63F" }}>
                {link.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ───────── PAGE ───────── */
export default function Home() {
  return (
    <main style={{ padding: 40, background: "#000", minHeight: "100vh" }}>
      <h1 style={{ color: "#F3C63F", fontSize: 40 }}>
        Lyss Portfolio
      </h1>

      {sections.map((section) => (
        <div key={section.title} style={{ marginTop: 40 }}>
          <h2 style={{ color: "#fff", marginBottom: 20 }}>
            {section.title}
          </h2>

          {section.items.map((item, i) => (
            <WorkCard key={i} item={item} />
          ))}
        </div>
      ))}

      <div style={{ marginTop: 60, color: "#999" }}>
        Email: lyssss2521@gmail.com
      </div>
    </main>
  );
}