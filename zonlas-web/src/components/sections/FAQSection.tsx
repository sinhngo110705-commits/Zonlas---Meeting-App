"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Đại biểu tham dự có cần tải ứng dụng hay đăng ký tài khoản không?",
      a: "Hoàn toàn không. 100% nền tảng Zonlas vận hành trên nền tảng WebRTC hiện đại, tương thích hoàn hảo với Chrome, Safari, Edge và Firefox trên cả máy tính, máy tính bảng và điện thoại. Đại biểu chỉ cần nhấp vào liên kết bảo mật hoặc quét mã QR là có thể tham dự ngay trong 3 giây mà không gặp bất kỳ rào cản kỹ thuật nào.",
    },
    {
      q: "Tính năng trình chiếu Cloud Deck 4K khác gì với chia sẻ màn hình (Screenshare) thông thường?",
      a: "Chia sẻ màn hình truyền thống là chụp lại màn hình máy tính rồi nén thành video gửi qua mạng; khi mạng người nói chập chờn, chữ và số liệu sẽ bị mờ nhòe, vỡ hạt. Ngược lại, Zonlas tải trực tiếp file PPTX/PDF lên đám mây, chỉ truyền lệnh đồng bộ vài byte và để thiết bị của từng đại biểu tự kết xuất vector 4K 60fps. Kết quả là văn bản và biểu đồ luôn sắc nét 100% như in trên giấy, lật trang 0 giây và tiết kiệm 85% băng thông.",
    },
    {
      q: "Kiến trúc âm thanh Dual-Layer giải quyết lỗi nhạc nền đè tiếng như thế nào?",
      a: "Các phần mềm họp thông thường gộp tiếng micro và nhạc nền vào một luồng chung, sau đó áp dụng bộ lọc triệt tiếng ồn (Noise Gate) khiến tiếng nhạc bị rè cụt hoặc đè bẹp tiếng MC. Zonlas tách biệt hoàn toàn 2 kênh vật lý: Kênh tiếng nói diễn giả (48kHz) và Kênh nhạc lễ (Stereo 320kbps). Tính năng Auto Voice-Ducking tự động hạ 18dB nhạc nền ngay khi diễn giả cất giọng, mang lại trải nghiệm như một chương trình truyền hình trực tiếp.",
    },
    {
      q: "Gian hàng ảo 2.5D của nhà tài trợ hoạt động ra sao trong sự kiện?",
      a: "Trong giờ giải lao hoặc xuyên suốt sự kiện, đại biểu có thể chuyển sang khu vực Triển lãm (Sponsor Expo) để ghé thăm các gian hàng ảo 2.5D. Tại đây, khách có thể xem video giới thiệu sản phẩm của đối tác, tải brochure số (PDF), nhắn tin trực tiếp hoặc bấm nút đặt lịch tư vấn 1:1 với đại diện nhãn hàng.",
    },
    {
      q: "Tính năng tương tác (Live Polls, Lucky Draw) có cần mở thêm tab ngoài như Slido hay Kahoot không?",
      a: "Hoàn toàn không. Mọi hoạt động khảo sát, bình chọn ý kiến và quay số trúng thưởng may mắn của Zonlas được nhúng trực tiếp ngay trên màn hình sự kiện (In-Frame Engagement). Người tham dự không cần quét mã QR hay chuyển sang tab trình duyệt khác, giúp giữ chân đại biểu và không làm phân tán sự tập trung.",
    },
    {
      q: "Quy trình hỗ trợ kỹ thuật và tổng duyệt sự kiện diễn ra như thế nào?",
      a: "Với các sự kiện chuyên nghiệp và doanh nghiệp, Zonlas cử đội ngũ kỹ sư đồng hành cùng ban tổ chức tối thiểu 1–2 buổi tổng duyệt trước giờ G. Kỹ sư sẽ kiểm tra chất lượng đường truyền của từng diễn giả chính, nạp sẵn kịch bản chuyển cảnh, thử nghiệm luồng biểu quyết và túc trực điều phối kỹ thuật tại hiện trường / trực tuyến trong suốt thời gian diễn ra sự kiện.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] animate-pulse" />
            SYS_FAQ // HỎI ĐÁP QUẢN TRỊ &amp; KỸ THUẬT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Giải đáp cho ban tổ chức &amp; diễn giả
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Những câu hỏi then chốt về trải nghiệm, độ ổn định đường truyền và phương thức vận hành nền tảng Zonlas.
          </p>
        </div>

        {/* Accordion List with Smooth Height Animation */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-slate-300 bg-slate-50/70 shadow-xs" 
                    : "border-slate-200/90 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left font-bold text-base sm:text-lg text-slate-950 transition-colors cursor-pointer gap-4"
                >
                  <span className={isOpen ? "text-slate-950 font-black" : "text-slate-800"}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#070A10] text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
