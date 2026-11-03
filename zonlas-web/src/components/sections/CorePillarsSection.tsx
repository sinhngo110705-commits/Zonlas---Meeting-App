"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Tv, 
  Store, 
  Sparkles, 
  Gamepad2, 
  Check, 
  ArrowUpRight, 
  Sliders, 
  Layers, 
  Vote, 
  FileText, 
  Globe2, 
  Radio, 
  ShieldCheck,
  Download,
  Calendar,
  MessageSquare,
  Gift,
  Flame,
  CheckCircle2
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface CorePillarsSectionProps {
  onOpenDemoModal: () => void;
}

export function CorePillarsSection({ onOpenDemoModal }: CorePillarsSectionProps) {
  const [activePillar, setActivePillar] = useState<number>(0);

  // Pillar 4 Interactive states
  const [pollVoted, setPollVoted] = useState<boolean>(false);
  const [pollVotes, setPollVotes] = useState({ a: 64, b: 24, c: 12 });
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [luckyWinner, setLuckyWinner] = useState<string | null>(null);

  const pillars = [
    {
      id: "production-studio",
      code: "MODULE 01",
      title: "Virtual Production Studio",
      badge: "STUDIO ĐIỀU PHỐI PHÁT SÓNG ẢO",
      desc: "Nâng tầm tính chuyên nghiệp và cảm xúc của sự kiện trực tuyến ngang tầm trường quay truyền hình.",
      icon: Tv,
      features: [
        {
          title: "Cloud Deck Presentation Engine (VP-01)",
          desc: "Trình chiếu tài liệu (PPTX, PDF) trực tiếp từ máy chủ đám mây, kết xuất vector 60fps không qua chia sẻ màn hình máy khách, giữ nguyên hiệu ứng chuyển động và triệt tiêu giật lag.",
        },
        {
          title: "Multi-track Soundboard & Auto-Ducking (VP-02)",
          desc: "Bảng phát âm thanh sự kiện độc lập (nhạc mở màn, trao giải, vỗ tay) tách biệt với luồng micro. Cơ chế Auto-Ducking tự động hạ 18dB nhạc nền khi diễn giả phát biểu.",
        },
        {
          title: "Virtual Director Layout Switcher (VP-03)",
          desc: "Bàn chuyển đổi bố cục khung hình thời gian thực cho ban tổ chức với các chế độ: Solo (Diễn giả đơn), Đối thoại 1:1, Panel talk (3–5 khách mời) và Tiêu điểm Q&A.",
        },
      ],
      preview: "studio",
    },
    {
      id: "branding-expo",
      code: "MODULE 02",
      title: "Branding & Sponsor Expo",
      badge: "GIAN HÀNG ĐỐI TÁC & NHẬN DIỆN THƯƠNG HIỆU",
      desc: "Chuyển hóa nhà tài trợ từ logo thụ động thành đối tác cung cấp trải nghiệm số tương tác cao.",
      icon: Store,
      features: [
        {
          title: "Gian hàng ảo 2.5D Virtual Sponsor Booth (BR-02)",
          desc: "Gian hàng tương tác trực quan tích hợp video giới thiệu sản phẩm, tải brochure số dạng PDF, nút hẹn lịch tư vấn 1:1 hoặc nhắn tin trực tiếp với đại diện nhãn hàng.",
        },
        {
          title: "Dynamic Stage Branding (BR-01)",
          desc: "Tùy biến logo nhà tài trợ, khung viền avatar đại biểu và banner chữ chạy (ticker) cập nhật trực tiếp theo thời gian thực trên màn hình sự kiện.",
        },
        {
          title: "Custom White-label Subdomain (BR-03)",
          desc: "Hỗ trợ gắn tên miền phụ riêng (e.g. event.congty.vn) và tùy biến bảng màu giao diện phòng họp theo chuẩn nhận diện thương hiệu công ty.",
        },
      ],
      preview: "expo",
    },
    {
      id: "ai-engine",
      code: "MODULE 03",
      title: "AI-Native Event Engine",
      badge: "HỆ THỐNG TRÍ TUỆ NHÂN TẠO HỖ TRỢ",
      desc: "Tối ưu hóa tiếp nhận thông tin, xóa bỏ rào cản ngôn ngữ và tự động hóa toàn bộ báo cáo hậu sự kiện.",
      icon: Sparkles,
      features: [
        {
          title: "Live Subtitles & Bilingual Translation (AI-01)",
          desc: "Nhận diện giọng nói và tự động dịch phụ đề song ngữ trực tiếp theo thời gian thực (trọng tâm Anh - Việt), hiển thị rõ nét ở chân khung hình.",
        },
        {
          title: "AI Smart Moderator & Question Clustering (AI-02)",
          desc: "Tự động gom cụm các câu hỏi trùng lặp, lọc nội dung tiêu cực/spam và xếp hạng đề xuất các câu hỏi chất lượng nhất cho ban tổ chức và MC.",
        },
        {
          title: "Automated Summary & Smart Recap Package (AI-03)",
          desc: "Tự động trích xuất biên bản tóm tắt nội dung sự kiện, tổng hợp danh sách hành động (Action Items) và cắt video highlight theo từng diễn giả.",
        },
      ],
      preview: "ai",
    },
    {
      id: "gamification",
      code: "MODULE 04",
      title: "Gamification & Deep Engagement",
      badge: "TƯƠNG TÁC SÂU & TRÒ CHƠI HÓA",
      desc: "Giữ chân đại biểu xuyên suốt sự kiện với các hoạt động tương tác nhúng trực tiếp không cần mở ứng dụng thứ hai.",
      icon: Gamepad2,
      features: [
        {
          title: "In-Frame Live Polls & Lucky Draw (GM-01)",
          desc: "Khảo sát trực tiếp, bình chọn ý kiến và quay số trúng thưởng may mắn được nhúng ngay trên màn hình sự kiện mà không cần mở tab Slido hay Kahoot.",
        },
        {
          title: "Visual Hype Meter & Interactive Reactions (GM-02)",
          desc: "Hiệu ứng cảm xúc bay động (thả tim, pháo hoa, vỗ tay) kết hợp thanh đo nhiệt độ tương tác khán phòng theo thời gian thực.",
        },
        {
          title: "AI Speed-Networking & Digital Business Card (GM-03)",
          desc: "Ghép nối trò chuyện 1:1 trong 3 phút theo ngành nghề/sở thích và tự động trao đổi danh thiếp số (Digital Business Card) bằng 1 chạm.",
        },
      ],
      preview: "gamification",
    },
  ];

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  const handleVote = (choice: "a" | "b" | "c") => {
    if (pollVoted) return;
    setPollVotes((prev) => ({
      ...prev,
      [choice]: prev[choice] + 1,
    }));
    setPollVoted(true);
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.8 },
      colors: ["#C41230", "#C5A059", "#FFFFFF"],
    });
  };

  const handleSpinLuckyDraw = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setLuckyWinner(null);

    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      const randNum = Math.floor(1000 + Math.random() * 9000);
      setLuckyWinner(`Đại biểu MS: ${randNum}`);
      if (counter > 12) {
        clearInterval(interval);
        const finalWinners = [
          "Nguyễn Văn An — Đại Biểu VIP (MS: 1042)",
          "Trần Thị Mai — Giám Đốc Tài Chính (MS: 2189)",
          "Lê Hoàng Phúc — Trưởng Ban Đối Ngoại (MS: 0831)",
        ];
        const chosen = finalWinners[Math.floor(Math.random() * finalWinners.length)];
        setLuckyWinner(chosen);
        setIsSpinning(false);
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#C41230", "#C5A059", "#F0C84A", "#FFFFFF"],
        });
      }
    }, 80);
  };

  return (
    <section id="pillars" className="scroll-mt-28 py-20 sm:py-32 bg-[#FAFBFD] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Refined Typography & Layout */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-slate-800 text-xs font-mono font-bold tracking-wider uppercase mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] animate-pulse" />
            SYS_MODULES // 4 TRỤ CỘT NỀN TẢNG
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-[-0.035em] leading-tight mb-4">
            Giải quyết triệt để sự phân mảnh <br className="hidden sm:inline" />
            của sự kiện trực tuyến
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Thay vì phải kết hợp 4–5 công cụ riêng lẻ (phần mềm họp + Slido + Kahoot + Drive + OBS), Zonlas hợp nhất toàn bộ trải nghiệm trước, trong và sau sự kiện trong một không gian duy nhất.
          </p>

          {/* Fluid Sliding Tabs Switcher with Framer Motion layoutId */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-md max-w-full overflow-x-auto">
              <div className="flex items-center gap-1.5">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePillar(idx)}
                      className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 z-10 ${
                        isActive ? "text-white" : "text-slate-600 hover:text-slate-950"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="pillarActiveTab"
                          className="absolute inset-0 rounded-xl bg-[#070A10] shadow-md -z-10"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#C41230]" : "text-slate-400"}`} />
                      <span>{p.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Pillar Content Box with SpotlightCard Framing */}
        <SpotlightCard className="p-6 sm:p-10 shadow-xl text-left bracket-corner relative overflow-hidden">
          
          {/* Subtle Top Gradient Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41230] to-transparent opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left: Detailed Feature Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase mb-3">
                  <CurrentIcon className="w-3.5 h-3.5 text-[#C41230]" />
                  <span>{current.code} · {current.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug mb-3">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {current.desc}
                </p>
              </div>

              {/* 3 Features */}
              <div className="space-y-3.5 pt-2">
                {current.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-slate-300 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 mb-0.5">
                        {feat.title}
                      </div>
                      <div className="text-xs text-slate-600 leading-relaxed">
                        {feat.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenDemoModal}
                  className="btn-crimson text-xs sm:text-sm group"
                >
                  <span>Đăng Ký Tư Vấn {current.title}</span>
                  <span className="btn-icon-pill">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Concrete Interactive Simulator for This Pillar with AnimatePresence */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* PREVIEW 1: Virtual Production Studio */}
                  {current.preview === "studio" && (
                    <div className="studio-cockpit-frame p-5 sm:p-6 text-white space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                        <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                          <Radio className="w-3.5 h-3.5" /> CLOUD DECK VECTOR ENGINE · 60 FPS
                        </span>
                        <span className="text-slate-400 font-mono text-[11px]">ĐỘ TRỄ &lt; 0.05S</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[10px] font-mono text-[#C41230] font-bold mb-1">TRÌNH CHIẾU PPTX/PDF KHÔNG QUA WEBCAM</div>
                        <div className="text-base font-black text-white mb-2">Báo Cáo Tài Chính &amp; Lộ Trình Phát Triển 2026</div>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          Văn bản vector sắc nét 100%, lật trang ngay lập tức. Đại biểu không bị phụ thuộc vào chất lượng wifi của người đang thuyết trình.
                        </p>
                        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                            <div className="text-slate-400 text-[10px]">Tiết kiệm băng thông</div>
                            <div className="text-emerald-400 font-bold text-sm mt-0.5">85%</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                            <div className="text-slate-400 text-[10px]">Độ trễ lật trang</div>
                            <div className="text-blue-400 font-bold text-sm mt-0.5">0.0 giây</div>
                          </div>
                        </div>
                      </div>

                      {/* Equalizer animation */}
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sliders className="w-3.5 h-3.5 text-[#C41230]" />
                          <span>Soundboard 500+ bản nhạc nghi lễ</span>
                        </div>
                        <div className="flex items-center gap-1 h-3">
                          <span className="w-1 bg-[#C41230] rounded-full animate-wave-1" />
                          <span className="w-1 bg-amber-400 rounded-full animate-wave-2" />
                          <span className="w-1 bg-emerald-400 rounded-full animate-wave-3" />
                          <span className="w-1 bg-blue-400 rounded-full animate-wave-4" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW 2: Branding & Sponsor Expo */}
                  {current.preview === "expo" && (
                    <div className="studio-cockpit-frame p-5 sm:p-6 text-white space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                        <span className="font-mono text-amber-400 font-bold flex items-center gap-1.5">
                          <Store className="w-3.5 h-3.5 text-amber-400" /> VIRTUAL 2.5D SPONSOR BOOTH
                        </span>
                        <span className="text-slate-400 font-mono text-[11px]">TIER: KIM CƯƠNG</span>
                      </div>

                      <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-slate-800 bg-slate-950 group">
                        <img 
                          src="/images/virtual-booth.jpg" 
                          alt="Gian hàng ảo Zonlas 2.5D" 
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
                          <div className="text-sm font-bold text-white">Gian Hàng Nexus AI Vietnam</div>
                          <div className="text-[11px] text-slate-300">Nhà tài trợ công nghệ chính của Diễn Đàn Doanh Nghiệp</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <div className="text-slate-400 text-[10px]">Lượt ghé thăm</div>
                          <div className="text-white font-bold text-sm mt-0.5">3.420</div>
                        </div>
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <div className="text-slate-400 text-[10px]">Tải brochure PDF</div>
                          <div className="text-emerald-400 font-bold text-sm mt-0.5">840</div>
                        </div>
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <div className="text-slate-400 text-[10px]">Hẹn tư vấn 1:1</div>
                          <div className="text-[#C41230] font-bold text-sm mt-0.5">52 cuộc</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW 3: AI-Native Event Engine */}
                  {current.preview === "ai" && (
                    <div className="studio-cockpit-frame p-5 sm:p-6 text-white space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                        <span className="font-mono text-blue-400 font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> AI LIVE SUBTITLE &amp; QUESTION CLUSTERING
                        </span>
                        <span className="text-emerald-400 font-mono text-[11px]">ĐỘ TRỄ &lt; 0.4S</span>
                      </div>

                      {/* Subtitle simulation */}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>SPEECH-TO-TEXT (DIỄN GIẢ TIẾNG ANH):</span>
                          <span className="text-emerald-400">● Live Audio Stream</span>
                        </div>
                        <div className="text-xs text-slate-300 italic">
                          “We have deployed our WebRTC mesh network across 4 continents to guarantee sub-40ms latency...”
                        </div>
                        <div className="pt-2 border-t border-slate-800 text-xs text-amber-300 font-medium">
                          “Chúng tôi đã triển khai mạng lưới WebRTC trên 4 châu lục để đảm bảo độ trễ dưới 40ms...”
                        </div>
                      </div>

                      {/* Question clustering */}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                        <div className="text-[10px] font-mono text-blue-400 font-bold uppercase">
                          AI TỰ ĐỘNG GOM CỤM CÂU HỎI Q&amp;A:
                        </div>
                        <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                          <span>Cụm 1: Tính bảo mật &amp; chuẩn pháp lý ĐHĐCĐ</span>
                          <span className="text-emerald-400 font-mono text-[11px] font-bold">42 câu hỏi tương tự</span>
                        </div>
                        <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                          <span>Cụm 2: Tích hợp CRM &amp; xuất dữ liệu khách mời</span>
                          <span className="text-blue-400 font-mono text-[11px] font-bold">28 câu hỏi tương tự</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW 4: Gamification & Deep Engagement */}
                  {current.preview === "gamification" && (
                    <div className="studio-cockpit-frame p-5 sm:p-6 text-white space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                        <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                          <Gamepad2 className="w-3.5 h-3.5" /> IN-FRAME POLLS &amp; LUCKY DRAW
                        </span>
                        <span className="text-slate-400 font-mono text-[11px]">KHÔNG CẦN TẢI APP</span>
                      </div>

                      {/* Interactive Poll */}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-bold text-white flex items-center gap-1.5">
                            <Vote className="w-3.5 h-3.5 text-[#C41230]" />
                            <span>Khảo sát trực tiếp trong khung hình:</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {pollVoted ? "Đã ghi nhận phiếu bầu 🎉" : "Bấm chọn để thử nghiệm"}
                          </span>
                        </div>

                        <div className="space-y-2 text-xs">
                          {[
                            { key: "a" as const, label: "Trình chiếu Cloud Deck 4K", votes: pollVotes.a },
                            { key: "b" as const, label: "Âm thanh Dual-Layer tách BGM", votes: pollVotes.b },
                            { key: "c" as const, label: "Phụ đề song ngữ AI trực tiếp", votes: pollVotes.c },
                          ].map((item) => {
                            const total = pollVotes.a + pollVotes.b + pollVotes.c;
                            const pct = Math.round((item.votes / total) * 100);
                            return (
                              <button
                                key={item.key}
                                onClick={() => handleVote(item.key)}
                                className={`w-full p-2.5 rounded-lg border text-left transition-all cursor-pointer relative overflow-hidden ${
                                  pollVoted ? "border-slate-700 bg-slate-950" : "border-slate-800 hover:border-[#C41230] bg-slate-950"
                                }`}
                              >
                                <div 
                                  className="absolute inset-y-0 left-0 bg-[#C41230]/30 transition-all duration-700"
                                  style={{ width: `${pct}%` }}
                                />
                                <div className="relative flex justify-between items-center text-xs">
                                  <span className="font-medium text-slate-200">{item.label}</span>
                                  <span className="font-mono font-bold text-white">{pct}%</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Interactive Lucky Draw */}
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 text-xs">
                        <div>
                          <div className="font-bold text-white flex items-center gap-1.5">
                            <Gift className="w-4 h-4 text-amber-400" />
                            <span>Vòng quay may mắn (Lucky Draw):</span>
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1 min-h-[16px]">
                            {isSpinning ? (
                              <span className="text-amber-400 font-mono animate-pulse">Đang quay ngẫu nhiên: {luckyWinner}</span>
                            ) : luckyWinner ? (
                              <span className="text-emerald-400 font-bold font-mono">🎉 {luckyWinner}</span>
                            ) : (
                              <span>Quay số ngẫu nhiên trúng thưởng theo mã đại biểu</span>
                            )}
                          </div>
                        </div>

                        <button
                          disabled={isSpinning}
                          onClick={handleSpinLuckyDraw}
                          className="px-4 py-2 rounded-xl bg-[#C41230] hover:bg-[#A00E26] active:scale-95 text-white font-bold text-xs cursor-pointer transition-all whitespace-nowrap shadow-md shadow-[#C41230]/20"
                        >
                          {isSpinning ? "Đang quay..." : "Quay Thử"}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
