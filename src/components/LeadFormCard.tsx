import React, { useState, useRef } from 'react';
import {
  Calendar,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  AlertCircle,
  Mail,
  ChevronDown,
  Phone,
  User,
} from 'lucide-react';
import {
  CalculatedQuote,
  SHIFTING_TYPES,
  INDIAN_CITIES,
  EnquiryValidationErrors,
  SubmittedEnquiry,
  validateEnquiryForm,
  createEnquiryRecord,
  calculateRelocationQuote,
} from '../utils/quoteCalculator';

interface LeadFormCardProps {
  fromInputRef?: React.RefObject<HTMLInputElement | null>;
  onQuoteGenerated: (quote: CalculatedQuote) => void;
  onEnquirySubmitted?: (enquiry: SubmittedEnquiry) => void;
  highlighted?: boolean;
}

const OWNER_GMAIL = 'uv.dineshkumar0126@gmail.com';

export const LeadFormCard: React.FC<LeadFormCardProps> = ({
  fromInputRef,
  onQuoteGenerated,
  onEnquirySubmitted,
  highlighted = false,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shiftingType, setShiftingType] = useState<string>(SHIFTING_TYPES[0].value);
  const [city, setCity] = useState<string>('Chennai (Tamil Nadu)');
  const [shiftingDate, setShiftingDate] = useState('');
  const [errors, setErrors] = useState<EnquiryValidationErrors>({});
  const [submittedEnquiry, setSubmittedEnquiry] = useState<SubmittedEnquiry | null>(null);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailDispatchStatus, setEmailDispatchStatus] = useState<'idle' | 'sent' | 'queued'>('idle');

  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const handleOpenDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.focus();
      if (typeof dateInputRef.current.showPicker === 'function') {
        try {
          dateInputRef.current.showPicker();
        } catch {
          // Fallback to focus when showPicker is restricted
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateEnquiryForm({
      fullName,
      phoneNumber,
      shiftingType,
      city,
      shiftingDate,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const record = createEnquiryRecord(
      {
        fullName,
        phoneNumber,
        shiftingType,
        city,
        shiftingDate,
      },
      OWNER_GMAIL
    );

    const quote = calculateRelocationQuote({
      fromAddress: city,
      toAddress: 'Guduvancheri / Chennai Hub',
      shiftingDate,
      moveCategory: shiftingType === 'office_corporate' ? 'office_corporate' : 'residential_2bhk',
    });
    onQuoteGenerated(quote);

    setSubmittedEnquiry(record);
    onEnquirySubmitted?.(record);
    setIsSendingEmail(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${OWNER_GMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          _subject: `New Moving Enquiry (${record.enquiryId}) — ${record.fullName}`,
          Enquiry_ID: record.enquiryId,
          Customer_Name: record.fullName,
          Phone_Number: record.phoneNumber,
          Type_of_Shifting: record.shiftingTypeLabel,
          City: record.city,
          Shifting_Date: record.shiftingDate,
        }),
      });
      setEmailDispatchStatus(response.ok ? 'sent' : 'queued');
    } catch {
      setEmailDispatchStatus('queued');
    } finally {
      clearTimeout(timeoutId);
      setIsSendingEmail(false);
    }
  };

  const handleReset = () => {
    setSubmittedEnquiry(null);
    setEmailDispatchStatus('idle');
    setErrors({});
  };

  return (
    <div
      id="quote-form-card"
      className={`w-full max-w-md ml-auto bg-[#0B162C]/95 backdrop-blur-md rounded-lg shadow-2xl border transition-all duration-200 overflow-hidden ${
        highlighted
          ? 'border-orange-500 ring-4 ring-orange-500/30'
          : 'border-slate-700/80'
      }`}
    >
      {/* Single Enquiry Header */}
      <div className="bg-orange-600 px-5 py-3.5 text-white flex items-center justify-between">
        <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wide">
          Quick Moving Enquiry
        </h2>
      </div>

      {/* Form Body */}
      <div className="p-5 sm:p-6">
        {submittedEnquiry ? (
          <div className="space-y-4 text-white" data-testid="enquiry-result-panel">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                  Enquiry Submitted · {submittedEnquiry.enquiryId}
                </span>
                <h3 className="text-lg font-extrabold text-white mt-0.5">
                  Thank You, {submittedEnquiry.fullName}
                </h3>
              </div>
              <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" />
            </div>

            <div className="space-y-2 text-xs text-slate-300 bg-slate-950/70 p-3.5 rounded-md border border-slate-800">
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-400">Phone Number:</span>
                <span className="font-semibold text-white tabular-nums">
                  {submittedEnquiry.phoneNumber}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-400">Type of Shifting:</span>
                <span className="font-semibold text-orange-400 text-right">
                  {submittedEnquiry.shiftingTypeLabel}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-400">Place / City:</span>
                <span className="font-semibold text-white text-right">
                  {submittedEnquiry.city}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-400">Shifting Date:</span>
                <span className="font-semibold text-white tabular-nums">
                  {submittedEnquiry.shiftingDate}
                </span>
              </div>
            </div>

            {/* Gmail Notification Status */}
            <div
              role="status"
              className="p-3 rounded-md bg-slate-900 border border-orange-500/40 text-xs text-slate-200 space-y-2"
            >
              <div className="flex items-center gap-2 font-semibold text-orange-400">
                <Mail className="w-4 h-4 shrink-0" />
                <span>
                  {isSendingEmail
                    ? 'Dispatching Gmail notification...'
                    : emailDispatchStatus === 'sent'
                    ? `Notification sent to ${submittedEnquiry.recipientEmail}`
                    : `Enquiry logged for ${submittedEnquiry.recipientEmail}`}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Check your inbox (and spam folder on first submission) to activate instant FormSubmit
                alerts, or click below to send directly via your mail client.
              </p>
              <a
                href={`mailto:${submittedEnquiry.recipientEmail}?subject=${encodeURIComponent(
                  `Moving Enquiry ${submittedEnquiry.enquiryId} - ${submittedEnquiry.fullName}`
                )}&body=${encodeURIComponent(
                  `Name: ${submittedEnquiry.fullName}\nPhone: ${submittedEnquiry.phoneNumber}\nType of Shifting: ${submittedEnquiry.shiftingTypeLabel}\nCity: ${submittedEnquiry.city}\nShifting Date: ${submittedEnquiry.shiftingDate}`
                )}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 underline"
              >
                <span>Send Copy via Gmail / Email Client</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Submit Another Enquiry</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
            {/* 1. Name */}
            <div>
              <label
                htmlFor="enquiry-name-input"
                className="block text-xs font-semibold text-white mb-1"
              >
                Your Name
              </label>
              <div className="relative">
                <input
                  ref={fromInputRef}
                  id="enquiry-name-input"
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) {
                      setErrors((prev) => ({ ...prev, fullName: undefined }));
                    }
                  }}
                  placeholder="Enter your full name"
                  aria-invalid={Boolean(errors.fullName)}
                  className="w-full pl-3.5 pr-9 py-2.5 rounded-md bg-slate-950/60 text-white placeholder-slate-400 text-sm border border-orange-500/70 hover:border-orange-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 transition-all"
                />
                <User
                  aria-hidden="true"
                  className="w-4 h-4 text-orange-500/80 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
              {errors.fullName && (
                <p role="alert" className="mt-1 text-xs text-orange-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* 2. Phone Number */}
            <div>
              <label
                htmlFor="enquiry-phone-input"
                className="block text-xs font-semibold text-white mb-1"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  id="enquiry-phone-input"
                  name="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (errors.phoneNumber) {
                      setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
                    }
                  }}
                  placeholder="10-digit mobile number"
                  aria-invalid={Boolean(errors.phoneNumber)}
                  className="w-full pl-3.5 pr-9 py-2.5 rounded-md bg-slate-950/60 text-white placeholder-slate-400 text-sm border border-orange-500/70 hover:border-orange-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 transition-all tabular-nums"
                />
                <Phone
                  aria-hidden="true"
                  className="w-4 h-4 text-orange-500/80 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
              {errors.phoneNumber && (
                <p role="alert" className="mt-1 text-xs text-orange-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phoneNumber}</span>
                </p>
              )}
            </div>

            {/* 3. Type of Shifting (Dropdown) */}
            <div>
              <label
                htmlFor="shifting-type-select"
                className="block text-xs font-semibold text-white mb-1"
              >
                Type of Shifting
              </label>
              <div className="relative">
                <select
                  id="shifting-type-select"
                  name="shiftingType"
                  value={shiftingType}
                  onChange={(e) => {
                    setShiftingType(e.target.value);
                    if (errors.shiftingType) {
                      setErrors((prev) => ({ ...prev, shiftingType: undefined }));
                    }
                  }}
                  className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-md bg-slate-950/85 text-white text-sm border border-orange-500/70 hover:border-orange-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 transition-all cursor-pointer"
                >
                  {SHIFTING_TYPES.map((option) => (
                    <option key={option.value} value={option.value} className="bg-slate-900 text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="w-4 h-4 text-orange-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
              {errors.shiftingType && (
                <p role="alert" className="mt-1 text-xs text-orange-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.shiftingType}</span>
                </p>
              )}
            </div>

            {/* 4. Place / City in India (Dropdown with all major Indian cities) */}
            <div>
              <label
                htmlFor="india-city-select"
                className="block text-xs font-semibold text-white mb-1"
              >
                Place / City (All India)
              </label>
              <div className="relative">
                <select
                  id="india-city-select"
                  name="city"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    if (errors.city) {
                      setErrors((prev) => ({ ...prev, city: undefined }));
                    }
                  }}
                  className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-md bg-slate-950/85 text-white text-sm border border-orange-500/70 hover:border-orange-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 transition-all cursor-pointer"
                >
                  {INDIAN_CITIES.map((cityName) => (
                    <option key={cityName} value={cityName} className="bg-slate-900 text-white">
                      {cityName}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="w-4 h-4 text-orange-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
              {errors.city && (
                <p role="alert" className="mt-1 text-xs text-orange-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.city}</span>
                </p>
              )}
            </div>

            {/* 5. Shifting Date (with Calendar Picker) */}
            <div>
              <label
                htmlFor="shifting-date-input"
                className="block text-xs font-semibold text-white mb-1"
              >
                Shifting Date
              </label>
              <div className="relative" onClick={handleOpenDatePicker}>
                <input
                  ref={dateInputRef}
                  id="shifting-date-input"
                  name="shiftingDate"
                  type="date"
                  value={shiftingDate}
                  onChange={(e) => {
                    setShiftingDate(e.target.value);
                    if (errors.shiftingDate) {
                      setErrors((prev) => ({ ...prev, shiftingDate: undefined }));
                    }
                  }}
                  aria-invalid={Boolean(errors.shiftingDate)}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-md bg-slate-950/60 text-white placeholder-slate-400 text-sm border border-orange-500/70 hover:border-orange-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 transition-all tabular-nums cursor-pointer"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  aria-label="Open calendar date picker"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenDatePicker();
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-orange-500 hover:text-orange-400 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
              {errors.shiftingDate && (
                <p role="alert" className="mt-1 text-xs text-orange-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.shiftingDate}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 py-3 px-5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-lg shadow-orange-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 whitespace-nowrap"
            >
              <span>SUBMIT ENQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
