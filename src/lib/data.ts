interface FAQItem {
  question: string;
  answer: string;
}
const FAQData: Array<FAQItem> = [
  {
    question: "Bagaimana cara daftar konseling bersama psikolog Generasi Cakap?",
    answer: "Tidak bisa. Pembayaran hanya dapat dilakukan via transfer dengan nomer rekening yang sudah diarahkan oleh Admin Helpdesk kami",
  },
  {
    question: "Bagaimana cara daftar konseling bersama psikolog Generasi Cakap?",
    answer: "Tidak bisa. Pembayaran hanya dapat dilakukan via transfer dengan nomer rekening yang sudah diarahkan oleh Admin Helpdesk kami",
  },
  {
    question: "Bagaimana cara daftar konseling bersama psikolog Generasi Cakap?",
    answer: "Tidak bisa. Pembayaran hanya dapat dilakukan via transfer dengan nomer rekening yang sudah diarahkan oleh Admin Helpdesk kami",
  },
  {
    question: "Bagaimana cara daftar konseling bersama psikolog Generasi Cakap?",
    answer: "Tidak bisa. Pembayaran hanya dapat dilakukan via transfer dengan nomer rekening yang sudah diarahkan oleh Admin Helpdesk kami",
  },
  {
    question: "Bagaimana cara daftar konseling bersama psikolog Generasi Cakap?",
    answer: "Tidak bisa. Pembayaran hanya dapat dilakukan via transfer dengan nomer rekening yang sudah diarahkan oleh Admin Helpdesk kami",
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