"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Video, 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles,
  Play
} from "lucide-react";

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export function Navbar({ onOpenDemoModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all">
        
        {/* Brand Logo with Zonlas Crimson Identity */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-[#070A10] flex items-center justify-center text-white shadow-sm group-hover:bg-[#C41230] transition-colors relative">
              <Video className="w-4 h-4 text-white" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C41230] border-2 border-white animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-slate-950 font-sans">
                zonlas<span className="text-[#C41230]">.</span>
              </span>
              <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono font-bold tracking-wider text-slate-600 uppercase border border-slate-200/60">
                Live Studio OS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-slate-600">
            <a 
              href="#pillars" 
              className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
            >
              4 Trụ Cột Nền Tảng
            </a>
            <a 
              href="#interactive-studio" 
              className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
            >
              Studio Trải Nghiệm
            </a>
            <a 
              href="#audiences" 
              className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
            >
              Đối Tượng Phục Vụ
            </a>
            <a 
              href="#comparison" 
              className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
            >
              So Sánh Nền Tảng
            </a>
            <a 
              href="#pricing" 
              className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
            >
              Bảng Giá
            </a>
          </nav>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#interactive-studio"
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          >
            <Play className="w-3.5 h-3.5 text-[#C41230] fill-[#C41230]" />
            <span>Trải Nghiệm Studio</span>
          </a>

          <button
            onClick={onOpenDemoModal}
            className="btn-crimson text-xs py-2 px-4 shadow-sm group"
          >
            <span>Đặt Lịch Demo 1:1</span>
            <span className="btn-icon-pill">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenDemoModal}
            className="btn-crimson text-xs py-1.5 px-3"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-md mx-auto rounded-2xl border border-slate-200 bg-white/98 backdrop-blur-xl p-5 shadow-xl pointer-events-auto text-left">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
            <a 
              href="#pillars" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-[#C41230]"
            >
              4 Trụ Cột Nền Tảng
            </a>
            <a 
              href="#interactive-studio" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-[#C41230]"
            >
              Studio Trải Nghiệm
            </a>
            <a 
              href="#audiences" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-[#C41230]"
            >
              Đối Tượng Phục Vụ
            </a>
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-[#C41230]"
            >
              So Sánh Nền Tảng
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-[#C41230]"
            >
              Bảng Giá &amp; Cam Kết
            </a>
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full btn-crimson text-sm py-2.5 flex items-center justify-center gap-2"
            >
              <span>Đặt Lịch Demo &amp; Tư Vấn Sự Kiện</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
