"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Tv, 
  GraduationCap, 
  Users2, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  ArrowRight 
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function TargetAudienceProof() {
  const audiences = [
    {
      icon: Tv,
      title: "Event Agencies & Production Houses",
      desc: "Điều phối kịch bản chính xác từng giây với bàn đạo diễn đa bố cục, soundboard nhạc lễ và luồng phát sóng độc lập.",
      badge: "ĐIỀU PHỐI KỊCH BẢN",
      metric: "0.05s Chuyển cảnh",
    },
    {
      icon: Building2,
      title: "Doanh Nghiệp & Tập Đoàn B2B",
      desc: "Tổ chức Đại hội Cổ đông (AGM), Ra mắt sản phẩm và Town Hall nội bộ với bảo mật mã hóa và nhận diện thương hiệu tuyệt đối.",
      badge: "CHUẨN B2B & AGM",
      metric: "E2E Biểu quyết",
    },
    {
      icon: GraduationCap,
      title: "Tổ Chức Giáo Dục & Master Trainers",
      desc: "Tổ chức hội thảo học thuật, workshop đào tạo C-Level và seminar chuyên sâu với AI ghi chép và trích xuất tài liệu tức thì.",
      badge: "ĐÀO TẠO & HỘI THẢO",
      metric: "AI Tóm tắt tức thì",
    },
    {
      icon: Users2,
      title: "Hiệp Hội & Cộng Đồng Chuyên Môn",
      desc: "Kết nối mạng lưới B2B với gian hàng thực tế ảo 2.5D cho nhà tài trợ và tính năng ghép nối Speed-Networking 1:1.",
      badge: "TRIỂN LÃM & KẾT NỐI",
      metric: "+340% Lead tài trợ",
    },
  ];

  return (
    <section id="audiences" className="scroll-mt-28 py-20 sm:py-28 border-b border-slate-200/80 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-slate-100 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C41230] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] animate-pulse" />
              <span>SYS_AUDIENCE // MỤC TIÊU TRIỂN KHAI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              May đo chuẩn xác cho từng nhóm đơn vị tổ chức
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
              Zonlas không sử dụng chung một giao diện sơ sài. Từng module được thiết kế để giải quyết đúng bài toán kỹ thuật và kỳ vọng của từng đối tượng.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Bảo mật TLS 1.3</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>Hạ tầng Cloud tại Việt Nam</span>
            </span>
          </div>
        </div>

        {/* 4 Audience Cards with Spotlight Hover Effect & Stagger Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="p-6 flex flex-col justify-between h-full group cursor-default">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-[#C41230] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                        {aud.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-950 mb-2 leading-snug group-hover:text-[#C41230] transition-colors">
                      {aud.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {aud.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono mt-auto">
                    <span className="text-emerald-700 font-bold">{aud.metric}</span>
                    <span className="text-[#C41230] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Xem kịch bản</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Quote / Experience Statement with Technical Framing */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-left bracket-corner">
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
            <strong className="text-slate-950 font-bold">Cam kết độ ổn định:</strong>{" "}
            “Mọi sự kiện trên Zonlas đều được kiểm tra trước luồng truyền tải, giữ nguyên hiệu ứng chuyển động của slide thuyết trình, âm thanh nhạc nền được hạ âm tự động và đại biểu tham gia 1-chạm không cần cài đặt.”
          </div>
          <div className="text-left sm:text-right flex-shrink-0">
            <div className="text-xs font-bold text-slate-950">Quy Chuẩn Vận Hành Zonlas</div>
            <div className="text-[11px] text-[#C41230] font-mono font-bold">Bảo chứng kỹ thuật cho sự kiện B2B</div>
          </div>
        </div>

      </div>
    </section>
  );
}
