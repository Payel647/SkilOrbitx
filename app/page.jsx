import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GapSection from '@/components/GapSection';
import ProgramSection from '@/components/ProgramSection';
import FaqSection from '@/components/FaqSection';
import BeginSection from '@/components/BeginSection';
import PartnerScroll from '@/components/PartnerScroll';
import Changemakers from '@/components/Changemakers';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <GapSection />
      <ProgramSection />
      <Changemakers />
      <PartnerScroll />
      <FaqSection />
      <BeginSection />
    </main>
  );
}
