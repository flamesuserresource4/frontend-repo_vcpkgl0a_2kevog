import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Paradox from './components/Paradox';
import Discover from './components/Discover';
import Journey from './components/Journey';
import Inside from './components/Inside';
import Quotes from './components/Quotes';
import ForWhom from './components/ForWhom';
import Author from './components/Author';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GlitchText from './components/GlitchText';
import EmailCapture from './components/EmailCapture';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />

        <section className="py-10 text-center bg-black">
          <h2 className="text-2xl text-slate-300">Reality is a <GlitchText className="text-cyan-300 font-semibold">GLITCH</GlitchText>.</h2>
          <div className="max-w-2xl mx-auto"><EmailCapture /></div>
        </section>

        <Paradox />
        <Discover />
        <Journey />
        <Inside />
        <Quotes />
        <ForWhom />
        <Author />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
