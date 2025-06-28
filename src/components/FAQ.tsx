"use client";




import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most local business websites take 2-3 weeks from start to finish. This includes design, development, content integration, and testing. We\'ll give you a specific timeline based on your project requirements during our initial consultation.'
    },
    {
      question: 'Do you offer SEO and mobile optimization?',
      answer: 'Absolutely! Every website we build is fully optimized for mobile devices and includes basic SEO setup. This includes proper page structure, meta tags, local SEO optimization, and fast loading speeds to help you rank better in search results.'
    },
    {
      question: 'Can I update the website myself after it\'s live?',
      answer: 'Yes! We build user-friendly websites with content management systems that allow you to easily update text, images, and basic content. We also provide training and documentation to help you manage your site, plus ongoing support when needed.'
    },
    {
      question: 'What\'s the average pricing for local business websites?',
      answer: 'Our websites typically range from $2,500 to $8,000 depending on complexity, features, and customization needs. This includes design, development, mobile optimization, basic SEO, and training. We provide detailed quotes after understanding your specific requirements.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer various support packages including regular updates, security monitoring, backups, and technical support. We\'re here to help your website grow with your business and ensure it stays secure and up-to-date.'
    },
    {
      question: 'Will my website work on all devices and browsers?',
      answer: 'Absolutely! All our websites are built to be fully responsive and work perfectly on desktops, tablets, and smartphones. We test across all major browsers to ensure a consistent experience for all your visitors.'
    },
    {
      question: 'Do you help with content and photography?',
      answer: 'We can definitely help! We offer content writing services and can guide you on photography needs. We also have partnerships with local photographers if you need professional photos of your business, products, or services.'
    },
    {
      question: 'What makes you different from other web design companies?',
      answer: 'We specialize exclusively in local businesses and understand the unique challenges you face. You work directly with our team (not account managers), we focus on results that matter to your business, and we provide ongoing partnership rather than just building and leaving.'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-[1444px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg">Frequently Asked Questions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Common Questions from
            <span className="text-blue-800 block">Local Business Owners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve answered the most common questions we get from local businesses considering a new website.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-800 transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We&apos;d love to answer any specific questions about your business and discuss how we can help you succeed online.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-orange-500 hover:bg-orange-500/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
          >
            Get Your Questions Answered
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;