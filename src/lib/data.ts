interface FAQItem {
  question: string;
  answer: Array<string>;
}
const FAQData: Array<FAQItem> = [
  {
    question: "Apakah program Career Catalyst itu?",
    answer: [
      "Career Catalyst merupakan program intensif pengembangan diri dan karir, dilakukan selama 2 (dua) bulan, berupa kelas online pembelajaran dan pendampingan bersama Coach Professional dari GenerasiCakap dan Coaching Indonesia. <br/> Program ini bertujuan membantu #TemanCakap untuk mengenali identitas diri, kejelasan hidup<i>(clarity)</i> dan merancang pemetaan<i>(blueprint)</i> karir yang sukses, terencana dan penuh makna."
    ],
  },
  {
    question: "Apakah pelaksanaan program Career Catalyst dilaksanakan secara online?",
    answer: ["Betul sekali, Career Catalyst dilaksanakan secara online yaaa. Dilakukan dengan metode pembelajaran <i>synchronous</i> dan <i>asynchronous.</i>"],
  },
  {
    question: "Benefit apa yang akan saya dapatkan?",
    answer: [
      "E- Certificate",
      "4x kelas online",
      "3x one-on-one coaching",
      "Networking dengan coach",
      "Accountability partner"
    ],
  },
  {
    question: "Bagaimana cara mendaftar program Career Catalyst?",
    answer: ["Kamu dapat menghubungi WhatsApp Admin (+62) 819-3007-3538.<br/>Yuk segera daftarkan dirimu!"],
  },
  {
    question: "Tanggal berapa batas waktu pendaftaran program Career Catalyst?",
    answer: ["Batas pendaftaran program Career Catalyst mulai tanggal 01 Februari - 16 Februari 2024."],
  },
  {
    question: "Berapa Investasi untuk Program Career Catalyst?",
    answer: ["159K per bulan atau hanya 318K selama program berlangsung."],
  },
  {
    question: "Apakah tersedia metode pembayaran cicilan?",
    answer: ["Bisa banget. #TemanCakap bisa menghubungi WhatsApp Admin (+62) 819-3007-3538"],
  },
  {
    question: "Jika perusahaan saya ingin mengikuti program Career Catalyst, bagaimana caranya?",
    answer: ["Mudah sekali! Daftarkan segera organisasi kamu dengan ketentuan, setiap organisasi dapat mengikutsertakan peserta minimal.15 orang yaa! Kontak Admin GenerasiCakap yaa!"],
  },
  {
    question: "Jika saya ingin bertanya lebih detail terkait dengan program Career Catalyst, kontak mana yang dapat saya hubungi?",
    answer: ["Untuk mendapatkan informasi lebih detail terkait program Career Catalyst, kamu dapat menghubungi WhatsApp Admin (+62) 819-3007-3538 yaa"],
  },
]


interface TimelineItem {
  title: string;
  date: string | null;
  item?: Array<string>;
  isKickOff: boolean;
  isOrange: boolean;
}

const TimelineData: Array<TimelineItem> = [
  {
    date: null,
    isKickOff: false,
    isOrange: false,
    title: "Pre-Assignment & Self Assesment",
    item: ["Transform Your Professional Journey with Personalized Guidance", "Personal & Professional Awareness"]
  },
  {
    date: "19 Februari 2024",
    isKickOff: true,
    isOrange: true,
    title: "KICK OFF!"
  },
  {
    date: "19 Februari 2024",
    isKickOff: true,
    isOrange: false,
    title: "In-class Learning: Session #1",
    item: ["Personal & Professional Awareness", "Values and Interest Exploration"]
  },
  {
    date: "24 Februari 2024",
    isKickOff: false,
    isOrange: false,
    title: "Coaching Session",
    item: ["Chemistry and Goal Setting", "Personal & Professional Awareness"]
  },
  {
    date: "29 Februari 2024",
    isKickOff: false,
    isOrange: false,
    title: "In-class Learning: Session #2",
    item: ["Job Market Trends & Networking Strategies", "LinkedIn & Jobstreet Optimization", "LinkedIn & Jobstreet Optimization"]
  },
  {
    date: "4 Maret 2024",
    isKickOff: false,
    isOrange: false,
    title: "In-class Learning: Session #3",
    item: ['Durable & Transfarable Skills for Future Works', "Personal & Professional Awareness"]
  },
  {
    date: "9 Maret 2024",
    isKickOff: true,
    isOrange: false,
    title: "In-class Learning: Session #1"
  },
  {
    date: "14 Maret 2024",
    isKickOff: false,
    isOrange: false,
    title: "In-class Learning: Session #4",
    item: ["Personal Branding", "Personal & Professional Awareness"]
  },
  {
    date: "21 Maret 2024",
    isKickOff: true,
    isOrange: false,
    title: "In-class Learning: Session #1"
  },
  {
    date: "23 Maret 2024",
    isKickOff: true,
    isOrange: true,
    title: "Networking & Closing Program"
  },
]

export { FAQData, TimelineData }