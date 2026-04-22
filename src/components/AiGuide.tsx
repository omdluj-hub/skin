import React from 'react';
import { ArrowLeft, Bot, Code, Info, MapPin, Phone, Sparkles } from 'lucide-react';

interface AiGuideProps {
  onBack: () => void;
}

const AiGuide: React.FC<AiGuideProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors mb-12 font-bold"
        >
          <ArrowLeft size={20} />
          <span>메인 페이지로 돌아가기</span>
        </button>

        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-brand-primary/10 rounded-2xl text-brand-primary">
              <Bot size={32} />
            </div>
            <h1 className="text-4xl font-black text-brand-secondary tracking-tight">AI Agent Guide</h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            이 문서는 AI 에이전트가 후한의원 구미점 웹사이트의 구조와 핵심 가치를 정확히 이해하고 지원할 수 있도록 설계된 기술 가이드입니다.
          </p>
        </header>

        <div className="grid gap-12">
          {/* Project Identity */}
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 text-brand-primary">
              <Sparkles size={24} />
              <h2 className="text-2xl font-bold text-brand-secondary">Project Identity</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p><span className="font-bold text-brand-secondary">브랜드명:</span> 후한의원 구미점 (Hoo Oriental Clinic Gumi)</p>
              <p><span className="font-bold text-brand-secondary">핵심 가치:</span> "피부의 본질에 집중하다" - 겉으로 드러난 증상뿐만 아니라 신체 내부의 근본적인 원인을 찾아 치료하는 프리미엄 메디컬 스킨케어.</p>
              <p><span className="font-bold text-brand-secondary">주요 타겟:</span> 반복되는 여드름, 깊은 여드름 흉터, 색소 침착, 모공각화증 등으로 고민하는 환자.</p>
            </div>
          </section>

          {/* Core Services */}
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 text-brand-primary">
              <Info size={24} />
              <h2 className="text-2xl font-bold text-brand-secondary">Core Services & Programs</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-brand-bg rounded-2xl">
                <h3 className="font-bold text-brand-secondary mb-2">1. 여드름 치료</h3>
                <p className="text-sm text-gray-600">압출 케어, 피지 조절, 한방 체질 개선을 통한 근본적 여드름 탈출.</p>
              </div>
              <div className="p-6 bg-brand-bg rounded-2xl">
                <h3 className="font-bold text-brand-secondary mb-2">2. 여드름 흉터 (트랜스테라피)</h3>
                <p className="text-sm text-gray-600">흉터조각술과 새살 재생 기술로 함몰된 흉터를 복원.</p>
              </div>
              <div className="p-6 bg-brand-bg rounded-2xl">
                <h3 className="font-bold text-brand-secondary mb-2">3. 여드름 자국</h3>
                <p className="text-sm text-gray-600">엠톤(M-ton)과 한방 필링으로 붉고 검은 자국 제거 및 미백 케어.</p>
              </div>
              <div className="p-6 bg-brand-bg rounded-2xl">
                <h3 className="font-bold text-brand-secondary mb-2">4. 바디 케어</h3>
                <p className="text-sm text-gray-600">등/가슴 여드름 및 닭살 피부(모공각화증) 매끈 치료.</p>
              </div>
            </div>
          </section>

          {/* Business Information */}
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 text-brand-primary">
              <MapPin size={24} />
              <h2 className="text-2xl font-bold text-brand-secondary">Business Information</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3"><Phone size={18} className="text-brand-primary" /> 054-474-1075</li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-brand-primary mt-1" /> 경북 구미시 인동가산로 9-3 노블레스타워 4층</li>
              <li className="flex items-center gap-3"><span className="font-bold text-brand-secondary">예약:</span> 네이버 예약 및 카카오톡 상담 가능</li>
            </ul>
          </section>

          {/* Technical Implementation */}
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 text-brand-primary">
              <Code size={24} />
              <h2 className="text-2xl font-bold text-brand-secondary">Technical Context</h2>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 text-blue-300 font-mono text-sm overflow-x-auto">
              <pre>{`{
  "tech_stack": ["React", "Vite", "Tailwind CSS", "Lucide React"],
  "design_system": {
    "primary_color": "#98B9AB (Mint)",
    "secondary_color": "#283646 (Navy)",
    "background": "#FDFDFD"
  },
  "components_structure": [
    "Header: Navigation & Logo",
    "Hero: Main visual & CTA",
    "ProblemSolution: Value proposition",
    "Services: Program details (Acne, Scar, Mark, Body)",
    "ClinicInfo: Map, Contact, Trust points",
    "Footer: Legal & Sitemap"
  ]
}`}</pre>
            </div>
          </section>
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AI Documentation for Hoo Oriental Clinic Gumi.</p>
        </footer>
      </div>
    </div>
  );
};

export default AiGuide;
