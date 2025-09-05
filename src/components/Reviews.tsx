import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: '/images/SarahJohnson.jpg',
    rating: 5,
    content: 'PeakBooks transformed our financial management. The automated workflows saved us 15+ hours per week, and the real-time analytics help us make better business decisions.',
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'As a freelancer, I needed something simple yet powerful. PeakBooks\' invoicing and expense tracking features are exactly what I needed. The mobile app is fantastic too.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CFO, GrowthCorp',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'The financial forecasting feature is incredibly accurate. We\'ve improved our cash flow management by 40% since switching to PeakBooks. Highly recommended!',
  },
  {
    name: 'David Park',
    role: 'Founder, LocalBiz',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'PeakBooks scaled with our business perfectly. From 2 employees to 50+, the platform handled our growth without missing a beat. The team collaboration features are excellent.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Thousands of Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers say about their experience with PeakBooks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}