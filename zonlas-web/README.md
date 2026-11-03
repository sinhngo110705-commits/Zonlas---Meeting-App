# Zonlas — Nền Tảng Cuộc Họp & Sự Kiện Số Chuyên Nghiệp

> **Thông điệp cốt lõi:** *"Thay đổi trải nghiệm tham dự sự kiện của bạn"*  
> Hạ tầng sự kiện số thế hệ mới cho doanh nghiệp B2B với khả năng điều phối trực tiếp, công nghệ âm thanh BGM kép không chồng lấn voice, trình chiếu slide native 4K và gian hàng thực tế ảo 3D.

---

## 🎨 Hệ Thống Design Tokens (Brand Tokens)

Dự án tuân thủ nghiêm ngặt bảng mã màu và quy chuẩn thiết kế trong **Build Plan** (`Design System/zonlas-build-plan.html`):

| Token Name | Hex Code / Giá trị | Vai trò |
| :--- | :--- | :--- |
| **Primary Red** | `#C41230` | Màu đỏ nhận diện thương hiệu chủ đạo, điểm nhấn nút bấm |
| **Red Dark** | `#8B0D21` | Chiều sâu gradient, viền đổ bóng |
| **Red Light** | `#FF2D4E` | Trạng thái Live, hover highlight, glow phát sáng |
| **Red Glow** | `rgba(196,18,48,0.3)` | Hiệu ứng phát quang đỏ thương hiệu |
| **Gold** | `#C9A84C` | Màu vàng kim sang trọng cho gói Enterprise & VIP |
| **Gold Light** | `#F0C84A` | Điểm nhấn chữ nghệ thuật, huy hiệu cao cấp |
| **BG Base** | `#06060A` | Nền đen obsidian chiều sâu vũ trụ số |
| **Surface 1** | `#0D0D14` | Thẻ nội dung, thanh điều khiển kính mờ (Glassmorphism) |
| **Surface 2** | `#13131F` | Bảng điều khiển kỹ thuật |
| **Surface 3** | `#1A1A2E` | Lớp nổi tương tác |
| **Text Primary** | `#F0F0F0` | Văn bản chính dễ đọc trên nền tối |
| **Text Muted** | `#8888A0` | Văn bản phụ, chú thích kỹ thuật |

---

## 🚀 Công Nghệ Sử Dụng (Tech Stack)

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Ngôn ngữ:** TypeScript (Strict mode 100%)
- **Styling:** Tailwind CSS v4 (Design tokens qua `@theme`, Glassmorphism, Glow animations)
- **3D & Visual:** Three.js (Interactive WebGL Stage Sphere & Orbital Rings)
- **Icons & UI:** Lucide React, Framer Motion
- **State:** Zustand / React State

---

## 🌟 Các Tính Năng Đã Triển Khai (Phase 00 & Phase 01)

1. **Hero Section với 3D Stage Visualizer:**
   - Trực quan hóa sân khấu số bằng công nghệ WebGL Three.js tương tác theo con trỏ chuột.
   - Hiệu ứng ánh sáng nền đa tầng (Red Bloom & Gold Ambient).
   - Ticker thông số kỹ thuật (Uptime 99.99%, Độ trễ < 50ms, Sức chứa 10.000+).
2. **Interactive Live Stage Studio (Playground điều phối):**
   - **4 Bố cục sân khấu chuyển đổi thời gian thực:**
     - *Thuyết trình Keynote* (Native 4K Slide Engine)
     - *Đối thoại 1:1* (Phỏng vấn lãnh đạo)
     - *Tọa đàm Panel* (4 diễn giả + người điều phối)
     - *Networking Lounge* (Phòng kết nối đối tác mở)
   - **Bộ chuyển đổi Theme nền thương hiệu:** Cyber Tech, Gala Gold, Zonlas Red, Obsidian Studio.
   - **Mô phỏng Dual-Layer BGM:** Điều chỉnh âm lượng nhạc nền tự động né giọng diễn giả (Auto Voice Ducking).
   - **Tương tác thời gian thực:** Thả biểu cảm bay (Reactions) và gửi câu hỏi Q&A trực tiếp.
3. **Bộ Trụ Cột Tính Năng Toàn Diện (4 Pillars):**
   - *Logistics & Kỹ thuật:* Slide trực tiếp 4K không lag, BGM kép, Cổng đăng ký & bán vé VNPay/Stripe.
   - *Branding & Cá nhân hóa:* Bố cục động, Background & Frame tuỳ biến, Virtual 3D Sponsor Booth.
   - *In-Event Experience:* Backstage Room chuẩn truyền hình, Q&A Upvote, Breakout rooms.
   - *AI & Gamification:* Whisper auto recap, Dịch thuật phụ đề live đa ngôn ngữ, Mini quiz & Spin wheel.
4. **So Sánh Kiến Trúc Âm Thanh Trực Quan:**
   - Visualizer dạng sóng so sánh kênh âm thanh tách lớp của Zonlas và lỗi đè âm thanh của Zoom/Teams thông thường.
5. **Khu Vực Triển Lãm Virtual 3D Sponsor Booth:**
   - Gian hàng thực tế ảo của nhà tài trợ với báo cáo lượt ghé thăm và leads chuyển đổi trực tiếp.
6. **Bảng Giá & Gói Dịch Vụ Doanh Nghiệp (Pricing):**
   - Chuyển đổi chu kỳ thanh toán Tháng / Năm (Tiết kiệm 20%).
   - Các gói: *Starter*, *Pro Enterprise* (Khuyên dùng), và *Custom Sovereign*.
7. **Modal Đăng Ký Trải Nghiệm Demo Doanh Nghiệp:**
   - Thu thập thông tin doanh nghiệp, quy mô đại biểu và tự động phân loại nhu cầu tư vấn.

---

## 🛠️ Hướng Dẫn Chạy Dự Án

### 1. Cài đặt phụ thuộc:
```bash
npm install
```

### 2. Khởi chạy máy chủ phát triển (Development):
```bash
npm run dev
```
Mở trình duyệt tại [http://localhost:3000](http://localhost:3000).

### 3. Kiểm tra biên dịch sản phẩm (Production Build):
```bash
npm run build
```
Lệnh build đã được kiểm tra đạt chuẩn TypeScript và xuất bản các trang tĩnh siêu tốc.

### 4. Khởi chạy bản Production:
```bash
npm run start
```
