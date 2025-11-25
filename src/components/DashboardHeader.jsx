import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardHeader = ({ currentPage = 'home', onNavigate, onProfileNavigate, onStartTour }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileClick = (page) => {
    setIsDropdownOpen(false);
    if (onProfileNavigate) {
      onProfileNavigate(page);
    }
  };

  const navItems = [
    { name: 'HOME', page: 'home' },
    { name: 'UPDATE MY INFO', page: 'update' },
    { name: 'STATEMENTS', page: 'statements' },
    { name: 'RESOURCES', page: 'resources' },
  ];

  const handleNavClick = (page) => {
    setIsSidebarOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleProfileClickMobile = (page) => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
    if (onProfileNavigate) {
      onProfileNavigate(page);
    }
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            {/* Sidebar Header with Background */}
            <div className="relative bg-gradient-to-br from-thatch-500 to-ocean-500 p-6 text-center overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: 'url("/images/background.png")',
                }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-thatch-600/80 via-ocean-500/70 to-thatch-800/80"></div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/20 hover:bg-white/30 transition-colors z-10"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Logo - Centered vertically stacked */}
              <div className="flex flex-col items-center gap-3 mt-4 relative z-10">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img 
                    src="/images/logo_mobile.png" 
                    alt="Silver Thatch Pensions Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-xl font-display font-bold text-white" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.3)' }}>
                    Silver Thatch Pensions
                  </h1>
                  <p className="text-xs text-white/90 uppercase tracking-wider font-medium mt-1" style={{ textShadow: '0 3px 8px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.3)' }}>
                    Building Wealth On Your Terms
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="py-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-6 py-4 flex items-center gap-3 transition-all ${
                    currentPage === item.page
                      ? 'bg-gradient-to-r from-thatch-50 to-ocean-50 border-l-4 border-thatch-500 text-ocean-700 font-semibold'
                      : 'text-slate-custom-600 hover:bg-slate-custom-50'
                  }`}
                >
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            {/* Divider */}
            <div className="border-t border-slate-custom-200 my-2"></div>

            {/* Tutorial Button */}
            <button
              onClick={() => {
                setIsSidebarOpen(false);
                onStartTour();
              }}
              className="w-full text-left px-6 py-4 flex items-center gap-3 text-slate-custom-700 hover:bg-thatch-50 transition-all"
            >
              <svg className="w-5 h-5 text-thatch-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Tutorial</span>
            </button>

            {/* Account Section */}
            <div className="px-6 py-4">
              <p className="text-xs font-semibold text-slate-custom-500 uppercase tracking-wider mb-3">Account</p>
              
              <button
                onClick={() => handleProfileClickMobile('profile')}
                className="w-full text-left px-4 py-3 flex items-center gap-3 text-slate-custom-700 hover:bg-thatch-50 rounded-lg transition-all mb-2"
              >
                <div className="w-8 h-8 bg-thatch-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-thatch-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="font-medium">Profile Settings</span>
              </button>

              <button
                onClick={() => handleProfileClickMobile('change-password')}
                className="w-full text-left px-4 py-3 flex items-center gap-3 text-slate-custom-700 hover:bg-ocean-50 rounded-lg transition-all mb-2"
              >
                <div className="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <span className="font-medium">Change Password</span>
              </button>

              <button
                onClick={() => handleProfileClickMobile('logout')}
                className="w-full text-left px-4 py-3 flex items-center gap-3 text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </div>
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop/Mobile Header */}
      <motion.header 
        className="sticky top-0 z-40 bg-white shadow-md border-b border-slate-custom-100 transition-all duration-300"
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Decorative gradient bar */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-thatch-500 via-ocean-500 to-thatch-500"
          animate={{
            opacity: isScrolled ? 0.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar with Logo and Account */}
          <motion.div 
            className="flex items-center justify-between py-3 lg:py-5"
            animate={{
              paddingTop: isScrolled ? '12px' : '20px',
              paddingBottom: isScrolled ? '12px' : '20px',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile Menu Button + Logo */}
            <div className="flex items-center gap-3">
              {/* Hamburger Menu - Mobile Only */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-custom-100 transition-colors"
              >
                <svg className="w-6 h-6 text-slate-custom-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Logo Section - Desktop */}
              <motion.button
                onClick={() => onNavigate && onNavigate('home')}
                className="hidden lg:flex items-center gap-4 cursor-pointer bg-transparent border-none p-0 text-left"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                animate={{
                  scale: isScrolled ? 0.95 : 1,
                }}
              >
                <motion.div 
                  className="w-14 h-14 flex items-center justify-center"
                  animate={{
                    width: isScrolled ? '48px' : '56px',
                    height: isScrolled ? '48px' : '56px',
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ 
                    width: { duration: 0.3 },
                    height: { duration: 0.3 },
                    rotate: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <img 
                    src="/images/logo2.png" 
                    alt="Silver Thatch Pensions Logo" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.div
                  animate={{
                    opacity: isScrolled ? 0.8 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="text-xl font-display font-bold text-slate-custom-900">
                    Silver Thatch Pensions
                  </h1>
                  <p className="text-xs text-slate-custom-500 uppercase tracking-widest font-medium">
                    Building Wealth On Your Terms
                  </p>
                </motion.div>
              </motion.button>

              {/* Logo - Mobile (Compact) */}
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className="lg:hidden flex items-center gap-2 bg-transparent border-none p-0"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src="/images/logo2.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-sm font-display font-bold text-slate-custom-900">
                    Silver Thatch Pensions
                  </h1>
                </div>
              </button>
            </div>

            {/* Right Side Buttons */}
            <div className="relative flex items-center gap-2 lg:gap-3">
              {/* Tutorial Button - Desktop */}
              <motion.button
                onClick={onStartTour}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex items-center justify-center w-11 h-11 bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600 text-white rounded-xl transition-all shadow-md hover:shadow-lg"
                title="Start Tutorial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>

              {/* Tutorial Button - Mobile */}
              <motion.button
                onClick={onStartTour}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden w-10 h-10 flex items-center justify-center bg-gradient-to-r from-thatch-500 to-ocean-500 rounded-lg text-white shadow-md"
                title="Start Tutorial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>

              {/* My Account Button - Desktop Only */}
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hidden lg:flex items-center gap-2.5 bg-gradient-to-r from-slate-custom-700 to-slate-custom-800 hover:from-slate-custom-800 hover:to-slate-custom-900 text-white px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold">My Account</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </motion.svg>
              </motion.button>

              {/* Dropdown Menu - Desktop Only */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="hidden lg:block absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-custom-200/50 overflow-hidden z-50 backdrop-blur-xl"
                  >
                  <div className="py-2">
                    <button
                      onClick={() => handleProfileClick('profile')}
                      className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm text-slate-custom-700 hover:bg-gradient-to-r hover:from-thatch-50 hover:to-ocean-50 transition-all group"
                    >
                      <div className="w-8 h-8 bg-thatch-100 group-hover:bg-thatch-200 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-thatch-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-thatch-700">Profile Settings</span>
                    </button>
                    <button
                      onClick={() => handleProfileClick('change-password')}
                      className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm text-slate-custom-700 hover:bg-gradient-to-r hover:from-thatch-50 hover:to-ocean-50 transition-all group"
                    >
                      <div className="w-8 h-8 bg-ocean-100 group-hover:bg-ocean-200 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                      </div>
                      <span className="font-medium">Change Password</span>
                    </button>
                    <div className="my-2 mx-4 border-t border-slate-custom-200"></div>
                    <button
                      onClick={() => handleProfileClick('logout')}
                      className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-all group"
                    >
                      <div className="w-8 h-8 bg-red-100 group-hover:bg-red-200 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </div>
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Navigation Menu - Desktop Only */}
        <nav className="hidden lg:block border-t border-slate-custom-100">
            <ul className="flex gap-2 py-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <motion.button
                  onClick={() => onNavigate && onNavigate(item.page)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-6 py-3 text-sm font-semibold transition-all rounded-t-xl ${
                    currentPage === item.page
                      ? 'text-ocean-700 bg-gradient-to-b from-thatch-50 to-ocean-50'
                      : 'text-slate-custom-600 hover:text-ocean-600 hover:bg-slate-custom-50'
                  }`}
                >
                  {item.name}
                  {currentPage === item.page && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-thatch-500 to-ocean-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </motion.header>
    </>
  );
};

export default DashboardHeader;
