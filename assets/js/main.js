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
    'meta.desc': 'Softnix Logger CYBOT ผู้ช่วยอัจฉริยะด้าน IT และความมั่นคงปลอดภัยไซเบอร์แบบ Agentic AI ทำงานภายในองค์กร 100% รวม Log Management มาตรฐาน NTS 4003.1-2560 (ติดตั้ง Softnix Logger v7), ตรวจช่องโหว่, เฝ้าระวังเชิงรุก และบริหารทรัพย์สิน IT ในอุปกรณ์เดียว',

    'nav.overview': 'ภาพรวม',
    'nav.ai': 'AI ผู้ช่วย',
    'nav.security': 'ความปลอดภัย',
    'nav.monitoring': 'มอนิเตอร์',
    'nav.logs': 'Log Management',
    'nav.compliance': 'Compliance',
    'nav.specs': 'สเปค',
    'nav.cta': 'ขอ Demo',

    'hero.badge': 'On-Premise AI Appliance',
    'hero.tagline': 'รวม Log Management, Security และ Monitoring ครบในอุปกรณ์เดียว — สั่งงานด้วยภาษาไทยได้ทันที',
    'hero.lead': 'ผู้ช่วยอัจฉริยะแบบ Agentic AI ที่ทำงานภายในองค์กร 100% (On-Premise) รวมระบบจัดเก็บ Log ตามมาตรฐาน พ.ร.บ. คอมพิวเตอร์ 2560 พร้อมทั้งการตรวจสอบช่องโหว่ความปลอดภัย ตรวจสอบสถานะระบบ และบริหารทรัพย์สิน IT ไว้ในอุปกรณ์เดียว — สนทนาและสั่งงานด้วยภาษาไทย-อังกฤษได้ทันที',
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
    'ov.f2t': 'Security Scan & Advisor',
    'ov.f2d': 'ตรวจสอบและสแกนช่องโหว่ความปลอดภัย พร้อมแนะนำแนวทางแก้ไข ทำหน้าที่เป็นที่ปรึกษาด้านความปลอดภัยระดับมืออาชีพ',
    'ov.f3t': 'Log Compliance',
    'ov.f3d': 'จัดเก็บ Log ตามมาตรฐาน NTS 4003.1-2560* รองรับ พ.ร.บ.คอมพิวเตอร์, PDPA และ ISO 27001',
    'ov.f4t': 'Proactive Monitor',
    'ov.f4d': 'เฝ้าสังเกตระบบ IT แจ้งเตือนทันทีโดยไม่ต้องรอคำสั่ง พร้อมคำอธิบายวิธีแก้ปัญหา',
    'ov.looptitle': 'วงจรการทำงานแบบ Agentic AI',
    'ov.l1t': 'Collect & Observe',
    'ov.l1d': 'เก็บและเฝ้าสังเกตสภาพแวดล้อม IT, Log และภัยคุกคามอย่างต่อเนื่อง',
    'ov.l2t': 'Understand Context',
    'ov.l2d': 'เข้าใจบริบทจาก Log, การมอนิเตอร์, Threat Intelligence และทรัพย์สิน IT',
    'ov.l3t': 'Plan & Reason',
    'ov.l3d': 'วิเคราะห์และวางแผนขั้นตอน โดยใช้ Skill เฉพาะทางที่พัฒนาขึ้นโดยเฉพาะ',
    'ov.l4t': 'Take Action',
    'ov.l4d': 'ลงมือดำเนินการตามแผน เช่น ขออนุมัติ อธิบายข้อมูลเชิงลึก และสร้างรายงาน',
    'ov.loopnote': 'One Appliance, Easy to Setup, Less to Integration — รวม Log Management, IT Inventory, Monitor และ IT Security ในอุปกรณ์เดียว ลดความซับซ้อน ประหยัดคุ้มค่า เข้ากันได้ดีที่สุด',
    'ov.a1t': 'ผู้บริหาร IT / CIO / CTO',
    'ov.a1d': 'เห็นภาพรวมสุขภาพระบบและความเสี่ยงในหน้าเดียว ลดภาระทีม ควบคุมต้นทุนได้',
    'ov.a2t': 'ผู้ดูแลระบบ / SysAdmin',
    'ov.a2d': 'สอบถาม Log และสั่งงานด้วยภาษาไทย ไม่ต้องเขียนคำสั่งซับซ้อน',
    'ov.a3t': 'ทีมความมั่นคงปลอดภัย',
    'ov.a3d': 'ที่ปรึกษาด้านความปลอดภัยในตัว พร้อมรายงาน Compliance ใช้ได้ทันที',
    'ov.a4t': 'IT System Integrator',
    'ov.a4d': 'โซลูชัน All-in-One พร้อมนำเสนอลูกค้า ติดตั้งง่าย ครบมาตรฐานราชการไทย',

    'ai.label': 'Agentic AI Assistant',
    'ai.title': 'Harness AI Agent',
    'ai.lead': 'Agent ที่ทำงานอัตโนมัติ — คิด วางแผน วิเคราะห์ เรียกใช้ SKILL และลงมือทำ (Execute) โดยประมวลผลทั้งหมดภายในองค์กร ไม่ส่งข้อมูลออกสู่ Cloud',
    'ai.f1t': 'NL Understanding',
    'ai.f1d': 'เข้าใจคำถามภาษาไทย/อังกฤษ ไม่ต้องใช้คำสั่งเทคนิค',
    'ai.f2t': 'Thinking & Reasoning',
    'ai.f2d': 'วิเคราะห์บริบท วางแผน และให้เหตุผลก่อนตัดสินใจ',
    'ai.f3t': 'NL Log Query',
    'ai.f3d': 'สอบถาม Log ด้วยภาษาคน ไม่ต้องใช้ศัพท์ทางเทคนิคที่ยุ่งยาก แสดงผลทันที',
    'ai.f4t': 'Autonomous Task',
    'ai.f4d': 'ทำงานตามแผนอัตโนมัติ ไม่ต้องรอคำสั่งเพิ่ม',
    'ai.cap1': 'ถามว่า “วันนี้มีเหตุการณ์อะไรผิดปกติบ้าง” — CYBOT ตรวจจับ Traffic Anomaly พร้อมกราฟและค่า Z-Score แบบเรียลไทม์',
    'ai.cap2': 'สรุปผลการวิเคราะห์เชิงลึกเป็นภาษาไทย ระบุระดับความเสี่ยง (High Risk) ต้นเหตุ และพฤติกรรมที่ตรวจพบ',

    'sec.label': 'Security Assessment & Threat Detection',
    'sec.title': 'ตรวจช่องโหว่ จับภัยคุกคาม พร้อมที่ปรึกษาในตัว',
    'sec.lead': '“Hacker ใช้ AI เจาะระบบ เราก็ต้องใช้ AI รับมือและป้องกัน” — CYBOT ทำงานเสมือนที่ปรึกษาด้านความมั่นคงปลอดภัยไซเบอร์ตลอด 24 ชั่วโมง ตรวจช่องโหว่ จัดลำดับความเสี่ยง และเสนอแนวทางแก้ไขที่นำไปปฏิบัติได้จริง สร้างการทำงานเชิงรุกให้แก่องค์กร',
    'sec.f1t': 'Vulnerability Scan',
    'sec.f1d': 'ตรวจช่องโหว่ความปลอดภัย ครอบคลุม OWASP, CVE, IOC',
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
    'mon.mon1': 'ติดตาม TCP/IP แบบเรียลไทม์ Health Check',
    'mon.mon2': 'SNMP / ICMP รองรับโปรไฟล์ Server, Devices',
    'mon.mon3': 'สร้างเงื่อนไขติดตามได้ไม่จำกัด (Tracking Rules)',
    'mon.mon4': 'แจ้งเตือนทันทีผ่าน Email และ Telegram',
    'mon.cap1': 'Monitor Command Surface — กราฟ Bandwidth รายอินเทอร์เฟซ (โปรไฟล์ FortiGate) พร้อมสถานะและ Uptime',
    'mon.cap2': 'Inventory Workspace — ทะเบียน CI พร้อมสถานะ Active / Maintenance / Critical, แท็ก และความสัมพันธ์ของอุปกรณ์',
    'mon.cap3': 'วิเคราะห์สาเหตุปัญหาระบบด้วย AI ควบคู่กับกราฟมอนิเตอร์แบบเรียลไทม์',

    'log.label': 'Log Management & Analytics',
    'log.title': 'จัดเก็บ Log ตามมาตรฐาน NTS 4003.1-2560*',
    'log.lead': 'แกนหลักด้านการจัดเก็บ Log ที่ผ่านการรับรองคุณสมบัติตามมาตรฐาน “ระบบเก็บรักษาข้อมูลจราจรทางคอมพิวเตอร์” NTS 4003.1-2560* รองรับปริมาณสูงพร้อมรักษาความถูกต้องของข้อมูลอย่างครบถ้วน',
    'log.f1t': 'Syslog Protocol',
    'log.f1d': 'รับ–ส่ง Log ผ่าน UDP, TCP และเข้ารหัสด้วย TLS เพื่อความปลอดภัย',
    'log.f2t': 'Log Integrity',
    'log.f2d': 'ทำ Hashing ด้วย MD5 และ SHA-256 ตรวจสอบความถูกต้องของ Raw Log',
    'log.f3t': 'Retention Policy',
    'log.f3d': 'กำหนดระยะเวลาจัดเก็บตามกฎหมาย พ.ร.บ. คอมพิวเตอร์ 2560',
    'log.f4t': 'Built-in Log Parser',
    'log.f4d': 'วิเคราะห์รูปแบบอัตโนมัติ KV, CSV, GROK, JSON ผ่าน Web UI โดยไม่ต้องติดตั้งโปรแกรมเพิ่ม',
    'log.f5t': 'Log Forwarding & SIEM',
    'log.f5d': 'สร้าง Filter ส่งต่อ Log ตามเงื่อนไข ไปยัง Syslog Server หรือ SIEM ผ่าน TCP/UDP',
    'log.f6t': 'Secure Export',
    'log.f6d': 'เข้ารหัสข้อมูล Raw Log ก่อนส่งออก พร้อม Hashing รับรองความถูกต้อง',
    'log.perfT': 'ประสิทธิภาพและลิขสิทธิ์',
    'log.perf1': 'ประมวลผลไม่น้อยกว่า 7,000 EPS โดยไม่สูญหายของข้อมูล (เพิ่มได้ตามต้องการ ปรึกษาเรา)',
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
    'spec.r5v': 'NTS 4003.1-2560* (ระบบเก็บรักษาข้อมูลจราจรทางคอมพิวเตอร์) — ติดตั้ง Softnix Logger v7',
    'spec.r6k': 'Log Ingestion',
    'spec.r6v': 'Syslog ผ่าน UDP / TCP / TLS',
    'spec.r7k': 'Log Integrity',
    'spec.r7v': 'Hashing — MD5, SHA-256',
    'spec.r8k': 'Log Parser',
    'spec.r8v': 'Built-in — KV, CSV, GROK, JSON (ตั้งค่าผ่าน Web UI)',
    'spec.r9k': 'Search & Query',
    'spec.r9v': '=, !=, AND, OR · Wildcard (*, ?) · Regular Expression · Saved Query',
    'spec.r10k': 'Security',
    'spec.r10v': 'Vulnerability Scanning · Threat Detection · Risk Prioritization',
    'spec.r11k': 'IT Inventory',
    'spec.r11v': 'Device/Software Registry · CSV/Excel Import · License & MA Expiry Alert',
    'spec.r12k': 'Monitoring',
    'spec.r12v': 'Real-time Health · SNMP / ICMP · Unlimited Tracking Rules',
    'spec.r13k': 'Alerting',
    'spec.r13v': 'Email · Telegram',
    'spec.r14k': 'Forwarding / Integration',
    'spec.r14v': 'Syslog Forwarding (TCP/UDP) · SIEM Integration',
    'spec.r15k': 'Report Export',
    'spec.r15v': 'PDF · CSV · Excel',
    'spec.r16k': 'Compliance',
    'spec.r16v': 'PDPA · พ.ร.บ.ไซเบอร์ · ISO 27001 · NTS 4003.1-2560* · NIST · PCI-DSS · GDPR — *ติดตั้ง Softnix Logger v7',
    'spec.r17k': 'Deployment',
    'spec.r17v': '100% On-Premise · Softnix LLM · Softnix Private Cloud',

    'cta.title': 'พร้อมให้ CYBOT เป็นผู้ช่วยทีม IT ของคุณแล้วหรือยัง',
    'cta.lead': 'สนใจทดสอบระบบหรือขอใบเสนอราคา ติดต่อ Softnix Technology หรือตัวแทนจำหน่ายที่ได้รับการแต่งตั้ง',
    'cta.btn1': 'ขอใบเสนอราคา',
    'cta.docTH': 'Datasheet (TH)',
    'cta.docEN': 'Datasheet (EN)',
'hero.tagline': 'รวม Log Management, Security และ Monitoring ครบในอุปกรณ์เดียว — สั่งงานด้วยภาษาไทยได้ทันที',
    'hero.ctapoc': 'ขอ Proof of Concept ฟรี',

    'cmp.label': 'Why CYBOT',
    'cmp.title': 'Tool-Based IT vs AI-Assisted IT',
    'cmp.lead': 'เปรียบเทียบการทำงานแบบเดิมที่ต้องใช้เครื่องมือหลายตัว กับ CYBOT ที่รวมทุกอย่างเป็นหนึ่งเดียว',
    'cmp.h1': 'Tool-Based IT (แบบเดิม)',
    'cmp.h2': 'CYBOT — AI-Assisted IT',
    'cmp.r1': 'การติดตั้ง', 'cmp.o1': 'หลายเครื่องมือ หลายผู้ขาย ต้องอินทิเกรตเอง', 'cmp.n1': 'Appliance เดียว ครบทุกฟังก์ชัน ติดตั้งง่าย',
    'cmp.r2': 'การใช้งาน', 'cmp.o2': 'ต้องเขียนคำสั่งและ Query ทางเทคนิคที่ซับซ้อน', 'cmp.n2': 'ถาม-สั่งงานด้วยภาษาธรรมชาติ ไทย/อังกฤษ',
    'cmp.r3': 'การวิเคราะห์', 'cmp.o3': 'ดู Log ดิบแล้วสรุปเอง ใช้เวลานาน', 'cmp.n3': 'AI วิเคราะห์ ให้เหตุผล พร้อมคำแนะนำแก้ไข',
    'cmp.r4': 'Compliance Report', 'cmp.o4': 'Mapping และจัดทำรายงานด้วยมือ', 'cmp.n4': 'Mapping อัตโนมัติ พร้อม Compliance Rationale',
    'cmp.r5': 'ข้อมูลและความเป็นส่วนตัว', 'cmp.o5': 'พึ่งพา Cloud มีความเสี่ยงข้อมูลรั่วไหล', 'cmp.n5': 'On-Premise 100% ข้อมูลไม่ออกนอกองค์กร',
    'cmp.r6': 'การทำงานอัตโนมัติ', 'cmp.o6': 'รอคนสั่งงานทีละขั้นตอน', 'cmp.n6': 'Agentic AI วางแผนและลงมือทำ ภายใต้ Human-in-the-Loop',

    'ts.label': 'Social Proof',
    'ts.title': 'เสียงจากผู้ใช้งานและพาร์ตเนอร์',
    'ts.t1': 'ทีมตอบคำถามผู้บริหารได้ทันที — ถาม CYBOT เป็นภาษาไทยแล้วได้กราฟและคำอธิบายพร้อมใช้ รายงานที่เคยใช้เวลาครึ่งวัน เหลือเพียงไม่กี่นาที',
    'ts.a1': 'IT Manager — องค์กรด้านการเงิน',
    'ts.t2': 'Compliance Mapping กับ PDPA และ พ.ร.บ. คอมพิวเตอร์ ช่วยลดเวลาตอบผู้ตรวจสอบได้อย่างมาก เพราะเหตุผลความสอดคล้องมีพร้อมในระบบ',
    'ts.a2': 'CISO — หน่วยงานภาครัฐ',
    'ts.t3': 'เป็นโซลูชันที่นำเสนอลูกค้าได้ทันที — ครบมาตรฐาน ติดตั้งง่าย ส่งมอบเร็ว ปิดงานได้ภายในเวลาอันสั้น',
    'ts.a3': 'Director — บริษัท System Integrator',
    'ts.cs.title': 'Case Study — จาก Tool-Based สู่ AI-Assisted IT',
    'ts.cs.s1t': 'สถานการณ์', 'ts.cs.s1d': 'Log และเหตุการณ์ความปลอดภัยจำนวนมหาศาล ทีม IT มีเวลาจำกัด และต้องเตรียมพร้อมตอบผู้ตรวจสอบตาม พ.ร.บ.',
    'ts.cs.s2t': 'แนวทาง', 'ts.cs.s2d': 'ติดตั้ง CYBOT เป็น Appliance เดียวในองค์กร เก็บ Log ตามมาตรฐาน และให้ทีมสั่งงานด้วยภาษาธรรมชาติ',
    'ts.cs.s3t': 'ผลลัพธ์', 'ts.cs.s3d': 'สอบสวนเหตุการณ์เร็วขึ้น รายงาน Compliance พร้อมใช้ และผู้บริหารเห็นความเสี่ยงของระบบในหน้าเดียว',
    'ts.cs.m1': 'เวลาสอบสวนเหตุการณ์ลดลง',
    'ts.cs.m2': 'การพึ่งพา Cloud ภายนอก',
    'ts.cs.m3': 'มาตรฐานที่ครอบคลุม',

    'faq.label': 'FAQ',
    'faq.title': 'คำถามที่พบบ่อย',
    'faq.q1': 'CYBOT เหมาะกับองค์กรขนาดใด',
    'faq.a1': 'รองรับตั้งแต่องค์กรขนาดกลางถึงองค์กรขนาดใหญ่ ด้วยลิขสิทธิ์แบบ Unlimited Devices ไม่จำกัดจำนวนอุปกรณ์หรือปริมาณ Log ต่อวัน',
    'faq.q2': 'ติดตั้งและเริ่มใช้งานใช้เวลานานเท่าใด',
    'faq.a2': 'CYBOT เป็น Hardware Appliance แบบ All-in-One ต่อเข้ากับเครือข่ายองค์กรแล้วเริ่มเก็บ Log ได้ทันที (Ready On-Premise) ไม่ต้องติดตั้งซอฟต์แวร์หรืออินทิเกรตหลายส่วน',
    'faq.q3': 'รองรับอุปกรณ์และระบบใดบ้าง',
    'faq.a3': 'รองรับ Syslog ผ่าน UDP/TCP/TLS จากอุปกรณ์เครือข่าย เซิร์ฟเวอร์ และระบบต่าง ๆ พร้อม SNMP/ICMP สำหรับการมอนิเตอร์ และ Built-in Parser สำหรับ KV, CSV, GROK, JSON',
    'faq.q4': 'CYBOT ใช้แทน SIEM เดิมได้หรือไม่',
    'faq.a4': 'ได้ — CYBOT รวม Log Management, Security Monitor และ IT Inventory ในอุปกรณ์เดียว และยังรองรับ Log Forwarding ไปยัง SIEM เดิมได้ด้วยหากต้องการใช้งานร่วมกัน',
    'faq.q5': 'ข้อมูลถูกส่งออกนอกองค์กรหรือไม่',
    'faq.a5': 'ไม่ — ทุกอย่างประมวลผลและจัดเก็บภายในองค์กร 100% (On-Premise) รวมถึง AI Engine (Softnix LLM) ที่ทำงานบน Local AI Server ข้อมูลไม่ถูกส่งออกสู่ Cloud โดยเด็ดขาด',
    'faq.q6': 'มีค่าใช้จ่ายเพิ่มตามจำนวนอุปกรณ์หรือปริมาณ Log หรือไม่',
    'faq.a6': 'ไม่มี — ลิขสิทธิ์เป็นแบบ Unlimited Devices ประมวลผลได้ไม่น้อยกว่า 7,000 EPS (เพิ่มได้ตามความต้องการ ปรึกษาทีมงานได้)',
    'faq.q7': 'มีบริการหลังการขายและ MA อย่างไร',
    'faq.a7': 'Softnix และตัวแทนจำหน่ายที่ได้รับการแต่งตั้งให้บริการติดตั้ง อบรม และ MA ครอบคลุมการอัปเดตและซัพพอร์ต ติดต่อทีมงานเพื่อสอบถามแพ็กเกจที่เหมาะสม',
    'faq.q8': 'ระบบรองรับการจัดเก็บ Log ตามมาตรฐาน NTS 4003.1-2560 หรือไม่',
    'faq.a8': 'รองรับ — Softnix Logger CYBOT มาพร้อมการติดตั้ง Software Softnix Logger v7 ที่ได้รับการรับรองมาตรฐาน NTS 4003.1-2560 (ระบบเก็บรักษาข้อมูลจราจรทางคอมพิวเตอร์) พร้อมรายงานผลการทดสอบ',
    'faq.q9': 'ขอทดสอบระบบ (POC) ได้อย่างไร',
    'faq.a9': 'ติดต่อผ่านหน้า Contact ของ Softnix หรือตัวแทนจำหน่ายที่ได้รับการแต่งตั้ง เพื่อจัดเตรียม Proof of Concept ให้องค์กรของคุณโดยไม่มีค่าใช้จ่าย',

    'cta.poc': 'ขอ Proof of Concept ฟรี',
    'log.note': '* (หมายเหตุ: รองรับมาตรฐาน NTS 4003.1-2560 เมื่อติดตั้ง Softnix Logger v7)',
    'footer.copy': '© 2026 Softnix Technology Co., Ltd. สงวนลิขสิทธิ์',
  },

  en: {
    'meta.title': 'Softnix Logger CYBOT — On-Premise AI Appliance for IT & Cyber Security',
    'meta.desc': 'Softnix Logger CYBOT is an Agentic-AI IT & cyber-security assistant that runs 100% on-premise — unifying NTS 4003.1-2560 certified log management (requires Softnix Logger v7), vulnerability assessment, proactive monitoring and IT asset management in a single appliance.',

    'nav.overview': 'Overview',
    'nav.ai': 'AI Assistant',
    'nav.security': 'Security',
    'nav.monitoring': 'Monitoring',
    'nav.logs': 'Log Mgmt',
    'nav.compliance': 'Compliance',
    'nav.specs': 'Specs',
    'nav.cta': 'Request Demo',

    'hero.badge': 'On-Premise AI Appliance',
    'hero.tagline': 'Log Management, Security & Monitoring in a single appliance — ask in plain language, act instantly',
    'hero.lead': 'An Agentic-AI assistant that runs entirely inside your organization (100% On-Premise) — unifying log management certified to the Computer Crime Act B.E. 2560, alongside vulnerability assessment, system health monitoring, and IT asset management in a single appliance. Simply ask in Thai or English to get answers and actions instantly.',
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
    'ov.f2t': 'Security Scan & Advisor',
    'ov.f2d': 'Scan for vulnerabilities and assess security posture with remediation guidance — acting as your professional security advisor.',
    'ov.f3t': 'Log Compliance',
    'ov.f3d': 'Store logs to the NTS 4003.1-2560* standard, supporting the Computer Act, PDPA and ISO 27001.',
    'ov.f4t': 'Proactive Monitor',
    'ov.f4d': 'Observe the IT environment with instant alerts — no command required — plus clear remediation guidance.',
    'ov.looptitle': 'The Agentic AI Loop',
    'ov.l1t': 'Collect & Observe',
    'ov.l1d': 'Continuously gather and watch the IT environment, logs and threats.',
    'ov.l2t': 'Understand Context',
    'ov.l2d': 'Comprehend context from logs, monitoring, threat intelligence and IT assets.',
    'ov.l3t': 'Plan & Reason',
    'ov.l3d': 'Analyze and plan each step using purpose-built specialized Skills.',
    'ov.l4t': 'Take Action',
    'ov.l4d': 'Execute the plan — request approval, explain insights, and generate reports.',
    'ov.loopnote': 'One Appliance, Easy to Setup, Less to Integration — uniting Log Management, IT Inventory, Monitoring and IT Security in a single appliance. Less complexity, better value, best compatibility.',
    'ov.a1t': 'IT Executives / CIO / CTO',
    'ov.a1d': 'See overall system health and risk on one screen, offload routine work and control cost.',
    'ov.a2t': 'System Administrators',
    'ov.a2d': 'Query logs and issue commands in plain language — no complex syntax required.',
    'ov.a3t': 'Security Teams',
    'ov.a3d': 'A built-in security advisor with ready-to-use compliance reporting.',
    'ov.a4t': 'IT System Integrators',
    'ov.a4d': 'An All-in-One solution ready to present — standards-complete, quick to deploy and hand over.',

    'ai.label': 'Agentic AI Assistant',
    'ai.title': 'Harness AI Agent',
    'ai.lead': 'An autonomous Agent that thinks, plans, analyzes, invokes SKILLs and executes — all processed inside your organization, with nothing sent to the Cloud.',
    'ai.f1t': 'NL Understanding',
    'ai.f1d': 'Interprets Thai/English questions with no technical syntax required.',
    'ai.f2t': 'Thinking & Reasoning',
    'ai.f2d': 'Analyzes context, plans steps and reasons before acting.',
    'ai.f3t': 'NL Log Query',
    'ai.f3d': 'Query logs in plain language — no complex technical syntax required — with instant results.',
    'ai.f4t': 'Autonomous Task',
    'ai.f4d': 'Executes plans automatically without extra prompts.',
    'ai.cap1': 'Asking “what looks unusual today?” — CYBOT detects a traffic anomaly with a real-time chart and Z-Score.',
    'ai.cap2': 'An in-depth analysis summary identifying risk level (High Risk), root cause and the behavior detected.',

    'sec.label': 'Security Assessment & Threat Detection',
    'sec.title': 'Scan Vulnerabilities, Catch Threats — with an Advisor Built In',
    'sec.lead': '“Hackers use AI to breach systems — so we must use AI to defend.” CYBOT operates as a 24/7 cyber-security advisor: scanning vulnerabilities, prioritizing risk, and proposing actionable remediation to drive a proactive security posture for your organization.',
    'sec.f1t': 'Vulnerability Scan',
    'sec.f1d': 'Scan for security vulnerabilities — covering OWASP, CVE and IOC.',
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
    'mon.mon1': 'Real-time TCP/IP health-check monitoring.',
    'mon.mon2': 'SNMP / ICMP with profiles for Servers and Devices.',
    'mon.mon3': 'Unlimited tracking rules with flexible conditions.',
    'mon.mon4': 'Instant alerts via Email and Telegram.',
    'mon.cap1': 'Monitor Command Surface — per-interface bandwidth graphs (FortiGate profile) with status and uptime.',
    'mon.cap2': 'Inventory Workspace — a CI registry with Active / Maintenance / Critical status, tags and device relationships.',
    'mon.cap3': 'AI-assisted root-cause analysis alongside real-time monitoring graphs.',

    'log.label': 'Log Management & Analytics',
    'log.title': 'Log Retention Certified to NTS 4003.1-2560*',
    'log.lead': 'The core log-management engine is certified to the “Computer Traffic Data Retention System” standard NTS 4003.1-2560* — supporting high volumes while preserving full data integrity.',
    'log.f1t': 'Syslog Protocol',
    'log.f1d': 'Receive and send logs over UDP, TCP and encrypted TLS for secure transport.',
    'log.f2t': 'Log Integrity',
    'log.f2d': 'Apply Hashing with MD5 and SHA-256 to verify the integrity of raw logs.',
    'log.f3t': 'Retention Policy',
    'log.f3d': 'Define legally-compliant retention periods under the Computer Crime Act B.E. 2560.',
    'log.f4t': 'Built-in Log Parser',
    'log.f4d': 'Auto-parses KV, CSV, GROK, JSON directly in the Web UI — no extra software to install.',
    'log.f5t': 'Log Forwarding & SIEM',
    'log.f5d': 'Create filters to forward logs by condition to a Syslog Server or SIEM over TCP/UDP.',
    'log.f6t': 'Secure Export',
    'log.f6d': 'Encrypt raw log data before export, with Hashing to guarantee integrity.',
    'log.perfT': 'Performance & Licensing',
    'log.perf1': 'Processes no fewer than 7,000 EPS with no data loss (scalable on demand — contact us).',
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
    'spec.r5v': 'NTS 4003.1-2560* (Computer Traffic Data Retention System) — requires Softnix Logger v7',
    'spec.r6k': 'Log Ingestion',
    'spec.r6v': 'Syslog over UDP / TCP / TLS',
    'spec.r7k': 'Log Integrity',
    'spec.r7v': 'Hashing — MD5, SHA-256',
    'spec.r8k': 'Log Parser',
    'spec.r8v': 'Built-in — KV, CSV, GROK, JSON (configured via Web UI)',
    'spec.r9k': 'Search & Query',
    'spec.r9v': '=, !=, AND, OR · Wildcard (*, ?) · Regular Expression · Saved Query',
    'spec.r10k': 'Security',
    'spec.r10v': 'Vulnerability Scanning · Threat Detection · Risk Prioritization',
    'spec.r11k': 'IT Inventory',
    'spec.r11v': 'Device/Software Registry · CSV/Excel Import · License & MA Expiry Alert',
    'spec.r12k': 'Monitoring',
    'spec.r12v': 'Real-time Health · SNMP / ICMP · Unlimited Tracking Rules',
    'spec.r13k': 'Alerting',
    'spec.r13v': 'Email · Telegram',
    'spec.r14k': 'Forwarding / Integration',
    'spec.r14v': 'Syslog Forwarding (TCP/UDP) · SIEM Integration',
    'spec.r15k': 'Report Export',
    'spec.r15v': 'PDF · CSV · Excel',
    'spec.r16k': 'Compliance',
    'spec.r16v': 'PDPA · Cybersecurity Act · ISO 27001 · NTS 4003.1-2560* · NIST · PCI-DSS · GDPR — *requires Softnix Logger v7',
    'spec.r17k': 'Deployment',
    'spec.r17v': '100% On-Premise · Softnix LLM · Softnix Private Cloud',

    'cta.title': 'Ready to see CYBOT in action?',
    'cta.lead': 'To arrange a demo or request a quotation, contact Softnix Technology or an authorized reseller.',
    'cta.btn1': 'Request a Quote',
    'cta.docTH': 'Datasheet (TH)',
    'cta.docEN': 'Datasheet (EN)',
'hero.tagline': 'Log Management, Security & Monitoring in a single appliance — ask in plain language, act instantly',
    'hero.ctapoc': 'Request a Free POC',

    'cmp.label': 'Why CYBOT',
    'cmp.title': 'Tool-Based IT vs AI-Assisted IT',
    'cmp.lead': 'Compare working with multiple traditional tools against CYBOT — everything unified in one appliance.',
    'cmp.h1': 'Tool-Based IT (traditional)',
    'cmp.h2': 'CYBOT — AI-Assisted IT',
    'cmp.r1': 'Deployment', 'cmp.o1': 'Multiple tools from multiple vendors, integrate them yourself', 'cmp.n1': 'A single appliance with every function — easy to set up',
    'cmp.r2': 'Usage', 'cmp.o2': 'Complex technical commands and query syntax', 'cmp.n2': 'Ask and command in natural language — Thai or English',
    'cmp.r3': 'Analysis', 'cmp.o3': 'Read raw logs and summarize manually — takes hours', 'cmp.n3': 'AI analyzes, reasons and gives remediation guidance',
    'cmp.r4': 'Compliance Report', 'cmp.o4': 'Manual mapping and report writing', 'cmp.n4': 'Automatic mapping with Compliance Rationale',
    'cmp.r5': 'Data & Privacy', 'cmp.o5': 'Cloud-dependent with data-leak risk', 'cmp.n5': '100% On-Premise — data never leaves your organization',
    'cmp.r6': 'Automation', 'cmp.o6': 'Wait for a human to run each step', 'cmp.n6': 'Agentic AI plans and acts, under Human-in-the-Loop oversight',

    'ts.label': 'Social Proof',
    'ts.title': 'What Users and Partners Say',
    'ts.t1': 'Our team answers management questions instantly — ask CYBOT in plain Thai and get ready-to-use charts and explanations. Weekly reports that used to take half a day now take minutes.',
    'ts.a1': 'IT Manager — Financial Services',
    'ts.t2': 'Compliance Mapping against PDPA and the Computer Crime Act has dramatically cut our audit-response time — the compliance rationale is already in the system.',
    'ts.a2': 'CISO — Government Agency',
    'ts.t3': 'A solution we can present right away — standards-complete, easy to deploy and fast to hand over. Projects close quickly.',
    'ts.a3': 'Director — System Integrator',
    'ts.cs.title': 'Case Study — From Tool-Based to AI-Assisted IT',
    'ts.cs.s1t': 'The Challenge', 'ts.cs.s1d': 'An overwhelming volume of logs and security events, a time-constrained IT team, and audit-readiness demands under the Computer Crime Act.',
    'ts.cs.s2t': 'The Approach', 'ts.cs.s2d': 'Deploy CYBOT as a single on-premise appliance, store logs to the required standard, and let the team operate in natural language.',
    'ts.cs.s3t': 'The Results', 'ts.cs.s3d': 'Faster incident investigations, ready-to-use compliance reporting, and system risk visible to executives on a single screen.',
    'ts.cs.m1': 'reduction in investigation time',
    'ts.cs.m2': 'external Cloud dependency',
    'ts.cs.m3': 'standards covered',

    'faq.label': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'What size of organization is CYBOT for?',
    'faq.a1': 'From mid-size to large enterprises — licensing is Unlimited Devices, with no cap on the number of devices or daily log volume.',
    'faq.q2': 'How long does installation take?',
    'faq.a2': 'CYBOT is an All-in-One hardware appliance — connect it to your network and it starts collecting logs right away (Ready On-Premise), with no complex software installation or multi-part integration.',
    'faq.q3': 'Which devices and systems are supported?',
    'faq.a3': 'Syslog over UDP/TCP/TLS from network devices, servers and applications, SNMP/ICMP for monitoring, and a Built-in Parser for KV, CSV, GROK and JSON.',
    'faq.q4': 'Can CYBOT replace our existing SIEM?',
    'faq.a4': 'Yes — CYBOT combines Log Management, Security Monitor and IT Inventory in one appliance, and can also forward logs to your existing SIEM if you prefer to run them together.',
    'faq.q5': 'Does any data leave the organization?',
    'faq.a5': 'No — everything is processed and stored on-premise (100%), including the AI Engine (Softnix LLM) running on a Local AI Server. Data is never sent to the Cloud.',
    'faq.q6': 'Are there extra costs per device or log volume?',
    'faq.a6': 'No — licensing is Unlimited Devices, processing no fewer than 7,000 EPS (scalable on demand — talk to our team).',
    'faq.q7': 'What about after-sales service and MA?',
    'faq.a7': 'Softnix and authorized resellers provide installation, training and MA covering updates and support. Contact our team to find the right package.',
    'faq.q8': 'Does the system support log retention to the NTS 4003.1-2560 standard?',
    'faq.a8': 'Yes — Softnix Logger CYBOT comes with Softnix Logger v7 software installed, which is certified to the NTS 4003.1-2560 standard (Computer Traffic Data Retention System), complete with test reports.',
    'faq.q9': 'How can we arrange a POC?',
    'faq.a9': 'Contact Softnix via the Contact page or an authorized reseller to set up a free Proof of Concept for your organization.',

    'cta.poc': 'Request a Free POC',
    'log.note': '* (Note: NTS 4003.1-2560 compliance requires Softnix Logger v7)',
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

/* ═══════════════════════════════════════════════════════
   9. HUBSPOT LEAD-GATED MODAL — Download Datasheet (Hero) + Request Demo (Nav)
   ═══════════════════════════════════════════════════════ */
(function () {
  const HS_PORTAL = '7556917';
  const HS_REGION = 'na1';
  const HS_FORM = {
    demo: 'f6e04ff4-5ef3-4e65-9396-7df3eb4cf78e',
    quote: 'f6e04ff4-5ef3-4e65-9396-7df3eb4cf78e',
    poc: '',
    datasheet: { th: '1649c3be-463e-4c22-ba26-8e39ee837b5c', en: 'a8804ba2-eca7-46ae-97c2-535ac1292b24' },
  };

  const COPY = {
    th: {
      datasheet: { title: 'ดาวน์โหลด Softnix Logger CYBOT Datasheet', sub: 'กรอกแบบฟอร์มสั้นๆ แล้วระบบจะเปิดไฟล์ Datasheet ให้ดาวน์โหลด' },
      demo: { title: 'ขอ Demo Softnix Logger CYBOT', sub: 'กรอกแบบฟอร์มสั้นๆ ทีม Softnix จะติดต่อกลับเพื่อนัด Demo' },
      quote: { title: 'ขอใบเสนอราคา Softnix Logger CYBOT', sub: 'กรอกแบบฟอร์มสั้นๆ ทีม Softnix จะติดต่อกลับเรื่องใบเสนอราคา' },
      poc: { title: 'ขอ Proof of Concept ฟรี', sub: 'กรอกแบบฟอร์มสั้นๆ ทีม Softnix จะติดต่อกลับเพื่อจัด PoC' },
      note: 'ข้อมูลใช้เพื่อติดต่อกลับจาก Softnix เท่านั้น',
      loading: 'กำลังโหลดแบบฟอร์ม…',
      error: 'โหลดแบบฟอร์มไม่สำเร็จ กรุณาลองใหม่ หรือติดต่อ sales@softnix.co.th',
      missing: 'ยังไม่ได้ตั้งค่าแบบฟอร์ม PoC กรุณาติดต่อ sales@softnix.co.th',
    },
    en: {
      datasheet: { title: 'Download the Softnix Logger CYBOT Datasheet', sub: "Fill in this short form and we'll open the datasheet for download." },
      demo: { title: 'Request a Softnix Logger CYBOT Demo', sub: 'Fill in this short form and the Softnix team will contact you to schedule a demo.' },
      quote: { title: 'Request a Softnix Logger CYBOT quotation', sub: 'Fill in this short form and the Softnix team will follow up with a quotation.' },
      poc: { title: 'Request a Free Proof of Concept', sub: 'Fill in this short form and the Softnix team will contact you to arrange a PoC.' },
      note: 'Your details are used only for Softnix follow-up.',
      loading: 'Loading form…',
      error: 'Failed to load the form. Please retry or contact sales@softnix.co.th',
      missing: 'The PoC form is not configured yet. Please contact sales@softnix.co.th',
    },
  };

  let modal, formHost, hsReady = null, createdForMode = null;

  function lang() {
    const l = document.documentElement.lang;
    return l === 'en' ? 'en' : 'th';
  }

  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement('div');
    modal.className = 'lead-dl-modal';
    modal.id = 'leadModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'leadModalTitle');
    modal.innerHTML =
      '<div class="lead-dl-backdrop" data-lead-close="1"></div>' +
      '<div class="lead-dl-dialog">' +
      '  <button type="button" class="lead-dl-close" data-lead-close="1" aria-label="Close">' +
      '    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
      '  </button>' +
      '  <h2 class="lead-dl-title" id="leadModalTitle"></h2>' +
      '  <p class="lead-dl-sub" id="leadModalSub"></p>' +
      '  <div class="lead-dl-form" id="leadHsForm"></div>' +
      '  <p class="lead-dl-note" id="leadModalNote"></p>' +
      '</div>';
    document.body.appendChild(modal);
    formHost = modal.querySelector('#leadHsForm');
    modal.addEventListener('click', (e) => {
      if (e.target && e.target.getAttribute('data-lead-close')) closeLeadModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeLeadModal();
    });
    return modal;
  }

  function loadHubSpotScript() {
    if (window.hbspt && window.hbspt.forms) return Promise.resolve();
    if (hsReady) return hsReady;
    hsReady = new Promise((resolve, reject) => {
      const existing = document.querySelector('script[src*="js.hsforms.net/forms/embed"]');
      if (existing) {
        if (window.hbspt && window.hbspt.forms) { resolve(); return; }
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', reject);
        return;
      }
      const s = document.createElement('script');
      s.charset = 'utf-8';
      s.src = 'https://js.hsforms.net/forms/embed/v2.js';
      s.onload = () => resolve();
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return hsReady;
  }

  function openPdf(url) {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function formIdFor(mode, l) {
    if (mode === 'datasheet') return (HS_FORM.datasheet[l] || HS_FORM.datasheet.th);
    return HS_FORM[mode] || '';
  }

  function renderForm(mode, l) {
    const copy = COPY[l] || COPY.th;
    const formId = formIdFor(mode, l);
    if (!formId) {
      formHost.innerHTML = `<p class="lead-dl-form-error">${copy.missing}</p>`;
      return;
    }
    formHost.innerHTML = `<p class="lead-dl-form-loading">${copy.loading}</p>`;
    loadHubSpotScript().then(() => {
      formHost.innerHTML = '';
      window.hbspt.forms.create({
        portalId: HS_PORTAL,
        formId: formId,
        region: HS_REGION,
        target: '#leadHsForm',
        onFormSubmitted: () => {
          if (mode === 'datasheet') openPdf(DATASHEET[l] || DATASHEET.th);
          setTimeout(closeLeadModal, mode === 'datasheet' ? 600 : 1200);
        },
      });
    }).catch(() => {
      formHost.innerHTML = `<p class="lead-dl-form-error">${copy.error}</p>`;
    });
  }

  function openLeadModal(mode, langOverride) {
    ensureModal();
    const l = (langOverride === 'en' || langOverride === 'th') ? langOverride : lang();
    const copy = COPY[l] || COPY.th;
    const c = copy[mode] || copy.datasheet;
    modal.querySelector('#leadModalTitle').textContent = c.title;
    modal.querySelector('#leadModalSub').textContent = c.sub;
    modal.querySelector('#leadModalNote').textContent = copy.note;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const key = mode + ':' + l + ':' + formIdFor(mode, l);
    if (createdForMode !== key) {
      createdForMode = key;
      renderForm(mode, l);
    }
  }

  function closeLeadModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-datasheet-modal').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openLeadModal('datasheet', el.getAttribute('data-lead-lang'));
    });
  });
  document.querySelectorAll('.js-demo-modal').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openLeadModal('demo');
    });
  });
  document.querySelectorAll('.js-quote-modal').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openLeadModal('quote');
    });
  });
  document.querySelectorAll('.js-poc-modal').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openLeadModal('poc');
    });
  });
})();

