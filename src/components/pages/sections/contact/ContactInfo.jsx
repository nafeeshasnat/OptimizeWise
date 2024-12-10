import { Mail, Globe, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          We're a remote-first team of optimization experts ready to help transform your digital experience. Schedule a consultation and let's discuss how we can help achieve your goals.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#1E73BE]/10 flex items-center justify-center">
            <Mail className="h-5 w-5 text-[#1E73BE]" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-gray-600">contact@optimizewise.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#1E73BE]/10 flex items-center justify-center">
            <Globe className="h-5 w-5 text-[#1E73BE]" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Global Service</h3>
            <p className="text-gray-600">Working with clients worldwide</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#1E73BE]/10 flex items-center justify-center">
            <Clock className="h-5 w-5 text-[#1E73BE]" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Business Hours (CET)</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1E73BE]/5 p-6 rounded-xl">
        <h3 className="font-semibold mb-3">What to Expect</h3>
        <ul className="space-y-3 text-gray-600">
          <li>• 30-minute initial consultation</li>
          <li>• Discussion of your current challenges</li>
          <li>• High-level optimization opportunities</li>
          <li>• Q&A about our services and approach</li>
          <li>• Next steps and recommendations</li>
        </ul>
      </div>
    </div>
  );
}