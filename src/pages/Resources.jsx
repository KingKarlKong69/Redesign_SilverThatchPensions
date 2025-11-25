import { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import { FadeIn } from '../components/animations';
import { motion } from 'framer-motion';

const Resources = ({ onNavigate, onStartTour }) => {
  const [selectedDocs, setSelectedDocs] = useState([]);
  
  const memberData = {
    name: 'Leopoldo Jr Lopez',
    memberId: '409772',
  };

  const documents = [
    { 
      id: 1, 
      name: 'Annual General Meeting- 2023', 
      uploadedOn: '11/20/2024 14:20:50',
      type: 'PDF'
    },
    { 
      id: 2, 
      name: 'Annual General Meeting- 2024', 
      uploadedOn: '12/05/2024 10:11:54',
      type: 'PDF'
    },
    { 
      id: 3, 
      name: 'Annual General Meeting- 2025', 
      uploadedOn: '11/14/2025 08:56:24',
      type: 'PDF'
    },
  ];

  const toggleDocSelection = (docId) => {
    setSelectedDocs(prev => 
      prev.includes(docId) 
        ? prev.filter(id => id !== docId)
        : [...prev, docId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedDocs.length === documents.length) {
      setSelectedDocs([]);
    } else {
      setSelectedDocs(documents.map(doc => doc.id));
    }
  };

  const handleDownloadSelected = () => {
    if (selectedDocs.length > 0) {
      console.log('Downloading documents:', selectedDocs);
      // Add download logic here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-white to-thatch-50 flex flex-col">
      <DashboardHeader currentPage="resources" onNavigate={onNavigate} onProfileNavigate={onNavigate} onStartTour={onStartTour} />
      
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Message Section */}
          <FadeIn delay={0.2}>
            <div className="bg-white border border-slate-custom-200/40 rounded-2xl shadow-sm overflow-hidden h-full">
              <div className="bg-gradient-to-r from-ocean-600 to-ocean-500 px-6 py-4">
                <h3 className="text-white font-bold text-lg">Message</h3>
              </div>
              <div className="p-6 flex items-center justify-center min-h-[400px]">
                <p className="text-slate-custom-600 text-sm">No data found...</p>
              </div>
            </div>
          </FadeIn>

          {/* Documents Section */}
          <FadeIn delay={0.3}>
            <div data-tour="documents-section" className="bg-white border border-slate-custom-200/40 rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
              <div className="bg-gradient-to-r from-slate-custom-400 to-slate-custom-500 px-6 py-4">
                <h3 className="text-white font-bold text-lg">Documents</h3>
              </div>

              {/* Download Button */}
              <div className="px-6 py-4 border-b border-slate-custom-100 flex items-center gap-3">
                <button
                  onClick={handleDownloadSelected}
                  disabled={selectedDocs.length === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedDocs.length > 0
                      ? 'bg-gradient-to-r from-thatch-500 to-ocean-500 hover:from-thatch-600 hover:to-ocean-600 text-white shadow-md'
                      : 'bg-slate-custom-200 text-slate-custom-400 cursor-not-allowed'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                  {selectedDocs.length > 0 && (
                    <span className="ml-1">({selectedDocs.length})</span>
                  )}
                </button>
                <button
                  onClick={toggleSelectAll}
                  className="text-sm text-ocean-600 hover:text-ocean-700 font-medium hover:underline"
                >
                  {selectedDocs.length === documents.length ? 'Deselect All' : 'Select All'}
                </button>
              </div>

              {/* Documents Table */}
              <div className="overflow-x-auto flex-1">
                <table className="w-full">
                  <thead className="bg-slate-custom-50 border-b border-slate-custom-200">
                    <tr>
                      <th className="px-6 py-3 text-left">
                        <input
                          type="checkbox"
                          checked={selectedDocs.length === documents.length && documents.length > 0}
                          onChange={toggleSelectAll}
                          className="w-4 h-4 text-ocean-600 rounded border-slate-custom-300 focus:ring-ocean-500"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-custom-700">
                        Document
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-custom-700">
                        Uploaded On
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-custom-100">
                    {documents.map((doc) => (
                      <motion.tr
                        key={doc.id}
                        whileHover={{ backgroundColor: 'rgba(193, 240, 232, 0.1)' }}
                        className="transition-colors"
                      >
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={selectedDocs.includes(doc.id)}
                            onChange={() => toggleDocSelection(doc.id)}
                            className="w-4 h-4 text-ocean-600 rounded border-slate-custom-300 focus:ring-ocean-500"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-custom-900 font-medium">{doc.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-custom-600 text-sm">
                          {doc.uploadedOn}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
