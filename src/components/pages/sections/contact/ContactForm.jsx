import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarEmbed } from '@/components/CalendarEmbed';

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    businessType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBusinessTypeChange = (value) => {
    setFormData(prev => ({
      ...prev,
      businessType: value
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const getCalendarConfig = () => {
    return {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      Company: formData.company,
      Website: formData.website,
      Business: formData.businessType
    };
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      {step === 1 ? (
        <form onSubmit={handleNextStep} className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Tell us about yourself</h2>
            <p className="text-gray-600">
              Fill in your details and we'll move on to scheduling your consultation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website URL</Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://"
              value={formData.website}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessType">Business Type</Label>
            <Select
              value={formData.businessType}
              onValueChange={handleBusinessTypeChange}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="agency">Agency</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Next: Schedule Consultation
          </Button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Schedule Your Consultation</h2>
            <p className="text-gray-600">
              Choose a convenient time for your 30-minute consultation.
            </p>
          </div>

          <div className="min-h-[600px]">
            <CalendarEmbed
              calLink="nafees-hasnat-s0q6ob"
              config={getCalendarConfig()}
            />
          </div>

          <Button
            variant="outline"
            onClick={handlePrevStep}
            className="w-full"
          >
            Back to Details
          </Button>
        </div>
      )}
    </div>
  );
}