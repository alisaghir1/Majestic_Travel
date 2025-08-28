"use client";

import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { RTLWrapper } from "./RTLWrapper";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <RTLWrapper>
      <footer className="w-full bg-[#f2f2f7] text-[#1c355e] py-12 border-t-3 border-[#1c355e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid md:grid-cols-3 gap-12 text-center md:${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Newsletter */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('footer.newsletterTitle')}</h3>
              <p className="text-lg mb-6">
                {t('footer.newsletterDescription')}
              </p>
              <div className={`flex justify-center items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className={`w-full max-w-md px-6 py-4 text-lg rounded-full bg-white border border-[#1c355e] focus:outline-none focus:ring-2 focus:ring-[#1c355e] transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                />
                <button className="px-6 py-4 bg-[#1c355e] text-white text-lg rounded-full hover:bg-[#8b7866] transition-all cursor-pointer">
                  {t('footer.subscribeButton')}
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4">{t('footer.followUs')}</h3>
              <div className="flex gap-6 mb-4">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c355e] hover:text-[#8b7866] transition-all"
                >
                  <Instagram className="w-8 h-8" />
                </Link>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c355e] hover:text-[#8b7866] transition-all"
                >
                  <Facebook className="w-8 h-8" />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c355e] hover:text-[#8b7866] transition-all"
                >
                  <Linkedin className="w-8 h-8" />
                </Link>
              </div>
            </div>

            {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#1c355e]">
                  {t('footer.contactTitle')}
                </h3>

                <p className="text-lg mb-2">
                  <span className="font-semibold text-[#1c355e]">{t('footer.emailLabel')} </span>
                  <a
                    href={`mailto:${t('footer.email')}`}
                    className="hover:text-[#8b7866] transition-all"
                  >
                    {t('footer.email')}
                  </a>
                </p>

                <p className="text-lg mb-2">
                  <span className="font-semibold text-[#1c355e]">{t('footer.whatsappLabel')} </span>
                  <span dir={isRTL ? 'ltr' : undefined} className="inline-block">
                    <a
                      href={`tel:${t('footer.phone')}`}
                      className="hover:text-[#8b7866] transition-all"
                    >
                      {t('footer.phone_display')}
                    </a>
                  </span>
                </p>

                <p className="text-lg mb-2">
                  <span className="font-semibold text-[#1c355e]">{t('footer.callLabel')} </span>
                  <span dir={isRTL ? 'ltr' : undefined} className="inline-flex items-center gap-4">
                    <a
                      href={`tel:${t('footer.phone')}`}
                      className="hover:text-[#8b7866] transition-all"
                    >
                      {t('footer.phone_display')}
                    </a>
                    <span className="text-[#1c355e]/80">|</span>
                    <a
                      href={`tel:${t('footer.phone2')}`}
                      className="hover:text-[#8b7866] transition-all"
                    >
                      {t('footer.phone2_display')}
                    </a>
                  </span>
                </p>
              </div>
          </div>

          {/* Bottom copyright */}
          <div className="mt-12 text-center text-sm text-[#8b7866]">
            <p>
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </RTLWrapper>
  );
}
