import Image from "next/image";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";


export default function page() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
    </>
  );
}
