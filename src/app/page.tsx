import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import HeroSection from "@/components/ui/HeroSection";
import Image from "next/image";
import Skills from "@/components/ui/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.2] antialiased">
        <HeroSection/>
        <About/>
        <Projects/>
        <Skills/>
        
    </main>
  );
}
