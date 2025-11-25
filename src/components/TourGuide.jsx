import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TourGuide = ({ isActive, onClose, currentPage, onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(5);
  const [targetElement, setTargetElement] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: '50%', left: '50%' });

  const tourSteps = {
    home: [
      {
        target: 'welcome-section',
        title: 'Welcome to Your Dashboard',
        description: 'This is your personal dashboard where you can view your pension account summary and quick actions.',
        position: 'bottom'
      },
      {
        target: 'profile-card',
        title: 'Your Profile Information',
        description: 'Here you can view your member details, contribution balance, and account status.',
        position: 'right'
      },
      {
        target: 'beneficiaries-card',
        title: 'Beneficiaries',
        description: 'View and manage your beneficiaries who will receive your pension benefits.',
        position: 'left'
      },
      {
        target: 'quick-actions',
        title: 'Quick Actions',
        description: 'Access frequently used features like updating information and viewing statements.',
        position: 'top'
      }
    ],
    update: [
      {
        target: 'member-info',
        title: 'Member Information',
        description: 'Your member details are displayed here for quick reference.',
        position: 'bottom'
      },
      {
        target: 'action-cards',
        title: 'Update Options',
        description: 'Choose from various update options like changing address, marital status, or adding beneficiaries.',
        position: 'bottom'
      }
    ],
    statements: [
      {
        target: 'member-info',
        title: 'Account Information',
        description: 'View your member ID and account details.',
        position: 'bottom'
      },
      {
        target: 'monthly-statements',
        title: 'Monthly Statements',
        description: 'Access your monthly pension statements. Click to expand/collapse the list.',
        position: 'right'
      },
      {
        target: 'annual-statements',
        title: 'Annual Statements',
        description: 'View and download your annual pension statements.',
        position: 'right'
      }
    ],
    resources: [
      {
        target: 'member-info',
        title: 'Your Information',
        description: 'Your member information is always visible at the top.',
        position: 'bottom'
      },
      {
        target: 'documents-section',
        title: 'Important Documents',
        description: 'Download important documents and meeting materials. Select multiple documents to download at once.',
        position: 'left'
      }
    ]
  };

  const steps = tourSteps[currentPage] || [];

  // Update target element when step changes
  useEffect(() => {
    if (!isActive || steps.length === 0) return;

    const currentStepData = steps[currentStep];
    const element = document.querySelector(`[data-tour="${currentStepData.target}"]`);
    
    if (element) {
      setTargetElement(element);
      const rect = element.getBoundingClientRect();
      
      // Calculate tooltip position based on step position preference
      let top, left;
      const tooltipWidth = 450;
      const tooltipHeight = 350;
      const margin = 20;

      switch (currentStepData.position) {
        case 'top':
          top = rect.top - tooltipHeight - margin;
          left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
          break;
        case 'bottom':
          top = rect.bottom + margin;
          left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
          break;
        case 'left':
          top = rect.top + (rect.height / 2) - (tooltipHeight / 2);
          left = rect.left - tooltipWidth - margin;
          break;
        case 'right':
          top = rect.top + (rect.height / 2) - (tooltipHeight / 2);
          left = rect.right + margin;
          break;
        default:
          top = rect.bottom + margin;
          left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
      }

      // Keep tooltip within viewport
      const maxTop = window.innerHeight - tooltipHeight - 20;
      const maxLeft = window.innerWidth - tooltipWidth - 20;
      
      top = Math.max(20, Math.min(top, maxTop));
      left = Math.max(20, Math.min(left, maxLeft));

      setTooltipPosition({ top: `${top}px`, left: `${left}px` });

      // Scroll element into view
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentStep, currentPage, isActive, steps]);

  useEffect(() => {
    if (!isActive || steps.length === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          handleNext();
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, currentStep, currentPage]);

  useEffect(() => {
    setCurrentStep(0);
    setTimer(5);
  }, [currentPage]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setTimer(5);
    } else {
      // Tour completed for this page, check if we should go to next page
      const pages = ['home', 'update', 'statements', 'resources'];
      const currentPageIndex = pages.indexOf(currentPage);
      if (currentPageIndex < pages.length - 1) {
        const nextPage = pages[currentPageIndex + 1];
        onNavigate(nextPage);
        setCurrentStep(0);
        setTimer(5);
      } else {
        handleClose();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setTimer(5);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    setTimer(5);
    onClose();
  };

  const handleSkip = () => {
    handleClose();
  };

  if (!isActive || steps.length === 0) return null;

  const currentStepData = steps[currentStep];
  const targetRect = targetElement?.getBoundingClientRect();

  return (
    <>
      {/* Overlay - no blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50"
        onClick={handleClose}
      />

      {/* Spotlight Highlight - Creates a "window" effect */}
      <AnimatePresence mode="wait">
        {targetRect && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed z-[55] pointer-events-none"
            style={{
              top: `${targetRect.top - 8}px`,
              left: `${targetRect.left - 8}px`,
              width: `${targetRect.width + 16}px`,
              height: `${targetRect.height + 16}px`,
            }}
          >
            {/* Clear window with glowing border */}
            <div className="w-full h-full rounded-2xl border-4 border-thatch-400 shadow-[0_0_30px_rgba(193,240,232,0.6)] relative">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-white/30" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tour Tooltip */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed z-[60] bg-white rounded-2xl shadow-2xl border border-slate-custom-200 overflow-hidden pointer-events-auto"
          style={{
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            maxWidth: '450px',
            width: '90%',
            transform: tooltipPosition.top === '50%' ? 'translate(-50%, -50%)' : 'none'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-thatch-500 to-ocean-500 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{currentStepData.title}</h3>
                  <p className="text-white/80 text-xs">
                    Step {currentStep + 1} of {steps.length}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-slate-custom-700 leading-relaxed mb-4">
              {currentStepData.description}
            </p>

            {/* Timer Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-custom-500">Auto-advancing in:</span>
                <span className="text-sm font-bold text-ocean-600">{timer}s</span>
              </div>
              <div className="w-full bg-slate-custom-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-thatch-500 to-ocean-500 rounded-full"
                  initial={{ width: '100%' }}
                  animate={{ width: `${(timer / 5) * 100}%` }}
                  transition={{ duration: 1, ease: 'linear' }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handleSkip}
                className="px-4 py-2 text-sm text-slate-custom-600 hover:text-slate-custom-900 font-medium transition-colors"
              >
                Skip Tour
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="px-4 py-2 bg-slate-custom-200 hover:bg-slate-custom-300 disabled:bg-slate-custom-100 disabled:text-slate-custom-400 text-slate-custom-700 font-semibold rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600 text-white font-semibold rounded-lg shadow-md transition-all"
                >
                  {currentStep === steps.length - 1 ? 'Next Page' : 'Next'}
                </button>
              </div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="px-6 pb-4">
            <div className="flex items-center justify-center gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentStep
                      ? 'w-8 bg-gradient-to-r from-thatch-500 to-ocean-500'
                      : index < currentStep
                      ? 'w-2 bg-ocean-300'
                      : 'w-2 bg-slate-custom-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default TourGuide;
