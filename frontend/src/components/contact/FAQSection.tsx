import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How do I schedule a property viewing?",
      answer: "You can schedule a viewing directly from any property listing page by clicking 'Schedule Viewing'. Choose your preferred date and time, and our team will confirm with the property owner.",
    },
    {
      id: 2,
      question: "What documents do I need to buy a property?",
      answer: "Typically you'll need: proof of identity, address proof, income documents, bank statements, and a pre-approval letter from your lender. Our agents can guide you through the specific requirements.",
    },
    {
      id: 3,
      question: "Do you offer virtual tours?",
      answer: "Yes! Many of our listings include 3D virtual tours. Look for the 'Virtual Tour' button on the property details page to explore homes remotely.",
    },
    {
      id: 4,
      question: "What is your refund policy?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with our service within the first 30 days, we'll refund your subscription fee, no questions asked.",
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF8F4] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-3">
            <span className="font-space-mono text-xs text-primary uppercase tracking-widest">
              Help Center
            </span>
          </div>
          <h2 className="font-syne font-bold text-4xl text-[#111827] mb-4">
            Common Questions
          </h2>
          <p className="font-manrope text-lg text-[#4B5563] leading-relaxed max-w-[640px] mx-auto">
            Find quick answers to your most pressing questions about buying, selling, and
            partnering with EstateFlow.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="bg-[#F9F7F2] border border-[#E6E0DA] rounded-xl overflow-hidden transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-4 p-6 text-left hover:bg-[#F2EFE9] transition-colors"
              >
                {/* Number Badge */}
                <div className="w-8 h-8 bg-[#F9F7F2] border border-[#E6E0DA] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-syne font-bold text-sm text-primary">
                    {String(faq.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Question Text */}
                <h3 className="flex-1 font-syne font-bold text-lg text-[#111827]">
                  {faq.question}
                </h3>

                {/* Expand/Collapse Icon */}
                <span className={`material-icons text-primary transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  expand_more
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 pl-[72px]">
                  <p className="font-manrope font-extralight text-sm text-[#4B5563] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Questions Link */}
        <div className="text-center mb-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 font-manrope font-bold text-base text-primary hover:text-[#1D6EE4] transition-colors group"
          >
            <span>Get Full Knowledge Base</span>
            <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;