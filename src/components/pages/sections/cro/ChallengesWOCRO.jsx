import { Card } from '@/components/ui/card';
import { LineChart, ArrowUpRight, Users, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { caseStudies } from '@/data/caseStudies';
import { Link } from 'react-router-dom';

export function ChallengesWOCRO() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">
                        Challenges Businesses Face Without CRO
                    </h2>
                    <p className="text-lg text-gray-600">
                        Many businesses experience missed opportunities due to low conversion rates. Here are common problems
                        companies face when they don’t implement Conversion Rate Optimization.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "High Bounce Rates",
                            description: "Visitors leave your site without taking action, resulting in missed leads and sales.",
                            icon: ArrowUpRight,
                        },
                        {
                            title: "Low Conversion Rates",
                            description: "A large percentage of visitors fail to convert, impacting revenue potential.",
                            icon: Users,
                        },
                        {
                            title: "Missed Revenue Opportunities",
                            description: "Without CRO, you risk losing potential customers and valuable sales.",
                            icon: ShoppingCart,
                        },
                    ].map((challenge, i) => (
                        <Card key={i} className="p-6 bg-white shadow-md hover:shadow-lg transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-12 h-12 bg-[hsl(var(--theme-accent))]/10 flex items-center justify-center rounded-lg">
                                    <challenge.icon className="text-[hsl(var(--theme-accent))] h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold">{challenge.title}</h3>
                            </div>
                            <p className="text-gray-600">{challenge.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}