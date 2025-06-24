import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { House } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center bg-black-100 flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full text-center">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <House /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
