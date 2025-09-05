import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, CheckCircle } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">
            Start Your Free Trial
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-center text-gray-600">
            Get full access to PeakBooks for 7 days. No credit card required.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>All premium features included</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Unlimited transactions</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>24/7 customer support</span>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Enter your company name" />
            </div>
            
            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Start Free Trial
            </Button>
          </form>
          
          <p className="text-xs text-center text-gray-500">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}