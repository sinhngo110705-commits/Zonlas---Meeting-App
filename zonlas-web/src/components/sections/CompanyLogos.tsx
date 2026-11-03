"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Lock, Award } from "lucide-react";

export function CompanyLogos() {
  const enterprises = [
    { name: "VinGroup", sector: "Tập đoàn Đa ngành" },
    { name: "Techcombank", sector: "Tài chính & Ngân hàng" },
    { name: "FPT Telecom", sector: "Hạ tầng Viễn thông" },
    { name: "VNG Corporation", sector: "Công nghệ Số" },
    { name: "Masan Group", sector: "Bán lẻ & Tiêu dùng" },
    { name: "MB Bank", sector: "Ngân hàng Thương mại" },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Label */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41230]" />
            <span>HẠ TẦNG TIN CẬY CHO CÁC SỰ KIỆN QUY MÔ QUỐC GIA &amp; DOANH NGHIỆP NIÊM YẾT</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mã hóa E2E TLS 1.3</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span>Máy chủ đặt tại Việt Nam</span>
            </span>
          </div>
        </div>

        {/* Enterprise Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {enterprises.map((e, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200 text-left group"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-200 group-hover:bg-[#070A10] group-hover:text-white text-slate-700 flex items-center justify-center font-bold text-xs mb-2 transition-colors">
                {e.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="font-bold text-sm text-slate-900 tracking-tight group-hover:text-[#C41230] transition-colors">
                {e.name}
              </div>
              <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                {e.sector}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Quote Strip */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
            <strong className="text-slate-900">“Đại hội Cổ đông thường niên 2026 với 3.200 cổ đông trực tuyến diễn ra thông suốt tuyệt đối.</strong>{" "}
            Tài liệu báo cáo tài chính hiển thị chuẩn vector 4K không vỡ số, cổng biểu quyết minh bạch từng phút và không gặp bất kỳ độ trễ nào.”
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-xs font-bold text-slate-900">Ban Tổ Chức AGM &amp; Thư Ký HĐQT</div>
            <div className="text-[11px] text-[#C41230] font-mono font-semibold">Tập đoàn Bất Động Sản &amp; Tài Chính Niêm Yết</div>
          </div>
        </div>

      </div>
    </section>
  );
}
