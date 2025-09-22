import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import TrialModal from './TrialModal';
import { useState } from 'react';

const plans = [
  //{
    // name: 'Starter Plan',
    // price: 'KES 1,000',
    // period: '/month',
    // description: 'Perfect for small businesses getting started',
    // features: [
    //   'Up to 6 Users',
    //   'Core accounting (invoices, expenses, customers, suppliers)',
    //   'Basic reports (P&L, Balance Sheet)',
    //   'Bank reconciliation',
    //   'eWallet integration',
    //   'Audit trail'
    // ],
    // popular: false,
    // buttonText: 'Start Free Trial',
    // buttonVariant: 'outline' as const
  //},
  {
    name: 'The Plan',
    price: 'KES 1,500',
    period: '/month',
    description: 'Ideal for your businesses',
    features: [
      'Unlimited Users',
      'Everything in Growth +',
      'M-Pesa integration hub with API access',
      'Payroll',
      'Multi Branch Support',
      'Inventory management'
    ],
    popular: true,
    buttonText: 'Start Free Trial',
    buttonVariant: 'default' as const
  },
  {
    name: 'Pay-As-You-Go Plan',
    price: 'KES 500',
    period: '/week',
    description: 'A flexible Pay-As-You-Go plan tailored to your business needs.',
    features: [
      'Unlimited Users',
      'Everything in Growth +',
      'M-Pesa integration hub with API access',
      'Payroll',
      'Multi Branch Support',
      'Inventory management'
    ],
    popular: false,
    buttonText: 'Start Free Trial',
    buttonVariant: 'outline' as const
  }
];

export default function Pricing() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a 7-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-xl scale-105' 
                  : 'border border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                onClick={() => setIsTrialModalOpen(true)}
                  variant={plan.buttonVariant}
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                      : ''
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                  
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <TrialModal 
                isOpen={isTrialModalOpen} 
                onClose={() => setIsTrialModalOpen(false)} 
              />
        <div className="text-center mt-12">
          <p className="text-gray-600">
          </p>
        </div>
      </div>
    </section>
  );
}