import { Button } from '@/components/ui/button';
import { ArrowRight, Play, PlayCircle, CheckCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import TrialModal from './TrialModal';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <>
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8 animate-in fade-in slide-in-from-top duration-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Trusted by thousands businesses.
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              Accounting Made
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Simple & Powerful
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              Transform your business finances with{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PeakBooks
            </span>{' '}
            intelligent accounting platform. 
            Automate bookkeeping, generate insights, and scale with confidence.
          </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-600">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => setIsTrialModalOpen(true)}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
              onClick={()=> setIsVideoModalOpen(true)}
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 rounded-xl border-2 hover:bg-gray-50 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="relative max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-800">
            {/* Enhanced glow effect behind dashboard */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl transform scale-110 group-hover:scale-120 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-3xl blur-2xl transform scale-105 animate-pulse"></div>
              
              {/* Dashboard mockup with enhanced effects */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-4 sm:p-8 hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] group">
                <img 
                  src="https://mocha-cdn.com/0199285a-00c1-7cdf-923b-525202e77fcf/dashborad.jpeg"
                  alt="PeakBooks Dashboard Preview"
                  className="w-full h-auto rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                  loading="eager"
                />
                </div>         
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000" ></div>
              {/* New floating elements */}
                <div className="absolute top-1/4 -left-2 sm:-left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-semibold shadow-lg animate-bounce border border-white" style={{ animationDelay: '1s' }}>
                  AI Powered
                </div>
                <div className="absolute bottom-1/4 -right-2 sm:-right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-semibold shadow-lg animate-pulse border border-white" style={{ animationDelay: '0.5s' }}>
                  Secure
                </div>
            </div>
            {/* Enhanced dashboard description */}
            <div className="text-center mt-12 transform transition-all duration-1000">
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Get a complete view of your business finances with our{' '}
                <span className="font-semibold text-blue-600">intuitive dashboard</span>. 
                Track revenue, expenses, and key metrics in{' '}
                <span className="font-semibold text-purple-600">real-time</span>.
              </p>
            </div>
          </div>
        </div>
        {/* Enhanced Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 hover:scale-[1.02]">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div className="aspect-video bg-gray-900 relative overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                poster="https://mocha-cdn.com/0199285a-00c1-7cdf-923b-525202e77fcf/dashborad.jpeg"
              >
                <source
                  src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                  type="video/mp4"
                />
                <p className="text-white p-8 text-center">
                  Your browser doesn't support video playback. 
                  <br />
                  <span className="text-blue-400">
                    Contact us for alternative demo options.
                  </span>
                </p>
              </video>
            </div>

            {/* Enhanced Video Info */}
            <div className="p-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PeakBooks Platform Demo
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See how PeakBooks transforms your business accounting with smart automation, 
                real-time insights, and intuitive workflows designed for modern businesses.
              </p>
            </div>
          </div>
        </div>
      )}
      </section>
      
      <TrialModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </>
  );
}