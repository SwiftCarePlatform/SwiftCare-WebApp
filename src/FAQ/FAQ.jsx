import React, { useState } from "react";
import FAQItem from "./Faqitem";
import "./FAQ.css";

const FAQ = () => {
  const faqItems = [
    {
      question: "Is there a free trial available?",
      answer: `Yes! We offer a 30-day free trial that gives you full access to all our premium features — no credit card required.  
  To help you get started smoothly, we also provide a free, personalized 30-minute onboarding call.  
  During this session, our support team will guide you through setup, answer any questions, and ensure you're getting the most out of the platform from day one.`,
    },
    {
      question: "Can I change my plan later?",
      answer: `Absolutely. You can upgrade or downgrade your subscription plan at any time through your account dashboard.  
               Whether you're scaling up or simplifying, we make it easy to adjust your plan to better suit your changing needs —  
               and any changes will be reflected in your next billing cycle.`,
    },
    {
      question: "What is your cancellation policy?",
      answer: `You’re free to cancel your subscription at any time before your next billing date.  
               Once canceled, your account will remain active through the end of your current billing period.  
               We do not charge cancellation fees, and you won’t be billed again unless you reactivate your subscription.`,
    },
    {
      question: "Can other info be added to an invoice?",
      answer: `Yes, you can customize your invoices to include additional information such as company name, address, tax ID (e.g. VAT number),  
               or any relevant billing notes.  
               Simply go to your Billing Settings, and you’ll find options to update invoice details and preferences.`,
    },
    {
      question: "How does billing work?",
      answer: `We offer flexible billing options — you can choose between monthly or annual plans.  
               Payments are processed securely, and all charges are clearly itemized in your invoice.  
               Annual subscriptions come with a discounted rate, and you can switch billing frequency at any time.`,
    },
    {
      question: "How do I change my account email?",
      answer: `You can update your email address by navigating to **Account Settings > Profile**.  
               Once you enter a new email, you’ll receive a confirmation link to verify the change.  
               Please ensure you use a valid and accessible email address, as it’s essential for login, notifications, and password recovery.`,
    },
  ];
  
  

  const [openIndex, setOpenIndex] = useState(0); 

  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <header className="faq-header">
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about the product and billing.
          </p>
        </header>

        <div className="faq-items">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
