import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import ClinicInfo from './components/ClinicInfo';
import Footer from './components/Footer';
import { MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <ClinicInfo />
      </main>
      <Footer />

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
          <span className="font-bold text-lg">카카오톡 상담</span>
        </a>
      </div>
    </div>
  );
};

export default App;
