import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, ScaleOnHover } from './animations';

const AuthCard = ({ onLogin, onForgotPassword, accountType }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [focusedField, setFocusedField] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);

  // Handle flip animation when account type changes
  useEffect(() => {
    if (accountType) {
      setRotationDegree(prev => prev + 1080); // Add 3 full rotations (360° × 3)
    }
  }, [accountType]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isRecaptchaChecked) {
      alert('Please verify that you are not a robot');
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard
      onLogin();
    }, 2000);
  };

  return (
    <FadeIn delay={0.2} className="w-full max-w-md px-4 sm:px-0">
      <motion.div 
        className="glass-card p-6 sm:p-8 lg:p-10"
        animate={{
          rotateY: rotationDegree,
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut"
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={accountType}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-custom-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-slate-custom-500 text-sm sm:text-base">
                {accountType === 'member' 
                  ? 'Sign in to access your pension account'
                  : 'Sign in to access your employer account'
                }
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              className="input-field"
              required
              aria-label="Email Address"
            />
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                focusedField === 'email' || formData.email
                  ? '-top-2 text-xs bg-white px-2 text-thatch-600 font-medium'
                  : 'top-4 text-sm text-slate-custom-400'
              }`}
            >
              Username
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField('')}
              className="input-field"
              required
              aria-label="Password"
            />
            <label
              htmlFor="password"
              className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                focusedField === 'password' || formData.password
                  ? '-top-2 text-xs bg-white px-2 text-thatch-600 font-medium'
                  : 'top-4 text-sm text-slate-custom-400'
              }`}
            >
              Password
            </label>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 text-sm">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-slate-custom-300 text-thatch-500 focus:ring-2 focus:ring-thatch-300 transition-all"
              />
              <span className="ml-2 text-slate-custom-600 group-hover:text-slate-custom-800 transition-colors">
                Remember me
              </span>
            </label>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-thatch-600 hover:text-thatch-700 font-medium transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {/* Fake reCAPTCHA */}
          <div className="flex justify-center">
            <div 
              onClick={() => setIsRecaptchaChecked(!isRecaptchaChecked)}
              className="inline-flex items-center gap-3 bg-white border-2 border-slate-custom-200 rounded-lg p-4 cursor-pointer hover:border-thatch-300 transition-all shadow-sm"
            >
              <div className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all ${
                isRecaptchaChecked 
                  ? 'bg-thatch-500 border-thatch-500' 
                  : 'border-slate-custom-300 bg-white'
              }`}>
                {isRecaptchaChecked && (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </motion.svg>
                )}
              </div>
              <span className="text-sm text-slate-custom-700 font-medium">I'm not a robot</span>
              <div className="flex flex-col items-end ml-2">
                <svg className="w-8 h-8 text-slate-custom-400" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 2L2 9v6c0 8.284 5.373 15.872 13 18.468C22.627 30.872 28 23.284 28 15V9L16 2z" opacity="0.3"/>
                  <path d="M16 4L4 10v5c0 7.18 4.66 13.77 11 16.07V4z"/>
                </svg>
                <span className="text-[9px] text-slate-custom-400 mt-0.5">reCAPTCHA</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <ScaleOnHover>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </>
                )}
              </span>
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-thatch-400 to-ocean-500"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.4 }}
              />
            </button>
          </ScaleOnHover>
        </form>
      </motion.div>
    </FadeIn>
  );
};

export default AuthCard;
