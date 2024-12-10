import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What happens after I schedule a consultation?",
    answer: "After scheduling, you'll receive a confirmation email with meeting details and a brief questionnaire to help us prepare. Our team will review your website before the call to provide more specific insights during our discussion."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes, we work with clients globally. Our team operates remotely, allowing us to serve businesses worldwide. We schedule meetings across different time zones for your convenience."
  },
  {
    question: "What should I prepare for the consultation?",
    answer: "Having access to your analytics data and a clear understanding of your current challenges and goals will help make our discussion more productive. We'll send you a brief questionnaire to guide your preparation."
  },
  {
    question: "How soon can we start working together?",
    answer: "After the consultation, if we're a good fit, we can typically begin within 1-2 weeks. We'll provide a detailed proposal and timeline based on your specific needs and priorities."
  }
];

export function ContactFAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}