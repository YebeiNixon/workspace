import { Card, CardContent } from '@/components/ui/card';
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  FileText, 
  CreditCard,
  TrendingUp,
  Clock,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Get instant insights into your financial performance with interactive dashboards and customizable reports.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Bank-level Security',
    description: 'Your data is protected with enterprise-grade encryption and multi-factor authentication.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    description: 'Streamline repetitive tasks with smart automation for invoicing, expenses, and reconciliation.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team and accountant with role-based permissions and real-time sync.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: FileText,
    title: 'Smart Invoicing',
    description: 'Create professional invoices in seconds with automated follow-ups and payment tracking.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: CreditCard,
    title: 'Expense Management',
    description: 'Track and categorize expenses automatically with receipt scanning and mileage tracking.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: TrendingUp,
    title: 'Financial Forecasting',
    description: 'Plan for the future with AI-powered forecasting and cash flow predictions.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Monitor billable hours and project profitability with integrated time tracking tools.',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Globe,
    title: 'Multi-currency Support',
    description: 'Handle international transactions with automatic currency conversion and tax compliance.',
    color: 'from-slate-500 to-gray-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to 
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Manage Your Finances
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive accounting platform combines powerful features with intuitive design 
            to help businesses of all sizes thrive financially.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}