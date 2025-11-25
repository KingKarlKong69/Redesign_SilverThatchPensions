import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations';
import SignatureCanvas from '../SignatureCanvas';

const AddBeneficiaryForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    memberName: '',
    accountNo: '',
    beneficiaryName: '',
    relationship: '',
    dateOfBirth: '',
    percentage: '',
    contactNo: '',
  });
  
  const [signature, setSignature] = useState(null);
  const [errors, setErrors] = useState({});

  const relationships = ['Spouse', 'Child', 'Parent', 'Sibling', 'Other'];

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
    if (!formData.beneficiaryName) newErrors.beneficiaryName = 'Required field';
    if (!formData.relationship) newErrors.relationship = 'Required field';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Required field';
    if (!formData.percentage) newErrors.percentage = 'Required field';
    if (!signature) newErrors.signature = 'Signature is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    alert('Beneficiary added successfully!');
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-gradient rounded-2xl shadow-float mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-custom-900 mb-2">
            Add Beneficiary
          </h1>
          <p className="text-slate-custom-600">
            Designate who will receive your pension benefits
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
            <label htmlFor="beneficiaryName" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Beneficiary Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="beneficiaryName"
              name="beneficiaryName"
              value={formData.beneficiaryName}
              onChange={handleChange}
              className={`input-field ${errors.beneficiaryName ? 'border-red-500' : ''}`}
            />
            {errors.beneficiaryName && <p className="mt-2 text-sm text-red-600">{errors.beneficiaryName}</p>}
          </div>

          <div>
            <label htmlFor="relationship" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Relationship<span className="text-red-500">*</span>
            </label>
            <select
              id="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className={`input-field ${errors.relationship ? 'border-red-500' : ''}`}
            >
              <option value="">Select relationship...</option>
              {relationships.map(rel => (
                <option key={rel} value={rel}>{rel}</option>
              ))}
            </select>
            {errors.relationship && <p className="mt-2 text-sm text-red-600">{errors.relationship}</p>}
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Date of Birth<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={`input-field ${errors.dateOfBirth ? 'border-red-500' : ''}`}
            />
            {errors.dateOfBirth && <p className="mt-2 text-sm text-red-600">{errors.dateOfBirth}</p>}
          </div>

          <div>
            <label htmlFor="percentage" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Percentage of Benefits (%)<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="percentage"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              min="0"
              max="100"
              className={`input-field ${errors.percentage ? 'border-red-500' : ''}`}
              placeholder="0 - 100"
            />
            {errors.percentage && <p className="mt-2 text-sm text-red-600">{errors.percentage}</p>}
          </div>

          <div>
            <label htmlFor="contactNo" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Contact Number (Optional)
            </label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="input-field"
            />
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

export default AddBeneficiaryForm;
