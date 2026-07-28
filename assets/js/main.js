/* ═══════════════════════════════════════════════════════
   Softnix Logger CYBOT — Landing Page
   i18n (TH/EN) + interactions
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────
   1. I18N DICTIONARY
   ───────────────────────────────────────────── */
const I18N = {
  th: {
    'meta.title': 'Softnix Logger CYBOT — ผู้ช่วยอัจฉริยะด้าน IT & Cyber Security แบบ On-Premise AI Appliance',
    'meta.desc': 'Softnix Logger CYBOT ผู้ช่วยอัจฉริยะด้าน IT และความมั่นคงปลอดภัยไซเบอร์แบบ Agentic AI ทำงานภายในองค์กร 100% รวม Log Management มาตรฐาน NTS 4003.1-2560, ตรวจช่องโหว่, เฝ้าระวังเชิงรุก และบริหารทรัพย์สิน IT ในอุปกรณ์เดียว',

    'nav.overview': 'ภาพรวม',
    'nav.ai': 'AI ผู้ช่วย',
    'nav.security': 'ความปลอดภัย',
    'nav.monitoring': 'มอนิเตอร์',
    'nav.logs': 'Log Management',
    'nav.compliance': 'Compliance',
    'nav.specs': 'สเปค',
    'nav.cta': 'ขอ Demo',

    'hero.badge': 'On-Premise AI Appliance',
    'hero.tagline': 'ผู้ช่วยอัจฉริยะด้าน IT และความมั่นคงปลอดภัยไซเบอร์ขององค์กรคุณ',
    'hero.lead': 'ผู้ช่วยอัจฉริยะแบบ Agentic AI ที่ทำงานภายในองค์กร 100% (On-Premise) รวมระบบจัดเก็บ Log ตามมาตรฐาน NTS 4003.1-2560, การตรวจสอบช่องโหว่, การเฝ้าระวังเชิงรุก และการบริหารทรัพย์สิน IT ไว้ในอุปกรณ์เดียว — สนทนาและสั่งงานด้วยภาษาไทย-อังกฤษได้ทันที',
    'hero.cta1': 'ชม Demo',
    'hero.cta2': 'ดาวน์โหลด Datasheet',
    'hero.stat1': 'Events/วินาที (EPS)',
    'hero.stat2num': 'ไม่จำกัด',
    'hero.stat2': 'Device & Volume',
    'hero.stat3': 'On-Premise ข้อมูลไม่ออกนอกองค์กร',
    'hero.stat4num': 'มาตรฐาน',
    'hero.stat4': 'PDPA · ISO 27001 · NIST · PCI-DSS · GDPR',
    'hero.chip1': 'Agentic AI — เข้าใจ วางแผน ลงมือทำ',
    'hero.chip2': 'Human-in-the-Loop',
    'hero.chip3': 'Local AI Server · 100% On-Premise',
    'hero.shotcap': 'CYBOT Console — พร้อมรับคำถามและสั่งงานด้วยภาษาคน “Ask CyBot Anything…”',

    'ov.label': 'Product Overview',
    'ov.title': 'จาก Tool-Based IT สู่ AI-Assisted IT',
    'ov.lead': 'องค์กรในปัจจุบันเผชิญกับ Log และเหตุการณ์ด้านความปลอดภัยจำนวนมหาศาล แต่ทีม IT มีเวลาจำกัด CYBOT ทำหน้าที่เป็นเพื่อนร่วมทีม (AI Buddy) ที่เข้าใจบริบท ให้เหตุผล และลงมือทำงานแทนได้ ภายใต้การกำกับของมนุษย์ (Human-in-the-Loop)',
    'ov.f1t': 'IT Inventory',
    'ov.f1d': 'บันทึกทะเบียนอุปกรณ์และซอฟต์แวร์ พร้อมแจ้งเตือนเมื่อ License หรือ MA ใกล้หมดอายุ',
    'ov.f2t': 'Security',
    'ov.f2d': 'ตรวจสอบความปลอดภัยและ Scan ช่องโหว่ พร้อมแนวทางแก้ไข ทำหน้าที่เป็นที่ปรึกษาระดับมืออาชีพ',
    'ov.f3t': 'Log Compliance',
    'ov.f3d': 'จัดเก็บ Log ตามมาตรฐาน NTS 4003.1-2560 รองรับ พ.ร.บ.คอมพิวเตอร์, PDPA และ ISO 27001',
    'ov.f4t': 'Proactive Monitor',
    'ov.f4d': 'เฝ้าสังเกตระบบ IT แจ้งเตือนทันทีโดยไม่ต้องรอคำสั่ง พร้อมคำอธิบายวิธีแก้ปัญหา',
    'ov.looptitle': 'วงจรการทำงานแบบ Agentic AI',
    'ov.l1t': 'Collect & Observe',
    'ov.l1d': 'เก็บและเฝ้าสังเกตสภาพแวดล้อม IT, Log และภัยคุกคามอย่างต่อเนื่อง',
    'ov.l2t': 'Understand Context',
    'ov.l2d': 'เข้าใจบริบทจาก Log, การมอนิเตอร์, Threat Intelligence และทรัพย์สิน IT',
    'ov.l3t': 'Plan & Reason',
    'ov.l3d': 'วิเคราะห์ วางแผนขั้นตอน และให้เหตุผลประกอบการตัดสินใจ',
    'ov.l4t': 'Take Action',
    'ov.l4d': 'ลงมือดำเนินการตามแผน โดยขออนุมัติจากผู้ดูแลเมื่อจำเป็น',
    'ov.loopnote': 'One Appliance, One Trademark, Zero Integration Overhead — รวม Log Management และ Agentic AI ในอุปกรณ์เดียวภายใต้เครื่องหมายการค้าเดียวกัน ลดความซับซ้อน เข้ากันได้ดีที่สุด',
    'ov.a1t': 'ผู้บริหาร IT / CIO / CTO',
    'ov.a1d': 'เห็นภาพรวมสุขภาพระบบและความเสี่ยงในหน้าเดียว ลดภาระทีม ควบคุมต้นทุนได้',
    'ov.a2t': 'ผู้ดูแลระบบ / SysAdmin',
    'ov.a2d': 'สอบถาม Log และสั่งงานด้วยภาษาไทย ไม่ต้องเขียนคำสั่งซับซ้อน',
    'ov.a3t': 'ทีมความมั่นคงปลอดภัย',
    'ov.a3d': 'ที่ปรึกษาด้านความปลอดภัยในตัว พร้อมรายงาน Compliance ใช้ได้ทันที',
    'ov.a4t': 'IT System Integrator',
    'ov.a4d': 'โซลูชัน All-in-One พร้อมนำเสนอลูกค้า ติดตั้งง่าย ครบมาตรฐานราชการไทย',

    'ai.label': 'Agentic AI Assistant',
    'ai.title': 'สนทนา สั่งงาน และให้เหตุผล ด้วยภาษาธรรมชาติ',
    'ai.lead': 'ผู้ใช้เพียง “ถาม” เป็นภาษาคน CYBOT จะแปลงเป็นการค้นหา วิเคราะห์ วางแผน และดำเนินการให้อัตโนมัติ — ประมวลผลภายในองค์กรทั้งหมด ไม่ส่งข้อมูลออกสู่ Cloud',
    'ai.f1t': 'NL Understanding',
    'ai.f1d': 'เข้าใจคำถามภาษาไทย/อังกฤษ ไม่ต้องใช้คำสั่งเทคนิค',
    'ai.f2t': 'Thinking & Reasoning',
    'ai.f2d': 'วิเคราะห์บริบท วางแผน และให้เหตุผลก่อนตัดสินใจ',
    'ai.f3t': 'NL Log Query',
    'ai.f3d': 'สอบถาม Log ด้วยภาษาคน แสดงผลทันที',
    'ai.f4t': 'Autonomous Task',
    'ai.f4d': 'ทำงานตามแผนอัตโนมัติ ไม่ต้องรอคำสั่งเพิ่ม',
    'ai.cap1': 'ถามว่า “วันนี้มีเหตุการณ์อะไรผิดปกติบ้าง” — CYBOT ตรวจจับ Traffic Anomaly พร้อมกราฟและค่า Z-Score แบบเรียลไทม์',
    'ai.cap2': 'สรุปผลการวิเคราะห์เชิงลึกเป็นภาษาไทย ระบุระดับความเสี่ยง (High Risk) ต้นเหตุ และพฤติกรรมที่ตรวจพบ',

    'sec.label': 'Security Assessment & Threat Detection',
    'sec.title': 'ตรวจช่องโหว่ จับภัยคุกคาม พร้อมที่ปรึกษาในตัว',
    'sec.lead': 'CYBOT ทำงานเสมือนที่ปรึกษาด้านความปลอดภัยไซเบอร์ตลอด 24 ชั่วโมง ตรวจช่องโหว่ต่อเนื่อง จัดลำดับความเสี่ยง และเสนอแนวทางแก้ไขที่นำไปปฏิบัติได้จริง',
    'sec.f1t': 'Vulnerability Scan',
    'sec.f1d': 'ตรวจช่องโหว่อัตโนมัติ ครอบคลุมอุปกรณ์ เซิร์ฟเวอร์ และซอฟต์แวร์',
    'sec.f2t': 'Remediation Guidance',
    'sec.f2d': 'คำแนะนำแก้ไขที่ชัดเจน พร้อมลำดับความสำคัญ',
    'sec.f3t': 'Security Advisory',
    'sec.f3d': 'ที่ปรึกษาความปลอดภัยตามมาตรฐานสากลในตัว',
    'sec.f4t': 'Risk Prioritization',
    'sec.f4d': 'ประเมินและจัดลำดับความเสี่ยงตามผลกระทบ',
    'sec.cap1': 'Threat Detection — จำแนก IDS/IPS, Vertical/Horizontal Scan และ Brute Force พร้อมสถานะ “blocked”',
    'sec.cap2': 'ระบุแหล่งที่มาของภัยคุกคาม (Source Attribution) แยกภายใน/ภายนอกองค์กร พร้อมประเทศและผู้ให้บริการ',
    'sec.cap3': 'Security Scan Workflow อัตโนมัติ — ทำงานเป็นขั้นตอน พร้อมขออนุมัติ (Consent) ก่อนดำเนินการจริง',

    'mon.label': 'IT Inventory & Proactive Monitoring',
    'mon.title': 'บริหารทรัพย์สิน IT และเฝ้าระวังเชิงรุก',
    'mon.invT': 'IT Inventory & Asset',
    'mon.inv1': 'ทะเบียนฮาร์ดแวร์ ซอฟต์แวร์ License และ MA',
    'mon.inv2': 'เพิ่ม/แก้ไข/สอบถามผ่านการคุยกับ AI',
    'mon.inv3': 'นำเข้าข้อมูลจำนวนมากผ่าน CSV / Excel',
    'mon.inv4': 'แจ้งเตือน License & MA ใกล้หมดอายุผ่าน Email / Line',
    'mon.monT': 'Proactive Monitoring & Alert',
    'mon.mon1': 'ติดตาม CPU, RAM, Storage, Services แบบเรียลไทม์',
    'mon.mon2': 'SNMP / ICMP รองรับโปรไฟล์ FortiGate รายอินเทอร์เฟซ',
    'mon.mon3': 'สร้างเงื่อนไขติดตามได้ไม่จำกัด (Tracking Rules)',
    'mon.mon4': 'แจ้งเตือนทันทีผ่าน Email และ Line Application',
    'mon.cap1': 'Monitor Command Surface — กราฟ Bandwidth รายอินเทอร์เฟซ (โปรไฟล์ FortiGate) พร้อมสถานะและ Uptime',
    'mon.cap2': 'Inventory Workspace — ทะเบียน CI พร้อมสถานะ Active / Maintenance / Critical, แท็ก และความสัมพันธ์ของอุปกรณ์',
    'mon.cap3': 'วิเคราะห์สาเหตุปัญหาระบบด้วย AI ควบคู่กับกราฟมอนิเตอร์แบบเรียลไทม์',

    'log.label': 'Log Management & Analytics',
    'log.title': 'จัดเก็บ Log ตามมาตรฐาน NTS 4003.1-2560',
    'log.lead': 'แกนหลักด้านการจัดเก็บ Log ที่ผ่านการรับรองคุณสมบัติตามมาตรฐาน “ระบบเก็บรักษาข้อมูลจราจรทางคอมพิวเตอร์” NTS 4003.1-2560 รองรับปริมาณสูงพร้อมรักษาความถูกต้องของข้อมูลอย่างครบถ้วน',
    'log.f1t': 'Syslog Protocol',
    'log.f1d': 'รับ–ส่ง Log ผ่าน UDP, TCP และเข้ารหัสด้วย TLS เพื่อความปลอดภัย',
    'log.f2t': 'Log Integrity',
    'log.f2d': 'ทำ Hashing ด้วย MD5 และ SHA-256 ตรวจสอบความถูกต้องของ Raw Log',
    'log.f3t': 'Retention Policy',
    'log.f3d': 'กำหนดระยะเวลาจัดเก็บตามกฎหมาย แยกตามประเภท Log และ Channel ได้',
    'log.f4t': 'Built-in Log Parser',
    'log.f4d': 'วิเคราะห์รูปแบบอัตโนมัติ KV, CSV, GROK, JSON ผ่าน Web UI โดยไม่ต้องติดตั้งโปรแกรมเพิ่ม',
    'log.f5t': 'Log Forwarding & SIEM',
    'log.f5d': 'สร้าง Filter ส่งต่อ Log ตามเงื่อนไข ไปยัง Syslog Server หรือ SIEM ผ่าน TCP/UDP',
    'log.f6t': 'Secure Export',
    'log.f6d': 'เข้ารหัสข้อมูล Raw Log ก่อนส่งออก พร้อม Hashing รับรองความถูกต้อง',
    'log.perfT': 'ประสิทธิภาพและลิขสิทธิ์',
    'log.perf1': 'ประมวลผลไม่น้อยกว่า 7,000 EPS โดยไม่สูญหายของข้อมูล',
    'log.perf2': 'ลิขสิทธิ์ไม่จำกัดจำนวนอุปกรณ์ (Unlimited Devices)',
    'log.perf3': 'ลิขสิทธิ์ไม่จำกัดปริมาณข้อมูลต่อวัน (Unlimited Volume)',
    'log.perf4': 'รองรับ Archive Log เพื่อจัดเก็บและเรียกดูย้อนหลัง',
    'log.queryT': 'Query & Analytics',
    'log.query1': 'เงื่อนไขค้นหายืดหยุ่น — ช่วงเวลา, Channel, Host, Keyword, ระบุ Field',
    'log.query2': 'ตัวดำเนินการขั้นสูง =, !=, AND, OR · Wildcard (*, ?) · Regular Expression',
    'log.query3': 'บันทึกและเรียกใช้ Query ซ้ำ พร้อมประวัติการค้นหา',
    'log.query4': 'Dashboard เรียลไทม์ แจ้งเตือนเมื่อไม่มี Log เข้า ส่งออก PDF, CSV, Excel',

    'comp.label': 'Compliance & Governance',
    'comp.title': 'ตรวจสอบเหตุการณ์ให้สอดคล้องตามมาตรฐาน',
    'comp.lead': 'CYBOT ทำ Mapping ข้อมูล Log เข้ากับข้อกำหนดของกฎหมายและมาตรฐานสำคัญ พร้อมเหตุผลความสอดคล้อง (Compliance Rationale) และข้อเสนอแนะในการปรับปรุง',
    'comp.b1': 'พ.ร.บ.ความมั่นคงปลอดภัยไซเบอร์',
    'comp.b2': 'พ.ร.บ.คอมพิวเตอร์',
    'comp.cap1': 'ตัวอย่าง: CYBOT ทำ Mapping ข้อมูล Log เข้ากับมาตราของ PDPA — ระบุหัวข้อการควบคุม แหล่งข้อมูล Log มาตราที่เกี่ยวข้อง และเหตุผลความสอดคล้อง',

    'dep.label': 'Deployment & Appliance',
    'dep.title': 'สถาปัตยกรรม Hardware Appliance · On-Premise 100%',
    'dep.lead': 'ติดตั้งและประมวลผลภายในองค์กรทั้งหมด รวมส่วนบริหารจัดการ Log และส่วนประมวลผล AI ไว้ในอุปกรณ์เดียวภายใต้เครื่องหมายการค้าเดียวกัน',
    'dep.f1t': '100% On-Premise',
    'dep.f1d': 'ติดตั้งและประมวลผลในศูนย์ข้อมูลองค์กรทั้งหมด ไม่พึ่งพา Cloud หรือบริการภายนอก',
    'dep.f2t': 'Local Processing & Storage',
    'dep.f2d': 'Log และข้อมูลทั้งหมดประมวลผลและจัดเก็บภายในเครื่อง ไม่ส่งออกนอกเครือข่ายโดยเด็ดขาด',
    'dep.f3t': 'Data Sovereignty',
    'dep.f3d': 'องค์กรควบคุมข้อมูลของตนได้อย่างสมบูรณ์ ไม่มีความเสี่ยงจากการรั่วไหลผ่าน Cloud',
    'dep.appT': 'Softnix Logger CYBOT Appliance',
    'dep.app1': 'พร้อมใช้งานทันที (Ready On-Premise) · Privacy by Design',
    'dep.app2': 'ฟังก์ชันครบ — Log Monitor, Monitor, Security Monitor, IT Inventory',
    'dep.app3': 'พื้นที่จัดเก็บ Log 1TB – 2TB · Archive 90 วัน',
    'dep.app4': 'ประมวลผล 7,000 Events/วินาที · CYBOT AI Chatbot — AI Buddy สำหรับงาน IT Security',
    'dep.cap1': 'Task Control Room — ตั้งเวลา Scan อัตโนมัติ (Scheduler) ติดตามผลทุก Workflow ครบทุกขั้นตอน',

    'spec.label': 'Specifications',
    'spec.title': 'สรุปคุณสมบัติทางเทคนิค',
    'spec.hItem': 'รายการ',
    'spec.hDetail': 'รายละเอียด',
    'spec.r1k': 'ประเภทผลิตภัณฑ์',
    'spec.r1v': 'Hardware Appliance — On-Premise AI & Log Management (All-in-One)',
    'spec.r2k': 'AI Engine',
    'spec.r2v': 'Agentic AI — Softnix LLM (ประมวลผลภายในองค์กร) รองรับภาษาไทย & อังกฤษ',
    'spec.r3k': 'Log Performance',
    'spec.r3v': 'ไม่น้อยกว่า 7,000 EPS · ไม่จำกัดจำนวน Device · ไม่จำกัดปริมาณข้อมูลต่อวัน',
    'spec.r4k': 'Log Storage / Archive',
    'spec.r4v': '1TB – 2TB · Archive Log 90 วัน (เรียกดูย้อนหลังได้)',
    'spec.r5k': 'มาตรฐานจัดเก็บ Log',
    'spec.r5v': 'NTS 4003.1-2560 (ระบบเก็บรักษาข้อมูลจราจรทางคอมพิวเตอร์)',
    'spec.r6k': 'Log Ingestion',
    'spec.r6v': 'Syslog ผ่าน UDP / TCP / TLS',
    'spec.r7k': 'Log Integrity',
    'spec.r7v': 'Hashing — MD5, SHA-256',
    'spec.r8k': 'Log Parser',
    'spec.r8v': 'Built-in — KV, CSV, GROK, JSON (ตั้งค่าผ่าน Web UI)',
    'spec.r9k': 'Search & Query',
    'spec.r9v': '=, !=, AND, OR · Wildcard (*, ?) · Regular Expression · Saved Query',
    'spec.r10k': 'Security',
    'spec.r10v': 'Vulnerability Scanning · IDS/IPS · Threat Detection · Risk Prioritization',
    'spec.r11k': 'IT Inventory',
    'spec.r11v': 'Device/Software Registry · CSV/Excel Import · License & MA Expiry Alert',
    'spec.r12k': 'Monitoring',
    'spec.r12v': 'Real-time Health · SNMP / ICMP · Unlimited Tracking Rules',
    'spec.r13k': 'Alerting',
    'spec.r13v': 'Email · Line Application',
    'spec.r14k': 'Forwarding / Integration',
    'spec.r14v': 'Syslog Forwarding (TCP/UDP) · SIEM Integration',
    'spec.r15k': 'Report Export',
    'spec.r15v': 'PDF · CSV · Excel',
    'spec.r16k': 'Compliance',
    'spec.r16v': 'PDPA · พ.ร.บ.ไซเบอร์ · ISO 27001 · NTS 4003.1-2560 · NIST · PCI-DSS · GDPR',
    'spec.r17k': 'Deployment',
    'spec.r17v': '100% On-Premise · Softnix LLM · Softnix Private Cloud',

    'cta.title': 'พร้อมให้ CYBOT เป็นผู้ช่วยทีม IT ของคุณแล้วหรือยัง',
    'cta.lead': 'สนใจทดสอบระบบหรือขอใบเสนอราคา ติดต่อ Softnix Technology หรือตัวแทนจำหน่ายที่ได้รับการแต่งตั้ง',
    'cta.btn1': 'ขอ Demo — sales@softnix.co.th',
    'cta.docTH': 'Datasheet (TH)',
    'cta.docEN': 'Datasheet (EN)',
    'footer.copy': '© 2026 Softnix Technology Co., Ltd. สงวนลิขสิทธิ์',
  },

  en: {
    'meta.title': 'Softnix Logger CYBOT — On-Premise AI Appliance for IT & Cyber Security',
    'meta.desc': 'Softnix Logger CYBOT is an Agentic-AI IT & cyber-security assistant that runs 100% on-premise — unifying NTS 4003.1-2560 certified log management, vulnerability assessment, proactive monitoring and IT asset management in a single appliance.',

    'nav.overview': 'Overview',
    'nav.ai': 'AI Assistant',
    'nav.security': 'Security',
    'nav.monitoring': 'Monitoring',
    'nav.logs': 'Log Mgmt',
    'nav.compliance': 'Compliance',
    'nav.specs': 'Specs',
    'nav.cta': 'Request Demo',

    'hero.badge': 'On-Premise AI Appliance',
    'hero.tagline': 'Your Intelligent IT & Cyber Assistant',
    'hero.lead': 'An Agentic-AI assistant that runs entirely inside your organization (100% On-Premise) — unifying standards-certified log management (NTS 4003.1-2560), vulnerability assessment, proactive monitoring and IT asset management in a single appliance. Simply ask in Thai or English to get answers and actions instantly.',
    'hero.cta1': 'Watch Demo',
    'hero.cta2': 'Download Datasheet',
    'hero.stat1': 'Events / sec (EPS)',
    'hero.stat2num': 'Unlimited',
    'hero.stat2': 'Devices & Volume',
    'hero.stat3': 'On-Premise — data never leaves your network',
    'hero.stat4num': 'Standards',
    'hero.stat4': 'PDPA · ISO 27001 · NIST · PCI-DSS · GDPR',
    'hero.chip1': 'Agentic AI — Understands, Plans, Acts',
    'hero.chip2': 'Human-in-the-Loop',
    'hero.chip3': 'Local AI Server · 100% On-Premise',
    'hero.shotcap': 'CYBOT Console — ask questions and issue commands in plain language: “Ask CyBot Anything…”',

    'ov.label': 'Product Overview',
    'ov.title': 'From Tool-Based IT to AI-Assisted IT',
    'ov.lead': 'Organizations face an overwhelming volume of logs and security events, while IT teams remain time-constrained. CYBOT acts as an AI Buddy that understands context, reasons through problems, and takes action on your behalf — always under human oversight (Human-in-the-Loop).',
    'ov.f1t': 'IT Inventory',
    'ov.f1d': 'Register devices and software, with alerts when a License or MA is about to expire.',
    'ov.f2t': 'Security',
    'ov.f2d': 'Assess security posture and scan for vulnerabilities, with remediation guidance — a professional-grade advisor.',
    'ov.f3t': 'Log Compliance',
    'ov.f3d': 'Store logs to the NTS 4003.1-2560 standard, supporting the Computer Act, PDPA and ISO 27001.',
    'ov.f4t': 'Proactive Monitor',
    'ov.f4d': 'Observe the IT environment with instant alerts — no command required — plus clear remediation guidance.',
    'ov.looptitle': 'The Agentic AI Loop',
    'ov.l1t': 'Collect & Observe',
    'ov.l1d': 'Continuously gather and watch the IT environment, logs and threats.',
    'ov.l2t': 'Understand Context',
    'ov.l2d': 'Comprehend context from logs, monitoring, threat intelligence and IT assets.',
    'ov.l3t': 'Plan & Reason',
    'ov.l3d': 'Analyze, plan the steps, and provide reasoning before deciding.',
    'ov.l4t': 'Take Action',
    'ov.l4d': 'Execute the plan autonomously, requesting operator approval when needed.',
    'ov.loopnote': 'One Appliance, One Trademark, Zero Integration Overhead — the hardware unifies log management and Agentic AI under a single product line, reducing complexity with the best possible compatibility.',
    'ov.a1t': 'IT Executives / CIO / CTO',
    'ov.a1d': 'See overall system health and risk on one screen, offload routine work and control cost.',
    'ov.a2t': 'System Administrators',
    'ov.a2d': 'Query logs and issue commands in plain language — no complex syntax required.',
    'ov.a3t': 'Security Teams',
    'ov.a3d': 'A built-in security advisor with ready-to-use compliance reporting.',
    'ov.a4t': 'IT System Integrators',
    'ov.a4d': 'An All-in-One solution ready to present — standards-complete, quick to deploy and hand over.',

    'ai.label': 'Agentic AI Assistant',
    'ai.title': 'Converse, Command & Reason in Natural Language',
    'ai.lead': 'Users simply “ask” in plain language; CYBOT turns it into search, analysis, planning and action automatically — all processed inside the organization, with nothing sent to the Cloud.',
    'ai.f1t': 'NL Understanding',
    'ai.f1d': 'Interprets Thai/English questions with no technical syntax required.',
    'ai.f2t': 'Thinking & Reasoning',
    'ai.f2d': 'Analyzes context, plans steps and reasons before acting.',
    'ai.f3t': 'NL Log Query',
    'ai.f3d': 'Ask about logs in plain language, get instant results.',
    'ai.f4t': 'Autonomous Task',
    'ai.f4d': 'Executes plans automatically without extra prompts.',
    'ai.cap1': 'Asking “what looks unusual today?” — CYBOT detects a traffic anomaly with a real-time chart and Z-Score.',
    'ai.cap2': 'An in-depth analysis summary identifying risk level (High Risk), root cause and the behavior detected.',

    'sec.label': 'Security Assessment & Threat Detection',
    'sec.title': 'Scan Vulnerabilities, Catch Threats — with an Advisor Built In',
    'sec.lead': 'CYBOT works like a cyber-security advisor on duty 24/7 — continuously scanning for vulnerabilities, prioritizing risk, and proposing remediation you can act on immediately.',
    'sec.f1t': 'Vulnerability Scan',
    'sec.f1d': 'Automated scanning across devices, servers and software.',
    'sec.f2t': 'Remediation Guidance',
    'sec.f2d': 'Clear fix guidance with a priority order.',
    'sec.f3t': 'Security Advisory',
    'sec.f3d': 'Built-in advisor aligned to international standards.',
    'sec.f4t': 'Risk Prioritization',
    'sec.f4d': 'Ranks remediation by severity and impact.',
    'sec.cap1': 'Threat Detection — classifies IDS/IPS, Vertical/Horizontal Scan and Brute Force, with a “blocked” status.',
    'sec.cap2': 'Threat source attribution — distinguishes internal vs. external sources with country and provider detail.',
    'sec.cap3': 'Automated Security Scan Workflow — runs step by step and requests consent before taking real action.',

    'mon.label': 'IT Inventory & Proactive Monitoring',
    'mon.title': 'Manage IT Assets & Watch Systems Proactively',
    'mon.invT': 'IT Inventory & Asset',
    'mon.inv1': 'Registry of hardware, software, License and MA.',
    'mon.inv2': 'Add / edit / query assets by chatting with the AI.',
    'mon.inv3': 'Bulk import large volumes via CSV / Excel.',
    'mon.inv4': 'License & MA expiry alerts via Email / Line.',
    'mon.monT': 'Proactive Monitoring & Alert',
    'mon.mon1': 'Real-time CPU, RAM, Storage and Services tracking.',
    'mon.mon2': 'SNMP / ICMP with per-interface FortiGate profiles.',
    'mon.mon3': 'Unlimited tracking rules with flexible conditions.',
    'mon.mon4': 'Instant alerts via Email and Line Application.',
    'mon.cap1': 'Monitor Command Surface — per-interface bandwidth graphs (FortiGate profile) with status and uptime.',
    'mon.cap2': 'Inventory Workspace — a CI registry with Active / Maintenance / Critical status, tags and device relationships.',
    'mon.cap3': 'AI-assisted root-cause analysis alongside real-time monitoring graphs.',

    'log.label': 'Log Management & Analytics',
    'log.title': 'Log Retention Certified to NTS 4003.1-2560',
    'log.lead': 'The core log-management engine is certified to the “Computer Traffic Data Retention System” standard NTS 4003.1-2560 — supporting high volumes while preserving full data integrity.',
    'log.f1t': 'Syslog Protocol',
    'log.f1d': 'Receive and send logs over UDP, TCP and encrypted TLS for secure transport.',
    'log.f2t': 'Log Integrity',
    'log.f2d': 'Apply Hashing with MD5 and SHA-256 to verify the integrity of raw logs.',
    'log.f3t': 'Retention Policy',
    'log.f3d': 'Define legally-compliant retention periods, separated by log type and channel.',
    'log.f4t': 'Built-in Log Parser',
    'log.f4d': 'Auto-parses KV, CSV, GROK, JSON directly in the Web UI — no extra software to install.',
    'log.f5t': 'Log Forwarding & SIEM',
    'log.f5d': 'Create filters to forward logs by condition to a Syslog Server or SIEM over TCP/UDP.',
    'log.f6t': 'Secure Export',
    'log.f6d': 'Encrypt raw log data before export, with Hashing to guarantee integrity.',
    'log.perfT': 'Performance & Licensing',
    'log.perf1': 'Processes no fewer than 7,000 EPS with no data loss.',
    'log.perf2': 'Unlimited Devices license — no cap on the number of log sources.',
    'log.perf3': 'Unlimited Daily Volume license — no cap on data volume per day.',
    'log.perf4': 'Supports Log Archiving for long-term retention and retrieval.',
    'log.queryT': 'Query & Analytics',
    'log.query1': 'Flexible search — date range, channel, host, keyword, specific field.',
    'log.query2': 'Advanced operators =, !=, AND, OR · Wildcard (*, ?) · Regular Expression.',
    'log.query3': 'Save and reuse queries, with full search history.',
    'log.query4': 'Real-time dashboard, no-log-arrival alerts, export to PDF, CSV, Excel.',

    'comp.label': 'Compliance & Governance',
    'comp.title': 'Audit Events in Line With Key Standards',
    'comp.lead': 'CYBOT maps log data to the requirements of major laws and standards, complete with a compliance rationale for each control and recommendations for improvement.',
    'comp.b1': 'Cybersecurity Act',
    'comp.b2': 'Computer Act',
    'comp.cap1': 'Example: CYBOT maps log data to PDPA articles — showing the control topic, log source, relevant article and the compliance rationale.',

    'dep.label': 'Deployment & Appliance',
    'dep.title': 'Hardware Appliance Architecture · 100% On-Premise',
    'dep.lead': 'Installed and processed entirely within the organization, unifying the log-management engine and the AI processing in a single appliance under one trademark.',
    'dep.f1t': '100% On-Premise',
    'dep.f1d': 'Installed and processed entirely within the organization’s data center — no Cloud or external dependency.',
    'dep.f2t': 'Local Processing & Storage',
    'dep.f2d': 'All logs and data are processed and stored on the appliance — never sent outside the network.',
    'dep.f3t': 'Data Sovereignty',
    'dep.f3d': 'Full control over your own data, with no risk of leakage through Cloud services.',
    'dep.appT': 'Softnix Logger CYBOT Appliance',
    'dep.app1': 'Ready On-Premise · Privacy by Design.',
    'dep.app2': 'Full functionality — Log Monitor, Monitor, Security Monitor, IT Inventory.',
    'dep.app3': 'Log storage 1TB – 2TB · 90-day Archive.',
    'dep.app4': '7,000 Events / second throughput · CYBOT AI Chatbot — an AI Buddy for IT security.',
    'dep.cap1': 'Task Control Room — schedule automated scans and track every workflow, step by step.',

    'spec.label': 'Specifications',
    'spec.title': 'Technical Specifications at a Glance',
    'spec.hItem': 'Item',
    'spec.hDetail': 'Details',
    'spec.r1k': 'Product Type',
    'spec.r1v': 'Hardware Appliance — On-Premise AI & Log Management (All-in-One)',
    'spec.r2k': 'AI Engine',
    'spec.r2v': 'Agentic AI — Softnix LLM (processed on-premise), Thai & English support',
    'spec.r3k': 'Log Performance',
    'spec.r3v': 'No fewer than 7,000 EPS · Unlimited Devices · Unlimited daily data volume',
    'spec.r4k': 'Log Storage / Archive',
    'spec.r4v': '1TB – 2TB · 90-day Log Archive (retrievable)',
    'spec.r5k': 'Log Retention Standard',
    'spec.r5v': 'NTS 4003.1-2560 (Computer Traffic Data Retention System)',
    'spec.r6k': 'Log Ingestion',
    'spec.r6v': 'Syslog over UDP / TCP / TLS',
    'spec.r7k': 'Log Integrity',
    'spec.r7v': 'Hashing — MD5, SHA-256',
    'spec.r8k': 'Log Parser',
    'spec.r8v': 'Built-in — KV, CSV, GROK, JSON (configured via Web UI)',
    'spec.r9k': 'Search & Query',
    'spec.r9v': '=, !=, AND, OR · Wildcard (*, ?) · Regular Expression · Saved Query',
    'spec.r10k': 'Security',
    'spec.r10v': 'Vulnerability Scanning · IDS/IPS · Threat Detection · Risk Prioritization',
    'spec.r11k': 'IT Inventory',
    'spec.r11v': 'Device/Software Registry · CSV/Excel Import · License & MA Expiry Alert',
    'spec.r12k': 'Monitoring',
    'spec.r12v': 'Real-time Health · SNMP / ICMP · Unlimited Tracking Rules',
    'spec.r13k': 'Alerting',
    'spec.r13v': 'Email · Line Application',
    'spec.r14k': 'Forwarding / Integration',
    'spec.r14v': 'Syslog Forwarding (TCP/UDP) · SIEM Integration',
    'spec.r15k': 'Report Export',
    'spec.r15v': 'PDF · CSV · Excel',
    'spec.r16k': 'Compliance',
    'spec.r16v': 'PDPA · Cybersecurity Act · ISO 27001 · NTS 4003.1-2560 · NIST · PCI-DSS · GDPR',
    'spec.r17k': 'Deployment',
    'spec.r17v': '100% On-Premise · Softnix LLM · Softnix Private Cloud',

    'cta.title': 'Ready to see CYBOT in action?',
    'cta.lead': 'To arrange a demo or request a quotation, contact Softnix Technology or an authorized reseller.',
    'cta.btn1': 'Request a Demo — sales@softnix.co.th',
    'cta.docTH': 'Datasheet (TH)',
    'cta.docEN': 'Datasheet (EN)',
    'footer.copy': '© 2026 Softnix Technology Co., Ltd. All rights reserved.',
  },
};

const DATASHEET = {
  th: 'assets/docs/Softnix_Logger_CYBOT_Datasheet_TH.pdf',
  en: 'assets/docs/Softnix_Logger_CYBOT_Datasheet_EN.pdf',
};

/* ─────────────────────────────────────────────
   2. LANGUAGE HANDLING
   ───────────────────────────────────────────── */
const LANG_KEY = 'cybot-lang';

function detectLang() {
  const param = new URLSearchParams(location.search).get('lang');
  if (param === 'th' || param === 'en') return param;
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === 'th' || saved === 'en') return saved;
  return (navigator.language || 'en').toLowerCase().startsWith('th') ? 'th' : 'en';
}

function applyLang(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.title = dict['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // hero datasheet button follows current language
  const dsBtn = document.getElementById('datasheetBtn');
  if (dsBtn) dsBtn.href = DATASHEET[lang];

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem(LANG_KEY, lang);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(detectLang());

/* ─────────────────────────────────────────────
   3. NAVBAR — scroll state, burger, scroll-spy
   ───────────────────────────────────────────── */
const nav = document.querySelector('.nav');
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

function onScrollNav() {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', onScrollNav, { passive: true });
onScrollNav();

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// scroll-spy
const spyLinks = [...navLinks.querySelectorAll('.nav-link')];
const spySections = spyLinks
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        spyLinks.forEach((a) =>
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`)
        );
      }
    });
  },
  { rootMargin: '-38% 0px -55% 0px' }
);
spySections.forEach((s) => spyObserver.observe(s));

/* ─────────────────────────────────────────────
   4. SCROLL REVEAL
   ───────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ─────────────────────────────────────────────
   5. STAT COUNT-UP
   ───────────────────────────────────────────── */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString('en-US');
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll('.count').forEach((el) => countObserver.observe(el));

/* ─────────────────────────────────────────────
   6. VIDEO MODAL (YouTube embed, in-page feel)
   ───────────────────────────────────────────── */
const VIDEO_EMBED =
  'https://www.youtube-nocookie.com/embed/hKXHfKJQCn0?autoplay=1&rel=0&modestbranding=1&playsinline=1';

const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const demoBtn = document.getElementById('demoBtn');

function openVideoModal() {
  videoIframe.src = VIDEO_EMBED;
  videoModal.classList.add('open');
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('videoClose').focus();
}

function closeVideoModal() {
  videoModal.classList.remove('open');
  videoModal.setAttribute('aria-hidden', 'true');
  videoIframe.src = ''; // stop playback
  document.body.style.overflow = '';
  demoBtn.focus();
}

demoBtn.addEventListener('click', openVideoModal);
document.getElementById('videoClose').addEventListener('click', closeVideoModal);
document.getElementById('videoBackdrop').addEventListener('click', closeVideoModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal.classList.contains('open')) closeVideoModal();
});

/* ─────────────────────────────────────────────
   7. LIGHTBOX
   ───────────────────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCap');
const shotBtns = [...document.querySelectorAll('[data-lightbox]')];
let currentShot = 0;

function openLightbox(index) {
  currentShot = index;
  const btn = shotBtns[index];
  const img = btn.querySelector('img');
  const caption = btn.closest('figure').querySelector('figcaption');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCap.textContent = caption ? caption.textContent : '';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function stepLightbox(dir) {
  openLightbox((currentShot + dir + shotBtns.length) % shotBtns.length);
}

shotBtns.forEach((btn, i) => btn.addEventListener('click', () => openLightbox(i)));
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => stepLightbox(-1));
document.getElementById('lightboxNext').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') stepLightbox(-1);
  if (e.key === 'ArrowRight') stepLightbox(1);
});

/* ─────────────────────────────────────────────
   8. BACK TO TOP
   ───────────────────────────────────────────── */
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 900);
}, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
