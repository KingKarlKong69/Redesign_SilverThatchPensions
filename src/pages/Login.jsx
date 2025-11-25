import { useState } from 'react';
import { motion } from 'framer-motion';
import AuthCard from '../components/AuthCard';
import DecorativeElements from '../components/DecorativeElements';
import Typewriter from '../components/Typewriter';
import { FadeIn } from '../components/animations';

const Login = ({ onLogin, onForgotPassword, onBack }) => {
  const [accountType, setAccountType] = useState('member'); // 'member' or 'employer'

  const toggleAccountType = () => {
    setAccountType(prev => prev === 'member' ? 'employer' : 'member');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pearl-50 via-white to-thatch-50 p-4 sm:p-6 lg:p-8 xl:p-12 min-h-screen lg:min-h-0">
        {/* Decorative Elements */}
        <DecorativeElements />

        {/* Logo/Brand - Clickable */}
        <FadeIn delay={0} className="absolute top-0 sm:top-1 lg:top-2 left-4 sm:left-6 lg:left-8 z-20">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center shadow-float overflow-hidden">
              <img 
                src="/src/assets/images/logo.png" 
                alt="Silver Thatch Pensions Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-custom-900">
                Silver Thatch Pensions
              </h2>
              <p className="text-xs text-slate-custom-500">BUILDING WEALTH ON YOUR TERMS</p>
            </div>
          </button>
        </FadeIn>

        {/* Auth Card */}
        <div className="relative z-10 w-full flex items-center justify-center mt-16">
          <AuthCard 
            onLogin={onLogin} 
            onForgotPassword={onForgotPassword} 
            accountType={accountType}
          />
        </div>

        {/* Bottom Text */}
        <FadeIn delay={0.8} className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 text-center z-20 px-4">
          <p className="text-xs text-slate-custom-400">
            Secured by industry-leading encryption standards
          </p>
        </FadeIn>

        {/* Account Type Switch Button - Bottom Right */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={toggleAccountType}
          className="fixed bottom-6 right-6 z-30 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium text-slate-custom-700 hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
        >
          <span className="flex items-center gap-2">
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: accountType === 'employer' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </motion.svg>
            {accountType === 'member' ? 'Switch to Employer Access' : 'Switch to Member Access'}
          </span>
        </motion.button>
      </div>

      {/* Right Side - Background Image with Overlay */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden group">
        {/* Background Image with wind animation and zoom on hover */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-sway transition-transform duration-[5000ms] ease-out group-hover:scale-110"
          style={{
            backgroundImage: 'url("/src/assets/images/background.png")',
          }}
        >
          {/* Gradient Overlay matching image colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-thatch-600/80 via-ocean-500/70 to-thatch-800/80"></div>
          
          {/* Additional teal overlay for color matching */}
          <div className="absolute inset-0 bg-thatch-500/30 mix-blend-multiply"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white pointer-events-none">
          <FadeIn delay={0.4} className="max-w-lg text-center pointer-events-auto">
            <h2 className="text-4xl xl:text-5xl font-display font-bold mb-6 leading-tight">
              Secure Your Future with Confidence
            </h2>
            
            {/* Typewriter Effect */}
            <Typewriter 
              texts={[
                'Bank-level security & encryption',
                'Real-time portfolio tracking',
                'Expert financial guidance',
                'Caribbean-focused investments',
                
              ]}
              speed={80}
              deleteSpeed={40}
              delayBetween={2500}
            />
          </FadeIn>

          {/* Decorative circles */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-thatch-300/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Mobile: Background Image as Header */}
      <div className="lg:hidden relative h-40 sm:h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-sway"
          style={{
            backgroundImage: 'url("/src/assets/images/background.png")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-thatch-600/80 via-ocean-500/70 to-thatch-800/80"></div>
          <div className="absolute inset-0 bg-thatch-500/30 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <FadeIn delay={0.2}>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white text-center">
              Silver Thatch Pensions
            </h2>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
