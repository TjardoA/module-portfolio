import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import About from "@/components/ui/About";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
    { name: "Projects", link: "#projects" },
  ];

  return (
    <main className="relative flex justify-center items-center bg-black-100 flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full text-center">
        <FloatingNav navItems={navItems} />

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Grid />
        </section>

        <section id="projects">
          <RecentProjects />
        </section>
      </div>
    </main>
  );
}
