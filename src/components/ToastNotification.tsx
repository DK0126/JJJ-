import React, { useEffect, useRef } from 'react';
import { CheckCircle2, X, MailCheck } from 'lucide-react';
import { SubmittedEnquiry } from '../utils/quoteCalculator';

interface ToastNotificationProps {
  enquiry: SubmittedEnquiry | null;
  onClose: () => void;
  autoHideDurationMs?: number;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  enquiry,
  onClose,
  autoHideDurationMs = 12000,
}) => {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!enquiry) return;
    const timer = setTimeout(() => {
      onCloseRef.current();
    }, autoHideDurationMs);
    return () => clearTimeout(timer);
  }, [enquiry, autoHideDurationMs]);

  if (!enquiry) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      data-testid="enquiry-toast-notification"
      className="fixed bottom-6 right-4 sm:right-6 z-[100] w-[calc(100vw-2rem)] max-w-md bg-slate-900 text-white rounded-lg shadow-2xl border-2 border-orange-500 overflow-hidden animate-fade-in-up"
    >
      {/* Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-orange-400 to-emerald-400" />

      <div className="p-4 sm:p-5 flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-md bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
          <CheckCircle2 className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400 tabular-nums">
              Enquiry Confirmed · {enquiry.enquiryId}
            </span>
          </div>

          <p className="text-sm font-bold text-white leading-snug">
            Thank you, {enquiry.fullName}! Your enquiry has been received.
          </p>

          <p className="text-xs text-slate-200 leading-relaxed">
            {enquiry.shiftingTypeLabel} in <strong className="text-white">{enquiry.city}</strong> on{' '}
            <span className="tabular-nums font-semibold text-white">{enquiry.shiftingDate}</span>.
          </p>

          <div className="pt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300">
            <MailCheck className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">
              Notification dispatched to {enquiry.recipientEmail}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
