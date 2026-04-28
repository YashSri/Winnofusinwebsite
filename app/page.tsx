import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PartnerMarquee from "@/components/PartnerMarquee";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Insights from "@/components/Insights";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <PartnerMarquee />
      <Solutions />
      <Industries />
      <Insights />
    </main>
  );
}
