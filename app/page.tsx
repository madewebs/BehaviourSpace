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
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="therapists"><Team /></section>
    <section id="contact"><Contact /></section>
    <Footer/>
    </>
  );
}
