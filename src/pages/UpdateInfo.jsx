import { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import ChangeOfAddress from '../components/forms/ChangeOfAddress';
import ChangeMaritalStatus from '../components/forms/ChangeMaritalStatus';
import VoluntaryContribution from '../components/forms/VoluntaryContribution';
import AddBeneficiaryForm from '../components/forms/AddBeneficiaryForm';
import { FadeIn } from '../components/animations';
import { motion } from 'framer-motion';

const UpdateInfo = ({ onNavigate, onStartTour }) => {
  const [activeForm, setActiveForm] = useState(null);
  const memberData = {
    name: 'Leopoldo Jr Lopez',
    memberId: '409772',
  };

  const actions = [
    { id: 'address', title: 'Change of Address', component: 'ChangeOfAddress' },
    { id: 'marital', title: 'Change Marital Status', component: 'ChangeMaritalStatus' },
    { id: 'contribution', title: 'Additional Voluntary Contribution', component: 'VoluntaryContribution' },
    { id: 'beneficiary', title: 'Add Beneficiary', component: 'AddBeneficiaryForm' },
  ];

  const renderForm = () => {
    switch (activeForm) {
      case 'ChangeOfAddress':
        return <ChangeOfAddress onBack={() => setActiveForm(null)} />;
      case 'ChangeMaritalStatus':
        return <ChangeMaritalStatus onBack={() => setActiveForm(null)} />;
      case 'VoluntaryContribution':
        return <VoluntaryContribution onBack={() => setActiveForm(null)} />;
      case 'AddBeneficiaryForm':
        return <AddBeneficiaryForm onBack={() => setActiveForm(null)} />;
      default:
        return null;
    }
  };

  if (activeForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-white to-thatch-50 flex flex-col">
        <DashboardHeader currentPage="update" onNavigate={onNavigate} onProfileNavigate={onNavigate} onStartTour={onStartTour} />
        <main className="flex-1">
          {renderForm()}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-white to-thatch-50 flex flex-col">
      <DashboardHeader currentPage="update" onNavigate={onNavigate} onProfileNavigate={onNavigate} />
      
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

        {/* Action Cards Grid */}
        <div data-tour="action-cards" className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-10">
          {actions.map((action, index) => (
            <FadeIn key={action.id} delay={0.2 + index * 0.08}>
              <motion.button
                onClick={() => setActiveForm(action.component)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-white border border-slate-custom-200/40 hover:border-thatch-400/60 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-left p-6 w-full"
              >
                {/* Content */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-thatch-400 to-ocean-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-white/90 rounded-md"></div>
                    </div>
                    
                    {/* Title and Progress Bar */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-custom-900 mb-2 truncate">
                        {action.title}
                      </h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-thatch-400 to-ocean-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <motion.div
                    className="w-10 h-10 bg-slate-custom-100 group-hover:bg-gradient-to-br group-hover:from-thatch-400 group-hover:to-ocean-400 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4"
                    whileHover={{ x: 3 }}
                  >
                    <svg
                      className="w-5 h-5 text-slate-custom-600 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>
            </FadeIn>
          ))}
        </div>

        {/* Info Notice */}
        <FadeIn delay={0.5}>
          <div className="max-w-3xl mx-auto bg-ocean-50/40 border border-ocean-200/40 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-ocean-500 to-thatch-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-custom-900 mb-2">Important Notice</h3>
                <p className="text-sm text-slate-custom-600 leading-relaxed">
                  Please ensure all information provided is accurate. Changes to your account may take 2-3 business days to process. You will receive a confirmation email once your update has been processed.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
};

export default UpdateInfo;
