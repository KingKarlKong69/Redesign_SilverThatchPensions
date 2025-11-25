import DashboardHeader from '../components/DashboardHeader';
import ProfileCard from '../components/ProfileCard';
import BeneficiariesCard from '../components/BeneficiariesCard';
import { FadeIn } from '../components/animations';

const Dashboard = ({ onNavigate, onStartTour }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-white to-thatch-50">
      {/* Header */}
      <DashboardHeader currentPage="home" onNavigate={onNavigate} onProfileNavigate={onNavigate} onStartTour={onStartTour} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div data-tour="welcome-section">
          <FadeIn delay={0.1}>
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-custom-900 mb-2">
                Welcome Back, Leopoldo! 👋
              </h1>
              <p className="text-slate-custom-600">
                Here's an overview of your pension account
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card - Takes 2 columns on large screens */}
          <div className="lg:col-span-2" data-tour="profile-card">
            <ProfileCard />
          </div>

          {/* Beneficiaries Card */}
          <div className="lg:col-span-1" data-tour="beneficiaries-card">
            <BeneficiariesCard />
          </div>
        </div>

        {/* Quick Actions */}
        <div data-tour="quick-actions">
          <FadeIn delay={0.4}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <QuickActionCard
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
              title="View Statements"
              description="Access your pension statements"
              color="ocean"
            />
            <QuickActionCard
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />}
              title="Update Information"
              description="Keep your details current"
              color="thatch"
            />
            <QuickActionCard
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
              title="Resources"
              description="Guides and FAQs"
              color="mint"
            />
          </div>
        </FadeIn>
        </div>
      </main>
    </div>
  );
};

const QuickActionCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    ocean: 'from-ocean-500 to-ocean-600 hover:from-ocean-600 hover:to-ocean-700',
    thatch: 'from-thatch-500 to-thatch-600 hover:from-thatch-600 hover:to-thatch-700',
    mint: 'from-mint-400 to-mint-500 hover:from-mint-500 hover:to-mint-600',
  };

  return (
    <button className={`group p-6 bg-gradient-to-br ${colorClasses[color]} rounded-2xl shadow-float hover:shadow-float-lg transition-all duration-300 text-left`}>
      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </button>
  );
};

export default Dashboard;
