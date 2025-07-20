'use client';

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, switchLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    switchLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-4 py-2 text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 min-w-[120px] ${
          isRTL ? 'flex-row-reverse' : ''
        }`}
      >
        <Globe size={16} />
        <span className="font-medium flex-1 text-center">{currentLanguage?.name}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className={`absolute top-full mt-2 bg-white/95 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform ${
          isRTL ? 'right-0' : 'left-0'
        } w-[120px] z-50`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-center transition-all duration-300 ${
                language === lang.code
                  ? 'bg-blue-50 text-[#1c355e] font-medium'
                  : 'text-[#8b7866] hover:text-[#1c355e] hover:bg-blue-50'
              }`}
            >
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
