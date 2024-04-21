import Image from "next/image";
import Header from "./_components/header";
import Hero from "./_components/hero";
export default function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
    </div>
  );
}
