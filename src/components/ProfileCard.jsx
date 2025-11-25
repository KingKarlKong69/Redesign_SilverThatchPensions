import { FadeIn } from './animations';
import { motion } from 'framer-motion';

const ProfileCard = () => {
  const memberData = {
    name: 'Leopoldo Jr Lopez',
    memberId: '409772',
    address: 'HOLD MAIL',
    location: 'Cayman Islands',
    dateOfBirth: '26-Jun-1971',
    dateOfEmployment: '10-May-2023',
    normalRetirementDate: '26-Jun-2036',
    earlyRetirementDate: '26-Jun-2026',
    dateOfPlanEntry: '19-May-2023',
  };

  return (
    <FadeIn delay={0.2}>
      <div className="glass-card p-6 sm:p-8">
        {/* Header with Member ID */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-slate-custom-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-custom-900 mb-1">
              {memberData.name}
            </h2>
            <p className="text-sm text-slate-custom-500">
              {memberData.address} • {memberData.location}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-thatch-gradient px-4 py-2 rounded-xl shadow-float">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
            <div>
              <p className="text-xs text-white/80">Member ID</p>
              <p className="text-base font-bold text-white">{memberData.memberId}</p>
            </div>
          </div>
        </div>

        {/* Personal Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <InfoItem 
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              }
              label="Date of Birth"
              value={memberData.dateOfBirth}
            />
            <InfoItem 
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              }
              label="Date of Employment"
              value={memberData.dateOfEmployment}
            />
            <InfoItem 
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              }
              label="Normal Retirement Date"
              value={memberData.normalRetirementDate}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <InfoItem 
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              }
              label="Member Account Number"
              value={memberData.memberId}
            />
            <InfoItem 
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              }
              label="Date of Plan Entry"
              value={memberData.dateOfPlanEntry}
            />
            <InfoItem 
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              }
              label="Early Retirement Date"
              value={memberData.earlyRetirementDate}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const InfoItem = ({ icon, label, value }) => {
  return (
    <motion.div 
      className="flex items-start gap-3 p-4 bg-gradient-to-br from-pearl-50 to-white rounded-xl border border-slate-custom-100 hover:border-thatch-300 hover:shadow-md transition-all duration-300"
      whileHover={{ scale: 1.02, x: 5 }}
    >
      <div className="flex-shrink-0 w-10 h-10 bg-thatch-100 rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-thatch-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-custom-500 font-medium mb-1">{label}</p>
        <p className="text-base font-semibold text-slate-custom-900">{value}</p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
