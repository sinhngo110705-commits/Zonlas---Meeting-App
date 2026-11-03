"use client";

import React, { useState } from "react";
import { 
  Store, 
  Sparkles, 
  FileDown, 
  MessageSquare, 
  Award,
  Video
} from "lucide-react";

export function VirtualBoothPreview() {
  const [activeBoothIndex, setActiveBoothIndex] = useState(0);

  const booths = [
    {
      name: "Nexus Cloud & AI Vietnam",
      tier: "NHÀ TÀI TRỢ KIM CƯƠNG (DIAMOND)",
      tagline: "Hạ tầng điện toán đám mây & AI tăng tốc chuyển đổi số doanh nghiệp",
      stats: { visitors: "3.420", leads: "284", rating: "4.9/5" },
      leadOffer: "Tặng gói tài trợ hạ tầng 5.000$ cho 50 đại biểu VIP đăng ký sớm",
    },
    {
      name: "FinPulse Global Capital",
      tier: "NHÀ TÀI TRỢ VÀNG (GOLD PARTNER)",
      tagline: "Cổng thanh toán đa tiền tệ & giải pháp quản trị dòng tiền quốc tế",
      stats: { visitors: "2.180", leads: "165", rating: "4.8/5" },
      leadOffer: "Miễn phí 100% phí xử lý giao dịch trong 6 tháng đầu cho đối tác Zonlas",
    },
    {
      name: "CyberShield Security",
      tier: "NHÀ TÀI TRỢ BẠC (SILVER PARTNER)",
      tagline: "Bảo mật dữ liệu chuẩn quân sự & kiểm toán an ninh mạng chuyên sâu",
      stats: { visitors: "1.650", leads: "112", rating: "4.9/5" },
      leadOffer: "Gói đánh giá rủi ro an ninh mạng toàn diện cho doanh nghiệp tham dự",
    },
  ];

  const currentBooth = booths[activeBoothIndex];

  return (
    <section id="virtual-booth" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] text-[var(--brand-crimson)] text-xs font-bold uppercase tracking-widest mb-4">
            DOANH THU NHÀ TÀI TRỢ
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight mb-4">
            Virtual 3D Pavilion <br className="hidden sm:inline" />
            <span className="text-[var(--brand-crimson)]">Gian Hàng Triển Lãm Đối Tác</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Không gian triển lãm số giúp người tham dự tương tác trực tiếp với các gian hàng nhà tài trợ trước giờ khai mạc và trong giờ giải lao.
          </p>
        </div>

        {/* Booth Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {booths.map((b, idx) => (
            <button
              key={idx}
              onClick={() => setActiveBoothIndex(idx)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold transition-all border ${
                activeBoothIndex === idx
                  ? "btn-crimson shadow-md"
                  : "bg-[var(--bg-surface)] border-[var(--border-medium)] text-[var(--text-secondary)] hover:text-[var(--text-main)] shadow-sm"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{b.name}</span>
            </button>
          ))}
        </div>

        {/* Booth Exhibition Card */}
        <div className="premium-card p-6 sm:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 3D Booth Graphic */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl bg-[var(--bg-surface-inset)] border border-[var(--border-subtle)] p-6 min-h-[360px] flex flex-col justify-between">
                
                {/* Booth Tier Tag */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black px-3 py-1 rounded-md bg-[var(--bg-surface)] text-[var(--brand-gold)] border border-[var(--border-subtle)] font-mono tracking-wider">
                    {currentBooth.tier}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#16A34A] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                    Đang Mở Cửa
                  </div>
                </div>

                {/* 3D Booth Simulation */}
                <div className="my-auto py-6 text-center flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--border-medium)] flex items-center justify-center shadow-sm relative mb-4">
                    <Store className="w-12 h-12 text-[var(--brand-crimson)]" />
                    <div className="absolute -bottom-2.5 px-2.5 py-0.5 rounded-full btn-crimson text-[9px] font-black uppercase tracking-wider">
                      3D BOOTH
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-[var(--text-main)]">{currentBooth.name}</h4>
                  <p className="text-xs text-[var(--text-secondary)] max-w-sm mt-1">{currentBooth.tagline}</p>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  <button className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-subtle)] text-xs text-[var(--text-main)] font-bold border border-[var(--border-subtle)] transition-colors">
                    <Video className="w-3.5 h-3.5 text-[var(--brand-crimson)]" /> Video
                  </button>
                  <button className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-subtle)] text-xs text-[var(--text-main)] font-bold border border-[var(--border-subtle)] transition-colors">
                    <FileDown className="w-3.5 h-3.5 text-[var(--brand-gold)]" /> Profile
                  </button>
                  <button className="btn-crimson flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-bold transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" /> Gặp 1:1
                  </button>
                </div>

              </div>
            </div>

            {/* Right: Booth Analytics */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--brand-gold)] font-bold">
                  BÁO CÁO TƯƠNG TÁC THỜI GIAN THỰC
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] mt-1">
                  Đo Lường Chi Tiết Hiệu Quả Từng Nhà Tài Trợ
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Thay vì chỉ đặt logo tĩnh, các đối tác tài trợ có thể đối thoại trực tiếp, thu thập danh bạ đối tác tiềm năng và chuyển đổi khách hàng ngay trong phiên giải lao.
                </p>
              </div>

              {/* Real-time stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-inset)] border border-[var(--border-subtle)]">
                  <div className="text-2xl font-black text-[var(--text-main)]">{currentBooth.stats.visitors}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5">Khách tham quan</div>
                </div>
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-inset)] border border-[var(--border-subtle)]">
                  <div className="text-2xl font-black text-[var(--brand-crimson)]">{currentBooth.stats.leads}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5">Leads đăng ký</div>
                </div>
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-inset)] border border-[var(--border-subtle)]">
                  <div className="text-2xl font-black text-[#16A34A]">{currentBooth.stats.rating}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5">Đánh giá VIP</div>
                </div>
              </div>

              {/* Lead Magnet Banner */}
              <div className="p-4 rounded-2xl bg-[var(--brand-gold-subtle)] border border-[var(--brand-gold)]/30 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[var(--brand-gold)] flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[var(--text-main)] block mb-0.5">Đặc quyền dành riêng cho sự kiện:</span>
                  <span className="text-[var(--brand-gold)] font-bold">{currentBooth.leadOffer}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
