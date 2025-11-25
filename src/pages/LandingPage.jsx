import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FadeIn } from '../components/animations';

const LandingPage = ({ onLoginClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const heroSlides = [
    {
      image: '/src/assets/images/background.png',
      title: 'Your Financial Future is Secure',
      subtitle: 'Building wealth on your terms with Caribbean-focused investments',
      cta: 'Get Started Today'
    },
    {
      image: '/src/assets/images/arialcayman.jpg',
      title: 'Expert Retirement Planning',
      subtitle: 'Comprehensive pension solutions tailored for you',
      cta: 'Learn More'
    },
    {
      image: '/src/assets/images/boatport.jpg',
      title: 'Trusted by Thousands',
      subtitle: 'Join the largest pension provider in the Cayman Islands',
      cta: 'Join Now'
    },
    {
      image: '/src/assets/images/palm.jpeg',
      title: 'Better Plan, Better Future',
      subtitle: 'Plan your life with confidence and peace of mind',
      cta: 'Apply Now'
    }
  ];

  const reviews = [
    {
      text: "Excellent service! The team at Silver Thatch made my retirement planning stress-free and straightforward. I feel confident about my future.",
      author: "Sarah Mitchell",
      role: "Retired Teacher",
      rating: 5
    },
    {
      text: "Professional, knowledgeable, and always available to answer questions. They truly care about their members' financial well-being.",
      author: "James Roberts",
      role: "Business Owner",
      rating: 5
    },
    {
      text: "I've been with Silver Thatch for over 10 years. The consistent performance and transparency give me peace of mind.",
      author: "Maria Garcia",
      role: "Healthcare Professional",
      rating: 5
    },
    {
      text: "Outstanding customer service and expert guidance. Highly recommend for anyone planning their retirement in the Cayman Islands.",
      author: "David Chen",
      role: "Financial Advisor",
      rating: 5
    }
  ];

  const statistics = [
    { label: 'Total Plan', value: 921268865, prefix: '$', animated: true, icon: '↑' },
    { label: 'Balanced Portfolio', value: 539152961, prefix: '$', animated: true, icon: '↑' },
    { label: 'Growth Portfolio', value: 192052488, prefix: '$', animated: true, icon: '↑' },
    { label: 'Fixed Income Portfolio', value: 841146, prefix: '$', animated: true, icon: '↑' },
    { label: 'Aggressive', value: 18254780, prefix: '$', animated: true, icon: '↑' },
    { label: 'Conservative', value: 170967490, prefix: '$', animated: true, icon: '↑' }
  ];

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Handle scroll for nav visibility and background adaptation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past hero section
      setScrolled(currentScrollY > 100);
      
      // Hide nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (dropdownName) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 800);
    setCloseTimeout(timeout);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Falling Palm Leaves Animation - Always at the back */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
            }}
            animate={{
              y: ['0vh', '120vh'],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear'
            }}
          >
            <img 
              src="/src/assets/images/cutepalm.png" 
              alt="" 
              className="w-12 h-12 object-contain"
              style={{
                filter: 'blur(0.5px)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3">
            {/* Logo - Centered */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <motion.div 
                className="w-12 h-12 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img 
                  src="/src/assets/images/logo2.png" 
                  alt="Silver Thatch Pensions" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-display font-bold text-slate-custom-900">
                  Silver Thatch Pensions
                </h1>
                <p className="text-[10px] text-slate-custom-500 uppercase tracking-widest">
                  Building Wealth On Your Terms
                </p>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar with Glass-morphism - Overlays Hero */}
      <motion.nav 
        className={`fixed top-[72px] left-0 right-0 z-40 border-b shadow-lg transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg border-slate-custom-200' 
            : 'bg-white/20 backdrop-blur-md border-white/30'
        }`}
        animate={{ 
          y: navVisible ? 0 : -100,
          opacity: navVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Navigation Links */}
            <motion.div 
              className="flex items-center gap-1"
              animate={{ 
                opacity: searchExpanded ? 0 : 1,
                width: searchExpanded ? '0px' : 'auto',
                marginRight: searchExpanded ? '0px' : 'auto'
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* HOME */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`px-4 py-2 font-bold transition-colors drop-shadow-lg ${
                  scrolled 
                    ? 'text-slate-custom-700 hover:text-thatch-600' 
                    : 'text-white hover:text-thatch-200'
                }`}
              >
                HOME
              </button>

              {/* MEMBER SERVICES Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('member')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-semibold transition-colors flex items-center gap-1 drop-shadow-lg ${
                    scrolled 
                      ? 'text-slate-custom-700 hover:text-thatch-600' 
                      : 'text-white hover:text-thatch-200'
                  }`}
                >
                  MEMBER SERVICES
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {openDropdown === 'member' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-1 w-64 backdrop-blur-md shadow-2xl rounded-xl border overflow-hidden z-50 ${
                      scrolled
                        ? 'bg-white/95 border-slate-custom-200'
                        : 'bg-white/20 border-white/30'
                    }`}
                  >
                    <button
                      className={`block w-full text-left px-4 py-3 transition-colors border-b drop-shadow-lg ${
                        scrolled
                          ? 'text-slate-custom-700 hover:bg-slate-custom-100 border-slate-custom-200'
                          : 'text-white hover:bg-white/20 border-white/20'
                      }`}
                      onClick={() => onLoginClick('member')}
                    >
                      Member Login
                    </button>
                    <a href="#" className={`block px-4 py-3 transition-colors border-b drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100 border-slate-custom-200'
                        : 'text-white hover:bg-white/20 border-white/20'
                    }`}>
                      Silver Thatch Pensions Members Forms
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors border-b drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100 border-slate-custom-200'
                        : 'text-white hover:bg-white/20 border-white/20'
                    }`}>
                      Your Contributions
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors border-b drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100 border-slate-custom-200'
                        : 'text-white hover:bg-white/20 border-white/20'
                    }`}>
                      Plan Your Retirement
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors border-b drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100 border-slate-custom-200'
                        : 'text-white hover:bg-white/20 border-white/20'
                    }`}>
                      Your Retirement Benefit Options
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors border-b drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100 border-slate-custom-200'
                        : 'text-white hover:bg-white/20 border-white/20'
                    }`}>
                      Your Rights
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      Updating Personal Information
                    </a>
                  </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* EMPLOYER SERVICES Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('employer')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-semibold transition-colors flex items-center gap-1 drop-shadow-lg ${
                    scrolled 
                      ? 'text-slate-custom-700 hover:text-thatch-600' 
                      : 'text-white hover:text-thatch-200'
                  }`}
                >
                  EMPLOYER SERVICES
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {openDropdown === 'employer' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-1 w-64 backdrop-blur-md shadow-2xl rounded-xl border overflow-hidden z-50 ${
                      scrolled
                        ? 'bg-white/95 border-slate-custom-200'
                        : 'bg-white/20 border-white/30'
                    }`}
                  >
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      Employer Forms
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      How Silver Thatch Pension Plan Works
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      Joining the Silver Thatch Pension Plan
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      Employer Contributions
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      Investment of Contributions
                    </a>
                  </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* RESOURCES Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-semibold transition-colors flex items-center gap-1 drop-shadow-lg ${
                    scrolled 
                      ? 'text-slate-custom-700 hover:text-thatch-600' 
                      : 'text-white hover:text-thatch-200'
                  }`}
                >
                  RESOURCES
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {openDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-1 w-64 backdrop-blur-md shadow-2xl rounded-xl border overflow-hidden z-50 ${
                      scrolled
                        ? 'bg-white/95 border-slate-custom-200'
                        : 'bg-white/20 border-white/30'
                    }`}
                  >
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      Retirement Calculator
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      STP Lifecycle Calculator
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      Retirement Income Calculator
                    </a>
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      Newsletter Archive
                    </a>
                  </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* FINANCIAL PERFORMANCE Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('financial')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-semibold transition-colors flex items-center gap-1 drop-shadow-lg ${
                    scrolled 
                      ? 'text-slate-custom-700 hover:text-thatch-600' 
                      : 'text-white hover:text-thatch-200'
                  }`}
                >
                  FINANCIAL PERFORMANCE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {openDropdown === 'financial' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-1 w-64 backdrop-blur-md shadow-2xl rounded-xl border overflow-hidden z-50 ${
                      scrolled
                        ? 'bg-white/95 border-slate-custom-200'
                        : 'bg-white/20 border-white/30'
                    }`}
                  >
                    <a href="#" className={`block px-4 py-3 transition-colors drop-shadow-lg ${
                      scrolled
                        ? 'text-slate-custom-700 hover:bg-slate-custom-100'
                        : 'text-white hover:bg-white/20'
                    }`}>
                      Silver Thatch Pensions Financial Performance
                    </a>
                  </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side: Search Bar and Login */}
            <div className="flex items-center gap-3 flex-1 justify-end">
              {/* Search Bar */}
              <motion.div 
                className={`flex items-center gap-2 backdrop-blur-sm rounded-lg px-3 py-1.5 border transition-colors ${
                  scrolled
                    ? 'bg-slate-custom-100/60 border-slate-custom-300 hover:border-thatch-500'
                    : 'bg-white/30 border-white/40 hover:border-white/60'
                }`}
                animate={{ 
                  width: searchExpanded ? '100%' : 'auto'
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <svg className={`w-5 h-5 flex-shrink-0 drop-shadow-lg ${
                  scrolled ? 'text-slate-custom-600' : 'text-white'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchExpanded(true)}
                  onBlur={() => setSearchExpanded(false)}
                  placeholder="Search..."
                  className={`bg-transparent outline-none text-sm drop-shadow-lg transition-all duration-500 focus:ring-0 focus:outline-none ${
                    scrolled 
                      ? 'text-slate-custom-700 placeholder-slate-custom-500' 
                      : 'text-white placeholder-white/70'
                  }`}
                  style={{ width: searchExpanded ? '100%' : '128px' }}
                />
              </motion.div>

              {/* Login Icon Button */}
              <motion.button
                onClick={onLoginClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  opacity: searchExpanded ? 0 : 1,
                  scale: searchExpanded ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
                className={`p-2.5 backdrop-blur-sm rounded-lg border transition-colors flex-shrink-0 ${
                  scrolled
                    ? 'bg-slate-custom-100/60 border-slate-custom-300 hover:border-thatch-500'
                    : 'bg-white/30 border-white/40 hover:border-white/60'
                }`}
                title="Member Login"
                style={{ pointerEvents: searchExpanded ? 'none' : 'auto' }}
              >
                <svg className={`w-5 h-5 drop-shadow-lg ${
                  scrolled ? 'text-slate-custom-600' : 'text-white'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Slider */}
      <section className="relative h-screen mt-[72px] overflow-hidden">{/* Adjusted for header height */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${heroSlides[currentSlide].image}")`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-custom-900/90 via-slate-custom-800/80 to-ocean-900/70"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                <motion.button
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onLoginClick}
                  className="px-8 py-4 bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600 text-white text-lg font-bold rounded-2xl shadow-2xl transition-all"
                >
                  {heroSlides[currentSlide].cta}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-thatch-400 w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-pearl-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-slate-custom-900 mb-4">
              Why Choose Silver Thatch?
            </h2>
            <p className="text-xl text-center text-slate-custom-600 mb-16 max-w-2xl mx-auto">
              Trusted expertise and personalized service for your retirement journey
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: 'Secure & Regulated',
                description: 'Fully compliant with Cayman Islands pension regulations'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ),
                title: 'Strong Performance',
                description: 'Consistent returns with diversified investment portfolios'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: 'Expert Support',
                description: 'Dedicated team to guide you every step of the way'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Flexible Plans',
                description: 'Customizable solutions to fit your financial goals'
              }
            ].map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ 
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.2 } }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-custom-100 h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-thatch-500 to-ocean-500 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-custom-900 mb-3 flex-shrink-0">
                    {feature.title}
                  </h3>
                  <p className="text-slate-custom-600 flex-grow">
                    {feature.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Silver Thatch Pensions & Board of Trustees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Silver Thatch Pensions */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative bg-gradient-to-br from-thatch-500 to-ocean-500 p-8 md:p-12 rounded-3xl text-white shadow-2xl h-full overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: 'url("/src/assets/images/backgrounds.png")' }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-thatch-500/80 to-ocean-500/80" />
                
                {/* Content */}
                <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 border-b border-white/30 pb-4">
                  About Silver Thatch Pensions
                </h2>
                <div className="space-y-4 text-white/95 leading-relaxed">
                  <p>
                    In 1998, the Cayman government enacted legislation that requires all employers to provide their workers with pension benefits. Under the National Pensions Law, a pension plan must be registered and meet certain provisions.
                  </p>
                  <p>
                    Silver Thatch Pensions was established in 1997 to meet the requirements of that new legislation. Today, Silver Thatch Pensions is one of the largest pension providers in the Cayman Islands.
                  </p>
                  <div className="mt-8 space-y-3">
                    <button className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
                      <span className="font-semibold">Silver Thatch Advantage</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
                      <span className="font-semibold">Cayman Pension Plan at a Glance</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
                      <span className="font-semibold">Board of Trustees</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
                      <span className="font-semibold">Community Involvement</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-6 py-3 bg-white text-ocean-600 font-bold rounded-xl hover:bg-pearl-50 transition-all shadow-lg"
                  >
                    More About Us
                  </motion.button>
                </div>
                </div>
              </div>
            </motion.div>

            {/* Board of Trustees */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-slate-custom-700 to-slate-custom-900 p-8 md:p-12 rounded-3xl text-white shadow-2xl h-full overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: 'url("/src/assets/images/boardoftrustees.jpg")' }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-custom-700/80 to-slate-custom-900/80" />
                
                {/* Content */}
                <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 border-b border-white/30 pb-4">
                  Board of Trustees
                </h2>
                <div className="space-y-4 text-white/95 leading-relaxed">
                  <p>
                    The Silver Thatch Pension Plan is governed by a Board of Trustees that is elected by the membership at an Annual General Meeting (AGM). The role of the Trustees is to ensure the Plan is administered in accordance with applicable legislation and in the best interests of members.
                  </p>
                  <p>
                    In carrying out its duties, the Board of Trustees can – and does – appoint agents to handle various administrative, management and investment functions.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-6 py-3 bg-white text-slate-custom-800 font-bold rounded-xl hover:bg-pearl-50 transition-all shadow-lg inline-block"
                  >
                    Read More
                  </motion.button>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/src/assets/images/boatport.jpg")',
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-custom-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Blue accent line */}
            <div className="w-1 h-24 bg-thatch-500 mb-8"></div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight max-w-4xl">
              WE UNDERSTAND SUCCESS AND WE ARE HERE FOR YOU ON YOUR FINANCIAL JOURNEY.
            </h2>
            
            <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl">
              Best Retirement and Pension Plans in the Cayman Islands
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-lg rounded-lg shadow-xl transition-all"
            >
              READ MORE
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Go Green Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/mangrovecayman.jpg"
            alt="Mangrove Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/60 via-green-500/60 to-emerald-500/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {/* Center Circle with Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(34, 197, 94, 0.8), 0 0 80px rgba(34, 197, 94, 0.6), 0 0 120px rgba(34, 197, 94, 0.4), inset 0 0 60px rgba(34, 197, 94, 0.3)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0 cursor-pointer group"
            >
              <div className="w-72 h-72 rounded-full bg-green-600 flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-green-400 group-hover:via-emerald-400 group-hover:to-green-500 group-hover:animate-pulse">
                <p className="text-xl font-semibold mb-2 transition-all duration-500 group-hover:text-green-100 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,1)]">
                  Think Green
                </p>
                <p className="text-5xl font-bold mb-2 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-200 group-hover:via-emerald-100 group-hover:to-green-200 group-hover:drop-shadow-[0_0_20px_rgba(34,197,94,1)] group-hover:animate-pulse">
                  Go GREEN
                </p>
                <p className="text-2xl font-semibold transition-all duration-500 group-hover:text-green-100 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,1)]">
                  Go PAPERLESS
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <StatisticsSection statistics={statistics} />

      {/* Customer Reviews Carousel */}
      <section className="py-20 bg-gradient-to-b from-white to-pearl-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-slate-custom-900 mb-4">
              What Our Members Say
            </h2>
            <p className="text-xl text-center text-slate-custom-600 mb-16">
              Trusted by thousands of satisfied members across the Cayman Islands
            </p>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
              >
                {/* Stars */}
                <div className="flex justify-center gap-2 mb-6">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xl md:text-2xl text-slate-custom-700 text-center mb-8 italic leading-relaxed">
                  "{reviews[currentReview].text}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-thatch-500 to-ocean-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {reviews[currentReview].author.charAt(0)}
                  </div>
                  <h4 className="text-lg font-bold text-slate-custom-900">
                    {reviews[currentReview].author}
                  </h4>
                  <p className="text-slate-custom-600">
                    {reviews[currentReview].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Review Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentReview 
                      ? 'bg-thatch-500 w-8' 
                      : 'bg-slate-custom-300 w-2 hover:bg-slate-custom-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-thatch-600 via-ocean-500 to-thatch-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied members and start planning your retirement today
            </p>
            <motion.button
              onClick={onLoginClick}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-ocean-600 text-lg font-bold rounded-2xl shadow-2xl hover:bg-pearl-50 transition-all"
            >
              Access Your Account
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-slate-custom-900 via-slate-custom-800 to-ocean-900 text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-thatch-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section with Logo and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Logo and About */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src="/src/assets/images/logo2.png" 
                    alt="Silver Thatch Pensions" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">Silver Thatch Pensions</h3>
                  <p className="text-xs text-thatch-400 uppercase tracking-widest">Building Wealth On Your Terms</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Established in 1997, Silver Thatch Pensions is one of the largest pension providers in the Cayman Islands, 
                dedicated to securing your financial future with expert retirement planning and comprehensive pension solutions.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-thatch-500 flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-thatch-500 flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-thatch-500 flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right: Quick Links Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-8"
            >
              {/* Services */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-thatch-400">Services</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-white/70 hover:text-thatch-300 transition-colors flex items-center gap-2">
                    <span className="text-thatch-400">→</span> Member Portal
                  </a></li>
                  <li><a href="#" className="text-white/70 hover:text-thatch-300 transition-colors flex items-center gap-2">
                    <span className="text-thatch-400">→</span> Employer Services
                  </a></li>
                  <li><a href="#" className="text-white/70 hover:text-thatch-300 transition-colors flex items-center gap-2">
                    <span className="text-thatch-400">→</span> Investment Options
                  </a></li>
                  <li><a href="#" className="text-white/70 hover:text-thatch-300 transition-colors flex items-center gap-2">
                    <span className="text-thatch-400">→</span> Retirement Planning
                  </a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-thatch-400">Resources</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-white/70 hover:text-thatch-300 transition-colors flex items-center gap-2">
                    <span className="text-thatch-400">→</span> Forms & Documents
                  </a></li>
                  <li><a href="#" className="text-white/70 hover:text-thatch-300 transition-colors flex items-center gap-2">
                    <span className="text-thatch-400">→</span> Financial Reports
                  </a></li>
                  <li><a href="#" className="text-white/70 hover:text-thatch-300 transition-colors flex items-center gap-2">
                    <span className="text-thatch-400">→</span> FAQ
                  </a></li>
                  <li><a href="#" className="text-white/70 hover:text-thatch-300 transition-colors flex items-center gap-2">
                    <span className="text-thatch-400">→</span> Contact Support
                  </a></li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Contact Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-thatch-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-thatch-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-1">Phone</p>
                <p className="font-semibold">(345) 943-7770</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-thatch-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-thatch-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-1">Email</p>
                <p className="font-semibold">support@silverthatch.org.ky</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-thatch-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-thatch-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-1">Location</p>
                <p className="font-semibold">Grand Cayman, Cayman Islands</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © 2025 Silver Thatch Pensions. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-thatch-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-thatch-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-thatch-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Animated Statistics Component
const StatisticsSection = ({ statistics }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-ocean-600 via-thatch-600 to-ocean-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-16">
            Our Impact in Numbers
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statistics.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  {stat.icon && (
                    <div className="text-white text-2xl mb-2">
                      {stat.icon}
                    </div>
                  )}
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.prefix}
                    isInView={isInView}
                    delay={index * 0.15}
                  />
                  <p className="text-white/90 font-medium mt-3 text-base break-words">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ value, prefix = '', isInView, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="text-2xl md:text-3xl font-display font-bold text-white break-all px-2">
      {prefix}{formatNumber(count)}
    </div>
  );
};

export default LandingPage;
