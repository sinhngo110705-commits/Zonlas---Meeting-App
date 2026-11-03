"use client";

import React, { useState } from "react";
import { QrCode, CheckCircle2, Award, Sparkles } from "lucide-react";

export function LiveVIPPass() {
  const [delegateName, setDelegateName] = useState("NGUYỄN MINH TRIẾT");
  const [delegateTitle, setDelegateTitle] = useState("Tổng Giám Đốc");
  const [delegateCompany, setDelegateCompany] = useState("TẬP ĐOÀN CÔNG NGHỆ THÁI BÌNH DƯƠNG");
  const [passTier, setPassTier] = useState<"diamond" | "vip" | "speaker">("diamond");

  const tierDetails = {
    diamond: {
      label: "ĐẠI BIỂU KIM CƯƠNG (DIAMOND)",
      accent: "bg-[#B45309] text-white",
      border: "border-amber-500",
      code: "VIP-DIAMOND-0892",
    },
    vip: {
      label: "ĐẠI BIỂU DANH DỰ (VIP PASS)",
      accent: "bg-[var(--brand-crimson)] text-white",
      border: "border-[var(--brand-crimson)]",
      code: "VIP-DELEGATE-1420",
    },
    speaker: {
      label: "DIỄN GIẢ CẤP CAO (KEYNOTE SPEAKER)",
      accent: "bg-[#0369A1] text-white",
      border: "border-sky-600",
      code: "VIP-SPEAKER-0012",
    },
  };

  const currentTier = tierDetails[passTier];

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--bg-surface-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="text-xs font-mono font-bold text-[var(--brand-crimson)] uppercase tracking-wider mb-3">
            TRẢI NGHIỆM ĐẠI BIỂU CÁ NHÂN HÓA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight mb-4">
            Thẻ Đại Biểu Số (Digital VIP Pass): <br />
            Dấu ấn trang trọng cho khách mời cấp cao.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Hệ thống tự động phát hành thẻ đại biểu số cá nhân hóa đi kèm mã QR check-in tự động, tích hợp chức danh và nhận diện thương hiệu sự kiện một cách trang nhã.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left: Customizer Controls */}
          <div className="lg:col-span-6 space-y-5 p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-sm text-left">
            <h3 className="text-base font-bold text-[var(--text-main)] flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--brand-gold)]" />
              <span>Tùy Biến Thông Tin Thẻ Đại Biểu</span>
            </h3>

            <div>
              <label className="block text-xs font-mono font-bold text-[var(--text-secondary)] mb-1.5 uppercase">
                Phân Hạng Khách Mời:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "diamond", name: "Diamond" },
                  { id: "vip", name: "VIP Pass" },
                  { id: "speaker", name: "Speaker" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setPassTier(t.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      passTier === t.id
                        ? "btn-crimson shadow-sm"
                        : "bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:bg-[var(--border-subtle)]"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[var(--text-secondary)] mb-1.5 uppercase">
                Họ và Tên Đại Biểu:
              </label>
              <input
                type="text"
                value={delegateName}
                onChange={(e) => setDelegateName(e.target.value.toUpperCase())}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface-inset)] border border-[var(--border-medium)] text-[var(--text-main)] font-bold text-sm focus:outline-none focus:border-[var(--brand-crimson)]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-bold text-[var(--text-secondary)] mb-1.5 uppercase">
                  Chức Vụ:
                </label>
                <input
                  type="text"
                  value={delegateTitle}
                  onChange={(e) => setDelegateTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface-inset)] border border-[var(--border-medium)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[var(--brand-crimson)]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold text-[var(--text-secondary)] mb-1.5 uppercase">
                  Đơn Vị / Tập Đoàn:
                </label>
                <input
                  type="text"
                  value={delegateCompany}
                  onChange={(e) => setDelegateCompany(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface-inset)] border border-[var(--border-medium)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[var(--brand-crimson)]"
                />
              </div>
            </div>

            <div className="pt-2 text-xs text-[var(--text-muted)] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>Mã QR mã hóa chuẩn E2E, tương thích máy quét check-in tại quầy đón khách.</span>
            </div>
          </div>

          {/* Right: The VIP Pass Physical Lanyard Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className={`relative w-full max-w-[340px] aspect-[9/14] rounded-3xl p-6 bg-[var(--bg-surface)] border-2 ${currentTier.border} shadow-xl flex flex-col justify-between overflow-hidden group`}>
              
              {/* Lanyard Hole */}
              <div className="w-14 h-2.5 mx-auto rounded-full bg-[var(--border-medium)] mb-3" />

              {/* Event Header */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-[var(--brand-crimson)] flex items-center justify-center text-[10px] font-black text-white">
                    Z
                  </div>
                  <span className="text-xs font-black tracking-widest text-[var(--text-main)] font-mono">
                    ZONLAS SUMMIT 2026
                  </span>
                </div>
                <div className="text-[10px] text-[var(--text-muted)] tracking-widest font-mono">
                  DIỄN ĐÀN DOANH NGHIỆP SỐ
                </div>
              </div>

              {/* Center Delegate Profile */}
              <div className="text-center my-auto py-4">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-wider ${currentTier.accent} shadow-sm mb-4 font-mono`}>
                  {currentTier.label}
                </span>

                <div className="w-20 h-20 mx-auto rounded-full bg-[var(--bg-surface-subtle)] border-2 border-[var(--border-medium)] flex items-center justify-center font-black text-2xl text-[var(--text-main)] shadow-sm mb-3 font-mono">
                  {delegateName.split(" ").map(w => w[0]).slice(0, 2).join("") || "VIP"}
                </div>

                <h4 className="text-base font-black text-[var(--text-main)] tracking-tight leading-snug">
                  {delegateName || "TÊN ĐẠI BIỂU"}
                </h4>
                <div className="text-xs text-[var(--brand-gold)] font-bold mt-1">
                  {delegateTitle || "Chức vụ"}
                </div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5 line-clamp-1">
                  {delegateCompany || "Đơn vị công tác"}
                </div>
              </div>

              {/* Bottom: QR Code Check-In */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div className="text-left font-mono">
                  <div className="text-[9px] text-[var(--text-muted)]">MÃ CHECK-IN TỰ ĐỘNG</div>
                  <div className="text-xs font-bold text-[var(--text-main)] tracking-wider">{currentTier.code}</div>
                  <div className="text-[9px] text-[#16A34A] flex items-center gap-1 mt-0.5 font-bold">
                    <CheckCircle2 className="w-3 h-3" /> ĐÃ XÁC THỰC
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-black text-white shadow-sm">
                  <QrCode className="w-8 h-8" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
