import Events from "@/components/events/Events";
import Header from "@/components/header/header";
import Hero from "@/components/hero/Hero";
import Sale from "@/components/sale";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sale />
      <Events />
    </>
  );
}
