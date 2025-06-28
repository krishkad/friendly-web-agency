"use client";





import React, { useState } from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
// import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    message: ''
  });
//   const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    // toast({
    //   title: "Message Sent!",
    //   description: "Thank you for your interest. We'll get back to you within 24 hours.",
    // });
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      businessType: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about your web development services for my local business.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-[1444px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Ready to Make Your Business
            <span className="text-blue-800 block">Shine Online?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let&apos;s discuss your project and create a website that helps your business attract more customers and grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl p-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Book Your Free Consultation
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <Input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Business *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your business type</option>
                      <option value="restaurant">Restaurant/Cafe</option>
                      <option value="salon">Salon/Beauty</option>
                      <option value="healthcare">Healthcare/Clinic</option>
                      <option value="fitness">Fitness/Wellness</option>
                      <option value="retail">Retail Store</option>
                      <option value="professional">Professional Services</option>
                      <option value="hospitality">Hotel/Resort</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Tell us about your business, what you're looking for in a website, and any specific requirements you have..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-500/90 text-white py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 group"
                  >
                    Send My Request
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="border-0 shadow-lg p-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Prefer to Talk Directly?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">(555) 123-4567</div>
                      <div className="text-sm text-gray-600">Mon-Fri, 9AM-6PM</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">hello@shinesites.com</div>
                      <div className="text-sm text-gray-600">We respond within 2 hours</div>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={openWhatsApp}
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-medium"
                >
                  💬 Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="border-0 shadow-lg p-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What Happens Next?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Free Consultation</div>
                      <div className="text-sm text-gray-600">We discuss your business and goals</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Custom Proposal</div>
                      <div className="text-sm text-gray-600">Tailored plan and pricing for your needs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Project Kickoff</div>
                      <div className="text-sm text-gray-600">Start building your amazing website</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 p-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  100% Satisfaction Guarantee
                </h3>
                <p className="text-sm text-gray-600">
                  We're not happy until you're happy. We'll work with you until your website exceeds your expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;