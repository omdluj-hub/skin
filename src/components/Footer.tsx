import React from 'react';

interface FooterProps {
  onAiClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAiClick }) => {
  return (
    <footer className="bg-brand-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold mb-4">후한의원 <span className="text-brand-primary">구미점</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              피부의 겉만 치료하는 것이 아니라 속까지 다스려 근본적인 아름다움을 찾아드립니다. 
              정직하고 세심한 진료로 믿고 찾을 수 있는 주치의가 되겠습니다.
            </p>
          </div>
          
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-200 uppercase tracking-wider">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Address: 경북 구미시 인동가산로 9-3 노블레스타워 4층</li>
                <li>Phone: 054-474-1075</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} Hoo Oriental Clinic Gumi. All rights reserved.
            <button 
              onClick={(e) => {
                e.preventDefault();
                onAiClick?.();
              }}
              className="ml-4 text-gray-600 hover:text-brand-primary transition-colors italic"
            >
              for AI
            </button>
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-300">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
