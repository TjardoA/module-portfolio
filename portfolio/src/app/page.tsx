import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center h-screen bg-black-100 flex-col flex-overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full text-center">
        <Hero />
      </div>
    </main>
  );
}
