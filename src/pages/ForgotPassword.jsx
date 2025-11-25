import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/animations';
import DecorativeElements from '../components/DecorativeElements';

const ForgotPassword = ({ onBack }) => {
  const [activeMethod, setActiveMethod] = useState('email'); // 'email' or 'security'
  const [step, setStep] = useState(1); // For multi-step flow
  const [formData, setFormData] = useState({
    email: '',
    securityQuestion: '',
    securityAnswer: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2); // Move to password reset step
    } else {
      // Handle password reset
      console.log('Password reset submitted');
      onBack(); // Go back to login
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Forgot Password Form */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pearl-50 via-white to-thatch-50 p-4 sm:p-6 lg:p-8 xl:p-12 min-h-screen lg:min-h-0">
        {/* Decorative Elements */}
        <DecorativeElements />

        {/* Logo/Brand */}
        <FadeIn delay={0} className="absolute top-0 sm:top-1 lg:top-2 left-4 sm:left-6 lg:left-8 z-20">
          <button onClick={onBack} className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center shadow-float overflow-hidden">
              <img 
                src="/images/logo.png" 
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

        {/* Forgot Password Card */}
        <div className="relative z-10 w-full max-w-md mt-16">
          <FadeIn delay={0.2}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-glass-lg border border-white/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-thatch-500 to-ocean-500 p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">
                  Reset Password
                </h2>
                <p className="text-white/80 text-sm">
                  Choose your preferred recovery method
                </p>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Method Selection */}
                      <div className="space-y-4 mb-6">
                        {/* Email Method */}
                        <button
                          onClick={() => setActiveMethod('email')}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                            activeMethod === 'email'
                              ? 'border-thatch-500 bg-thatch-50'
                              : 'border-slate-custom-200 hover:border-thatch-300 bg-white'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              activeMethod === 'email' ? 'bg-thatch-500' : 'bg-slate-custom-100'
                            }`}>
                              <svg className={`w-5 h-5 ${activeMethod === 'email' ? 'text-white' : 'text-slate-custom-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h3 className={`font-semibold mb-1 ${
                                activeMethod === 'email' ? 'text-thatch-700' : 'text-slate-custom-900'
                              }`}>
                                By Using Email
                              </h3>
                              <p className="text-sm text-slate-custom-600">
                                We'll send a reset link to your registered email
                              </p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              activeMethod === 'email' ? 'border-thatch-500' : 'border-slate-custom-300'
                            }`}>
                              {activeMethod === 'email' && (
                                <div className="w-3 h-3 rounded-full bg-thatch-500"></div>
                              )}
                            </div>
                          </div>
                        </button>

                        {/* Security Questions Method */}
                        <button
                          onClick={() => setActiveMethod('security')}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                            activeMethod === 'security'
                              ? 'border-ocean-500 bg-ocean-50'
                              : 'border-slate-custom-200 hover:border-ocean-300 bg-white'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              activeMethod === 'security' ? 'bg-ocean-500' : 'bg-slate-custom-100'
                            }`}>
                              <svg className={`w-5 h-5 ${activeMethod === 'security' ? 'text-white' : 'text-slate-custom-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h3 className={`font-semibold mb-1 ${
                                activeMethod === 'security' ? 'text-ocean-700' : 'text-slate-custom-900'
                              }`}>
                                Answer Security Questions
                              </h3>
                              <p className="text-sm text-slate-custom-600">
                                Answer your security question to reset password
                              </p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              activeMethod === 'security' ? 'border-ocean-500' : 'border-slate-custom-300'
                            }`}>
                              {activeMethod === 'security' && (
                                <div className="w-3 h-3 rounded-full bg-ocean-500"></div>
                              )}
                            </div>
                          </div>
                        </button>
                      </div>

                      {/* Form based on selected method */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {activeMethod === 'email' ? (
                          <div>
                            <label className="block text-sm font-medium text-slate-custom-700 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter your registered email"
                              className="w-full px-4 py-3 border border-slate-custom-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-thatch-500 focus:border-transparent transition-all"
                              required
                            />
                          </div>
                        ) : (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-slate-custom-700 mb-2">
                                Security Question
                              </label>
                              <select
                                name="securityQuestion"
                                value={formData.securityQuestion}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-slate-custom-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all bg-white"
                                required
                              >
                                <option value="">Select a question</option>
                                <option value="pet">What was the name of your first pet?</option>
                                <option value="city">What city were you born in?</option>
                                <option value="school">What is your mother's maiden name?</option>
                                <option value="teacher">What was your favorite teacher's name?</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-custom-700 mb-2">
                                Your Answer
                              </label>
                              <input
                                type="text"
                                name="securityAnswer"
                                value={formData.securityAnswer}
                                onChange={handleInputChange}
                                placeholder="Enter your answer"
                                className="w-full px-4 py-3 border border-slate-custom-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                                required
                              />
                            </div>
                          </>
                        )}

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className={`w-full py-3.5 rounded-xl font-semibold text-white shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] ${
                            activeMethod === 'email'
                              ? 'bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600'
                              : 'bg-gradient-to-r from-ocean-500 to-thatch-500 hover:from-ocean-600 hover:to-thatch-600'
                          }`}
                        >
                          Continue
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* New Password Form */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="bg-thatch-50 border border-thatch-200 rounded-xl p-4 mb-6">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-thatch-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <h4 className="font-semibold text-thatch-900 mb-1">Verification Successful</h4>
                              <p className="text-sm text-thatch-700">
                                Please create a new password for your account
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-custom-700 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            placeholder="Enter new password"
                            className="w-full px-4 py-3 border border-slate-custom-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-thatch-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-custom-700 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm new password"
                            className="w-full px-4 py-3 border border-slate-custom-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-thatch-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>

                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex-1 py-3.5 rounded-xl font-semibold text-slate-custom-700 bg-slate-custom-100 hover:bg-slate-custom-200 transition-all"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="flex-1 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600 shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]"
                          >
                            Reset Password
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Back to Login Link */}
                <div className="mt-6 text-center">
                  <button
                    onClick={onBack}
                    className="text-sm text-slate-custom-600 hover:text-thatch-600 font-medium transition-colors flex items-center gap-2 mx-auto group"
                  >
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Login
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Text */}
        <FadeIn delay={0.8} className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 text-center z-20 px-4">
          <p className="text-xs text-slate-custom-400">
            Need help? Contact support at support@silverthatch.com
          </p>
        </FadeIn>
      </div>

      {/* Right Side - Background Image with Overlay */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden group">
        {/* Background Image with hover zoom */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-sway transition-transform duration-[5000ms] ease-out group-hover:scale-110"
          style={{
            backgroundImage: 'url("/images/background.png")',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-600/80 via-thatch-500/70 to-ocean-800/80"></div>
          <div className="absolute inset-0 bg-ocean-500/30 mix-blend-multiply"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white pointer-events-none">
          <FadeIn delay={0.4} className="max-w-lg text-center pointer-events-auto">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-4xl xl:text-5xl font-display font-bold mb-6 leading-tight">
              We've Got You Covered
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Recover your account quickly and securely with our simple password reset process.
            </p>
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
            backgroundImage: 'url("/images/background.png")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-600/80 via-thatch-500/70 to-ocean-800/80"></div>
          <div className="absolute inset-0 bg-ocean-500/30 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <FadeIn delay={0.2}>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white text-center">
              Reset Your Password
            </h2>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
