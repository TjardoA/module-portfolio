export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const aboutData = {
  heading: "About Me",
  paragraphs: [
    `Hi, I’m Tjardo Antonie — a web development student at Grafisch Lyceum Utrecht with a strong passion for design, code, and creativity.`,
    `I’m currently studying to become a full-stack web developer, with a deep interest in modern technologies like Next.js, React, and Tailwind CSS. I love exploring new tools and frameworks, and I’m always looking to learn and improve.`,
    `Outside of coding, you’ll probably find me listening to music, or staying active through sports. I'm all about combining creativity with technology to build beautiful and functional web experiences.`,
  ],
  image: {
    src: "/profile.jpg",
    alt: "Profile Picture",
  },
};

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm always eager to learn and grow.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a portfolio website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justiify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Kiosk for Happy Herbivore",
    des: "We built a kiosk for Happy Herbivore, featuring all products connected through a database. The project uses Laravel and React. We also created an analytics page to track orders and the most popular products.",
    img: "/kiosk.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/js.png"],
    link: "https://happy-herbivore.pepijnbullens.nl/",
  },
  {
    id: 2,
    title: "Annex Bios Bilthoven",
    des: "A modern website for a local cinema, built with HTML, Tailwind CSS. It features a dynamic movie schedule, ticket booking system, and a responsive design.",
    img: "bios.png",
    iconLists: ["/tail.svg", "/html.webp", "/js.png"],
    link: "https://annexbiosbilthoven.gluwebsite.nl/index.php",
  },
  {
    id: 3,
    title: "Rolvin Rijkaard",
    des: "A personal website for Rolvin Rijkaard, showcasing his portfolio and achievements. The site is built with Elementor and Wordpress, featuring a clean design and smooth animations.",
    img: "rolvin.png",
    iconLists: ["/wp.png", "/ele.webp"],
    link: "https://rolvinrijkaardpt.nl/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];
