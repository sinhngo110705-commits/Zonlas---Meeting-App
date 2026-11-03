"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles, ShieldCheck, Headphones, FileCheck } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      id: "starter",
      name: "Zonlas Starter",
      badge: "ĐÀO TẠO & WORKSHOP",
      tagline: "Phù hợp cho giảng viên, Master Trainers và các hội thảo chuyên đề quy mô vừa.",
      priceMonthly: 1490000,
      priceYearly: 1190000,
      popular: false,
      limits: {
        attendees: "Tối đa 300 đại biểu",
        duration: "Không giới hạn thời lượng",
        speakers: "4 Diễn giả đồng thời",
        sla: "Hỗ trợ kỹ thuật trực tuyến",
      },
      features: [
        "Chất lượng phát sóng Full HD 1080p 60fps",
        "Trình chiếu tài liệu Cloud Deck Native Vector 4K",
        "2 Bố cục sân khấu tiêu chuẩn (Keynote & Đối thoại 1:1)",
        "Khảo sát In-Frame Poll trực tiếp không cần mở tab",
        "AI Transcript ghi chép và tóm tắt biên bản họp",
        "100% WebRTC trên trình duyệt (Không cần cài app)",
      ],
      cta: "Chọn Gói Starter",
    },
    {
      id: "pro",
      name: "Zonlas Professional",
      badge: "PHỔ BIẾN CHO B2B & AGENCY",
      tagline: "Hạ tầng hoàn chỉnh cho Event Agency, hội nghị khách hàng B2B và sự kiện ra mắt.",
      priceMonthly: 4990000,
      priceYearly: 3990000,
      popular: true,
      limits: {
        attendees: "Tối đa 1.500 đại biểu",
        duration: "Không giới hạn thời lượng",
        speakers: "8 Diễn giả + Phòng chờ Backstage",
        sla: "Cam kết ổn định SLA 99.9%",
      },
      features: [
        "Toàn bộ tính năng trong gói Starter",
        "Trọn bộ 4 bố cục sân khấu chuyển cảnh tức thì 0.05s",
        "Âm thanh Dual-Layer độc quyền (Auto Voice-Ducking -18dB)",
        "Soundboard 500+ bản nhạc nghi lễ nạp sẵn",
        "Minigame quay số may mắn (Lucky Draw) nhúng trong khung hình",
        "AI Live Subtitles phụ đề song ngữ Anh - Việt trực tiếp",
        "2 Gian hàng ảo 2.5D Virtual Sponsor Booth cho đối tác",
        "Hỗ trợ kỹ thuật ưu tiên 24/7",
      ],
      cta: "Đăng Ký Gói Professional",
    },
    {
      id: "enterprise",
      name: "Zonlas Enterprise & AGM",
      badge: "ĐẠI HỘI CỔ ĐÔNG & TẬP ĐOÀN",
      tagline: "Giải pháp phát sóng số cấp cao cho Đại hội cổ đông, Gala vinh danh và Summit quy mô 5.000+.",
      priceMonthly: 0,
      priceYearly: 0,
      popular: false,
      isCustom: true,
      limits: {
        attendees: "5.000 – 15.000+ Đại biểu",
        duration: "Băng thông riêng biệt Dedicated",
        speakers: "Không giới hạn diễn giả",
        sla: "SLA 99.99% Cam kết hợp đồng pháp lý",
      },
      features: [
        "Toàn bộ tính năng trong gói Professional",
        "Cổng Biểu Quyết bảo mật mã hóa E2E xuất biên bản kiểm phiếu",
        "Không giới hạn gian hàng ảo 2.5D Virtual Sponsor Booth",
        "Whitelabel: Tên miền phụ riêng (event.congty.vn) & logo riêng",
        "Hệ thống phòng chia nhỏ (Breakout Rooms) không giới hạn",
        "Kỹ sư Zonlas trực tiếp đồng hành tổng duyệt và túc trực điều phối",
        "Điều khoản bảo mật NDA và cam kết SLA có phạt vi phạm",
      ],
      cta: "Liên Hệ Tư Vấn Doanh Nghiệp",
    },
  ];

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="pricing" className="scroll-mt-28 py-20 sm:py-32 bg-[#FAFBFD] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] animate-pulse" />
            SYS_PRICING // BẢNG GIÁ MINH BẠCH &amp; LINH HOẠT
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-[-0.035em] mb-4">
            Đầu tư đúng tầm vóc, không rủi ro
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Linh hoạt thanh toán theo từng sự kiện hoặc thuê bao thường niên. Tiết kiệm 20% khi thanh toán hàng năm kèm cam kết hỗ trợ kỹ thuật đồng hành.
          </p>

          {/* Billing Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold transition-colors ${!isYearly ? "text-slate-950 font-bold" : "text-slate-500"}`}>
              Thanh toán tháng
            </span>
            <button
              type="button"
              aria-label="Chuyển đổi chu kỳ thanh toán tháng hoặc năm"
              onClick={() => setIsYearly(!isYearly)}
              className={`w-14 h-7 rounded-full p-1 transition-colors duration-200 relative cursor-pointer ${
                isYearly ? "bg-[#070A10]" : "bg-slate-300"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                  isYearly ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-2 transition-colors ${isYearly ? "text-slate-950 font-bold" : "text-slate-500"}`}>
              <span>Thanh toán năm</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                Tiết kiệm 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid with SpotlightCard & Stagger Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((p, idx) => {
            const price = isYearly ? p.priceYearly : p.priceMonthly;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex"
              >
                <SpotlightCard
                  className={`p-7 sm:p-9 flex flex-col justify-between w-full text-left relative ${
                    p.popular
                      ? "border-2 border-[#C41230] shadow-xl bg-white"
                      : "border border-slate-200/90 shadow-sm bg-white"
                  }`}
                  spotlightColor={p.popular ? "rgba(196, 18, 48, 0.12)" : "rgba(15, 23, 42, 0.05)"}
                >
                  <div>
                    {/* Floating Badge */}
                    <div className="mb-4">
                      {p.popular ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C41230] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>{p.badge}</span>
                        </div>
                      ) : (
                        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-bold uppercase tracking-wider">
                          {p.badge}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight text-slate-950">
                      {p.name}
                    </h3>

                    <p className="text-xs min-h-[36px] mb-6 leading-relaxed text-slate-600">
                      {p.tagline}
                    </p>

                    {/* Price Block */}
                    <div className="mb-6 pb-6 border-b border-slate-100">
                      {p.isCustom ? (
                        <div>
                          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">Liên hệ tư vấn</span>
                          <p className="text-xs font-semibold mt-1 text-[#C41230]">
                            May đo theo quy mô &amp; hạ tầng riêng
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-950">
                            {formatPrice(price)}
                          </span>
                          <span className="text-xs font-medium text-slate-500">
                            / tháng
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Capacity Limits & SLA */}
                    <div className="space-y-2 mb-6 p-4 rounded-xl text-xs font-mono bg-slate-50 border border-slate-100">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Quy mô đại biểu:</span>
                        <strong className="font-bold text-slate-900">{p.limits.attendees}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Diễn giả chính:</span>
                        <strong className="font-bold text-slate-900">{p.limits.speakers}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Cam kết chất lượng:</span>
                        <strong className="font-bold text-emerald-700">{p.limits.sla}</strong>
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <div className="space-y-3 mb-8">
                      <div className="text-[10px] font-bold uppercase tracking-wider font-mono text-slate-500">
                        TÍNH NĂNG BAO GỒM:
                      </div>
                      {p.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600 font-bold" />
                          <span className="leading-relaxed text-slate-700">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectPlan(p.name)}
                    className={`w-full py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer group ${
                      p.popular
                        ? "btn-crimson"
                        : "btn-dark"
                    }`}
                  >
                    <span>{p.cta}</span>
                    <span className="btn-icon-pill">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>

                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Support Guarantee Strip */}
        <div className="mt-14 max-w-4xl mx-auto p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-left bracket-corner">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold flex-shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Tổng Duyệt Kỹ Thuật 1:1 Trước Giờ G</div>
              <div className="text-xs text-slate-500">Đội ngũ kỹ sư Zonlas trực tiếp hỗ trợ kiểm tra đường truyền và nạp kịch bản trình chiếu.</div>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan("Tư Vấn Tổng Duyệt Kỹ Thuật")}
            className="btn-secondary text-xs whitespace-nowrap"
          >
            Yêu Cầu Kỹ Sư Đồng Hành
          </button>
        </div>

      </div>
    </section>
  );
}
