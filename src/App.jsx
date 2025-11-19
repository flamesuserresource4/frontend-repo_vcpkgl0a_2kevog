import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofBar from './components/SocialProofBar';
import Discover from './components/Discover';
import Journey from './components/Journey';
import Quotes from './components/Quotes';
import Inside from './components/Inside';
import ForWhom from './components/ForWhom';
import Author from './components/Author';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-cyan-500/30 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-mesh" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 grain pointer-events-none opacity-[0.06]" aria-hidden="true" />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <SocialProofBar />
        <Discover />
        <Journey />
        <Quotes />
        <Inside />
        <ForWhom />
        <Author />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
