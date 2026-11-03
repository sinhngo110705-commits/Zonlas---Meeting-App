"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, CheckCircle2 } from "lucide-react";

export function ComparisonTable() {
  const criteria = [
    {
      feature: "Phương thức trình chiếu tài liệu thuyết trình",
      zoom: "Chia sẻ màn hình (Screenshare) nén video 720p/1080p, chữ nhỏ dễ mờ vỡ hạt khi mạng yếu.",
      hopin: "Screenshare hoặc nhúng video player, vẫn có độ trễ kết xuất.",
      zonlas: "Cloud Deck Engine: Nạp PPTX/PDF trực tiếp từ Cloud, kết xuất vector 4K 60fps, lật trang 0s không vỡ nét.",
      highlight: true,
    },
    {
      feature: "Xử lý âm thanh nhạc nền (BGM) & Nghi thức lễ",
      zoom: "Gộp chung vào micro; bộ khử ồn (Noise Gate) làm nghẹt tiếng nhạc hoặc nhạc lấn át tiếng MC.",
      hopin: "Hỗ trợ phát nhạc nhưng cần cài phần mềm âm thanh ảo ngoài (Virtual Cable / OBS).",
      zonlas: "Dual-Layer Audio: 2 luồng vật lý độc lập, Auto Voice-Ducking tự hạ 18dB BGM khi diễn giả cất giọng.",
      highlight: true,
    },
    {
      feature: "Điều phối bố cục sân khấu & Chuyển cảnh",
      zoom: "Cố định dạng lưới (Gallery) hoặc Spotlight đơn lẻ, không có kịch bản chuyển cảnh linh hoạt.",
      hopin: "Có Studio chuyển cảnh nhưng cấu hình phức tạp, đòi hỏi nhân sự kỹ thuật cao.",
      zonlas: "Bàn đạo diễn 4 chế độ: Keynote 4K, Đối thoại 1:1, Panel talk 4 khách mời và Virtual Expo.",
      highlight: false,
    },
    {
      feature: "Không gian thương hiệu & Quyền lợi Nhà tài trợ",
      zoom: "Chỉ hiển thị logo tĩnh nhỏ ở góc màn hình, khó đo lường tương tác và chuyển đổi lead.",
      hopin: "Có gian hàng Expo nhưng giao diện dạng thẻ phẳng, rào cản thao tác lớn.",
      zonlas: "Virtual 2.5D Sponsor Booth: Gian hàng tương tác 3D, tải brochure PDF, xem video và hẹn lịch 1:1.",
      highlight: true,
    },
    {
      feature: "Hoạt động tương tác (Polls, Minigame, Lucky Draw)",
      zoom: "Polls cơ bản; nếu muốn chơi minigame/vòng quay phải mở tab ngoài (Kahoot, Wheelofnames).",
      hopin: "Tích hợp polls và chat nhưng thiếu minigame & vòng quay may mắn nhúng trực tiếp.",
      zonlas: "Nhúng trực tiếp In-Frame: Khảo sát, Bình chọn và Quay số may mắn ngay trên màn hình sự kiện.",
      highlight: true,
    },
    {
      feature: "Hỗ trợ ngôn ngữ & AI thời gian thực",
      zoom: "Phụ đề tự động (chủ yếu tiếng Anh, tiếng Việt dịch chậm và chưa chuẩn ngữ cảnh B2B).",
      hopin: "Tích hợp AI tóm tắt sau sự kiện, phụ đề thời gian thực hạn chế.",
      zonlas: "AI Phụ đề song ngữ Anh - Việt trực tiếp; AI tự động gom cụm câu hỏi Q&A và xuất Smart Recap.",
      highlight: true,
    },
    {
      feature: "Rào cản truy cập & Hỗ trợ kỹ thuật tại Việt Nam",
      zoom: "Phải tải phần mềm; hỗ trợ qua hệ thống gửi vé (ticket) nước ngoài phản hồi chậm.",
      hopin: "Chi phí bản quyền quốc tế đắt đỏ (từ $3.000+/năm), không có hỗ trợ tiếng Việt tại hiện trường.",
      zonlas: "100% WebRTC trên trình duyệt web; kỹ sư Zonlas trực tiếp đồng hành tổng duyệt và hỗ trợ tại Việt Nam.",
      highlight: true,
    },
  ];

  return (
    <section id="comparison" className="scroll-mt-28 py-20 sm:py-32 bg-[#FAFBFD] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Tight Layout */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] animate-pulse" />
            SYS_AUDIT // ĐỐI CHIẾU TIÊU CHUẨN KỸ THUẬT
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-[-0.035em] leading-tight mb-4">
            Khác biệt thực sự giữa Zonlas <br className="hidden sm:inline" />
            và các nền tảng khác
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Bản so sánh đối chiếu khách quan giữa ứng dụng họp trực tuyến phổ thông, nền tảng sự kiện quốc tế và giải pháp tích hợp Zonlas.
          </p>
        </div>

        {/* Table Container with Hover Shading & Framing */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="clean-card shadow-xl overflow-hidden border border-slate-200/90 bracket-corner"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[840px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono">
                  <th className="py-4 px-6 font-bold uppercase text-slate-500 w-1/4">Tiêu chí nhiệm vụ</th>
                  <th className="py-4 px-6 font-bold uppercase text-slate-600 w-1/4 bg-slate-50/70">
                    Ứng dụng họp thông thường (Zoom / Teams)
                  </th>
                  <th className="py-4 px-6 font-bold uppercase text-slate-600 w-1/4 bg-slate-50/70 border-l border-slate-200">
                    Nền tảng sự kiện quốc tế (RingCentral / Hopin)
                  </th>
                  <th className="py-4 px-6 font-bold uppercase text-white w-1/4 bg-[#070A10] border-t-2 border-[#C41230]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C41230]" />
                      <span>Hạ Tầng Sự Kiện Số Zonlas</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {criteria.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-5 px-6 font-bold text-slate-900 align-top">
                      {row.feature}
                    </td>
                    
                    {/* Zoom / Teams */}
                    <td className="py-5 px-6 text-slate-600 align-top bg-slate-50/30">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                          ✕
                        </div>
                        <span className="leading-relaxed">{row.zoom}</span>
                      </div>
                    </td>

                    {/* Hopin */}
                    <td className="py-5 px-6 text-slate-600 align-top bg-slate-50/30 border-l border-slate-100">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                          △
                        </div>
                        <span className="leading-relaxed">{row.hopin}</span>
                      </div>
                    </td>

                    {/* Zonlas */}
                    <td className="py-5 px-6 align-top bg-white text-slate-950 font-medium border-l border-slate-200">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 font-bold stroke-[3]" />
                        </div>
                        <span className="leading-relaxed font-semibold text-slate-950">{row.zonlas}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-6 text-center text-xs text-slate-500 font-mono">
          * Thông tin đối chiếu dựa trên tài liệu kỹ thuật công bố chính thức và phân tích đối chuẩn thực tế người dùng.
        </div>

      </div>
    </section>
  );
}
