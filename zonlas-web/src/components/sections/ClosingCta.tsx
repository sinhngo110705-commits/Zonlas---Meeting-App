"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Radio, CalendarCheck } from "lucide-react";

interface ClosingCtaProps {
  onOpenDemoModal: () => void;
}

export function ClosingCta({ onOpenDemoModal }: ClosingCtaProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#070A10] text-white text-center relative overflow-hidden border-t border-slate-800">
      {/* Subtle Background Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E2638_1px,transparent_1px)] [background-size:2rem_2rem] opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] animate-pulse" />
          <span>TỔNG DUYỆT TRỰC TIẾP 1:1 CÙNG CHUYÊN GIA KỸ THUẬT ZONLAS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6 font-sans">
          Sẵn sàng nâng tầm sự kiện số <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            lên chuẩn mực trường quay chuyên nghiệp?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Đừng để các sự cố gián đoạn âm thanh hoặc slide mờ nhòe làm ảnh hưởng đến uy tín của thương hiệu và diễn giả. Hãy để kỹ sư Zonlas đồng hành chuẩn bị cùng bạn trước giờ phát sóng.
        </p>

        {/* Action Button Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenDemoModal}
            className="btn-crimson text-sm sm:text-base py-3.5 px-6 group"
          >
            <span>Đặt Lịch Tổng Duyệt Kỹ Thuật 1:1</span>
            <span className="btn-icon-pill">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>

          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 transition-colors cursor-pointer"
          >
            Yêu Cầu Báo Giá Sự Kiện
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Ký thỏa thuận bảo mật NDA trước khi tổng duyệt</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Cam kết SLA ổn định 99.99%</span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#C41230]" />
            <span>Kỹ sư túc trực điều phối 24/7 tại Việt Nam</span>
          </div>
        </div>

      </div>
    </section>
  );
}
