"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Caveat, Cormorant_Garamond } from "next/font/google";

const handwriting = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/* ---------- 🌿 植物插畫（綠色質感版） ---------- */

function PlantLeft() {
  return (
    <svg
      className="absolute left-[-120px] top-16 w-[380px] opacity-30"
      viewBox="0 0 200 400"
      fill="none"
    >
      <path
        d="M110 390 C95 320, 140 260, 110 190 C85 130, 120 80, 105 20"
        stroke="#6F8F6A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M110 300 C70 285, 60 260, 95 245"
        stroke="#7FA77A"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M110 240 C150 225, 160 200, 125 185"
        stroke="#6F8F6A"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M110 185 C75 170, 60 145, 90 130"
        stroke="#8FBF86"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlantRight() {
  return (
    <svg
      className="absolute right-[-140px] top-32 w-[420px] opacity-20"
      viewBox="0 0 200 400"
      fill="none"
    >
      <path
        d="M100 390 C120 310, 80 250, 105 185 C130 120, 90 70, 110 20"
        stroke="#6F8F6A"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M105 270 C145 250, 165 230, 130 210"
        stroke="#7FA77A"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M105 210 C70 190, 50 165, 85 145"
        stroke="#8FBF86"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlantBottom() {
  return (
    <svg
      className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[700px] opacity-15"
      viewBox="0 0 600 200"
      fill="none"
    >
      <path
        d="M0 160 C120 110, 180 190, 300 150 C420 110, 480 190, 600 140"
        stroke="#6F8F6A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- DATA（完整保留） ---------- */

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
        name: "體驗陌生人的一天",
        subtitle: "",
        links: [
          {
            label: "Instagram Reel",
            url: "https://www.instagram.com/reel/DZCqoxOBEn3/?igsh=MTltMmZ0NXNwOGc5eA==/",
          },
        ],
      },
    ],
  },

  {
    title: "拍攝 × 剪輯作品",
    items: [
      {
        name: "車業",
        links: [
          { label: "重機介紹凱旋Daytona660",
            url: "https://www.instagram.com/reel/DZKCVCRP5iQ/?igsh=MTVmbDc2b2Zrcjc1cQ==" },
            { label: "重機介紹r15",
              url: "https://www.instagram.com/reel/DY6hl6ZBxMO/?igsh=MWdobnlseDFrazF2cw==" },
        ],
      },
        {
          name: "探店",
          links: [
            { label: "飯店介紹",
              url: "https://www.instagram.com/reel/DZpI8OkgASS/?igsh=dzh1M2N1MG91YTdy" },
          ],
      },
    ],
  },

  {
    title: "剪輯作品",
    items: [
      {
        name: "日常綜藝感",
        links: [
          { label: "搞笑影片", url: "https://vt.tiktok.com/ZSxmWFCkR/" },
          { label: "互動影片", url: "https://vt.tiktok.com/ZSxHD99kr/" },
          { label: "景點介紹", url: "https://vt.tiktok.com/ZSQpcAabJ/" },
        ],
      },
      {
        name: "賣東西",
        links: [
          { label: "行李箱", url: "https://vt.tiktok.com/ZSxc4ggn2/" },
          { label: "LED書包", url: "https://vt.tiktok.com/ZSxc4gJX2/" },
          { label: "刀具組", url: "https://vt.tiktok.com/ZSQdoqAMJ/" },
        ],
      },
      {
        name: "紀錄片",
        links: [
          { label: "TikTok", url: "https://vt.tiktok.com/ZSxmWMjY6/" },
        ],
      },
      {
        name: "探店系列",
        links: [
          { label: "高雄麵店", url: "https://vt.tiktok.com/ZSxmWuFpd/" },
          { label: "嘉義蟹黃拌麵", url: "https://vt.tiktok.com/ZSxmWG7NA/" },
          { label: "眼鏡行", url: "https://vt.tiktok.com/ZSxmceHHb/" },
          { label: "嘉義火雞肉飯", url: "https://vt.tiktok.com/ZSxmc9JDP/" },
        ],
      },
    ],
  },

  {
    title: "長片 Vlog",
    items: [
      {
        name: "旅遊",
        links: [
          {
            label: "玉山",
            url: "https://youtu.be/Lx5pq5xSokU",
          },
        ],
      },
      {
        name: "日常",
        links: [
          {
            label: "簡約風格",
            url: "https://youtu.be/zAmvaAPkWBA?si=KBZWPdGBfZtuf6IC",
          },
        ],
      },
    ],
  },
];

/* ---------- CARD ---------- */

function WorkCard({ item }: any) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
      <div
        onClick={() => setOpen(!open)}
        className="
          cursor-pointer
          bg-[#faf8f2]
          border border-[#d9d6cf]
          p-7 min-h-[220px]
          hover:border-[#78856E]
          transition-all
        "
      >
        <h3 className="text-[#3b3b3b] text-xl mb-2">{item.name}</h3>

        {item.subtitle && (
          <p className="text-[#8a8a8a] text-sm">{item.subtitle}</p>
        )}

        <div className="mt-12 text-[#78856E] text-sm tracking-widest uppercase">
          {open ? "Close ↑" : "View Collection ↓"}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-6 flex flex-col gap-3">
                {item.links.map((link: any, i: number) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    className="text-[#5f6b58] hover:text-black text-sm"
                  >
                    ↘ {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ---------- PAGE ---------- */

export default function Home() {
  return (
    <main className="bg-[#f7f6f1] min-h-screen relative overflow-hidden">

      {/* HERO */}
<section className="min-h-screen flex items-center justify-center px-8 relative">
  <PlantLeft />
  <PlantRight />

  <div className="text-center max-w-3xl z-10">
    <div className="text-[#78856E] text-3xl mb-8">❀</div>

    <h1
      style={{ fontFamily: handwriting.style.fontFamily }}
      className="text-[80px] md:text-[120px] text-[#78856E] leading-none"
    >
      Lyss Portfolio
    </h1>

    <h2
      style={{ fontFamily: serif.style.fontFamily }}
      className="text-[#444] text-xl md:text-3xl mt-6"
    >
      Full Production (Planning / Filming / Editing)
    </h2>

    <div className="mt-16 text-[#78856E]">↓</div>
  </div>
</section>

      {/* ABOUT */}
<section className="max-w-5xl mx-auto px-8 pb-28 relative">
  <div className="border-t border-[#d9d6cf] pt-16">
    <p className="text-[#666] leading-9 max-w-2xl">
      嗨，我是 Lyss。用剪輯建立敘事節奏，依照品牌需求與人物特性，製作適合的影像風格。
    </p>
  </div>
</section>

      {/* WORKS */}
      <section className="max-w-6xl mx-auto px-8 pb-32 relative">
        <div className="space-y-24">

          {sections.map((section) => (
            <div key={section.title}>

              <div className="mb-10">
                <div className="text-[#78856E] mb-3">❀</div>

                <h2
                  style={{ fontFamily: serif.style.fontFamily }}
                  className="text-3xl text-[#333]"
                >
                  {section.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, i) => (
                  <WorkCard key={i} item={item} />
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
<section className="max-w-6xl mx-auto px-8 pb-32 relative">
  <PlantBottom />

  <div className="border-t border-[#d9d6cf] pt-16 relative z-10">
    <div className="text-[#78856E] mb-3">❀</div>

    <h2
      style={{ fontFamily: serif.style.fontFamily }}
      className="text-3xl text-[#333]"
    >
      Contact
    </h2>

    <p className="mt-8 text-[#666]">Email</p>

    <a
      href="mailto:lyssss2521@gmail.com"
      className="text-[#78856E] text-lg hover:opacity-70 block"
    >
      lyssss2521@gmail.com
    </a>

    <p className="mt-6 text-[#666]">LINE</p>

    <a
      target="_blank"
      className="text-[#78856E] text-lg hover:opacity-70 block"
    >
      b.nezero
    </a>
  </div>
</section>

    </main>
  );
}