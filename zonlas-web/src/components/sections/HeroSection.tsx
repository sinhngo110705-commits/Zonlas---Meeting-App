"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Sliders,
  Play,
  Volume2,
  Globe2,
  Store,
  Layers,
  FileText,
  Users2,
  Tv,
  Heart,
  PartyPopper,
  Flame,
  ThumbsUp,
  Maximize2,
  Radio,
  Boxes,
  Lock,
  ArrowRight
} from "lucide-react";
import { StageCanvas3D } from "@/components/visuals/StageCanvas3D";
import { CountUp } from "@/components/ui/CountUp";

interface HeroSectionProps {
  onOpenDemoModal: () => void;
}

interface ReactionParticle {
  id: number;
  emoji: string;
  x: number;
}

export function HeroSection({ onOpenDemoModal }: HeroSectionProps) {
  // Director Layout Mode
  const [layoutMode, setLayoutMode] = useState<"keynote" | "fireside" | "panel" | "expo" | "3d">("keynote");
  
  // Interactive Console States
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [subtitleLang, setSubtitleLang] = useState<"vi" | "en">("vi");
  const [slidePage, setSlidePage] = useState<number>(0);
  const [isDuckingActive, setIsDuckingActive] = useState(true);
  
  // Laser Pointer Position
  const [laserPos, setLaserPos] = useState({ x: 50, y: 50 });
  const [isHoveringSlide, setIsHoveringSlide] = useState(false);

  // Live Hype Meter & Floating Reactions
  const [hypeScore, setHypeScore] = useState<number>(88);
  const [reactions, setReactions] = useState<ReactionParticle[]>([]);

  const layoutTabs = [
    { id: "keynote" as const, label: "Keynote 4K" },
    { id: "fireside" as const, label: "Đối thoại 1:1" },
    { id: "panel" as const, label: "Tọa đàm Panel" },
    { id: "expo" as const, label: "Gian hàng 2.5D" },
    { id: "3d" as const, label: "3D Holo-Stage", icon: Boxes },
  ];

  const triggerReaction = (emoji: string, e?: React.MouseEvent) => {
    const newParticle: ReactionParticle = {
      id: Date.now() + Math.random(),
      emoji,
      x: 20 + Math.random() * 60,
    };

    setReactions((prev) => [...prev.slice(-12), newParticle]);
    setHypeScore((prev) => Math.min(100, prev + 2));

    if (emoji === "🎉") {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#C41230", "#C5A059", "#FF2D4E", "#FFFFFF"],
      });
    }

    setTimeout(() => {
      setReactions((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1400);
  };

  const slides = [
    {
      badge: "CLOUD DECK NATIVE VECTOR 4K",
      title: "Chiến Lược Mở Rộng Hệ Sinh Thái Số & Mục Tiêu Q4/2026",
      subtitle: "Render trực tiếp dạng vector 60fps từ máy chủ đám mây — Không bị mờ vỡ hạt khi nén qua webcam",
      data1: "Doanh thu: +142% YoY",
      data2: "Băng thông: Tiết kiệm 85%",
    },
    {
      badge: "TÍNH TOÁN DỮ LIỆU ĐỒNG BỘ",
      title: "Kiến Trúc Mạng Phân Tán WebRTC & Độ Trễ Dưới 45ms",
      subtitle: "15.000 đại biểu nhận lệnh lật trang cùng lúc mà không phụ thuộc vào đường truyền cá nhân của diễn giả",
      data1: "Độ trễ lật trang: 0.0s",
      data2: "Uptime: 99.99%",
    },
  ];

  const currentSlide = slides[slidePage];

  return (
    <section className="relative pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden border-b border-slate-200/80 bg-[#FAFBFD]">
      {/* Background Animated Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[450px] bg-gradient-to-tr from-[#C41230]/12 via-[#C5A059]/10 to-transparent blur-3xl pointer-events-none rounded-full ambient-glow-pulse" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      
      {/* Editorial Frame Boundaries (Guide markers) */}
      <div className="absolute top-32 left-8 text-slate-300 font-mono text-[10px] hidden xl:flex items-center gap-1.5 select-none pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C41230]" />
        <span>SYS_GRID // 01</span>
      </div>
      <div className="absolute top-32 right-8 text-slate-300 font-mono text-[10px] hidden xl:flex items-center gap-1.5 select-none pointer-events-none">
        <span>SYS_GRID // 02</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Core Value Proposition & Optimized Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-left flex flex-col justify-center"
          >
            
            {/* Shimmer Announcement Pill with Radar Pulse */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs font-mono font-bold tracking-wide uppercase mb-6 w-fit hover:border-[#C41230]/40 transition-colors">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C41230] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C41230]"></span>
              </span>
              <span className="text-slate-900">SYS_VIRTUAL_OS // BẢN 2026</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#C41230] font-sans font-semibold normal-case">Trường Quay Số B2B</span>
            </div>

            {/* Authoritative Display Headline (Disciplined measure, tight tracking) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-950 tracking-[-0.038em] leading-[1.08] mb-6 font-sans">
              Tổ chức sự kiện số <br className="hidden sm:inline" />
              với trải nghiệm <br className="hidden sm:inline" />
              <span className="text-[#C41230] relative inline-block">
                trường quay thực thụ.
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#C41230]/15 -z-10 rounded-full" />
              </span>
            </h1>

            {/* Concise Subtext (Comfortable reading measure, balanced) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal max-w-xl">
              Xóa bỏ hoàn toàn lỗi chia sẻ màn hình mờ nhòe, âm thanh đè bẹp tiếng nói và rào cản ứng dụng rời rạc. <strong className="text-slate-950 font-semibold">Zonlas</strong> kết hợp trình chiếu Cloud Deck 4K trực tiếp, âm thanh Dual-Layer phân tầng, gian hàng ảo 2.5D và trợ lý AI song ngữ trên một nền tảng thống nhất.
            </p>

            {/* Capabilities Metric Strip with CountUp & Hardware Styling */}
            <div className="grid grid-cols-3 gap-3 mb-8 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative bracket-corner">
              <div className="p-2 border-r border-slate-100 text-left">
                <div className="text-lg sm:text-xl font-black font-mono text-slate-950 tracking-tight">
                  <CountUp end={60} suffix=" FPS" />
                </div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Vector Native 4K</div>
              </div>
              <div className="p-2 border-r border-slate-100 text-left">
                <div className="text-lg sm:text-xl font-black font-mono text-[#C41230] tracking-tight">
                  -18 dB
                </div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Auto Voice-Ducking</div>
              </div>
              <div className="p-2 text-left">
                <div className="text-lg sm:text-xl font-black font-mono text-emerald-700 tracking-tight">
                  100% Web
                </div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">0s Cài đặt App</div>
              </div>
            </div>

            {/* Action Buttons Row with Button-in-Button Pattern */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenDemoModal}
                className="btn-crimson py-3 px-6 text-sm group"
              >
                <span>Đặt Lịch Tổng Duyệt Demo 1:1</span>
                <span className="btn-icon-pill">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <a
                href="#interactive-studio"
                className="btn-secondary py-3 px-5 text-sm"
              >
                <Play className="w-3.5 h-3.5 text-[#C41230] fill-[#C41230]" />
                <span>Trải Nghiệm Bàn Đạo Diễn</span>
              </a>
            </div>

            {/* Trust Note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Được xây dựng cho Event Agency, Doanh nghiệp B2B, Diễn giả &amp; Đơn vị tổ chức sự kiện.</span>
            </div>

          </motion.div>

          {/* RIGHT: Zonlas Interactive Live Stage Console (Studio Cockpit with Smooth Motion) */}
          <motion.div 
            id="interactive-studio" 
            initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            
            {/* Ambient Backlight Glow & Light Beam */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-[#C41230]/25 via-transparent to-[#C5A059]/20 blur-2xl opacity-75 -z-10" />
            <div className="absolute -top-10 left-1/4 right-1/4 h-20 bg-[#C41230]/20 blur-2xl pointer-events-none rounded-full" />

            <div className="studio-cockpit-frame p-4 sm:p-5 text-left text-white">
              
              {/* 1. Studio Window Titlebar with macOS chrome & broadcast telemetry */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800 text-xs">
                {/* Window Dots + Address */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>zonlas.live/studio/keynote-4k</span>
                  </div>
                </div>

                {/* Live Tally Lamp & Telemetry */}
                <div className="flex items-center gap-3 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C41230]/20 border border-[#C41230]/40 text-[#FF4D6D] text-[10px] font-bold tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#C41230] animate-pulse" />
                    <span>ON AIR</span>
                  </div>
                  <span className="text-emerald-400 font-bold hidden sm:inline">60.0 FPS</span>
                  <span className="text-slate-400 hidden sm:inline">·</span>
                  <span className="text-blue-400 font-medium">32ms RTT</span>
                </div>
              </div>

              {/* 2. Director Layout Mode Switcher with Fluid Motion Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-[11px]">
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 relative">
                  {layoutTabs.map((tab) => {
                    const isActive = layoutMode === tab.id;
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setLayoutMode(tab.id)}
                        className={`relative px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer z-10 flex items-center gap-1 ${
                          isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="heroTab"
                            className="absolute inset-0 rounded-lg bg-[#C41230] shadow-md -z-10"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          />
                        )}
                        {Icon && <Icon className="w-3 h-3" />}
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSubtitleLang(subtitleLang === "vi" ? "en" : "vi")}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-bold text-slate-300 hover:text-white cursor-pointer transition-colors"
                  >
                    <Globe2 className="w-3 h-3 text-blue-400" />
                    <span>{subtitleLang === "vi" ? "Phụ đề: Tiếng Việt" : "Live Subtitle: EN"}</span>
                  </button>
                </div>
              </div>

              {/* 3. Central Stage Canvas with Laser Pointer & Interactive Visuals */}
              <div 
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  setLaserPos({ x, y });
                }}
                onMouseEnter={() => setIsHoveringSlide(true)}
                onMouseLeave={() => setIsHoveringSlide(false)}
                className="rounded-xl bg-[#05070B] border border-slate-800/90 p-4 sm:p-5 min-h-[290px] sm:min-h-[320px] flex flex-col justify-between overflow-hidden relative cursor-crosshair group shadow-inner"
              >
                {/* Floating Reaction Particles */}
                {reactions.map((particle) => (
                  <div
                    key={particle.id}
                    style={{ left: `${particle.x}%`, bottom: "20px" }}
                    className="reaction-particle text-2xl select-none"
                  >
                    {particle.emoji}
                  </div>
                ))}

                {/* Laser Pointer Simulated Dot in Keynote Mode */}
                {layoutMode === "keynote" && isHoveringSlide && (
                  <div 
                    style={{ left: `${laserPos.x}%`, top: `${laserPos.y}%` }}
                    className="absolute w-3.5 h-3.5 rounded-full bg-[#C41230] shadow-[0_0_16px_#FF2D4E] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-75 z-20"
                  >
                    <div className="absolute inset-0 rounded-full bg-white opacity-80 scale-50" />
                    <div className="absolute -inset-1 rounded-full border border-[#FF2D4E] animate-ping opacity-75" />
                  </div>
                )}

                {/* AnimatePresence for Smooth Stage Transition */}
                <AnimatePresence mode="wait">
                  {/* MODE 1: Keynote 4K with Vector Slide */}
                  {layoutMode === "keynote" && (
                    <motion.div
                      key="keynote"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pb-2 border-b border-slate-800/80">
                        <span className="text-amber-400 font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> {currentSlide.badge}
                        </span>
                        <span className="text-slate-400">Rê chuột: Bút Laser 4K</span>
                      </div>

                      <div className="my-auto py-3">
                        <div className="text-[10px] font-mono text-[#C41230] font-bold tracking-wider mb-1">
                          TÀI LIỆU SỐ TRÌNH CHIẾU VECTOR 60FPS
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug mb-2">
                          {currentSlide.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          {currentSlide.subtitle}
                        </p>

                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 font-bold">
                            {currentSlide.data1}
                          </span>
                          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-blue-400 font-bold">
                            {currentSlide.data2}
                          </span>
                        </div>
                      </div>

                      {/* Slide Navigation Bar */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSlidePage((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
                            className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 cursor-pointer flex items-center gap-1"
                          >
                            <ChevronLeft className="w-3 h-3" /> Trước
                          </button>
                          <button
                            onClick={() => setSlidePage((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
                            className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 cursor-pointer flex items-center gap-1"
                          >
                            Sau <ChevronRight className="w-3 h-3" />
                          </button>
                          <span>Trang {slidePage + 1} / {slides.length}</span>
                        </div>
                        <span className="text-emerald-400 font-medium">● Vector nạp từ Cloud (Độ trễ 0s)</span>
                      </div>
                    </motion.div>
                  )}

                  {/* MODE 2: Fireside 1:1 */}
                  {layoutMode === "fireside" && (
                    <motion.div
                      key="fireside"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="my-auto grid grid-cols-2 gap-4 py-4"
                    >
                      <div className="rounded-xl bg-slate-900/90 border border-[#C41230]/60 p-4 text-center shadow-lg relative overflow-hidden">
                        <div className="absolute top-2 right-2 flex items-center gap-1 text-[9px] font-mono text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                        </div>
                        <div className="w-14 h-14 rounded-full bg-[#C41230] text-white font-bold text-lg mx-auto flex items-center justify-center mb-2 shadow-lg">
                          LK
                        </div>
                        <div className="font-bold text-sm text-white">TS. Lê Gia Khánh</div>
                        <div className="text-[11px] text-slate-400 mb-2">Chủ tịch HĐQT · Host</div>
                        <div className="flex items-center justify-center gap-1 h-3">
                          <span className="w-1 bg-emerald-400 rounded-full animate-wave-1" />
                          <span className="w-1 bg-emerald-400 rounded-full animate-wave-2" />
                          <span className="w-1 bg-emerald-400 rounded-full animate-wave-3" />
                          <span className="w-1 bg-emerald-400 rounded-full animate-wave-4" />
                        </div>
                      </div>

                      <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 text-center">
                        <div className="w-14 h-14 rounded-full bg-blue-700 text-white font-bold text-lg mx-auto flex items-center justify-center mb-2 shadow-lg">
                          MT
                        </div>
                        <div className="font-bold text-sm text-white">Bà Trần Minh Thư</div>
                        <div className="text-[11px] text-slate-400 mb-2">Tổng Giám Đốc · Khách mời</div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-mono">
                          Lắng nghe
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* MODE 3: Panel 4-Up */}
                  {layoutMode === "panel" && (
                    <motion.div
                      key="panel"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="my-auto grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3"
                    >
                      {[
                        { name: "Lê Gia Khánh", role: "Chủ tịch", active: true },
                        { name: "Trần Minh Thư", role: "CEO Khách mời", active: false },
                        { name: "Nguyễn Hải Đăng", role: "Trưởng ban Tổ chức", active: false },
                        { name: "Hoàng Nam", role: "Keynote Speaker", active: false },
                      ].map((guest, idx) => (
                        <div key={idx} className={`p-3 rounded-xl border text-center transition-all ${
                          guest.active ? "bg-slate-900 border-[#C41230] shadow-md shadow-[#C41230]/10" : "bg-slate-900/60 border-slate-800"
                        }`}>
                          <div className="w-9 h-9 rounded-full bg-slate-800 text-white font-bold text-xs mx-auto flex items-center justify-center mb-1.5">
                            {guest.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div className="text-xs font-bold text-white truncate">{guest.name}</div>
                          <div className="text-[10px] text-slate-400 truncate">{guest.role}</div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* MODE 4: Virtual 2.5D Sponsor Expo */}
                  {layoutMode === "expo" && (
                    <motion.div
                      key="expo"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="my-auto py-2"
                    >
                      <div className="relative rounded-xl overflow-hidden aspect-[16/8] border border-slate-800 bg-slate-950 mb-2 group">
                        <img 
                          src="/images/virtual-booth.jpg" 
                          alt="Zonlas 2.5D Virtual Sponsor Booth" 
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-white">Gian Hàng Triển Lãm Nexus AI (Diamond Tier)</div>
                              <div className="text-[10px] text-slate-300">Tải brochure PDF, xem video sản phẩm và hẹn lịch 1:1</div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-[#C41230] text-white text-[10px] font-mono font-bold">
                              BOOTH 2.5D
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Đã ghé thăm: <strong>3.420 đại biểu</strong></span>
                        <span className="text-emerald-400 font-bold">+340% Lead chuyển đổi</span>
                      </div>
                    </motion.div>
                  )}

                  {/* MODE 5: 3D Holographic Stage with Three.js */}
                  {layoutMode === "3d" && (
                    <motion.div
                      key="3d"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="my-auto h-[230px] relative rounded-xl overflow-hidden bg-radial from-slate-900 to-black border border-slate-800"
                    >
                      <StageCanvas3D />
                      <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-mono text-amber-300 bg-black/60 backdrop-blur-md px-2 py-1 rounded">
                        Rê chuột hoặc kéo để xoay không gian 3D Hologram thời gian thực
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Live Real-time Bilingual Subtitle Stream */}
                <div className="mt-3 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C41230] animate-ping" />
                    <span className="font-mono text-[10px] text-slate-400 uppercase">
                      {subtitleLang === "vi" ? "AI Phụ Đề Trực Tiếp:" : "AI Live Subtitle:"}
                    </span>
                    <span className="text-slate-200 italic font-sans text-[11px]">
                      {subtitleLang === "vi" 
                        ? "“Chào mừng toàn thể quý vị đại biểu và ban lãnh đạo tham dự phiên họp số hôm nay...”" 
                        : "“Welcome all delegates and executive leadership to today's virtual summit session...”"}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 hidden sm:inline whitespace-nowrap">
                    Độ trễ &lt; 0.4s
                  </span>
                </div>

              </div>

              {/* 4. Live Audio Dual-Layer Mixer Bar with Dynamic Waveforms */}
              <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between mb-2 text-[10px] font-mono">
                  <span className="text-slate-300 font-bold flex items-center gap-1.5">
                    <Sliders className="w-3 h-3 text-[#C41230]" />
                    KIẾN TRÚC ÂM THANH KÉP (DUAL-LAYER AUDIO)
                  </span>
                  <button
                    onClick={() => setIsDuckingActive(!isDuckingActive)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                      isDuckingActive ? "bg-amber-500/20 text-amber-400 border border-amber-500/40" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {isDuckingActive ? "Auto Voice-Ducking: -18dB (Bật)" : "Ducking: Tắt"}
                  </button>
                </div>

                <div className="space-y-1.5 text-[10px]">
                  {/* Voice Channel */}
                  <div className="flex items-center gap-3">
                    <span className="w-28 text-slate-400 truncate">Kênh 1: Voice MC / Diễn giả</span>
                    <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden flex gap-0.5">
                      <div className="h-full bg-emerald-500 w-[74%] animate-pulse" />
                      <div className="h-full bg-amber-500 w-[12%]" />
                    </div>
                    <span className="text-emerald-400 font-mono text-[9px]">-3 dB (Rõ nét)</span>
                  </div>

                  {/* BGM Music Channel */}
                  <div className="flex items-center gap-3">
                    <span className="w-28 text-slate-400 truncate">Kênh 2: Nhạc Lễ BGM</span>
                    <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden flex gap-0.5">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-300"
                        style={{ width: isDuckingActive ? "18%" : "65%" }}
                      />
                    </div>
                    <span className={`font-mono text-[9px] ${isDuckingActive ? "text-amber-400 font-bold" : "text-blue-400"}`}>
                      {isDuckingActive ? "-21 dB (Tự hạ)" : "-6 dB (Gốc)"}
                    </span>
                  </div>
                </div>
              </div>

              {/* 5. Live Interactive Reactions Bar & Hype Meter (Module 4 Gamification) */}
              <div className="mt-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                {/* Hype Meter */}
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#FF4D6D] animate-bounce" />
                  <div className="text-[11px] font-mono">
                    <span className="text-slate-400">Hype Meter: </span>
                    <strong className="text-amber-400">{hypeScore}% Nhiệt huyết</strong>
                  </div>
                </div>

                {/* Reaction Buttons */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-slate-400 hidden sm:inline mr-1">Tương tác:</span>
                  {[
                    { emoji: "❤️", label: "Thả tim" },
                    { emoji: "👏", label: "Vỗ tay" },
                    { emoji: "🔥", label: "Hào hứng" },
                    { emoji: "🎉", label: "Pháo hoa (Confetti)" },
                  ].map((r, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => triggerReaction(r.emoji, e)}
                      title={r.label}
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all flex items-center justify-center text-sm cursor-pointer border border-slate-700/80"
                    >
                      {r.emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* 6. Bottom Host Pods & Mic/Cam Controls */}
              <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#C41230] text-white font-bold text-xs flex items-center justify-center">
                    LK
                  </div>
                  <div className="text-left text-xs">
                    <div className="font-bold text-white leading-tight">TS. Lê Gia Khánh</div>
                    <div className="text-[10px] text-slate-400 leading-tight">Chủ tịch điều hành sự kiện</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isMuted 
                        ? "bg-red-500/20 text-red-400 border border-red-500/40" 
                        : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                    }`}
                  >
                    {isMuted ? <MicOff className="w-3.5 h-3.5 text-red-400" /> : <Mic className="w-3.5 h-3.5 text-emerald-400" />}
                    <span className="hidden sm:inline text-[11px]">{isMuted ? "Đã tắt mic" : "Mic bật"}</span>
                  </button>

                  <button
                    onClick={() => setIsVideoOn(!isVideoOn)}
                    className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      !isVideoOn 
                        ? "bg-red-500/20 text-red-400 border border-red-500/40" 
                        : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                    }`}
                  >
                    {!isVideoOn ? <VideoOff className="w-3.5 h-3.5 text-red-400" /> : <Video className="w-3.5 h-3.5 text-blue-400" />}
                    <span className="hidden sm:inline text-[11px]">{isVideoOn ? "Cam bật" : "Đã tắt cam"}</span>
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
