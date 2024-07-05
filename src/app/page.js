import Events from "@/components/events/Events";
import Galery from "@/components/galery/Galery";
import Header from "@/components/header/header";
import Hero from "@/components/hero/Hero";
import Sale from "@/components/sale";
import ResponseData from "@/components/Ticket";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Events />
      <Galery />
      <Sale />
    </>
  );
}
