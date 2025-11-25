import { FloatingElement } from '../components/animations';

const DecorativeElements = () => {
  return (
    <>
      {/* Floating blur orbs */}
      <FloatingElement delay={0} duration={8} yOffset={30} className="absolute top-20 left-10 opacity-40">
        <div className="w-64 h-64 bg-thatch-200 rounded-full blur-3xl"></div>
      </FloatingElement>

      <FloatingElement delay={2} duration={10} yOffset={25} className="absolute bottom-32 left-20 opacity-30">
        <div className="w-48 h-48 bg-ocean-400 rounded-full blur-3xl"></div>
      </FloatingElement>

      <FloatingElement delay={4} duration={12} yOffset={20} className="absolute top-1/3 left-1/4 opacity-25">
        <div className="w-56 h-56 bg-mint-300 rounded-full blur-3xl"></div>
      </FloatingElement>

      {/* Palm leaf accent - top left */}
      <FloatingElement delay={1} duration={7} yOffset={15} className="absolute -top-10 -left-10 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 200C100 150 70 120 20 120C20 120 50 110 70 80C90 50 100 20 100 0C100 20 110 50 130 80C150 110 180 120 180 120C130 120 100 150 100 200Z"
            fill="url(#palm-gradient)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="palm-gradient" x1="20" y1="0" x2="180" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3dcdb3" />
              <stop offset="100%" stopColor="#c1f0e8" />
            </linearGradient>
          </defs>
        </svg>
      </FloatingElement>

      {/* Palm leaf accent - bottom right */}
      <FloatingElement delay={3} duration={9} yOffset={18} className="absolute -bottom-10 -right-10 opacity-15 rotate-180">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 200C100 150 70 120 20 120C20 120 50 110 70 80C90 50 100 20 100 0C100 20 110 50 130 80C150 110 180 120 180 120C130 120 100 150 100 200Z"
            fill="url(#palm-gradient-2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="palm-gradient-2" x1="20" y1="0" x2="180" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2eb89e" />
              <stop offset="100%" stopColor="#7de0cf" />
            </linearGradient>
          </defs>
        </svg>
      </FloatingElement>

      {/* Circular accents */}
      <FloatingElement delay={5} duration={11} yOffset={12} className="absolute top-1/4 right-1/4 opacity-10">
        <div className="w-32 h-32 rounded-full border-4 border-thatch-300"></div>
      </FloatingElement>

      <FloatingElement delay={6} duration={13} yOffset={16} className="absolute bottom-1/4 left-1/3 opacity-10">
        <div className="w-24 h-24 rounded-full border-4 border-ocean-400"></div>
      </FloatingElement>
    </>
  );
};

export default DecorativeElements;
