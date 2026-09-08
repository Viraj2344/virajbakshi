import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Gigs from "@/components/Gigs";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Research from "@/components/Research";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Skills />
        <Gigs />
        <Contact />
      </main>
    </>
  );
}
