import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:h-screen flex items-center overflow-hidden bg-white pt-20 lg:pt-0">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-bg/30 skew-x-12 translate-x-1/4 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text Content */}
        <div className="relative z-10 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-block bg-brand-primary/10 px-6 py-2 rounded-full mb-8">
            <span className="text-brand-primary font-bold text-sm tracking-[0.2em] uppercase">Premium Medical Skin Care</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-secondary leading-[1.4] mb-8 tracking-tighter break-keep whitespace-pre-line">
            피부의 본질에{"\n"}
            <span className="text-brand-primary italic">다시, 집중하다</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium tracking-tight max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            당신만을 위한 고귀한 피부 관리 시스템 <br className="hidden md:block" />
            후한의원 구미점의 프리미엄 메디컬 케어
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a 
              href="https://naver.me/5N15Owng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-secondary text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-[0_20px_50px_-10px_rgba(40,54,70,0.4)] hover:bg-brand-primary hover:shadow-[0_20px_50px_-10px_rgba(152,185,171,0.5)] hover:-translate-y-1 transition-all duration-300 group"
            >
              1:1 맞춤 상담 신청
              <svg 
                className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Framed Image */}
        <div className="relative h-[450px] md:h-[600px] lg:h-[750px] animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="absolute inset-0 bg-brand-secondary/5 rounded-[60px] transform -rotate-3 scale-105"></div>
          <div className="relative h-full w-full rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-8 border-white">
            <img 
              src="/images/real_interior_01.jpg" 
              alt="후한의원 구미점 프리미엄 내부 인테리어" 
              className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden lg:block">
        <div className="w-8 h-12 border-2 border-brand-primary/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-brand-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
