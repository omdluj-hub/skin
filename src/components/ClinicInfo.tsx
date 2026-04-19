import React from 'react';
import { Clock, MapPin, Phone, Info } from 'lucide-react';

const ClinicInfo: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Trust & Process</h2>
              <p className="text-4xl md:text-5xl font-black text-brand-secondary tracking-tight">당신의 피부를 위한 <br />가장 정직한 약속</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center">
                  <Clock className="text-brand-primary" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-secondary mb-2">충분한 상담 시간</h4>
                  <p className="text-gray-600 leading-relaxed">공장식 진료가 아닌, 한 분 한 분의 피부 고민을 깊이 듣고 체질과 원인을 분석하여 최적의 치료 계획을 수립합니다.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center">
                  <Info className="text-brand-primary" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-secondary mb-2">투명한 진료 과정</h4>
                  <p className="text-gray-600 leading-relaxed">사용되는 약재와 시술 과정을 투명하게 공개하며, 과잉 진료 없이 꼭 필요한 치료만을 권해드립니다.</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-secondary p-10 rounded-[2rem] text-white shadow-2xl">
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Phone size={24} className="text-brand-primary" />
                  <span className="text-2xl font-bold font-mono">054-474-1075</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-brand-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-bold mb-1">경상북도 구미시 인동가산로 9-3</p>
                    <p className="text-white/70 font-medium">노블레스타워 4층</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://naver.me/5N15Owng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-brand-primary text-white py-4 rounded-xl font-bold text-center hover:bg-white hover:text-brand-primary transition-all shadow-lg shadow-brand-primary/20 hover:-translate-y-1"
                >
                  네이버 예약
                </a>
                <a 
                  href="https://pf.kakao.com/_JEGuu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-white/30 text-white py-4 rounded-xl font-bold text-center hover:bg-white/10 transition-all hover:-translate-y-1"
                >
                  카카오 상담
                </a>
              </div>
            </div>

            <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-gray-50">
              <iframe 
                src="https://www.google.com/maps?q=구미+후한의원&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="후한의원 구미점 위치"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-24">
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/consultation.jpg" alt="1:1 맞춤 상담" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/real_interior_02.jpg" alt="후한의원 구미점 내부 전경" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/mton_treatment.jpg" alt="첨단 메디컬 시술" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/real_interior_03.jpg" alt="프리미엄 대기실" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
