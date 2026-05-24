"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Caveat, Cinzel } from "next/font/google";

const handwriting = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cinematicSerif = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500"],
});

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
        subtitle: "",
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
          { label: "眼鏡行", url: "https://vt.tiktok.com/ZSxmceHHb/" },
          { label: "嘉義小吃", url: "https://vt.tiktok.com/ZSxmc9JDP/" },
        ],
      },
    ],
  },
  {
    title: "長片 Vlog",
    subtitle: "拍攝 / 企劃 / 剪輯",
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

/* ───────── STARS ───────── */
function HeaderStars() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-8 text-white/40 text-xs">✦</div>
      <div className="absolute top-16 right-10 text-yellow-200/50 text-xs">✧</div>
      <div className="absolute bottom-20 left-1/4 text-white/20 text-[10px]">✦</div>
    </div>
  );
}

/* ───────── CARD ───────── */
function WorkCard({ item }: any) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div whileHover={{ y: -3 }} className="flex justify-center">
      <div
        onClick={() => setOpen(!open)}
        className="relative cursor-pointer bg-white w-full max-w-sm shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
      >
        <div className="bg-black text-white p-3 relative min-h-[150px]">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none grain" />

          <div className="flex justify-between items-start relative z-10">
            <div className="flex flex-col gap-1">
              <span className="text-base font-extralight">{item.name}</span>

              {item.subtitle && (
                <span className="text-white/35 text-[11px]">
                  {item.subtitle}
                </span>
              )}
            </div>

            <span className="text-white/25 text-xs">
              {open ? "−" : "+"}
            </span>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 flex flex-col gap-2 relative z-10"
              >
                {item.links.map((link: any, i: number) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    className="text-[11px] text-white/60 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-6 bg-white border-t border-black/5" />
      </div>
    </motion.div>
  );
}

/* ───────── PAGE ───────── */
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* frame */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="absolute inset-3 border border-white/10" />
      </div>

      {/* grain */}
      <div className="grain fixed inset-0 opacity-[0.035] pointer-events-none" />

      {/* ───────── HERO ───────── */}
      <div className="relative h-[60vh] flex flex-col justify-center items-center">

        <HeaderStars />

        {/* LYSS FILMS */}
        <div className="absolute top-10 flex flex-col items-center gap-1 opacity-70">
          <div className="text-white text-sm">✦</div>
          <span className="text-[10px] tracking-[0.5em] uppercase">
            LYSS FILMS
          </span>
        </div>

        <motion.div className="text-center px-6">
          <h1
            style={{ fontFamily: handwriting.style.fontFamily }}
            className="text-[13vw] md:text-[8vw] text-[#F3C63F] leading-[0.8]"
          >
            Lyss Portfolio
          </h1>

          <p
            style={{ fontFamily: cinematicSerif.style.fontFamily }}
            className="text-[10px] tracking-[0.4em] uppercase text-white/70 mt-5"
          >
            Film Photobooth Portfolio
          </p>
        </motion.div>

        {/* scroll indicator */}
        <div className="absolute bottom-6 flex flex-col items-center gap-1 text-white/40 animate-pulse">
          <span className="text-[10px] tracking-[0.4em] uppercase">
            Scroll
          </span>
          <div className="text-sm">↓</div>
        </div>
      </div>

      {/* GRID */}
      <div className="px-6 md:px-20 pb-28 max-w-6xl mx-auto space-y-16">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#F3C63F] mb-6">
              {section.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <WorkCard key={i} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT（只留 Email） */}
      <div className="px-6 md:px-20 pb-20 max-w-6xl mx-auto border-t border-white/10 pt-16">

        <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#F3C63F] mb-6">
          Contact
        </h2>

        <div className="text-white/60 text-sm">
          <p>
            Email:{" "}
            <a
              className="hover:text-white transition"
              href="mailto:lyssss2521@gmail.com"
            >
              lyssss2521@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* grain */}
      <style jsx global>{`
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}</style>

    </main>
  );
}
