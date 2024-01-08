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
  date: string;
  item?: Array<string>;
  isKickOff: boolean;
  isOrange: boolean;
}

const TimelineData: Array<TimelineItem> = [
  {
    date: "12 January 2024",
    isKickOff: false,
    isOrange: false,
    title: "Pre-Assignment & Self Assesment",
    item: ["Transform Your Professional Journey with Personalized Guidance"]
  },
  {
    date: "12 January 2024",
    isKickOff: true,
    isOrange: true,
    title: "KICK OFF!"
  },
  {
    date: "13 January 2024",
    isKickOff: true,
    isOrange: false,
    title: "In-class Learning: Session #1"
  },
  {
    date: "13 January 2024",
    isKickOff: false,
    isOrange: false,
    title: "In-class Learning: Session #1",
    item: ["Personal & Professional Awareness", "Values and Interest Exploration"]
  },
  {
    date: "20 January 2024",
    isKickOff: false,
    isOrange: false,
    title: "Coaching Session",
    item: ["Chemistry and Goal Setting"]
  },
  {
    date: "27 January 2024",
    isKickOff: false,
    isOrange: false,
    title: "In-class Learning: Session #2",
    item: ["Job Market Trends & Networking Strategies", "LinkedIn & Jobstreet Optimization"]
  },
  {
    date: "3 February 2024",
    isKickOff: false,
    isOrange: false,
    title: "In-class Learning: Session #3",
    item: ['Durable & Transfarable Skills for Future Works']
  },
  {
    date: "10 Februari 2024",
    isKickOff: true,
    isOrange: false,
    title: "1-on-1 Coaching"
  },
  {
    date: "17 Februari 2024",
    isKickOff: false,
    isOrange: false,
    title: "In-class Learning: Session #4",
    item: ["Personal Branding"]
  },
  {
    date: "24 Februari 2024",
    isKickOff: true,
    isOrange: false,
    title: "1-on-1 Coaching"
  },
  {
    date: "25 Februari 2024",
    isKickOff: true,
    isOrange: true,
    title: "Networking & Closing Program"
  },
]

export { FAQData, TimelineData }