import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import GapSection from '../components/GapSection';
import ProgramSection from '../components/ProgramSection';
import FaqSection from '@/components/FaqSection';
import BeginSection from '@/components/BeginSection';
import PartnerScroll from '@/components/PartnerScroll';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <GapSection />
      <ProgramSection />
      <PartnerScroll />
      <FaqSection />
      <BeginSection />
    </main>
  );
}
