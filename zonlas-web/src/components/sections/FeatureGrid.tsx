"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Volume2, 
  Store, 
  Check, 
  Sliders, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  ShieldCheck
} from "lucide-react";

export function FeatureGrid() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [faderBgm, setFaderBgm] = useState(20);
  const [faderVoice, setFaderVoice] = useState(85);
  const [autoDucking, setAutoDucking] = useState(true);

  const slideSamples = [
    {
      title: "Báo Cáo Tăng Trưởng Doanh Nghiệp 2026",
      subtitle: "Render trực tiếp dạng vector 4K trên hạ tầng CDN Zonlas — Không nén qua webcam",
      metric: "Vector Lossless 4K",
      bullet1: "Đồng bộ từng cử chỉ lật slide đến hàng chục nghìn đại biểu cùng lúc",
      bullet2: "Bảng biểu và số liệu tài chính siêu nét, đọc rõ từng chi tiết",
    },
    {
      title: "Kiến Trúc Mạng Phân Tán WebRTC SFU",
      subtitle: "Đảm bảo 15.000 đại biểu đồng thời nhận luồng slide sắc nét như xem file gốc",
      metric: "Độ Trễ < 40ms",
      bullet1: "Tự động phân bổ máy chủ vùng gần nhất theo vị trí địa lý",
      bullet2: "Tiết kiệm 85% băng thông so với chia sẻ màn hình truyền thống",
    },
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-[var(--bg-surface-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Direct, Thoughtful, Clean */}
        <div className="max-w-3xl text-left mb-16">
          <div className="text-xs font-mono font-bold text-[var(--brand-crimson)] uppercase tracking-wider mb-3">
            KIẾN TRÚC GIẢI PHÁP
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight mb-4">
            Giải quyết 3 điểm nghẽn lớn nhất <br />
            của hội nghị &amp; sự kiện trực tuyến.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Các ứng dụng như Zoom hay Google Meet được thiết kế cho các cuộc họp nội bộ ngắn. Khi áp dụng vào đại hội cổ đông, diễn đàn cấp cao hay lễ vinh danh, những giới hạn về kỹ thuật lập tức bộc lộ.
          </p>
        </div>

        {/* 3 Core Pillars: High-craft Layout */}
        <div className="space-y-12">
          
          {/* PILLAR 1: Native 4K Slide vs Legacy Screenshare */}
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--bg-surface-subtle)] text-[var(--text-main)] text-xs font-mono font-bold">
                  <span>01</span>
                  <span>·</span>
                  <span>TRÌNH CHIẾU TÀI LIỆU SỐ</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
                  Native 4K Presenter: Không qua nén Webcam
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Thay vì chia sẻ màn hình máy tính (Screenshare) vốn dễ giật lag khi mạng người nói yếu, file PPTX/PDF được tải trực tiếp lên đám mây Zonlas và đồng bộ lệnh điều khiển vector tức thì.
                </p>

                {/* Legacy vs Zonlas Comparison */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-500/5 border border-red-500/20 text-slate-700 dark:text-slate-300">
                    <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-600 dark:text-red-400 block mb-0.5">Cách làm truyền thống:</strong>
                      Screenshare bị nén thành video 720p, chữ nhỏ bị mờ vỡ hạt, người thuyết trình rớt mạng thì slide đứng hình.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#16A34A]/5 border border-[#16A34A]/20 text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#16A34A] block mb-0.5">Giải pháp Zonlas Live OS:</strong>
                      Hiển thị vector 4K trực tiếp trên màn hình từng người xem, không phụ thuộc đường truyền của diễn giả.
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Slide Canvas */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[var(--bg-surface-inset)] border border-[var(--border-medium)] p-6 sm:p-8 text-left shadow-inner flex flex-col justify-between min-h-[300px]">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-xs font-mono">
                    <span className="text-[var(--brand-crimson)] font-bold">
                      SLIDE TRÌNH CHIẾU THỰC TẾ · NATIVE VECTOR
                    </span>
                    <span className="text-[#16A34A] font-bold">
                      {slideSamples[activeSlide].metric}
                    </span>
                  </div>

                  <div className="my-auto py-6">
                    <div className="text-xs font-bold text-[var(--brand-gold)] font-mono uppercase mb-1">
                      BÁO CÁO TÀI CHÍNH &amp; KINH DOANH
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-[var(--text-main)] mb-2">
                      {slideSamples[activeSlide].title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4">
                      {slideSamples[activeSlide].subtitle}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>{slideSamples[activeSlide].bullet1}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>{slideSamples[activeSlide].bullet2}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : slideSamples.length - 1))}
                        className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-subtle)] text-xs text-[var(--text-main)] font-bold border border-[var(--border-subtle)] flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" /> Trước
                      </button>
                      <button
                        onClick={() => setActiveSlide((prev) => (prev < slideSamples.length - 1 ? prev + 1 : 0))}
                        className="btn-crimson px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        Kế tiếp <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      Slide {activeSlide + 1} / {slideSamples.length} · Độ trễ: 0s
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* PILLAR 2: Dual-Layer Audio Engine */}
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--bg-surface-subtle)] text-[var(--text-main)] text-xs font-mono font-bold">
                  <span>02</span>
                  <span>·</span>
                  <span>ÂM THANH NGHI THỨC &amp; SỰ KIỆN</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
                  Dual-Layer Audio: Tách kênh BGM &amp; Giọng nói
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Nhạc nền chào mừng, nhạc trao giải và hiệu ứng âm thanh được xử lý ở tầng máy chủ độc lập. Giọng nói của diễn giả luôn được ưu tiên 100% và không bao giờ bị nhạc nền đè bẹp.
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-500/5 border border-red-500/20 text-slate-700 dark:text-slate-300">
                    <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-600 dark:text-red-400 block mb-0.5">Lỗi thường gặp ở Zoom/Meet:</strong>
                      Bật nhạc nền máy tính thì micro bị bộ lọc tạp âm triệt tiêu mất tiếng, hoặc nhạc lấn át không nghe rõ MC.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#16A34A]/5 border border-[#16A34A]/20 text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#16A34A] block mb-0.5">Công nghệ Auto Voice-Ducking Zonlas:</strong>
                      Tự động hạ âm BGM xuống 15-20% ngay khi diễn giả mở lời, đảm bảo không khí trang trọng chuẩn truyền hình.
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Virtual Audio Mixer */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[var(--bg-surface-inset)] border border-[var(--border-medium)] p-6 sm:p-8 text-left shadow-inner space-y-6">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-xs font-mono">
                    <span className="text-[var(--brand-gold)] font-bold flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5" /> BÀN ĐIỀU PHỐI ÂM THANH SỐ
                    </span>
                    <button
                      onClick={() => setAutoDucking(!autoDucking)}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
                        autoDucking
                          ? "bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/30"
                          : "bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      }`}
                    >
                      Auto Ducking: {autoDucking ? "BẬT (-18dB)" : "TẮT"}
                    </button>
                  </div>

                  {/* Channel 1: Voice */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-bold text-[var(--text-main)] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                        Kênh 1: Micro Diễn Giả (Voice Channel 48kHz)
                      </span>
                      <span className="text-[#16A34A] font-bold">{faderVoice}%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={faderVoice}
                      onChange={(e) => setFaderVoice(Number(e.target.value))}
                      className="w-full accent-[var(--brand-crimson)] cursor-pointer"
                    />
                    <div className="text-[10px] text-[var(--text-muted)] flex justify-between">
                      <span>Ưu tiên băng thông cao nhất</span>
                      <span>Khử ồn Deep Learning</span>
                    </div>
                  </div>

                  {/* Channel 2: BGM */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-bold text-[var(--text-main)] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--brand-gold)]" />
                        Kênh 2: Nhạc Nền Sự Kiện (BGM 320kbps Stereo)
                      </span>
                      <span className="text-[var(--brand-gold)] font-bold">{faderBgm}%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={faderBgm}
                      onChange={(e) => setFaderBgm(Number(e.target.value))}
                      className="w-full accent-[var(--brand-gold)] cursor-pointer"
                    />
                    <div className="text-[10px] text-[var(--text-muted)] flex justify-between">
                      <span>{autoDucking ? "Tự động hạ âm lượng khi có tiếng nói" : "Phát độc lập"}</span>
                      <span>500+ bản nhạc nghi thức nạp sẵn</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
                    💡 <strong>Kịch bản âm thanh:</strong> Kỹ thuật viên có thể lên lịch kích hoạt nhạc khai mạc, nhạc vinh danh trao cúp, hoặc tiếng vỗ tay đúng từng giây kịch bản mà không cần cắm jack âm thanh ngoài.
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* PILLAR 3: Virtual 3D Sponsor Pavilion */}
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--bg-surface-subtle)] text-[var(--text-main)] text-xs font-mono font-bold">
                  <span>03</span>
                  <span>·</span>
                  <span>DOANH THU &amp; TÀI TRỢ DOANH NGHIỆP</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
                  Virtual 3D Pavilion: Không gian triển lãm đối tác
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Thay vì chỉ đặt một logo mờ nhạt ở góc màn hình, Zonlas mở ra không gian gian hàng 3D thực tế ảo cho các đối tác Kim Cương, Vàng, Bạc. Đại biểu tự do tham quan, xem video giới thiệu và đặt lịch trao đổi 1:1 trong giờ nghỉ.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-surface-inset)] border border-[var(--border-subtle)]">
                    <div className="text-xl font-black text-[var(--brand-crimson)] font-mono">3.400+</div>
                    <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Lượt ghé thăm gian hàng</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-surface-inset)] border border-[var(--border-subtle)]">
                    <div className="text-xl font-black text-[#16A34A] font-mono">300%</div>
                    <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Tăng tỷ lệ thu thập Leads</div>
                  </div>
                </div>
              </div>

              {/* Real Visual: Exhibition Pavilion Image */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-[var(--border-medium)] shadow-md group relative">
                  <img
                    src="/images/virtual-booth.jpg"
                    alt="Zonlas 3D Virtual Sponsor Exhibition Pavilion"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700 max-h-[360px]"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white text-xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm">Không Gian Triển Lãm Đối Tác 3D</div>
                      <div className="text-[10px] text-slate-300">Tích hợp video giới thiệu, tài liệu PDF và đặt lịch làm việc 1:1</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-crimson)] text-white text-[10px] font-mono font-bold">
                      ACTIVE BOOTH
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
