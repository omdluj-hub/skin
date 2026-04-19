import React from 'react';

const treatments = [
  {
    title: '여드름 치료',
    subtitle: 'ACNE CARE SYSTEM',
    description: '단순한 압출을 넘어 피부 면역력을 회복하고 피지 분비를 정상화합니다. 반복되는 여드름의 굴레에서 벗어나는 후한의원만의 통합 솔루션.',
    image: '/images/acne_info_graphic.jpg',
    tags: ['압출케어', '한방팩', '피지조절', '체질개선'],
    color: 'bg-mint-50',
    link: 'https://www.hooclinic.co.kr/index.php/html/8'
  },
  {
    title: '여드름 흉터',
    subtitle: 'SCAR RECOVERY',
    description: '트랜스테라피와 흉터조각술로 함몰된 흉터를 새살로 채워줍니다. 정교한 시술로 매끄러운 피부 결을 되찾아드립니다.',
    image: '/images/transtherapy_info.jpg',
    tags: ['트랜스테라피', '흉터조각술', '새살재생'],
    color: 'bg-white',
    link: 'https://www.hooclinic.co.kr/index.php/html/243'
  },
  {
    title: '여드름 자국',
    subtitle: 'REDNESS & MARKS',
    description: '엠톤과 한방 필링으로 붉고 검은 자국을 깨끗하게 지워줍니다. 맑고 투명한 피부 톤으로의 회복을 경험하세요.',
    image: '/images/mton_treatment.jpg',
    tags: ['엠톤', '미백케어', '피부톤개선', '재생필링'],
    color: 'bg-mint-50',
    link: 'https://www.hooclinic.co.kr/index.php/html/9'
  },
  {
    title: '모공각화증 / 바디케어',
    subtitle: 'BODY & TEXTURE',
    description: '등, 가슴 여드름과 모공각화증을 매끈하게 치료합니다. 노출이 잦은 계절에도 자신 있는 매끄러운 바디 피부를 약속합니다.',
    image: '/images/kp_02.jpg',
    tags: ['등/가슴여드름', '닭살피부', '알라딘필링'],
    color: 'bg-white',
    link: 'https://www.hooclinic.co.kr/index.php/html/204'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="overflow-hidden bg-white">
      {treatments.map((item, index) => (
        <div 
          key={index} 
          className={`relative flex items-center ${item.color} px-4 py-24 sm:px-6 lg:px-8`}
        >
          {/* Subtle background text for premium feel */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] select-none flex items-center justify-center">
            <span className="text-[20rem] font-black uppercase whitespace-nowrap leading-none tracking-tighter">
              {item.subtitle.split(' ')[0]}
            </span>
          </div>

          <div className={`max-w-7xl mx-auto w-full flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 lg:gap-32`}>
            {/* Image Section */}
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border-8 border-white group relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-10 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-brand-primary"></div>
                  <span className="text-brand-primary font-bold tracking-[0.5em] text-xs uppercase">{item.subtitle}</span>
                </div>
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-secondary tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {item.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-sm font-bold border-2 border-brand-primary/10 text-brand-secondary/80 px-6 py-3 rounded-2xl bg-white shadow-sm"
                  >
                    # {tag}
                  </span>
                ))}
              </div>

              <div className="pt-10">
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-secondary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-primary transition-all shadow-[0_20px_40px_-10px_rgba(40,54,70,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(152,185,171,0.4)] hover:-translate-y-1 group"
                >
                  프로그램 자세히 보기
                  <svg 
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
