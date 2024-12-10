import { ContactHero } from './sections/contact/ContactHero';
import { ContactForm } from './sections/contact/ContactForm';
import { ContactInfo } from './sections/contact/ContactInfo';
import { ContactFAQ } from './sections/contact/ContactFAQ';

export function ContactPage() {
  return (
    <div className="min-h-screen">
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