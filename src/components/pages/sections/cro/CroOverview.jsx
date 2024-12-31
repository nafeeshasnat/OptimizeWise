import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Users, BarChart } from 'lucide-react';

export function CroOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            What is Conversion Rate Optimization?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            CRO is a systematic process of increasing the percentage of website visitors 
            who take desired actions - whether that's making a purchase, signing up for 
            a service, or engaging with your content. Through data analysis, user feedback, 
            and A/B testing, we identify and implement improvements that drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mb-6">
                <LineChart className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
              <p className="text-gray-600">
                We analyze user behavior, identify pain points, and uncover opportunities 
                for improvement through comprehensive data analysis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User Research</h3>
              <p className="text-gray-600">
                Understanding your users is key. We conduct thorough research to 
                identify user needs, preferences, and barriers to conversion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-[hsl(var(--theme-accent))]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">A/B Testing</h3>
              <p className="text-gray-600">
                We test different variations of your website to determine which 
                changes drive the best results and highest conversion rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}