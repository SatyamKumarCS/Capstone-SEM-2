"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between w-full py-6 px-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-green-600">{question}</h3>
        <span className="text-gray-500">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Can I Track My Assignments and Grades?",
      answer: "Yes, the LMS offers a \"Gradebook\" where students can view their grades, monitor feedback on assignments, and check upcoming due dates. Instructors can also post grades and comments for each submission."
    },
    {
      question: "Does the LMS support video lessons and live classes?",
      answer: "Yes, our LMS fully supports video content delivery including pre-recorded lessons, live streaming classes, and interactive webinars. Students can join live sessions through the integrated video conferencing tool."
    },
    {
      question: "How can I communicate with my instructor?",
      answer: "Our platform offers multiple communication channels, including direct messaging, discussion forums, and comment threads on assignments. You can also schedule virtual office hours through the calendar feature."
    },
    {
      question: "What support is available for students and instructors?",
      answer: "We provide 24/7 technical support via chat and email, comprehensive help documentation, video tutorials, and regular training webinars for new features. There's also a dedicated support team for urgent issues."
    },
    {
      question: "Are there interactive features for students?",
      answer: "Absolutely! Students can participate in discussion boards, collaborative projects, interactive quizzes, polls, and peer reviews. Our platform also supports gamification elements like badges and progress tracking."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">
          Frequently Asked Questions offers quick answers to common queries, guiding users 
          through features and functionalities effortlessly.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}