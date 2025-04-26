import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { PiMinusCircle } from "react-icons/pi";
import "./FAQItem.css";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <article className="faq-item">
      <div className="faq-question">
        <h3 className="faq-question-text">{question}</h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
          className="faq-toggle-btn"
        >
          {isOpen ? (
            <PiMinusCircle className="icon minus-icon" />
          ) : (
            <GoPlusCircle className="icon plus-icon" />
          )}
        </button>
      </div>

      <div
        id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}
      >
        <p className="faq-answer">{answer}</p>
      </div>
    </article>
  );
};

export default FaqItem;
