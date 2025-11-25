import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations';
import SignatureCanvas from '../SignatureCanvas';

const ChangeOfAddress = ({ onBack }) => {
  const [formData, setFormData] = useState({
    memberName: '',
    contactNo: '',
    accountNo: '',
    dateOfBirth: '',
    mailingAddress: '',
    email: '',
  });
  
  const [signature, setSignature] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const newErrors = {};
    if (!formData.memberName) newErrors.memberName = 'Required field';
    if (!formData.contactNo) newErrors.contactNo = 'Required field';
    if (!formData.accountNo) newErrors.accountNo = 'Required field';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Required field';
    if (!formData.mailingAddress) newErrors.mailingAddress = 'Required field';
    if (!signature) newErrors.signature = 'Signature is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    alert('Form submitted successfully!');
    onBack();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
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

      {/* Form Title */}
      <FadeIn delay={0.2}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-gradient rounded-2xl shadow-float mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-custom-900 mb-2">
            Change of Address Notice
          </h1>
          <p className="text-slate-custom-600">
            I would like to change my contact details to reflect the following:
          </p>
        </div>
      </FadeIn>

      {/* Form */}
      <FadeIn delay={0.3}>
        <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-6">
          {/* Member Name */}
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
            {errors.memberName && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.memberName}
              </p>
            )}
          </div>

          {/* Member Contact No */}
          <div>
            <label htmlFor="contactNo" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Member Contact No<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className={`input-field ${errors.contactNo ? 'border-red-500' : ''}`}
            />
            {errors.contactNo && (
              <p className="mt-2 text-sm text-red-600">{errors.contactNo}</p>
            )}
          </div>

          {/* Member Account No */}
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
            {errors.accountNo && (
              <p className="mt-2 text-sm text-red-600">{errors.accountNo}</p>
            )}
          </div>

          {/* Date of Birth */}
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
            {errors.dateOfBirth && (
              <p className="mt-2 text-sm text-red-600">{errors.dateOfBirth}</p>
            )}
          </div>

          {/* Mailing Address */}
          <div>
            <label htmlFor="mailingAddress" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Mailing Address<span className="text-red-500">*</span>
            </label>
            <textarea
              id="mailingAddress"
              name="mailingAddress"
              value={formData.mailingAddress}
              onChange={handleChange}
              rows={3}
              className={`input-field ${errors.mailingAddress ? 'border-red-500' : ''}`}
            />
            {errors.mailingAddress && (
              <p className="mt-2 text-sm text-red-600">{errors.mailingAddress}</p>
            )}
          </div>

          {/* Email Address (Optional) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-custom-700 mb-2">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Signature Section */}
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
              {errors.signature && (
                <p className="mt-2 text-sm text-red-600">{errors.signature}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
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

export default ChangeOfAddress;
