"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import { RTLWrapper } from '../components/RTLWrapper';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    destination: '',
    persons: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          destination: '',
          persons: '',
          message: ''
        });
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <RTLWrapper>
      <div className="bg-[#f2f2f7] pt-60 pb-20" id="contact">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1c355e]">
            {t('contactPage.mainTitle')}
          </h2>
          <p className="pt-6 pb-6 text-2xl max-w-2xl m-auto text-[#1c355e]/80">
            {t('contactPage.mainDescription')}
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">
                Thanks for contacting us! Our team will be with you soon.
              </span>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 pt-12">
          {/* Left Column */}
          <div className="xl:text-xl text-lg">
            <h3 className="text-3xl font-semibold text-[#1c355e]">
              {t('contactPage.leftTitle')}
            </h3>
            <p className="mt-4 mb-4 text-[#1c355e]/80">
              {t('contactPage.leftDescription')}
            </p>

            <div className="flex items-center mt-8 space-x-2 text-[#1c355e]">
              <MapPin className="w-5 h-5" />
              <span>{t('contactPage.address')}</span>
            </div>

            <div className="flex items-center mt-8 space-x-2 text-[#1c355e]">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@mstravel.ae" className="hover:underline">
                {t('contactPage.email')}
              </a>
            </div>

            <div className="flex items-center mt-8 space-x-2 text-[#1c355e]">
              <Phone className="w-5 h-5" />
              <span dir={isRTL ? 'ltr' : undefined} className="inline-flex items-center gap-4">
                <a href={`tel:${t('contactPage.phone')}`} className="hover:underline">
                  {t('contactPage.phone_display')}
                </a>
                <span className="text-[#1c355e]/80">|</span>
                <a className="text-[#1c355e]">{t('contactPage.phone2_display')}</a>
              </span>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contactPage.fullNamePlaceholder')}
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
                />
              </div>

              <div className="mb-5">
                <input
                  id="email_address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contactPage.emailPlaceholder')}
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
                />
              </div>

              <div className="mb-5">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('contactPage.phonePlaceholder')}
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
                />
              </div>

              <div className="mb-5">
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
                >
                  <option value="">{t('contactPage.selectInquiryType')}</option>
                  <option value="booking">{t('contactPage.bookingInquiry')}</option>
                  <option value="general">{t('contactPage.generalQuestion')}</option>
                </select>
              </div>

              <div className="mb-5">
                <input
                  id="destination"
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder={t('contactPage.destinationPlaceholder')}
                  autoComplete="off"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
                />
              </div>

              <div className="mb-5">
                <input
                  id="persons"
                  type="number"
                  name="persons"
                  value={formData.persons}
                  onChange={handleInputChange}
                  placeholder={t('contactPage.numberOfPersonsPlaceholder')}
                  autoComplete="off"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
                />
              </div>

              <div className="mb-5">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contactPage.messagePlaceholder')}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white h-36 focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 font-semibold text-white bg-[#1c355e] cursor-pointer rounded-md hover:bg-[#162947] transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : t('contactPage.sendMessageButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </RTLWrapper>
  );
};

export default ContactSection;
