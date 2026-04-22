import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import ClinicInfo from './components/ClinicInfo';
import Footer from './components/Footer';
import AiGuide from './components/AiGuide';
import { MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  const [showAiGuide, setShowAiGuide] = useState(false);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch('https://adminpage-xi.vercel.app/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            site_id: 'skin',
            visited_path: window.location.pathname,
            referrer: document.referrer || 'direct',
            userAgent: navigator.userAgent
          }),
          mode: 'no-cors'
        });
      } catch (error) {
        console.error('Tracking failed:', error);
      }
    };
    trackVisit();
  }, []);

  if (showAiGuide) {
    return <AiGuide onBack={() => setShowAiGuide(false)} />;
  }

  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <ClinicInfo />
      </main>
      <Footer onAiClick={() => setShowAiGuide(true)} />

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <a
          href="https://pf.kakao.com/_JEGuu"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-3 pr-6 group"
        >
          <div className="bg-white/20 p-2 rounded-full">
            <MessageSquare size={24} />
          </div>
          <span className="font-bold text-lg">카카오톡 상담하기</span>
        </a>
      </div>
    </div>
  );
};

export default App;
