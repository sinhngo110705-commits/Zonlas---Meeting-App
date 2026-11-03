"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Volume2, 
  AlertTriangle, 
  Sliders, 
  Sparkles, 
  Mic, 
  Check,
  Play,
  Pause,
  Radio,
  Music2,
  Lock,
  Layers
} from "lucide-react";

export function AudioCompareSection() {
  const [selectedEngine, setSelectedEngine] = useState<"zonlas" | "traditional">("zonlas");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeSoundCue, setActiveSoundCue] = useState<string>("trao-cup");

  const soundCues = [
    { id: "trao-cup", label: "Nhạc Trao Cúp Vinh Danh", desc: "Tự động hạ -18dB khi MC xướng tên" },
    { id: "dem-nguoc", label: "Đếm Ngược Khai Mạc 10s", desc: "Kích hoạt countdown đếm ngược" },
    { id: "vo-tay", label: "Tiếng Vỗ Tay Hội Trường", desc: "Tạo nhiệt huyết cho phiên thảo luận" },
    { id: "chao-co", label: "Nhạc Nghi Lễ Khai Mạc", desc: "Trang trọng, âm thanh stereo 320kbps" },
  ];

  const handleCueClick = (id: string) => {
    setActiveSoundCue(id);
    if (!isPlaying) setIsPlaying(true);
    if (id === "trao-cup") {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#C5A059", "#C41230", "#FFFFFF"],
      });
    }
  };

  return (
    <section id="audio-engine" className="scroll-mt-28 py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#C41230]/5 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] animate-pulse" />
            SYS_AUDIO // KIẾN TRÚC ÂM THANH PHÂN TẦNG
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-[-0.03em] mb-4">
            Giải quyết triệt để lỗi <br className="hidden sm:inline" />
            <span className="text-[#C41230]">nhạc nền đè bẹp giọng nói</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Không còn tình trạng nhạc nền làm nghẹt tiếng diễn giả, giật rè khi chia sẻ âm thanh máy tính, hay thiếu nhịp điệu trang trọng của một sự kiện truyền hình.
          </p>

          {/* Engine Switcher Toggle */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setSelectedEngine("zonlas")}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedEngine === "zonlas"
                      ? "bg-[#070A10] text-white shadow-md"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Chuẩn Sự Kiện Zonlas (Dual-Layer)</span>
                </button>
                <button
                  onClick={() => setSelectedEngine("traditional")}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedEngine === "traditional"
                      ? "bg-[#070A10] text-white shadow-md"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Ứng dụng họp thông thường</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-side Architectural Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Visual Waveform Laboratory Console */}
          <div className="lg:col-span-7">
            <div className="studio-cockpit-frame p-5 sm:p-7 text-left text-white shadow-2xl relative bracket-corner">
              
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-md transition-colors ${
                      selectedEngine === "zonlas"
                        ? "bg-[#C41230]/20 text-[#FF4D6D] border border-[#C41230]/50"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/50"
                    }`}
                  >
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">
                      {selectedEngine === "zonlas"
                        ? "Kênh Âm Thanh Tách Lớp Độc Lập (Dual-Channel Architecture)"
                        : "Gộp Chung 1 Luồng (Single Stream Collision)"}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {selectedEngine === "zonlas"
                        ? "Voice diễn giả 48kHz + Nhạc BGM 320kbps phân tầng trên máy chủ"
                        : "Nhạc từ máy tính nén chung vào micro, bị bộ lọc echo triệt mất tiếng"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isPlaying ? "Tạm dừng" : "Phát sóng"}</span>
                </button>
              </div>

              {/* Animated Waveform Visualizer */}
              <div className="space-y-6">
                
                {/* Voice Layer */}
                <div>
                  <div className="flex justify-between text-xs mb-2 font-mono">
                    <span className="flex items-center gap-2 font-bold text-white">
                      <Mic className="w-3.5 h-3.5 text-[#C41230]" /> Kênh 1: Giọng Nói Diễn Giả (Voice Channel 48kHz)
                    </span>
                    <span className="text-emerald-400 font-bold">Ưu Tiên Tuyệt Đối 100%</span>
                  </div>
                  <div className="h-14 bg-slate-950 rounded-xl border border-slate-800 p-2.5 flex items-center justify-between gap-1 shadow-inner">
                    {Array.from({ length: 42 }).map((_, i) => {
                      const heights = [25, 45, 80, 95, 70, 50, 85, 100, 75, 60, 90, 40];
                      const h = isPlaying ? heights[i % heights.length] : 10;
                      return (
                        <div
                          key={i}
                          className="flex-1 bg-[#C41230] rounded-full transition-all duration-200"
                          style={{ 
                            height: `${h}%`,
                            opacity: isPlaying ? 0.9 : 0.3 
                          }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* BGM Layer */}
                <div>
                  <div className="flex justify-between text-xs mb-2 font-mono">
                    <span className="flex items-center gap-2 font-bold text-white">
                      <Sliders className="w-3.5 h-3.5 text-amber-400" /> Kênh 2: Nhạc Nền Sự Kiện (Background Music)
                    </span>
                    <span className={selectedEngine === "zonlas" ? "text-amber-400 font-bold" : "text-red-400 font-bold"}>
                      {selectedEngine === "zonlas"
                        ? "Tự động hạ âm (-18dB) khi có tiếng nói"
                        : "Xung đột, méo tiếng, rè âm"}
                    </span>
                  </div>
                  <div className="h-14 bg-slate-950 rounded-xl border border-slate-800 p-2.5 flex items-center justify-between gap-1 shadow-inner">
                    {Array.from({ length: 42 }).map((_, i) => {
                      const h = isPlaying
                        ? selectedEngine === "zonlas"
                          ? (i % 3 === 0 ? 28 : 16)
                          : (i % 2 === 0 ? 88 : 72)
                        : 8;
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-full transition-all duration-200 ${
                            selectedEngine === "zonlas" ? "bg-amber-400" : "bg-red-500"
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Soundboard Quick Trigger Row */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    BÀN PHÍM KÍCH HOẠT NHẠC LỄ TỨC THÌ (SOUNDBOARD):
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Bấm để thử nghiệm nhạc lễ
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {soundCues.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleCueClick(s.id)}
                      className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                        activeSoundCue === s.id
                          ? "bg-[#C41230] text-white border-[#C41230] shadow-md shadow-[#C41230]/20"
                          : "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold mb-0.5">
                        <Music2 className="w-3.5 h-3.5" />
                        <span className="truncate">{s.label}</span>
                      </div>
                      <div className="text-[9px] opacity-75 truncate">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Explanation Bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 font-mono">
                <span>Giải mã: <strong className="text-white">Opus 48kHz Stereo</strong></span>
                <span className={`font-bold ${selectedEngine === "zonlas" ? "text-emerald-400" : "text-red-400"}`}>
                  {selectedEngine === "zonlas"
                    ? "✓ Giọng nói sáng rõ, nhạc nền êm dịu nâng tầm sự kiện"
                    : "✗ Âm thanh bị nghẹt, tiếng nói bị nuốt mất"}
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Key Architectural Pillars */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold text-slate-800 uppercase tracking-wider mb-3">
                <Radio className="w-3 h-3 text-[#C41230]" /> CHUẨN PHÒNG THU TRUYỀN HÌNH
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug mb-3">
                Trải nghiệm âm thanh đúng tầm vóc sự kiện
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Trong một buổi lễ trao giải, đại hội trang trọng hay workshop chuyên sâu, thời khắc xướng tên và trao quyền cần âm hưởng hào hùng chính xác đến từng giây. Zonlas đem lại quyền kiểm soát này ngay trong tầm tay ban tổ chức.
              </p>
            </div>

            <div className="space-y-3.5">
              {[
                {
                  title: "Kho 500+ bản nhạc nghi thức nạp sẵn",
                  desc: "Nhạc chào mừng, khai mạc, trao giải và đếm ngược kích hoạt tức thì không phụ thuộc máy tính cá nhân.",
                },
                {
                  title: "Công nghệ Auto Voice-Ducking tức thì",
                  desc: "Tự động hạ âm lượng BGM xuống -18dB khi diễn giả cất lời, tạo không gian trang trọng không bị ồn ào.",
                },
                {
                  title: "Bộ hiệu ứng âm thanh trường quay (Soundboard)",
                  desc: "Tiếng vỗ tay vang dội, chuông báo hết giờ, tiếng trống khai hội sẵn sàng chỉ với 1 phím bấm của ban tổ chức.",
                },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="clean-card p-4 flex items-start gap-3.5 text-left"
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-950">{item.title}</div>
                    <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
