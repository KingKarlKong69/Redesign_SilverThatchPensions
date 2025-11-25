import { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import { FadeIn } from '../components/animations';
import { motion } from 'framer-motion';

const ProfileSettings = ({ onNavigate, onBack, onStartTour }) => {
  const [formData, setFormData] = useState({
    memberNumber: '409772',
    displayName: 'Leopoldo Jr Lopez',
    email: 'poldingky@yahoo.com',
    timezone: 'America/Cayman',
    language: 'English(United Kingdom)',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving profile changes:', formData);
    // Add save logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-white to-thatch-50 flex flex-col">
      <DashboardHeader currentPage="home" onNavigate={onNavigate} onProfileNavigate={onNavigate} onStartTour={onStartTour} />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Member Info Bar */}
        <FadeIn delay={0.1}>
          <div className="bg-gradient-to-r from-ocean-600 to-ocean-500 rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {formData.displayName}
              </h2>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                <span className="text-white font-bold text-lg">{formData.memberNumber}</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Profile Form */}
        <FadeIn delay={0.2}>
          <div className="bg-white border border-slate-custom-200/40 rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-custom-400 to-slate-custom-500 px-6 py-4">
              <h3 className="text-white font-bold text-lg">Manage Profile Information</h3>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8">
              <p className="text-sm text-slate-custom-600 mb-8">
                Fields marked with an <span className="text-red-500">*</span> are required
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Member Number */}
                <div>
                  <label className="block text-sm text-slate-custom-600 mb-2">
                    <span className="text-red-500">*</span> Member Number
                  </label>
                  <input
                    type="text"
                    name="memberNumber"
                    value={formData.memberNumber}
                    onChange={handleChange}
                    disabled
                    className="w-full px-4 py-3 border-b-2 border-slate-custom-300 bg-slate-custom-50 text-slate-custom-600 focus:outline-none cursor-not-allowed"
                  />
                </div>

                {/* Time Zone */}
                <div>
                  <label className="block text-sm text-slate-custom-600 mb-2">
                    <span className="text-red-500">*</span> Time Zone
                  </label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b-2 border-slate-custom-300 bg-white focus:outline-none focus:border-ocean-500 transition-colors appearance-none"
                  >
                    <option value="America/Cayman">America/Cayman</option>
                    <option value="America/New_York">America/New York</option>
                    <option value="America/Los_Angeles">America/Los Angeles</option>
                    <option value="Europe/London">Europe/London</option>
                  </select>
                </div>

                {/* Display Name */}
                <div>
                  <label className="block text-sm text-slate-custom-600 mb-2">
                    <span className="text-red-500">*</span> Display Name
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b-2 border-slate-custom-300 bg-white focus:outline-none focus:border-ocean-500 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm text-slate-custom-600 mb-2">
                    <span className="text-red-500">*</span> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b-2 border-slate-custom-300 bg-white focus:outline-none focus:border-ocean-500 transition-colors"
                  />
                </div>

                {/* Language */}
                <div>
                  <label className="block text-sm text-slate-custom-600 mb-2">
                    <span className="text-red-500">*</span> Language
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b-2 border-slate-custom-300 bg-white focus:outline-none focus:border-ocean-500 transition-colors appearance-none"
                  >
                    <option value="English(United Kingdom)">English(United Kingdom)</option>
                    <option value="English(United States)">English(United States)</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600 text-white font-semibold rounded-lg shadow-md transition-all"
                >
                  Save Changes
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={onBack}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600 text-white font-semibold rounded-lg shadow-md transition-all"
                >
                  Go Back
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => window.location.href = '#change-password'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600 text-white font-semibold rounded-lg shadow-md transition-all"
                >
                  Change Password
                </motion.button>
              </div>
            </form>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
};

export default ProfileSettings;
