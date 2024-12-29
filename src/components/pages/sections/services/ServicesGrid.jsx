import { LineChart, Users, Target, CheckCircle, BrainCircuit, ShieldCheck } from 'lucide-react';

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      {/* A/B Testing Section */}
      <div className="container">
        <div className="mb-24" id="implementation">
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit className="h-8 w-8 text-[#1E73BE]" />
            <h2 className="text-3xl font-bold">Implementation Process</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Implementation content */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Rapid & Reliable Deployment</h3>
              <p className="text-gray-600 mb-6">
                Our streamlined implementation process ensures quick deployment without compromising quality. We use industry-leading tools and practices to minimize time-to-value while maintaining robust testing integrity.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Setup & Configuration</h4>
                  <p className="text-gray-600">Expert implementation of testing tools and tracking setup for accurate data collection.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">QA & Validation</h4>
                  <p className="text-gray-600">Thorough testing across devices and browsers to ensure flawless execution.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Monitoring & Optimization</h4>
                  <p className="text-gray-600">Continuous monitoring and real-time adjustments for optimal performance.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Implementation Timeline</h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-[#1E73BE]">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#1E73BE]" />
                  <h4 className="font-semibold">Day 1-2: Setup & Configuration</h4>
                  <p className="text-gray-600">Tool implementation and initial configuration</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1E73BE]">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#1E73BE]" />
                  <h4 className="font-semibold">Day 3-4: Testing & QA</h4>
                  <p className="text-gray-600">Comprehensive quality assurance across platforms</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1E73BE]">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#1E73BE]" />
                  <h4 className="font-semibold">Day 5: Launch</h4>
                  <p className="text-gray-600">Test activation and monitoring setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Research Section */}
        <div className="mb-24" id="user-research">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-[#1E73BE]" />
            <h2 className="text-3xl font-bold">User Research & Analysis</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Comprehensive User Understanding</h3>
              <p className="text-gray-600 mb-6">
                Our user research methodology combines quantitative and qualitative approaches to build a complete picture of user behavior and needs.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Behavioral Analysis</h4>
                  <p className="text-gray-600">Advanced analytics and heatmapping to understand user interactions.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">User Interviews</h4>
                  <p className="text-gray-600">Direct insights from your target audience through structured interviews.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Usability Testing</h4>
                  <p className="text-gray-600">Real-world testing with actual users to identify pain points and opportunities.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Research Methods</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--theme-accent))] mt-1" />
                    <div>
                      <h4 className="font-semibold">Quantitative Analysis</h4>
                      <p className="text-gray-600">Analytics data, A/B test results, surveys</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--theme-accent))] mt-1" />
                    <div>
                      <h4 className="font-semibold">Qualitative Research</h4>
                      <p className="text-gray-600">User interviews, session recordings, feedback analysis</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--theme-accent))] mt-1" />
                    <div>
                      <h4 className="font-semibold">Competitive Analysis</h4>
                      <p className="text-gray-600">Industry benchmarking and best practices review</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the existing sections... */}
      </div>
    </section>
  );
}