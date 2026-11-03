import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#0B5CFF",
};

export const metadata: Metadata = {
  title: "Zonlas — Nền Tảng Cuộc Họp & Sự Kiện Số Doanh Nghiệp",
  description:
    "Nền tảng họp trực tuyến và tổ chức sự kiện số chuyên nghiệp dành cho doanh nghiệp. Độ trễ siêu thấp, trình chiếu slide vector 4K không độ trễ, và công nghệ âm thanh kép độc quyền.",
  keywords: [
    "Zonlas",
    "Zoom alternative",
    "cuộc họp trực tuyến",
    "hội nghị trực tuyến",
    "sự kiện số",
    "virtual event platform",
    "meeting app",
    "WebRTC",
  ],
  authors: [{ name: "Zonlas Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
