"use client";

import React from "react";
import Link from "next/link";
import { Video, ShieldCheck, Phone, Mail, MapPin, Radio, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#070A10] text-slate-400 text-xs sm:text-sm pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white font-bold relative group-hover:bg-[#C41230] transition-colors">
                <Video className="w-4 h-4" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C41230] border-2 border-[#070A10]" />
              </div>
              <span className="text-xl font-black text-white tracking-tight font-sans">
                zonlas<span className="text-[#C41230]">.</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Hạ tầng sự kiện số &amp; họp trực tuyến chuyên nghiệp B2B. Trình chiếu Cloud Deck Native Vector 4K, âm thanh Dual-Layer tách kênh, gian hàng ảo 2.5D và trợ lý AI song ngữ thời gian thực.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#C41230]" />
                <span>Hotline tư vấn kỹ thuật: <strong>1900 6868</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#C41230]" />
                <span>contact@zonlas.vn</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#C41230]" />
                <span>Hà Nội: Keangnam Landmark 72 · TP.HCM: Bitexco Financial Tower</span>
              </div>
            </div>

            <div className="pt-2 text-xs flex items-center gap-2 text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Chủ quyền dữ liệu Việt Nam · Tiêu chuẩn bảo mật ISO 27001</span>
            </div>
          </div>

          {/* Links: 4 Trụ Cột Nền Tảng */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Trụ Cột Cốt Lõi
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#pillars" className="hover:text-white transition-colors">Virtual Production Studio</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Branding &amp; Sponsor Expo</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">AI-Native Event Engine</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Gamification &amp; Engagement</a></li>
              <li><a href="#audio-engine" className="hover:text-white transition-colors">Âm Thanh Dual-Layer</a></li>
            </ul>
          </div>

          {/* Links: Nhóm Đối Tượng */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Đối Tượng Phục Vụ
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#audiences" className="hover:text-white transition-colors">Event Agencies</a></li>
              <li><a href="#audiences" className="hover:text-white transition-colors">Doanh nghiệp B2B &amp; AGM</a></li>
              <li><a href="#audiences" className="hover:text-white transition-colors">Master Trainers &amp; Giáo Dục</a></li>
              <li><a href="#audiences" className="hover:text-white transition-colors">Hiệp Hội &amp; Triển Lãm Số</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">So sánh với Zoom &amp; Hopin</a></li>
            </ul>
          </div>

          {/* Links: Bảng Giá & Pháp Lý */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Pháp Lý &amp; Cam Kết
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#pricing" className="hover:text-white transition-colors">Bảng giá gói dịch vụ</a></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Thỏa thuận bảo mật NDA</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Tuân thủ Luật Doanh Nghiệp</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Chính sách bảo vệ dữ liệu</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Quy trình tổng duyệt kỹ thuật</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Zonlas Platform. Nền tảng tổ chức sự kiện &amp; cuộc họp số B2B chuyên nghiệp.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Điều khoản</span>
            <span className="hover:text-slate-400 cursor-pointer">Bảo mật</span>
            <span className="text-emerald-400 font-bold">WebRTC Native 4K</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
