# Softnix Logger CYBOT — Landing Page

Landing page สองภาษา (ไทย/อังกฤษ) สำหรับผลิตภัณฑ์ **Softnix Logger CYBOT** —
On-Premise Agentic AI Appliance สำหรับงาน IT & Cyber Security

## การใช้งาน

เปิด `index.html` ด้วยเว็บเซิร์ฟเวอร์ใดก็ได้ (ไฟล์ทั้งหมดเป็น static ไม่ต้อง build):

```bash
python3 -m http.server 8080
# เปิด http://localhost:8080
```

## การสลับภาษา

- ปุ่ม **TH / EN** บนแถบนำทาง (จำค่าไว้ใน `localStorage`)
- ตรวจภาษาเบราว์เซอร์อัตโนมัติ (ค่าเริ่มต้น: ไทยถ้า browser เป็นภาษาไทย)
- บังคับภาษาผ่าน URL: `index.html?lang=th` หรือ `index.html?lang=en`

## โครงสร้างไฟล์

```
index.html                  # โครงหน้าเว็บทั้งหมด (single page)
assets/
  css/styles.css            # ธีม dark cyber-tech (ตาม datasheet & หน้าจอผลิตภัณฑ์)
  js/main.js                # พจนานุกรม i18n TH/EN + interactions
  img/                      # โลโก้ (ตัดพื้นขาวแล้ว), มาสคอต, screenshots, favicon
  docs/                     # Datasheet PDF (TH/EN) สำหรับปุ่มดาวน์โหลด
```

## เนื้อหาอ้างอิง

- เนื้อหาและสเปคทั้งหมดสรุปจาก `Softnix_Logger_CYBOT_Datasheet.pdf` (TH) และ
  `Softnix_Logger_CYBOT_Datasheet_EN.pdf` (EN)
- ภาพหน้าจอผลิตภัณฑ์จากโฟลเดอร์ `Screenshot/` (ปรับขนาด ≤1920px, JPEG)
- โลโก้/มาสคอตจากโฟลเดอร์ `CYBOT_logo_mascot/` (ตัดพื้นหลังขาวออกเป็น PNG โปร่งใส)

## ฟีเจอร์ของหน้าเว็บ

- สลับภาษาไทย/อังกฤษได้ทั้งเว็บ (183 จุด) พร้อมฟอนต์ IBM Plex Sans Thai / Space Grotesk
- Hero พร้อมสถิติเด่น (7,000+ EPS, Unlimited, 100% On-Premise, 7 มาตรฐาน) และ count-up animation
- ภาพหน้าจอผลิตภัณฑ์ 12 ภาพในกรอบ browser mockup คลิกขยายได้ (lightbox พร้อมปุ่มเลื่อน/คีย์บอร์ด)
- ครบทุก section: Overview, Agentic AI, Security, Inventory & Monitoring, Log Management,
  Compliance, Deployment, Specifications, Contact CTA
- ปุ่ม "ชม Demo" เปิดวิดีโอใน Video Modal ภายในเว็บ (YouTube embed, backdrop ดำโปร่งแสง,
  16:9, มุมโค้ง, fade + scale-in, ปิดด้วย backdrop click หรือ ESC, autoplay เมื่อเปิด)
- ปุ่มดาวน์โหลด Datasheet ตามภาษาที่เลือก และปุ่มขอ Demo (mailto: sales@softnix.co.th)
- Responsive ทุกขนาดจอ + เมนู hamburger บนมือถือ, scroll-spy, scroll reveal,
  รองรับ `prefers-reduced-motion`
