'use client';
import { useLanguage } from '../contexts/LanguageContext';

export function RTLWrapper({ children }) {
  const { isRTL } = useLanguage();
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'rtl' : 'ltr'}>
      {children}
    </div>
  );
}
