import { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import { FadeIn } from '../components/animations';
import { motion } from 'framer-motion';

const Statements = ({ onNavigate, onStartTour }) => {
  const [expandedMonthly, setExpandedMonthly] = useState(true);
  const [expandedAnnual, setExpandedAnnual] = useState(true);
  
  const memberData = {
    name: 'Leopoldo Jr Lopez',
    memberId: '409772',
  };

  const monthlyStatements = [
    { month: 'January', year: 2024, dateRange: '01/01/2024 - 01/31/2024' },
    { month: 'February', year: 2024, dateRange: '02/01/2024 - 02/29/2024' },
    { month: 'March', year: 2024, dateRange: '03/01/2024 - 03/31/2024' },
    { month: 'April', year: 2024, dateRange: '04/01/2024 - 04/30/2024' },
    { month: 'May', year: 2024, dateRange: '05/01/2024 - 05/31/2024' },
    { month: 'June', year: 2024, dateRange: '06/01/2024 - 06/30/2024' },
    { month: 'July', year: 2024, dateRange: '07/01/2024 - 07/31/2024' },
    { month: 'August', year: 2024, dateRange: '08/01/2024 - 08/31/2024' },
    { month: 'September', year: 2024, dateRange: '09/01/2024 - 09/30/2024' },
    { month: 'October', year: 2024, dateRange: '10/01/2024 - 10/31/2024' },
    { month: 'November', year: 2024, dateRange: '11/01/2024 - 11/30/2024' },
    { month: 'December', year: 2024, dateRange: '12/01/2024 - 12/31/2024' },
    { month: 'January', year: 2025, dateRange: '01/01/2025 - 01/31/2025' },
    { month: 'February', year: 2025, dateRange: '02/01/2025 - 02/28/2025' },
    { month: 'March', year: 2025, dateRange: '03/01/2025 - 03/31/2025' },
    { month: 'April', year: 2025, dateRange: '04/01/2025 - 04/30/2025' },
    { month: 'May', year: 2025, dateRange: '05/01/2025 - 05/31/2025' },
    { month: 'June', year: 2025, dateRange: '06/01/2025 - 06/30/2025' },
    { month: 'July', year: 2025, dateRange: '07/01/2025 - 07/31/2025' },
    { month: 'August', year: 2025, dateRange: '08/01/2025 - 08/31/2025' },
    { month: 'September', year: 2025, dateRange: '09/01/2025 - 09/30/2025' },
  ];

  const annualStatements = [
    { year: 2024, dateRange: '01/01/2024 - 12/31/2024' },
    { year: 2023, dateRange: '01/01/2023 - 12/31/2023' },
    { year: 2022, dateRange: '01/01/2022 - 12/31/2022' },
    { year: 2021, dateRange: '01/01/2021 - 12/31/2021' },
    { year: 2020, dateRange: '01/01/2020 - 12/31/2020' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-white to-thatch-50 flex flex-col">
      <DashboardHeader currentPage="statements" onNavigate={onNavigate} onProfileNavigate={onNavigate} onStartTour={onStartTour} />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Member Info Bar */}
        <FadeIn delay={0.1}>
          <div data-tour="member-info" className="relative overflow-hidden bg-white backdrop-blur-md border border-slate-custom-200/30 rounded-2xl shadow-sm p-6 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-custom-500 mb-1 font-medium">MEMBER PORTAL</p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-custom-900">
                  {memberData.name}
                </h2>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 bg-thatch-50/50 border border-thatch-200 rounded-xl">
                <div className="w-2 h-2 bg-thatch-500 rounded-full"></div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-custom-600">ID</span>
                  <span className="text-slate-custom-900 font-bold text-base">{memberData.memberId}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Monthly Statements Section */}
        <FadeIn delay={0.2}>
          <div data-tour="monthly-statements" className="bg-white border border-slate-custom-200/40 rounded-2xl shadow-sm mb-8 overflow-hidden">
            {/* Section Header */}
            <button
              onClick={() => setExpandedMonthly(!expandedMonthly)}
              className="w-full bg-gradient-to-r from-slate-custom-400 to-slate-custom-500 px-6 py-4 flex items-center justify-between hover:from-slate-custom-500 hover:to-slate-custom-600 transition-all"
            >
              <h3 className="text-white font-bold text-lg">Monthly Statements</h3>
              <motion.svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: expandedMonthly ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            {/* Statements List */}
            <motion.div
              initial={false}
              animate={{
                height: expandedMonthly ? 'auto' : 0,
                opacity: expandedMonthly ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="divide-y divide-slate-custom-100">
                {monthlyStatements.map((statement, index) => (
                  <motion.div
                    key={`${statement.month}-${statement.year}`}
                    whileHover={{ backgroundColor: 'rgba(193, 240, 232, 0.1)' }}
                    className="px-6 py-4 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-ocean-600 font-bold text-base hover:underline">
                        {statement.month}
                      </span>
                      <span className="text-slate-custom-600 text-sm">
                        {statement.dateRange}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Preview Icon */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-ocean-100 rounded-lg transition-colors group"
                        title="Preview"
                      >
                        <svg
                          className="w-5 h-5 text-slate-custom-400 group-hover:text-ocean-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.button>
                      {/* Download Icon */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-thatch-100 rounded-lg transition-colors group"
                        title="Download"
                      >
                        <svg
                          className="w-5 h-5 text-slate-custom-400 group-hover:text-thatch-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </FadeIn>

        {/* Annual Statements Section */}
        <FadeIn delay={0.3}>
          <div data-tour="annual-statements" className="bg-white border border-slate-custom-200/40 rounded-2xl shadow-sm overflow-hidden">
            {/* Section Header */}
            <button
              onClick={() => setExpandedAnnual(!expandedAnnual)}
              className="w-full bg-gradient-to-r from-slate-custom-400 to-slate-custom-500 px-6 py-4 flex items-center justify-between hover:from-slate-custom-500 hover:to-slate-custom-600 transition-all"
            >
              <h3 className="text-white font-bold text-lg">Annual Statements</h3>
              <motion.svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: expandedAnnual ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            {/* Statements List */}
            <motion.div
              initial={false}
              animate={{
                height: expandedAnnual ? 'auto' : 0,
                opacity: expandedAnnual ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="divide-y divide-slate-custom-100">
                {annualStatements.map((statement, index) => (
                  <motion.div
                    key={statement.year}
                    whileHover={{ backgroundColor: 'rgba(193, 240, 232, 0.1)' }}
                    className="px-6 py-4 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-ocean-600 font-bold text-base hover:underline">
                        {statement.year}
                      </span>
                      <span className="text-slate-custom-600 text-sm">
                        {statement.dateRange}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Preview Icon */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-ocean-100 rounded-lg transition-colors group"
                        title="Preview"
                      >
                        <svg
                          className="w-5 h-5 text-slate-custom-400 group-hover:text-ocean-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.button>
                      {/* Download Icon */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-thatch-100 rounded-lg transition-colors group"
                        title="Download"
                      >
                        <svg
                          className="w-5 h-5 text-slate-custom-400 group-hover:text-thatch-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
};

export default Statements;
