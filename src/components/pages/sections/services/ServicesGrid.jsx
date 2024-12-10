import { BeakerIcon, ClipboardCheck, BrainCircuit, ShieldCheck } from 'lucide-react';

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* A/B Testing Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <BeakerIcon className="h-8 w-8 text-[#1E73BE]" />
            <h2 className="text-3xl font-bold">Comprehensive A/B Testing</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Enterprise-Grade Testing Solutions</h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive A/B testing service combines statistical rigor with creative optimization to deliver significant conversion improvements. We specialize in both client-side and server-side testing, enabling everything from simple UI changes to complex functional modifications.
              </p>
              <p className="text-gray-600 mb-6">
                We excel in creating sophisticated test variations that go beyond basic element swaps, implementing dynamic content personalization and advanced targeting rules to maximize impact.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Platform Expertise</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Google Optimize</h4>
                  <p className="text-gray-600">Advanced implementation and management of both Google Optimize and Optimize 360, leveraging deep integration with Google Analytics for enhanced targeting and analysis.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Adobe Target</h4>
                  <p className="text-gray-600">Expert utilization of Adobe Target's AI-powered personalization capabilities, including Auto-Target and Auto-Allocate features for maximum conversion lift.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">VWO & Monetate</h4>
                  <p className="text-gray-600">Full-stack testing capabilities with VWO and Monetate, enabling sophisticated experiments across multiple touchpoints in the customer journey.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#1E73BE]/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Shopify A/B Testing Specialists</h3>
            <p className="text-gray-600 mb-4">
              As certified Shopify Partners, we specialize in creating custom A/B test experiments specifically for Shopify stores. Our expertise includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Custom JavaScript and Liquid template modifications for sophisticated test variations</li>
              <li>Cart optimization experiments to reduce abandonment</li>
              <li>Product page enhancement tests to improve conversion rates</li>
              <li>Checkout flow optimization within Shopify's constraints</li>
              <li>Mobile-specific testing strategies for Shopify stores</li>
            </ul>
          </div>
        </div>

        {/* CRO Audit Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardCheck className="h-8 w-8 text-[#1E73BE]" />
            <h2 className="text-3xl font-bold">Full CRO Audit</h2>
          </div>

          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Comprehensive Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Our CRO audit process is a deep-dive investigation into your entire conversion ecosystem, combining quantitative data analysis with qualitative user research to uncover every optimization opportunity.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Detailed analytics review and funnel analysis</li>
                  <li>User behavior tracking via heatmaps and session recordings</li>
                  <li>Form analytics and abandonment analysis</li>
                  <li>Technical performance evaluation</li>
                  <li>Competitor analysis and benchmarking</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Methodology</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Data Collection</h4>
                    <p className="text-gray-600">Comprehensive gathering of analytics data, user recordings, and performance metrics over a statistically significant period.</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">User Journey Analysis</h4>
                    <p className="text-gray-600">Mapping and analysis of all critical user paths, identifying friction points and dropout locations.</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Prioritized Recommendations</h4>
                    <p className="text-gray-600">Detailed action plan with prioritized recommendations based on potential impact and implementation effort.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Consulting */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit className="h-8 w-8 text-[#1E73BE]" />
            <h2 className="text-3xl font-bold">Strategic Consulting</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6">
                Our strategic consulting service provides expert guidance on building and scaling your optimization program. We help you develop a robust testing culture, establish proper processes, and align CRO initiatives with your business objectives.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Program Development</h4>
                  <p className="text-gray-600">Creation of testing frameworks, processes, and governance models tailored to your organization.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Team Training</h4>
                  <p className="text-gray-600">Customized training programs to build internal CRO capabilities and testing expertise.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Assessment of current optimization capabilities</li>
                <li>Development of testing roadmaps and prioritization frameworks</li>
                <li>Implementation of testing processes and methodologies</li>
                <li>Ongoing guidance and program optimization</li>
                <li>Regular performance reviews and strategy adjustments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="h-8 w-8 text-[#1E73BE]" />
            <h2 className="text-3xl font-bold">Quality Assurance (QA)</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6">
                Our rigorous QA process ensures that every test variation performs flawlessly across all devices, browsers, and user scenarios. We maintain the highest standards of quality to protect your brand and user experience.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Cross-Browser Testing</h4>
                  <p className="text-gray-600">Comprehensive testing across all major browsers and versions to ensure consistent experiences.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Device Testing</h4>
                  <p className="text-gray-600">Thorough validation across mobile devices, tablets, and desktop configurations.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">QA Process</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Functional testing of all test variations</li>
                <li>Performance impact assessment</li>
                <li>Analytics and tracking validation</li>
                <li>User journey verification</li>
                <li>Edge case scenario testing</li>
                <li>Documentation and test case management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}