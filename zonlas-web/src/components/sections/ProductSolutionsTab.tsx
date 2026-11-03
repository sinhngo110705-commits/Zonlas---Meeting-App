"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Users, 
  Award, 
  Presentation, 
  Sliders, 
  Store, 
  Layers, 
  Check, 
  ArrowUpRight,
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Volume2,
  Lock,
  Vote,
  FileSpreadsheet,
  Headphones,
  CheckCircle2
} from "lucide-react";

interface ProductSolutionsTabProps {
  onOpenDemoModal: () => void;
}

export function ProductSolutionsTab({ onOpenDemoModal }: ProductSolutionsTabProps) {
  const [activeDossier, setActiveDossier] = useState<number>(0);
  const [voteCount, setVoteCount] = useState<number>(98.7);
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  const dossiers = [
    {
      id: "agm-ceo",
      target: "DÀNH CHO CEO & HỘI ĐỒNG QUẢN TRỊ",
      title: "Đại Hội Cổ Đông Thường Niên (AGM) & Họp HĐQT Bảo Mật",
      subtitle: "Xóa bỏ rủi ro pháp lý và sự cố gián đoạn. Nền tảng chuyên biệt hóa cho các kỳ đại hội đòi hỏi tính bảo mật và chuẩn xác tuyệt đối.",
      icon: Building2,
      accentColor: "text-slate-900",
      stats: [
        { label: "Bảo Mật Biểu Quyết", val: "Mã hóa E2E OTP" },
        { label: "Báo Cáo Tài Chính", val: "4K Vector Lossless" },
        { label: "Cam Kết Vận Hành", val: "SLA 99.99% Kèm Phạt" },
      ],
      features: [
        {
          name: "Hệ thống Biểu Quyết Trực Tuyến Minh Bạch",
          desc: "Xác thực danh tính cổ đông theo mã OTP/SMS, kiểm soát tỷ lệ tán thành theo thời gian thực và tự động xuất biên bản kiểm phiếu hợp lệ.",
        },
        {
          name: "Trình Chiếu Báo Cáo Kiểm Toán 4K",
          desc: "Tài liệu BCTC, nghị quyết và đồ thị tài chính được render vector trực tiếp, đại biểu xem trên điện thoại hay màn hình lớn đều sắc nét 100%.",
        },
        {
          name: "Phòng Đệm VIP Dành Riêng Cho Đoàn Chủ Tịch",
          desc: "Kênh trao đổi nội bộ riêng tư giữa Chủ tịch, Ban Kiểm soát và Luật sư trước khi phát biểu ra toàn thể đại hội.",
        },
      ],
      previewType: "voting",
    },
    {
      id: "summit-owner",
      target: "DÀNH CHO CHỦ DOANH NGHIỆP & BAN TỔ CHỨC",
      title: "Diễn Đàn Khách Hàng B2B & Hội Nghị Đối Tác (Summit)",
      subtitle: "Quy mô đến 15.000 đại biểu. Tối đa hóa quyền lợi nhà tài trợ và chuyển đổi khách hàng tiềm năng qua triển lãm thực tế ảo 3D.",
      icon: Users,
      accentColor: "text-[#C41230]",
      stats: [
        { label: "Sức Chứa Luồng CDN", val: "15.000+ Đại Biểu" },
        { label: "Gian Hàng Triển Lãm", val: "Virtual 3D Pavilion" },
        { label: "Chuyển Đổi Lead", val: "Tăng 3.4 lần" },
      ],
      features: [
        {
          name: "Virtual 3D Expo Cho Nhà Tài Trợ",
          desc: "Không gian 3D tương tác sống động, giúp đại biểu tham quan gian hàng, tải brochure và đặt lịch hẹn 1:1 với đối tác tài trợ trong giờ giải lao.",
        },
        {
          name: "Bàn Đạo Diễn Sân Khấu Chuyên Nghiệp",
          desc: "Chuyển đổi tức thì 4 bố cục sân khấu (Keynote, Đối thoại 1:1, Tọa đàm Panel, Lounge) trong 0.05 giây không chớp màn hình.",
        },
        {
          name: "Whitelabel Nhận Diện Thương Hiệu Toàn Diện",
          desc: "Tùy biến tên miền riêng (e.g. event.yourcompany.com), logo, phông nền ảo và thư mời QR tự động gửi qua email/zalo.",
        },
      ],
      previewType: "expo",
    },
    {
      id: "keynote-trainer",
      target: "DÀNH CHO MASTER TRAINER & KEYNOTE SPEAKER",
      title: "Masterclass Đào Tạo C-Level & Diễn Đàn Keynote",
      subtitle: "Tái hiện trọn vẹn hào khí sự kiện trực tiếp. Âm thanh phân tầng Dual-Layer và bút tương tác trực tiếp giúp giữ chân học viên suốt phiên đào tạo.",
      icon: Award,
      accentColor: "text-amber-600",
      stats: [
        { label: "Kiến Trúc Âm Thanh", val: "Dual-Layer BGM" },
        { label: "Auto Voice-Ducking", val: "Tự hạ -18dB BGM" },
        { label: "Độ Trễ Tương Tác", val: "Dưới 0.1 Giây" },
      ],
      features: [
        {
          name: "Công Nghệ Tách Lớp Âm Thanh Độc Quyền",
          desc: "Kênh nhạc lễ truyền cảm hứng và kênh micro diễn giả được truyền tải độc lập, tự động hạ nhạc nền khi diễn giả cất giọng mà không bị rè nghẹt.",
        },
        {
          name: "Bút Laser & Bảng Vẽ Trực Tiếp Trên Slide 4K",
          desc: "Diễn giả có thể khoanh tròn số liệu, vẽ sơ đồ tư duy trực tiếp lên tài liệu đang trình chiếu mà không cần chia sẻ màn hình máy tính.",
        },
        {
          name: "Ghi Âm & Transcript Tách Kênh Chất Lượng Studio",
          desc: "Lưu trữ đa luồng video và audio 48kHz, tự động tạo phụ đề trực tiếp và trích xuất biên bản đào tạo bằng AI.",
        },
      ],
      previewType: "audio-stage",
    },
  ];

  const current = dossiers[activeDossier];
  const CurrentIcon = current.icon;

  return (
    <section 
      id="executive-solutions" 
      className="scroll-mt-28 py-20 sm:py-28 bg-[#FAFBFD] border-b border-slate-200/80"
    >
      {/* Anchor aliases for legacy links */}
      <div id="products" className="scroll-mt-28" />
      <div id="solutions" className="scroll-mt-28" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41230]" />
            HỒ SƠ GIẢI PHÁP CHUYÊN BIỆT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Thiết kế riêng cho từng vị thế điều hành
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Không dùng chung một kịch bản sơ sài. Zonlas cung cấp các bộ tiêu chuẩn kỹ thuật may đo chính xác cho nhu cầu của lãnh đạo và chuyên gia.
          </p>

          {/* Dossier Tabs */}
          <div className="flex justify-center mt-8">
            <div className="doppelrand-shell inline-flex p-1 bg-white">
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-1">
                {dossiers.map((d, idx) => {
                  const Icon = d.icon;
                  const isActive = activeDossier === idx;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setActiveDossier(idx)}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-[#070A10] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#C41230]" : "text-slate-400"}`} />
                      <span>{d.target.split("DÀNH CHO ")[1]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Dossier Bento Split Display */}
        <div className="doppelrand-shell p-2 sm:p-3 bg-white shadow-lg">
          <div className="doppelrand-core p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Dossier Briefing & Feature Breakdown */}
              <div className="lg:col-span-6 text-left flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-600 mb-4">
                    <CurrentIcon className="w-3.5 h-3.5 text-[#C41230]" />
                    <span>{current.target}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-snug mb-3">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                    {current.subtitle}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-4 mb-8">
                    {current.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-left">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <div>
                          <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-0.5">
                            {feat.name}
                          </strong>
                          <span className="text-xs text-slate-500 leading-relaxed block">
                            {feat.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dossier Action Button */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenDemoModal}
                    className="btn-executive-primary text-xs sm:text-sm"
                  >
                    <span>Yêu Cầu Tài Liệu Kỹ Thuật 1:1</span>
                    <div className="btn-executive-arrow">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <span className="text-xs font-mono text-slate-500">
                    Bao gồm hợp đồng bảo mật NDA &amp; cam kết SLA
                  </span>
                </div>
              </div>

              {/* Right Column: Tailored Interactive Hardware Simulation Preview */}
              <div className="lg:col-span-6">
                
                {/* PREVIEW TYPE 1: CEO AGM Online Voting Simulation */}
                {current.previewType === "voting" && (
                  <div className="rounded-2xl bg-[#070A10] border border-slate-800 p-6 text-left text-white shadow-2xl">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
                      <span className="flex items-center gap-2 font-mono text-emerald-400 font-bold">
                        <Vote className="w-4 h-4 text-emerald-400" /> CỔNG BIỂU QUYẾT ĐẠI HỘI CỔ ĐÔNG (MÃ HÓA E2E)
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">MÃ CỔ PHIẾU: VNZ-AGM</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-5">
                      <div className="text-xs font-mono text-slate-400 mb-1">TỜ TRÌNH SỐ 03 / HĐQT-2026:</div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                        Thông qua Kế hoạch Sản xuất Kinh doanh &amp; Phương án Phân phối Lợi nhuận 2026
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        Cổ đông biểu quyết theo số lượng cổ phần sở hữu hợp lệ. Kết quả được kiểm định tự động bằng chữ ký số.
                      </p>

                      {/* Live Tally Progress */}
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between font-mono">
                          <span className="text-slate-300">Tán thành: <strong className="text-emerald-400">{voteCount.toFixed(1)}%</strong></span>
                          <span className="text-slate-400">3.180.450 / 3.220.000 CP</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 transition-all duration-500" 
                            style={{ width: `${voteCount}%` }} 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Interactive Vote Action */}
                    <div className="flex items-center gap-3">
                      <button
                        disabled={hasVoted}
                        onClick={() => {
                          setVoteCount(99.6);
                          setHasVoted(true);
                        }}
                        className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          hasVoted 
                            ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/40" 
                            : "bg-emerald-600 hover:bg-emerald-500 text-white"
                        }`}
                      >
                        <Check className="w-4 h-4" />
                        <span>{hasVoted ? "Đã ghi nhận biểu quyết Tán Thành" : "Bấm Thử: Biểu Quyết Tán Thành"}</span>
                      </button>

                      <button
                        disabled={hasVoted}
                        onClick={() => setHasVoted(true)}
                        className="py-3 px-4 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      >
                        Không tán thành
                      </button>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Xác thực OTP qua SMS/Email</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Hợp lệ theo Luật Doanh Nghiệp 2020
                      </span>
                    </div>
                  </div>
                )}

                {/* PREVIEW TYPE 2: Business Owner Virtual 3D Expo Preview */}
                {current.previewType === "expo" && (
                  <div className="rounded-2xl bg-[#070A10] border border-slate-800 p-6 text-left text-white shadow-2xl">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
                      <span className="flex items-center gap-2 font-mono text-[#FF4D6D] font-bold">
                        <Store className="w-4 h-4 text-[#C41230]" /> VIRTUAL 3D PAVILION (GIAN HÀNG TRIỂN LÃM ĐỐI TÁC)
                      </span>
                      <span className="text-amber-400 font-mono text-[11px]">TIER: KIM CƯƠNG (DIAMOND)</span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-4 border border-slate-800 bg-slate-950">
                      <img 
                        src="/images/virtual-booth.jpg" 
                        alt="Zonlas 3D Virtual Booth" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                        <div className="text-sm font-bold text-white">Gian Hàng Nexus AI Vietnam</div>
                        <div className="text-[11px] text-slate-300">Nhà tài trợ công nghệ chính của Diễn Đàn Doanh Nghiệp</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-center mb-4 text-xs font-mono">
                      <div>
                        <div className="text-slate-400 text-[10px]">Đại biểu ghé thăm</div>
                        <div className="text-sm font-bold text-white mt-0.5">3.420</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px]">Lead thu thập</div>
                        <div className="text-sm font-bold text-emerald-400 mt-0.5">284</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px]">Hẹn làm việc 1:1</div>
                        <div className="text-sm font-bold text-[#C41230] mt-0.5">48 Cuộc</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 text-center">
                      Đại biểu tự do tương tác trong giờ giải lao mà không cần rời phòng hội nghị.
                    </div>
                  </div>
                )}

                {/* PREVIEW TYPE 3: Master Trainer Dual-Layer Studio Sound Preview */}
                {current.previewType === "audio-stage" && (
                  <div className="rounded-2xl bg-[#070A10] border border-slate-800 p-6 text-left text-white shadow-2xl">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
                      <span className="flex items-center gap-2 font-mono text-amber-400 font-bold">
                        <Sliders className="w-4 h-4 text-amber-400" /> DUAL-LAYER SOUND CONSOLE (CHUẨN TRUYỀN HÌNH GALA)
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">AUTO VOICE-DUCKING</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-4 space-y-4">
                      {/* Voice Track */}
                      <div>
                        <div className="flex justify-between text-xs mb-1.5 font-mono">
                          <span className="text-emerald-400 font-bold">KÊNH 1: VOICE DIỄN GIẢ (OPUS 48KHZ)</span>
                          <span className="text-emerald-400 font-bold">-3 dB</span>
                        </div>
                        <div className="h-3 rounded-full bg-slate-800 p-0.5 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 w-[78%] rounded-full animate-pulse" />
                        </div>
                      </div>

                      {/* BGM Track */}
                      <div>
                        <div className="flex justify-between text-xs mb-1.5 font-mono">
                          <span className="text-amber-400 font-bold">KÊNH 2: NHẠC LỄ BGM (STEREO 320KBPS)</span>
                          <span className="text-amber-400 font-bold">Tự hạ -18dB khi MC nói</span>
                        </div>
                        <div className="h-3 rounded-full bg-slate-800 p-0.5 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 w-[24%] rounded-full" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed mb-4">
                      🔊 <strong>Kho 500+ Nhạc Lễ Nạp Sẵn:</strong> Kích hoạt nhạc vinh danh trao cúp, đếm ngược và chào cờ chuẩn xác từng giây theo kịch bản mà không lo bị bộ lọc micro cắt xén.
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Không cần thuê bàn mixer âm thanh rời</span>
                      <span className="text-emerald-400">Tối ưu 100% cho Master Trainer</span>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
