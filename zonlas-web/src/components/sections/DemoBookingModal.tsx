"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, ArrowUpRight, Lock } from "lucide-react";

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

export function DemoBookingModal({ isOpen, onClose, preselectedPlan }: DemoBookingModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("agm");
  const [attendees, setAttendees] = useState("500-1000");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-hidden text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Đăng Ký Thành Công!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mb-6 leading-relaxed">
              Cảm ơn Quý khách. Đội ngũ Kỹ sư Giải pháp Zonlas sẽ liên hệ qua số điện thoại và email của Quý khách trong vòng 30 phút để thiết lập phiên tổng duyệt kỹ thuật 1:1.
            </p>
            <button 
              onClick={handleReset} 
              className="w-full py-3.5 rounded-full bg-[#070A10] text-white text-sm font-bold hover:bg-black cursor-pointer"
            >
              Hoàn tất
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C41230]" />
                ZONLAS EXECUTIVE CONCIERGE
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Đặt Lịch Tổng Duyệt Kỹ Thuật 1:1
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Trực tiếp trải nghiệm phòng họp chuẩn 4K, kiểm tra luồng âm thanh Dual-Layer và nhận bản demo kịch bản riêng cho sự kiện của doanh nghiệp.
              </p>
              {preselectedPlan && (
                <div className="mt-3 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                  <span>Gói quan tâm: <strong className="text-slate-900">{preselectedPlan}</strong></span>
                  <span className="text-[#C41230] font-mono font-bold text-[10px]">Ưu tiên tư vấn</span>
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Họ &amp; Tên Người Điều Hành *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C41230] text-slate-900 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Số Điện Thoại Trực Tiếp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0912 345 678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C41230] text-slate-900 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Công Tác *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ceo@doanhnghiep.vn"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C41230] text-slate-900 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tên Doanh Nghiệp / Tổ Chức *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Tập đoàn ABC"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C41230] text-slate-900 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Loại Hình Sự Kiện Dự Kiến</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C41230] text-slate-900 bg-slate-50/50"
                  >
                    <option value="agm">Đại hội Cổ đông (AGM)</option>
                    <option value="summit">Hội nghị B2B / Summit</option>
                    <option value="gala">Lễ Trao Giải &amp; Gala</option>
                    <option value="masterclass">Masterclass &amp; Đào tạo C-Suite</option>
                    <option value="other">Cuộc họp HĐQT nội bộ</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Quy Mô Đại Biểu</label>
                  <select
                    value={attendees}
                    onChange={(e) => setAttendees(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C41230] text-slate-900 bg-slate-50/50"
                  >
                    <option value="100-500">100 - 500 người</option>
                    <option value="500-1000">500 - 1.000 người</option>
                    <option value="1000-3000">1.000 - 3.000 người</option>
                    <option value="3000+">Trên 3.000 người (Sovereign)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Yêu Cầu Kỹ Thuật Đặc Thù (Tùy chọn)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ví dụ: Cần biểu quyết trực tiếp, kịch bản âm thanh đón tiếp, whitelabel tên miền riêng..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C41230] text-slate-900 bg-slate-50/50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-full bg-[#070A10] hover:bg-black text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 mt-2"
              >
                <span>{isSubmitting ? "Đang gửi yêu cầu..." : "Xác Nhận Đặt Lịch Tổng Duyệt"}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C41230]" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cam kết bảo mật thông tin &amp; ký thỏa thuận NDA trước phiên làm việc</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
