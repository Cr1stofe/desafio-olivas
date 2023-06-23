import { Cases } from "@/components/pages/home/Cases";
import { Contact } from "@/components/pages/home/Contact";
import { Footer } from "@/components/pages/home/Footer";
import { ForYou } from "@/components/pages/home/ForYou";
import { Hero } from "@/components/pages/home/Hero";
import { Navbar } from "@/components/pages/home/Navbar";
import { TopNews } from "@/components/pages/home/TopNews";

export default function Home() {
  return (
    /* Container principal da página */
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <ForYou />
      <TopNews />
      <Cases />
      <Contact />
      <Footer />
    </div>
  )
}
