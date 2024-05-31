import React, { useState } from "react";
import "./FAQPage.css";
import Header from "../../components/Header/Header";

function FAQPage() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows you to return products within 30 days of purchase. Please ensure the items are in their original condition.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes between 5-7 business days, depending on your location.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping rates and delivery times vary by destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking number provided in the shipping confirmation email.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can change or cancel your order within 24 hours of placing it by contacting our customer service.",
    },
  ];

  return (
    <div className="faqPage">
      <Header />

      <div className="faqContainer">
        <h1>Frequently Asked Questions</h1>
        <div className="faqList">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faqItem">
      <div className="faqQuestion" onClick={() => setIsOpen(!isOpen)}>
        {faq.question}
      </div>
      {isOpen && <div className="faqAnswer">{faq.answer}</div>}
    </div>
  );
}

export default FAQPage;
