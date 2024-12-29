import { HeroSection } from './sections/services/HeroSection';
import { ServicesOverview } from './sections/services/ServicesOverview';
import { ServicesGrid } from './sections/services/ServicesGrid';
import { MethodologySection } from './sections/services/MethodologySection';
import { CaseStudiesTeaser } from './sections/services/CaseStudiesTeaser';
import { FinalCTA } from './sections/services/FinalCTA';
import { SEO } from '@/utils/seo';

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Professional CRO Services | OptimizeWise"
        description="Expert CRO and A/B testing services to improve your conversion rates. Data-driven strategies, impactful experiments, and continuous improvement."
        keywords="CRO services, A/B testing services, conversion optimization, website optimization services"
      />
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80"
        headline="Optimize Your Conversions with Our Expert CRO & A/B Testing Services"
        subheadline="Data-driven strategies, impactful experiments, and continuous improvement"
        primaryCTA="Get a Free Consultation"
        secondaryCTA="Learn How It Works"
      />

      <ServicesOverview
        title="Our Services"
        description="We offer a comprehensive suite of CRO and A/B Testing services designed to uncover hidden opportunities, streamline user journeys, and drive measurable growth. Each service is backed by in-depth analysis, proven methodologies, and continuous iteration to ensure sustained success."
        backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=2400&q=80"
      />

      <ServicesGrid />

      <MethodologySection
        title="Our Data-Driven Methodology"
        description="We follow a systematic cycle of research, hypothesis creation, testing, analysis, and implementation. This iterative process ensures that every optimization is grounded in data, validated by measurable results, and geared towards continuous improvement."
        illustration="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80"
      />

      <CaseStudiesTeaser
        title="Real Clients, Real Results"
        subtitle="See how our services have driven tangible improvements for businesses like yours."
        cta="View Case Studies"
        images={[
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80"
        ]}
      />

      <FinalCTA
        title="Ready to Transform Your Conversions?"
        description="Let's discuss your unique challenges and start optimizing your digital experience for better results."
        primaryCTA="Book a Free Strategy Call"
        secondaryCTA="Explore More Services"
      />
    </div>
  );
}