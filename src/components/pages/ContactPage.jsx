import { ContactHero } from './sections/contact/ContactHero';
import { ContactForm } from './sections/contact/ContactForm';
import { ContactInfo } from './sections/contact/ContactInfo';
import { ContactFAQ } from './sections/contact/ContactFAQ';
import { SEO } from '@/utils/seo.jsx';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact OptimizeWise | Get a Free Consultation"
        description="Get in touch with our CRO experts for a free consultation. Let's discuss how we can help improve your conversion rates."
        keywords="contact CRO experts, conversion optimization consultation, A/B testing consultation"
      />
      <ContactHero />
      <div className="container py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactFAQ />
    </div>
  );
}