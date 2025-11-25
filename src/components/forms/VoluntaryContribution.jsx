import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations';
import SignatureCanvas from '../SignatureCanvas';

const VoluntaryContribution = ({ onBack }) => {
  const [formData, setFormData] = useState({
    memberName: '',
    accountNo: '',
    contributionAmount: '',
    frequency: '',
    startDate: '',
  });
  
  const [signature, setSignature] = useState(null);
  const [errors, setErrors] = useState({});

  const frequencies = ['Monthly', 'Quarterly', 'Annually', 'One-time'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.memberName) newErrors.memberName = 'Required field';
    if (!formData.accountNo) newErrors.accountNo = 'Required field';
    if (!formData.contributionAmount) newErrors.contributionAmount = 'Required field';
    if (!formData.frequency) newErrors.frequency = 'Required field';
    if (!formData.startDate) newErrors.startDate = 'Required field';
    if (!signature) newErrors.signature = 'Signature is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    alert('Voluntary contribution form submitted successfully!');
    onBack();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FadeIn delay={0.1}>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-medium mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Update My Info
        </button>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-mint-gradient rounded-2xl shadow-float mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-custom-900 mb-2">
            Additional Voluntary Contribution
          </h1>
          <p className="text-slate-custom-600">
            Increase your retirement savings with additional contributions
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-6">
          <div>
            <label htmlFor="memberName" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Member Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="memberName"
              name="memberName"
              value={formData.memberName}
              onChange={handleChange}
              className={`input-field ${errors.memberName ? 'border-red-500 bg-red-50' : ''}`}
            />
            {errors.memberName && <p className="mt-2 text-sm text-red-600">{errors.memberName}</p>}
          </div>

          <div>
            <label htmlFor="accountNo" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Member Account No<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="accountNo"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
              className={`input-field ${errors.accountNo ? 'border-red-500' : ''}`}
            />
            {errors.accountNo && <p className="mt-2 text-sm text-red-600">{errors.accountNo}</p>}
          </div>

          <div>
            <label htmlFor="contributionAmount" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Contribution Amount (CI$)<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="contributionAmount"
              name="contributionAmount"
              value={formData.contributionAmount}
              onChange={handleChange}
              min="0"
              step="0.01"
              className={`input-field ${errors.contributionAmount ? 'border-red-500' : ''}`}
              placeholder="0.00"
            />
            {errors.contributionAmount && <p className="mt-2 text-sm text-red-600">{errors.contributionAmount}</p>}
          </div>

          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Contribution Frequency<span className="text-red-500">*</span>
            </label>
            <select
              id="frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className={`input-field ${errors.frequency ? 'border-red-500' : ''}`}
            >
              <option value="">Select frequency...</option>
              {frequencies.map(freq => (
                <option key={freq} value={freq}>{freq}</option>
              ))}
            </select>
            {errors.frequency && <p className="mt-2 text-sm text-red-600">{errors.frequency}</p>}
          </div>

          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Start Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={`input-field ${errors.startDate ? 'border-red-500' : ''}`}
            />
            {errors.startDate && <p className="mt-2 text-sm text-red-600">{errors.startDate}</p>}
          </div>

          <div className="pt-6 border-t border-slate-custom-200">
            <h3 className="text-xl font-bold text-slate-custom-900 mb-4">Sign:</h3>
            <p className="text-sm text-slate-custom-600 mb-6">
              By signing this document I hereby authorize the Administrators of the Silver Thatch Pensions Plan and their Agents to make the neccessary amendments to my account
            </p>
            
            <div>
              <label className="block text-sm font-medium text-slate-custom-700 mb-2">
                Signature of Member<span className="text-red-500">*</span>
              </label>
              <SignatureCanvas onSignatureChange={setSignature} />
              {errors.signature && <p className="mt-2 text-sm text-red-600">{errors.signature}</p>}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 bg-slate-custom-600 hover:bg-slate-custom-700 text-white font-semibold rounded-xl shadow-float hover:shadow-float-lg transition-all duration-300"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </FadeIn>
    </div>
  );
};

export default VoluntaryContribution;
