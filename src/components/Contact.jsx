import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Sparkle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { creatorConfig } from '../data/portfolioData';
import InstagramIcon from './icons/InstagramIcon';

export default function Contact({ prefilledSubject = '' }) {
  const emailAddress = creatorConfig.email || 'geetanjalimunde111@gmail.com';
  const instagramHandle = creatorConfig.instagram || '@geetanjali.ugc';
  const instagramUrl = creatorConfig.instagramUrl || 'https://www.instagram.com/geetanjali.ugc/';

  // Form State
  const [brandName, setBrandName] = useState('');
  const [brandEmail, setBrandEmail] = useState('');
  const [selectedService, setSelectedService] = useState('UGC Video Ads');
  const [videoCount, setVideoCount] = useState('1–2 Videos');
  const [message, setMessage] = useState('');
  
  // UI Feedback States
  const [copiedType, setCopiedType] = useState(null);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const serviceOptions = [
    'UGC Video Ads',
    'Product Demo',
    'Unboxing & PR',
    'Aesthetic ASMR',
    'Monthly Retainer',
    'Custom Concept'
  ];

  const packageOptions = [
    '1 Video',
    '2–3 Videos',
    '5+ Videos Batch',
    'Ongoing Retainer'
  ];

  // Update selected service and message when prefilledSubject changes from parent
  useEffect(() => {
    if (prefilledSubject) {
      const matched = serviceOptions.find(
        (s) => s.toLowerCase() === prefilledSubject.toLowerCase()
      );
      if (matched) {
        setSelectedService(matched);
      }
      setMessage(`Hi Geet, I came across your portfolio and would love to collaborate regarding "${prefilledSubject}".`);
    }
  }, [prefilledSubject]);

  // Construct structured collaboration email body
  const generateEmailContent = () => {
    const subjectLine = brandName
      ? `UGC Collaboration Inquiry — ${brandName} (${selectedService})`
      : `UGC Collaboration Inquiry — ${selectedService}`;

    const formattedBody = `Hi Geet,

I'm reaching out from ${brandName || '[Brand/Company Name]'} regarding a potential UGC collaboration.

Here are our campaign details:
• Deliverable Type: ${selectedService}
• Estimated Deliverables: ${videoCount}
• Contact Email: ${brandEmail || '[Our Email Address]'}

Project Overview / Notes:
${message.trim() || 'We love your aesthetic UGC videos and would like to receive your media kit, rate card, and current availability.'}

Looking forward to hearing from you!

Best regards,
${brandName || 'Brand Team'}`;

    return { subject: subjectLine, body: formattedBody };
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#EC4899', '#F472B6', '#A855F7', '#DDD6FE']
      });
    } catch {
      // Fallback silently if canvas-confetti is unavailable
    }
  };

  // 1-Click Copy helper
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  // Launch Gmail Web Compose in new browser tab
  const handleOpenGmail = () => {
    const { subject, body } = generateEmailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      emailAddress
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Copy brief to clipboard as a safety backup
    navigator.clipboard.writeText(body);
    
    // Open Gmail directly in new tab
    const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    
    // Fallback if popup blocker intercepted
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    
    triggerConfetti();
    setSubmittedStatus('gmail');
    setTimeout(() => setSubmittedStatus(null), 6000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#FCF9FA] border-t border-pink-100 relative overflow-hidden">
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-pink-200/40 blur-[110px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-purple-200/40 blur-[110px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/90 border border-pink-200 text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-pink-700 shadow-xs mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>LET'S COLLABORATE</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-[1.15] text-[#1E1B1E] font-normal uppercase tracking-tight">
            HAVE A PRODUCT THAT DESERVES{' '}
            <span className="italic bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent block sm:inline">
              TO BE SEEN?
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-base text-[#6B636D] font-light leading-relaxed max-w-xl mx-auto px-2">
            Ready to scale your paid social ads, organic engagement, or product launch? Fill out a quick brief below or reach out directly for rates and availability.
          </p>
        </div>

        {/* 2-Column Professional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Direct Contact Channels (Instagram First, Email Below Insta ID) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-5 sm:p-7 rounded-3xl bg-white/95 border-2 border-pink-100 shadow-[0_10px_30px_rgba(236,72,153,0.05)] space-y-5">
              <h3 className="font-serif text-lg text-[#1E1B1E] uppercase tracking-wide flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-pink-500" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* 1. INSTAGRAM CHANNEL */}
              <div className="p-4 rounded-2xl bg-[#FCF9FA] border border-purple-100 hover:border-purple-300 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">
                    Instagram Direct Message
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(instagramHandle, 'instagram')}
                    className="inline-flex items-center gap-1.5 text-xs text-purple-700 hover:text-purple-900 font-medium px-2 py-1 rounded-lg hover:bg-purple-100/60 transition-colors cursor-pointer"
                    title="Copy Instagram Handle"
                  >
                    {copiedType === 'instagram' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-sm sm:text-base font-medium text-[#1E1B1E]">
                  {instagramHandle}
                </div>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100/90 border border-purple-200 text-purple-900 text-xs font-semibold tracking-wider uppercase transition-all shadow-xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-purple-600" />
                  <span>Send DM on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
                </a>
              </div>

              {/* 2. OFFICIAL EMAIL CHANNEL (Placed below Instagram ID) */}
              <div className="p-4 rounded-2xl bg-[#FCF9FA] border border-pink-100 hover:border-pink-300 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600">
                    Official Email
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(emailAddress, 'email')}
                    className="inline-flex items-center gap-1.5 text-xs text-pink-700 hover:text-pink-900 font-medium px-2 py-1 rounded-lg hover:bg-pink-100/60 transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedType === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs sm:text-sm md:text-base font-medium text-[#1E1B1E] break-all select-all font-mono">
                  {emailAddress}
                </div>
                
                {/* Single clean Open Gmail button */}
                <button
                  type="button"
                  onClick={handleOpenGmail}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-xs hover:shadow-md cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Gmail</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </button>
              </div>

            </div>

            {/* UGC Creator Highlights Box */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-pink-50/60 via-white to-purple-50/50 border border-pink-100 space-y-3 text-xs text-[#6B636D]">
              <h4 className="font-semibold text-pink-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
                <span>What to Expect</span>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 flex-shrink-0" />
                  <span><strong>3–5 Business Days</strong> turnaround time</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 flex-shrink-0" />
                  <span><strong>9:16 Vertical</strong> formats for Meta & TikTok</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 flex-shrink-0" />
                  <span><strong>Clean ASMR & Voiceovers</strong> with brand talking points</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 flex-shrink-0" />
                  <span>Rate card & media kit shared upon inquiry</span>
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Brand Collaboration Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl sm:rounded-[32px] border-2 border-pink-200 p-5 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(236,72,153,0.07)] relative">
              
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-pink-100">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1E1B1E] uppercase tracking-tight">
                    Start a Collaboration
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B636D] mt-0.5">
                    Fill out your campaign needs and launch directly into your email.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl bg-pink-50 border border-pink-200 text-pink-500">
                  <Sparkle className="w-5 h-5 animate-pulse" />
                </div>
              </div>

              {/* Notification Banner */}
              <AnimatePresence>
                {submittedStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="mb-5 p-3.5 sm:p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Opened in Gmail Compose!</p>
                      <p className="text-emerald-700 text-xs mt-0.5">
                        Your brief was also saved to your clipboard as a backup.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={(e) => { e.preventDefault(); handleOpenGmail(); }} className="space-y-4 sm:space-y-5">
                
                {/* Brand Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B1E] mb-1">
                      Brand / Agency Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nykaa, Hyphen, Dot & Key"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#FCF9FA] border border-pink-200 focus:border-pink-500 focus:bg-white focus:outline-none text-xs sm:text-sm text-[#1E1B1E] placeholder:text-gray-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B1E] mb-1">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@brand.com"
                      value={brandEmail}
                      onChange={(e) => setBrandEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#FCF9FA] border border-pink-200 focus:border-pink-500 focus:bg-white focus:outline-none text-xs sm:text-sm text-[#1E1B1E] placeholder:text-gray-400 transition-all"
                    />
                  </div>
                </div>

                {/* Service Type Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B1E] mb-1.5 flex items-center justify-between">
                    <span>Deliverable Needed</span>
                    <span className="text-[11px] font-normal text-pink-600">Select one</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {serviceOptions.map((service) => {
                      const isSelected = selectedService === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-left flex items-center justify-between border cursor-pointer ${
                            isSelected
                              ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-500 shadow-xs'
                              : 'bg-[#FCF9FA] text-[#4A424C] border-pink-100 hover:border-pink-300 hover:bg-pink-50/40'
                          }`}
                        >
                          <span className="truncate">{service}</span>
                          {isSelected && <Check className="w-3 h-3 flex-shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Estimated Volume */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B1E] mb-1.5">
                    Estimated Volume
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {packageOptions.map((pkg) => {
                      const isSelected = videoCount === pkg;
                      return (
                        <button
                          key={pkg}
                          type="button"
                          onClick={() => setVideoCount(pkg)}
                          className={`py-2 px-2 rounded-xl text-xs font-medium text-center transition-all border cursor-pointer ${
                            isSelected
                              ? 'bg-pink-100 text-pink-950 border-pink-300 font-semibold'
                              : 'bg-white text-[#6B636D] border-gray-200 hover:border-pink-200 hover:bg-pink-50/30'
                          }`}
                        >
                          {pkg}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Campaign Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B1E] mb-1 flex items-center justify-between">
                    <span>Campaign Details & Deliverables</span>
                    <span className="text-[11px] font-normal text-[#8A818B]">Optional</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell me about your product, campaign angle, or timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#FCF9FA] border border-pink-200 focus:border-pink-500 focus:bg-white focus:outline-none text-xs sm:text-sm text-[#1E1B1E] placeholder:text-gray-400 transition-all resize-y"
                  />
                </div>

                {/* Single Primary Action Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase hover:shadow-xl hover:shadow-pink-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Inquiry via Gmail</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80" />
                  </button>
                </div>

                {/* Fallback direct email info if Gmail compose isn't preferred or doesn't open */}
                <div className="pt-2 text-center text-xs text-[#6B636D]">
                  <span>Prefer to email directly? </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(emailAddress, 'email')}
                    className="font-mono font-medium text-pink-600 hover:text-pink-800 underline decoration-pink-300 underline-offset-2 transition-colors cursor-pointer"
                    title="Click to copy email address"
                  >
                    {emailAddress}
                  </button>
                  {copiedType === 'email' ? (
                    <span className="ml-1.5 text-[11px] text-emerald-600 font-semibold inline-flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> Copied!
                    </span>
                  ) : (
                    <span className="text-[11px] text-gray-400 ml-1">(click to copy)</span>
                  )}
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
