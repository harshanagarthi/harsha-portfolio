import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, RefreshCw, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CertificateModal({ isOpen, onClose, certificate }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isPdf, setIsPdf] = useState(false);

  useEffect(() => {
    if (certificate?.certificateImage) {
      setImageLoading(true);
      setImageError(false);
      setImageSrc(certificate.certificateImage);
      
      // Check if it's a PDF
      const isPdfFile = certificate.certificateImage.toLowerCase().includes('.pdf') || 
                       certificate.certificateImage.includes('drive.google.com') && 
                       certificate.certificateImage.includes('view');
      setIsPdf(isPdfFile);
    }
  }, [certificate]);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const retryImageLoad = () => {
    setImageLoading(true);
    setImageError(false);
    // Force reload by adding timestamp
    setImageSrc(`${certificate.certificateImage}?t=${Date.now()}`);
  };

  const renderCertificateContent = () => {
    if (isPdf) {
      return (
        <div className="w-full h-[60vh] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <iframe
            src={certificate.certificateImage}
            className="w-full h-full border-0"
            title={`${certificate.title} Certificate`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      );
    }

    return (
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        {/* Loading State */}
        {imageLoading && (
          <div className="flex items-center justify-center p-12">
            <div className="text-center">
              <RefreshCw className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Loading certificate...</p>
            </div>
          </div>
        )}
        
        {/* Image */}
        <img
          src={imageSrc}
          alt={`${certificate.title} Certificate`}
          className={`w-full h-auto max-h-[60vh] object-contain transition-opacity duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: imageLoading ? 'none' : 'block' }}
        />
      </div>
    );
  };

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        {/* Modal */}
        <motion.div
          className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {certificate.title}
              </h3>
              {isPdf && (
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">PDF</span>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Certificate Display */}
            <div className="mb-6">
              {certificate.certificateImage ? (
                renderCertificateContent()
              ) : (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-4xl font-bold mb-4">
                    🏆
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Certificate Not Available
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                    Use the verification link below to view the certificate
                  </p>
                </div>
              )}
              
              {/* Error State for Images */}
              {imageError && !isPdf && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-red-700 dark:text-red-400 font-medium">Failed to Load Image</span>
                  </div>
                  <p className="text-red-600 dark:text-red-400 text-sm mb-3">
                    The certificate image couldn't be loaded. This might be due to privacy settings or file access.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={retryImageLoad}
                      className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                    >
                      <RefreshCw className="w-4 h-4 mr-1" />
                      Retry
                    </button>
                    <a
                      href={certificate.certificateImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Open Directly
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Certificate Details */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Certificate Details
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  This certificate demonstrates your expertise and achievement in this field. 
                  You can verify the authenticity using the verification link below.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </a>
                
                {certificate.certificateImage && (
                  <>
                    <a
                      href={certificate.certificateImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {isPdf ? 'View PDF' : 'View in Drive'}
                    </a>
                    
                    <a
                      href={certificate.certificateImage}
                      download
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
