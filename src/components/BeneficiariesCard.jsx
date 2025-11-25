import { FadeIn } from './animations';
import { motion } from 'framer-motion';

const BeneficiariesCard = () => {
  const beneficiaries = [
    {
      name: 'Virginia D Lopez',
      relationship: 'Spouse',
    },
  ];

  return (
    <FadeIn delay={0.3}>
      <div className="glass-card p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-custom-200">
          <div className="w-12 h-12 bg-ocean-gradient rounded-xl flex items-center justify-center shadow-float">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-custom-900">
              Beneficiaries
            </h2>
            <p className="text-sm text-slate-custom-500">People who will receive your benefits</p>
          </div>
        </div>

        {/* Beneficiaries List */}
        <div className="space-y-3">
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-5 bg-gradient-to-br from-thatch-50 to-ocean-50 rounded-xl border border-thatch-200 hover:border-thatch-400 hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.01, x: 5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 bg-thatch-gradient rounded-full flex items-center justify-center shadow-float">
                  <span className="text-xl font-bold text-white">
                    {beneficiary.name.charAt(0)}
                  </span>
                </div>
                
                {/* Info */}
                <div>
                  <p className="text-lg font-semibold text-slate-custom-900 mb-1">
                    {beneficiary.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-ocean-100 text-ocean-700">
                      {beneficiary.relationship}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-custom-400 hover:text-thatch-600 hover:bg-thatch-50 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Add Beneficiary Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 w-full py-4 bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600 text-white font-semibold rounded-xl shadow-float hover:shadow-float-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Add Beneficiary</span>
        </motion.button>
      </div>
    </FadeIn>
  );
};

export default BeneficiariesCard;
