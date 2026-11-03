"use client";

import React, { useState } from "react";
import { 
  StageMode, 
  Speaker, 
  SlideContent 
} from "@/types";
import { 
  Users, 
  Presentation, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Mic, 
  ChevronLeft, 
  ChevronRight,
  MonitorPlay,
  Settings,
  ShieldCheck,
  Radio
} from "lucide-react";

export function StagePlayground() {
  const [stageMode, setStageMode] = useState<StageMode>("keynote");
  const [bgmActive, setBgmActive] = useState<boolean>(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const mockSlides: SlideContent[] = [
    {
      id: 1,
      title: "Toàn Cảnh Kinh Tế Số & Chiến Lược Đổi Mới Doanh Nghiệp 2026",
      subtitle: "Phiên Khai Mạc Cấp Cao · Chủ trì: Hội Đồng Doanh Nghiệp",
      bulletPoints: [
        "Trình chiếu Slide trực tiếp trên hạ tầng Zonlas — Không qua nén Webcam",
        "Đồng bộ từng cử chỉ lật slide đến hàng chục nghìn đại biểu cùng lúc",
        "Hiển thị bảng số liệu tài chính siêu nét chuẩn 4K Vector",
      ],
      graphicType: "metrics",
    },
    {
      id: 2,
      title: "Kiến Trúc Dual-Layer BGM Độc Quyền",
      subtitle: "Giải quyết triệt để lỗi nhạc nền đè bẹp giọng diễn giả",
      bulletPoints: [
        "Kênh nhạc lễ và kênh voice diễn giả được mã hóa phân tầng độc lập",
        "Tự động hạ âm lượng BGM xuống 15% khi diễn giả cất giọng",
        "Kích hoạt nhạc vinh danh trao cúp chính xác từng giây theo kịch bản",
      ],
      graphicType: "chart",
    },
    {
      id: 3,
      title: "Virtual 3D Pavilion: Không Gian Triển Lãm Đối Tác",
      subtitle: "Gia tăng giá trị thương hiệu nhà tài trợ gấp 3 lần",
      bulletPoints: [
        "Gian hàng 3D cho khách tự do khám phá trong giờ giải lao",
        "Tích hợp tải tài liệu, video giới thiệu và đặt lịch làm việc 1:1",
        "Đo lường chi tiết lượt khách ghé thăm và lead tiềm năng",
      ],
      graphicType: "architecture",
    },
  ];

  const speakers: Speaker[] = [
    {
      id: "1",
      name: "TS. Lê Gia Khánh",
      role: "Keynote Speaker",
      company: "Viện Đổi Mới Sáng Tạo",
      avatar: "LK",
      isHost: true,
      isSpeaking: true,
    },
    {
      id: "2",
      name: "Bà Trần Minh Thư",
      role: "Giám Đốc Vận Hành",
      company: "Nexus Global Group",
      avatar: "MT",
      isSpeaking: false,
    },
    {
      id: "3",
      name: "Ông Đặng Quốc Toàn",
      role: "Trưởng Ban Tổ Chức",
      company: "Hội Đồng Doanh Nghiệp",
      avatar: "QT",
      isSpeaking: false,
    },
  ];

  return (
    <section id="director-studio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-14">
          <div className="text-xs font-mono font-bold text-[var(--brand-crimson)] uppercase tracking-wider mb-3">
            TRUNG TÂM ĐIỀU PHỐI TRỰC TIẾP
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight mb-4">
            Bàn Đạo Diễn Sân Khấu Số: <br />
            Làm chủ mọi kịch bản sự kiện.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Chuyển đổi bố cục màn hình trong 0.05 giây, quản lý thứ tự phát biểu của diễn giả và kích hoạt kịch bản âm thanh nghi thức mà không gián đoạn luồng người xem.
          </p>
        </div>

        {/* Real Production Studio Showcase */}
        <div className="rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-surface)] overflow-hidden shadow-xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Studio Image Asset */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full">
              <img
                src="/images/director-studio.jpg"
                alt="Zonlas Live Director Control Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white text-left">
                <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-1">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF2D4E]" />
                  <span>MASTER CONTROL ROOM · PRODUCTION DECK</span>
                </div>
                <h4 className="text-xl font-bold text-white">Phòng Đạo Diễn &amp; Điều Phối Kỹ Thuật Số</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  Giao diện trực quan cho phép kỹ thuật viên điều khiển luồng phát sóng, quản lý phòng chờ Backstage và hỗ trợ diễn giả từ xa.
                </p>
              </div>
            </div>

            {/* Right: Technical Control Switchboard */}
            <div className="lg:col-span-6 p-6 sm:p-8 text-left flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
                  <span className="text-xs font-mono font-bold text-[var(--text-main)] uppercase tracking-wider">
                    CHỌN BỐ CỤC PHÁT SÓNG
                  </span>
                  <span className="text-[11px] font-mono text-[#16A34A] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 0.05s Chuyển cảnh tức thì
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { id: "keynote", name: "1. Keynote 4K", icon: Presentation, note: "Slide toàn màn hình + MC" },
                    { id: "dialogue", name: "2. Đối thoại 1:1", icon: Users, note: "Hai màn hình song song" },
                    { id: "panel", name: "3. Tọa đàm Panel", icon: Layers, note: "4-12 diễn giả cùng lúc" },
                    { id: "networking", name: "4. Networking", icon: Sparkles, note: "Bàn tròn giao lưu mở" },
                  ].map((m) => {
                    const Icon = m.icon;
                    const isActive = stageMode === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setStageMode(m.id as StageMode)}
                        className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                          isActive
                            ? "bg-[var(--bg-surface-inset)] border-[var(--brand-crimson)] shadow-sm ring-1 ring-[var(--brand-crimson)]/30"
                            : "bg-[var(--bg-surface-subtle)] border-transparent hover:border-[var(--border-subtle)]"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 ${isActive ? "text-[var(--brand-crimson)]" : "text-[var(--text-muted)]"}`} />
                          <span className="text-xs font-bold text-[var(--text-main)]">{m.name}</span>
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)]">{m.note}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Live Preview of Selected Stage Mode */}
                <div className="rounded-2xl bg-[var(--bg-surface-inset)] border border-[var(--border-subtle)] p-5">
                  <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase mb-2">
                    MÔ PHỎNG TRẠNG THÁI HIỂN THỊ CỦA ĐẠI BIỂU:
                  </div>

                  {stageMode === "keynote" && (
                    <div className="space-y-3">
                      <div className="text-sm font-bold text-[var(--text-main)]">
                        {mockSlides[currentSlideIndex].title}
                      </div>
                      <div className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                        {mockSlides[currentSlideIndex].bulletPoints.map((pt, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-crimson)]" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-xs">
                        <div className="flex items-center gap-2">
                          <button
                            disabled={currentSlideIndex === 0}
                            onClick={() => setCurrentSlideIndex((p) => p - 1)}
                            className="px-2.5 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-main)] font-bold text-xs disabled:opacity-40 cursor-pointer"
                          >
                            Slide trước
                          </button>
                          <button
                            disabled={currentSlideIndex === mockSlides.length - 1}
                            onClick={() => setCurrentSlideIndex((p) => p + 1)}
                            className="btn-crimson px-2.5 py-1 rounded text-xs font-bold disabled:opacity-40 cursor-pointer"
                          >
                            Slide kế tiếp
                          </button>
                        </div>
                        <span className="text-[11px] font-mono text-[var(--text-muted)]">
                          Trang {currentSlideIndex + 1}/{mockSlides.length}
                        </span>
                      </div>
                    </div>
                  )}

                  {stageMode === "dialogue" && (
                    <div className="grid grid-cols-2 gap-3 py-2 text-center">
                      <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                        <div className="w-10 h-10 mx-auto rounded-full bg-[var(--bg-surface-subtle)] border border-[var(--brand-crimson)] text-[var(--brand-crimson)] flex items-center justify-center font-bold text-xs mb-2">
                          LK
                        </div>
                        <div className="text-xs font-bold text-[var(--text-main)]">TS. Lê Gia Khánh</div>
                        <div className="text-[10px] text-[var(--text-muted)]">Chủ tọa phiên họp</div>
                      </div>
                      <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                        <div className="w-10 h-10 mx-auto rounded-full bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] flex items-center justify-center font-bold text-xs mb-2">
                          MT
                        </div>
                        <div className="text-xs font-bold text-[var(--text-main)]">Bà Trần Minh Thư</div>
                        <div className="text-[10px] text-[var(--text-muted)]">Khách mời VIP</div>
                      </div>
                    </div>
                  )}

                  {stageMode === "panel" && (
                    <div className="grid grid-cols-3 gap-2 py-2 text-center text-xs">
                      {["TS. Lê Gia Khánh", "Bà Trần Minh Thư", "Ông Đặng Quốc Toàn"].map((name, i) => (
                        <div key={i} className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                          <div className="w-8 h-8 mx-auto rounded-full bg-[var(--bg-surface-subtle)] flex items-center justify-center font-bold text-[11px] text-[var(--text-secondary)] mb-1">
                            0{i + 1}
                          </div>
                          <div className="font-bold text-[var(--text-main)] text-[11px] truncate">{name}</div>
                          <div className="text-[10px] text-[var(--text-muted)]">Diễn giả</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {stageMode === "networking" && (
                    <div className="space-y-2 py-1 text-left text-xs">
                      <div className="font-bold text-[var(--text-main)]">Không gian kết nối mở (Networking Lounge)</div>
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        Đại biểu tự do di chuyển giữa 10-50 bàn tròn chuyên đề trong giờ giải lao để trao đổi cơ hội hợp tác kinh doanh.
                      </p>
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom Quick Switcher Status */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setBgmActive(!bgmActive)}
                    className="flex items-center gap-1.5 font-semibold text-[var(--text-main)] hover:text-[var(--brand-crimson)] transition-colors cursor-pointer"
                  >
                    {bgmActive ? <Volume2 className="w-3.5 h-3.5 text-[#16A34A]" /> : <VolumeX className="w-3.5 h-3.5 text-red-500" />}
                    <span>BGM Sự Kiện: {bgmActive ? "Đang bật" : "Tắt"}</span>
                  </button>
                </div>
                <div className="font-mono text-[11px]">
                  Bảo mật WebRTC P2P/SFU
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
