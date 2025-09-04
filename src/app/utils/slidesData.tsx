import { title } from "process";

export const slides = [
  {
    title:"60 секунд",
  },
  {
    title: "Төслийн зорилго",
    content: `• Хүүхдийн унших сонирхол болон чадварыг дэмжинэ 
• AI-interactive элементүүдтэй
• Энгийн, ойлгомжтой байдлаар хийсэн`,
    image: "/design.png",
    // imageAlt: "Багийн хамтын ажиллагаа, төслийн төлөвлөлт",
  },
  //   {
  //     title: "Гол боломжууд",
  //     content: `• Уншсан үгсийн нарийвчлалаа харах боломжтой.
  //     • Гар утасны апп-д зориулсан интерфейс
  // • Хүүхдийн түвшинд тохирсон уншлагын хичээл
  // • Чөлөөт цагт тоглох жижиг тоглоомууд
  //  `,
  //     image: "photo2.svg",
  //     imageAlt: "Dashboard интерфейс ба боломжууд",
  //   },
  {
    title: "Дизайн ба хэрэглэгчийн туршлага",
    content: `• Хялбар, ойлгомжтой 
•  Хүүхдийн анхаарлыг татахуйц
• Motion, animation
• Responsive design`,
    image: "/reading.png",
    imageAlt: "UI/UX дизайн, өнгөний палитр ба wireframes",
  },
  {
    title: "Ашигласан технологи",
    content: `• React Media Recorder/ Speech recognition
• Gemini AI API
    • Frontend: Next.js,TypeScript,Tailwind CSS
• Backend:  PostgreSQL, Prisma ORM
• State Management: React hooks 
• Deployment: Vercel
`,

    image: "/images.jpeg",
    imageAlt: "Хөгжүүлэлтийн орчин, код ба технологи",
  },
  {
    title: "Цаашдын төлөвлөгөө",
    content: `• Илүү олон хичээл нэмэх
• UI/UX сайжруулалт хийх
• Бүх төхөөрөмж дээр ажиллах 
• AI интеграц сайжруулах
• Хэрэглэгчийн санал хүсэлтийг авч сайжруулалт хийх

`,
    image: "/vision.jpg",
    imageAlt: "Ирээдүйн технологи ба инновац",
  },
  {
    title: "Багийн гишүүд",

    image: "team",
    imageAlt: "Багийн гишүүд",
    isTeamSlide: true,
    teamMembers: [
      {
        name: "Г.Алтансүх",
        image: "/member1.jpg",
        description: "Frontend & Backend",
      },
      {
        name: "Г.Ган-Эрдэнэ",
        image: "/member6.jpg",
        description: "Frontend & Backend",
      },
      {
        name: "Э.Билгүүн",
        image: "/member2.jpg",
        description: "Frontend & Backend",
      },
      {
        name: "Ж.Болортуяа",
        image: "/member3.jpg",
        description: "Frontend & Backend",
      },
      {
        name: "М.Тэргэл",
        image: "/member4.jpeg",
        description: "Frontend & Backend",
      },
      {
        name: "Г.Гантуяа",
        image: "/member5.jpeg",
        description: "Frontend & Backend",
      },
    ],
  },
];
