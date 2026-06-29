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

/* ---------- 📎 實物擬真擬物文具組件 ---------- */

// 1. 霧面透明膠帶
function ClearTape({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`absolute bg-white/25 backdrop-blur-[1px] border border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] rotate-[-2deg] z-30 pointer-events-none ${className}`}
      style={{ boxShadow: "inset 0 0 4px rgba(255,255,255,0.3)" }}
    />
  );
}

// 2. 金屬長尾夾 (復刻截圖右下角黑色質感)
function BinderClip({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute select-none pointer-events-none z-30 flex flex-col items-center ${className}`}>
      {/* 夾子金屬雙環 */}
      <div className="w-8 h-10 border-2 border-[#555] rounded-t-full -mb-3 relative opacity-75" />
      <div className="w-6 h-8 border-2 border-[#555] rounded-t-full -mb-2 relative opacity-75" />
      {/* 黑色夾子本體 */}
      <div 
        className="w-10 h-8 bg-[#2A2A2A] rounded-t-sm shadow-md relative"
        style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}
      />
    </div>
  );
}

// 3. 復古粉色大頭針 (帶高光)
function PushPin({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute z-30 select-none pointer-events-none drop-shadow-md ${className}`}>
      <div className="w-5 h-5 bg-[#FF8FA3] rounded-full relative border border-[#EE7B90]">
        <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
      </div>
      <div className="w-0.5 h-3 bg-gray-400 mx-auto -mt-0.5 opacity-60" />
    </div>
  );
}

/* ---------- DATA（完整保留並標註裝飾） ---------- */
const sections = [
  {
    id: "full-production",
    title: "全案製作",
    shortTitle: "全案製作",
    bgColor: "bg-[#E2ECE0]", 
    tabColor: "bg-[#C2D3BD]",
    textColor: "text-[#4A5D45]",
    items: [
      {
        name: "i人挑戰送花給陌生人",
        subtitle: "精準打擊 i 人痛點",
        links: [{ label: "Instagram Reel", url: "https://www.instagram.com/reel/DTDRKXSkgbK/" }],
        deco: "tape" // 這張貼膠帶
      },
    ],
  },
  {
    id: "filming-editing",
    title: "拍攝 × 剪輯作品",
    shortTitle: "拍攝剪輯",
    bgColor: "bg-[#F3EAE3]", 
    tabColor: "bg-[#E6D5C8]",
    textColor: "text-[#6E5545]",
    items: [
      {
        name: "高級感",
        links: [
          { label: "重機介紹凱旋Daytona660", url: "https://www.instagram.com/reel/DZKCVCRP5iQ/?igsh=MTVmbDc2b2Zrcjc1cQ==" },
          { label: "重機介紹r15", url: "https://www.instagram.com/reel/DY6hl6ZBxMO/?igsh=MWdobnlseDFrazF2cw==" },
          { label: "重機介紹凱旋TRIDENT 660", url: "https://www.instagram.com/reel/DZ7k_OihP_I/?igsh=MWw3cXN5bmZ6ZGpodw==" },
        ],
      },
      {
        name: "簡約風格",
        links: [
          { label: "飯店介紹", url: "https://www.instagram.com/reel/DZpI8OkgASS/?igsh=dzh1M2N1MG91YTdy" },
          { label: "相機介紹", url: "https://www.instagram.com/reel/DaAP6Iyg3zR/?igsh=MXUwaXp0OXBtNDlqdg==" }
        ],
        deco: "pin" // 這張釘大頭針
      },
    ],
  },
  {
    id: "editing-only",
    title: "剪輯作品",
    shortTitle: "純剪輯",
    bgColor: "bg-[#E6EFF4]", 
    tabColor: "bg-[#CADBE6]",
    textColor: "text-[#3D5260]",
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
        deco: "tape"
      },
    ],
  },
  {
    id: "vlog",
    title: "長片 Vlog",
    shortTitle: "長片 Vlog",
    bgColor: "bg-[#F4F1EA]", 
    tabColor: "bg-[#E6E1D3]",
    textColor: "text-[#55524A]",
    items: [
      {
        name: "旅遊",
        links: [{ label: "玉山", url: "https://youtu.be/Lx5pq5xSokU" }],
      },
      {
        name: "日常",
        links: [{ label: "簡約風格", url: "https://youtu.be/zAmvaAPkWBA?si=KBZWPdGBfZtuf6IC" }],
      },
    ],
  },
];

/* ---------- 內部卡片 ---------- */
function WorkCard({ item }: any) {
  return (
    <div className="relative bg-white/85 backdrop-blur-sm border border-black/[0.06] p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
      
      {/* 動態渲染卡片上方的文具配件 */}
      {item.deco === "tape" && <ClearTape className="w-16 h-5 -top-2 left-1/2 -translate-x-1/2 opacity-75" />}
      {item.deco === "pin" && <PushPin className="-top-3 left-6" />}

      <h4 className="text-[#333] font-medium text-lg mb-2 relative z-10">{item.name}</h4>
      {item.subtitle && <p className="text-gray-500 text-sm mb-4 relative z-10">{item.subtitle}</p>}
      
      <div className="flex flex-col gap-2 mt-4 relative z-10">
        {item.links.map((link: any, i: number) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-600 hover:text-black flex items-center gap-1 transition-colors"
          >
            <span className="opacity-40 group-hover:translate-x-0.5 transition-transform">↘</span> {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---------- 主頁面 ---------- */
export default function Home() {
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const currentSection = sections.find((s) => s.id === activeTab) || sections[0];

  return (
    <main className="bg-[#EFEFEF] min-h-screen text-[#333] font-sans selection:bg-black/10 relative overflow-hidden pb-16">
      
      {/* 頂部網格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

      {/* 頂部標題區塊 */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-8 relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="text-center md:text-left max-w-xl">
          <h1
            style={{ fontFamily: handwriting.style.fontFamily }}
            className="text-6xl md:text-8xl text-gray-800 leading-none"
          >
            Lyss Portfolio
          </h1>
          <p 
            style={{ fontFamily: serif.style.fontFamily }}
            className="text-xl text-gray-600 mt-4 tracking-wide uppercase"
          >
            Full Production Portfolio
          </p>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            嗨，我是 Lyss。用剪輯建立敘事節奏，依照品牌需求與人物特性，製作適合的影像風格。
          </p>
        </div>

        {/* ── 📌 右上角新增：膠帶黏貼的手寫感聯絡便籤紙 ── */}
        <div className="relative bg-[#FFFFA6] -rotate-2 p-5 shadow-md border border-[#ECEC93] w-full md:w-64 mx-auto md:mx-0 z-20">
          <ClearTape className="w-14 h-4 -top-2 left-1/2 -translate-x-1/2 opacity-70" />
          <h3 style={{ fontFamily: serif.style.fontFamily }} className="text-lg font-bold mb-3 border-b border-black/5 pb-1 text-gray-800">
            Contact Me ❀
          </h3>
          <div className="space-y-2.5 text-xs">
            <div>
              <span className="text-gray-400 block uppercase tracking-wider scale-90 origin-left">Email</span>
              <a href="mailto:lyssss2521@gmail.com" className="text-gray-700 hover:text-black font-medium break-all underline decoration-black/10 underline-offset-2">
                lyssss2521@gmail.com
              </a>
            </div>
            <div>
              <span className="text-gray-400 block uppercase tracking-wider scale-90 origin-left">LINE</span>
              <span className="text-gray-700 font-medium font-mono">b.nezero</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- 文件夾主容器 ---------- */}
      <section className="max-w-5xl mx-auto px-4 pb-12 relative z-10 mt-4">
        
        {/* 1. 文件夾標籤頁籤 (Tabs) */}
        <div className="flex flex-wrap md:flex-nowrap gap-1 items-end pl-4 relative z-0">
          {sections.map((section) => {
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`
                  relative px-6 py-3 text-sm font-medium tracking-wider rounded-t-2xl transition-all duration-300
                  ${isActive ? `${section.bgColor} text-black z-20 shadow-[-2px_-2px_8px_rgba(0,0,0,0.05)] font-bold` : `${section.tabColor} opacity-70 text-gray-700 hover:opacity-100 z-10`}
                  border-t border-x border-black/5
                  -mb-[1px]
                `}
                style={{
                  clipPath: "polygon(0% 100%, 10% 0%, 90% 0%, 100% 100%)",
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem"
                }}
              >
                {section.shortTitle}
              </button>
            );
          })}
        </div>

        {/* 2. 文件夾內頁主體 */}
        <div className={`w-full rounded-2xl border border-black/5 shadow-xl p-8 min-h-[500px] relative transition-colors duration-500 ${currentSection.bgColor}`}>
          
          {/* ── 📌 實物擬真裝飾小配件 ── */}
          {/* 右上角：金屬長尾夾 */}
          <BinderClip className="top-[-28px] right-16 scale-90 md:scale-100" />

          {/* 右下角：迷你重疊彩色分類小標籤紙 */}
          <div className="absolute bottom-6 right-8 flex gap-1.5 opacity-60 select-none pointer-events-none z-20">
            <div className="w-6 h-4 bg-blue-300/60 rounded-sm shadow-sm" />
            <div className="w-6 h-4 bg-pink-300/60 rounded-sm shadow-sm -mt-1" />
          </div>

          <div className="absolute top-6 right-8 text-xs font-mono opacity-40 select-none tracking-widest uppercase hidden sm:block">
            ( DESIGN IS STORYTELLING. )
          </div>

          {/* 內容切換動畫 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <div className="mb-8 border-b border-black/5 pb-4">
                <span className="text-xs font-mono opacity-50 tracking-wider uppercase">Category</span>
                <h2 className={`text-2xl md:text-3xl font-serif mt-1 ${currentSection.textColor}`}>
                  {currentSection.title}
                </h2>
              </div>

              {/* 作品卡片網格 */}
              <div className="grid md:grid-cols-2 gap-6">
                {currentSection.items.map((item, i) => (
                  <WorkCard key={i} item={item} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </section>

      {/* ---------- 📄 頁尾修改：融入設計底色的聯絡資訊區塊 ---------- */}
      <footer className="max-w-5xl mx-auto px-6 mt-12 pt-8 border-t border-black/5 relative z-10 text-center md:text-left text-gray-500 text-xs">
        <p>© 2026 Lyss Portfolio. All rights reserved. 用影像編織故事，用剪輯定義節奏。</p>
      </footer>
    </main>
  );
}
