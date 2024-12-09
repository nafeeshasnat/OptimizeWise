import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, LineChart, Users, Zap } from 'lucide-react';
import { IndustryExpertise } from './sections/IndustryExpertise';
import { TechStack } from './sections/TechStack';
import { RoiCalculator } from './sections/RoiCalculator';
import { LatestInsights } from './sections/LatestInsights';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Turn Your Traffic into Customers: Supercharge Conversions with A/B Testing & CRO
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At OptimizeWise, we blend data-driven insights and cutting-edge experiments to transform curious visitors into loyal buyers.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#2ECC71] hover:bg-[#27AE60]">
                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 opacity-10">
          <div className="animate-pulse">
            <LineChart className="w-full h-full text-[#1E73BE]" />
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose OptimizeWise?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We transform data into actionable insights that drive real business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: LineChart,
                title: 'Data-Driven Decisions',
                description: 'Make informed choices based on real user behavior and analytics.',
              },
              {
                icon: Users,
                title: 'User-Centric Approach',
                description: 'Create experiences that delight users and drive conversions.',
              },
              {
                icon: Zap,
                title: 'Rapid Implementation',
                description: 'Quick deployment of optimizations for faster results.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-white hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#1E73BE]/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-[#1E73BE]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="mt-4 p-0">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </DialogTrigger>

                  {/* Dialog Content */}
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <DialogDescription>
                        This is a customizable dialog content area.
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      {/* Custom body content */}
                      <p>
                        This is the body of the dialog. You can add any content here,
                        including forms, text, or other components.
                      </p>
                    </div>
                    <DialogFooter>
                      <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                        onClick={() => alert('Action Button Clicked')}
                      >
                        Action
                      </button>
                      <DialogClose asChild>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                          Close
                        </button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Sections */}
      <IndustryExpertise />
      <TechStack />
      <RoiCalculator />
      <LatestInsights />
    </>
  );
}