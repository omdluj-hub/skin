import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-32 bg-brand-bg/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.4em] mb-6">Problem & Solution</h2>
          <p className="text-5xl md:text-6xl font-black text-brand-secondary tracking-tighter">당신의 고민은 <span className="text-brand-primary">여기서 끝납니다</span></p>
          <div className="mt-10 w-32 h-1.5 bg-brand-primary mx-auto rounded-full opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -top-10 -left-6 bg-brand-secondary text-white px-8 py-3 rounded-2xl font-black z-10 shadow-xl tracking-widest text-sm italic">THE PROBLEM</div>
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white relative group">
              <img 
                src="/images/problem.jpg" 
                alt="Skin Concerns" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-secondary/20 group-hover:opacity-0 transition-opacity duration-1000"></div>
            </div>
            <div className="mt-12 space-y-4 px-6">
              <h3 className="text-3xl font-black text-brand-secondary tracking-tight">반복되는 피부 문제</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                겉만 치료해서는 해결되지 않습니다. <br />
                근본적인 원인을 찾아내는 것이 첫걸음입니다.
              </p>
            </div>
          </div>

          <div className="relative group md:mt-24">
            <div className="absolute -top-10 -right-6 bg-brand-primary text-white px-8 py-3 rounded-2xl font-black z-10 shadow-xl tracking-widest text-sm italic">THE SOLUTION</div>
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white relative group">
              <img 
                src="/images/solution.jpg" 
                alt="Professional Treatment" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent"></div>
            </div>
            <div className="mt-12 space-y-4 px-6">
              <h3 className="text-3xl font-black text-brand-primary tracking-tight">후한의원의 정밀한 치료</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                숙련된 한의사의 정교한 시술과 한약 처방으로 <br />
                피부 스스로 재생하는 힘을 길러드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
