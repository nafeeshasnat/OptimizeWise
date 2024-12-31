import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What exactly is Conversion Rate Optimization (CRO)?",
    answer: "Conversion Rate Optimization (CRO) is a systematic process of increasing the percentage of website visitors who take desired actions - such as making a purchase, signing up for a service, or filling out a form. It combines data analysis, user research, and A/B testing to improve website performance and user experience."
  },
  {
    question: "How long does it take to see results from CRO?",
    answer: "While initial improvements can be seen within weeks, meaningful results typically emerge within 2-3 months of consistent testing. The timeline depends on your website traffic, the complexity of tests, and the size of improvements being made. Our approach focuses on both quick wins and long-term strategic improvements."
  },
  {
    question: "What's the difference between CRO and A/B testing?",
    answer: "While closely related, CRO is the overall strategy of improving conversion rates, while A/B testing is one of the primary tools used in CRO. A/B testing involves comparing two or more versions of a webpage to determine which performs better. CRO encompasses the entire process, including user research, data analysis, hypothesis formation, and implementation."
  },
  {
    question: "How much traffic do I need for effective A/B testing?",
    answer: "For statistically significant results, we recommend having at least 1,000 monthly conversions per test variant. However, the exact traffic requirements depend on your current conversion rate, the expected improvement, and the confidence level desired. We'll help determine the right testing approach based on your specific situation."
  },
  {
    question: "What kind of ROI can I expect from CRO?",
    answer: "ROI varies by industry and implementation, but our clients typically see a 2-4x return on their CRO investment within the first year. This includes increased revenue from higher conversion rates, improved customer lifetime value, and reduced customer acquisition costs. We track and report ROI metrics throughout our engagement."
  },
  {
    question: "Will CRO affect my website's SEO?",
    answer: "When done correctly, CRO complements and can even improve your SEO efforts. We follow best practices to ensure all tests and changes maintain your site's SEO integrity. Improved user experience and engagement metrics from CRO can actually positively impact your search rankings."
  },
  {
    question: "How do you prioritize what to test?",
    answer: "We use a data-driven prioritization framework that considers potential impact, implementation effort, and available resources. This includes analyzing your analytics data, user feedback, and business goals to identify high-impact opportunities. We also consider quick wins alongside longer-term strategic improvements."
  },
  {
    question: "What tools and technologies do you use for CRO?",
    answer: "We utilize industry-leading tools including Google Optimize, VWO, Optimizely, and Adobe Target for A/B testing. For analytics and research, we use tools like Google Analytics, Hotjar, and UserTesting.com. The specific tools are chosen based on your needs and existing technology stack."
  }
];

export function CroFaq() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about CRO and A/B testing, and learn how 
              our approach can help grow your business.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-gray-50/50"
              >
                <AccordionTrigger className="text-left hover:text-[hsl(var(--theme-accent))] py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}