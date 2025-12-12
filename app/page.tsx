import Image from "next/image";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Team from "@/components/Team";


export default function page() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      {/* <div className="relative flex-1 overflow-hidden min-h-[100ch]">
        <Image
          src="/about2.jpg"
          alt="Behavior Space Clinic"
          fill
          className="object-cover brightness-50"
        />
    </div> */}
    {/* <Team/> */}
    <Contact/>
    <Footer/>
    </>
  );
}
