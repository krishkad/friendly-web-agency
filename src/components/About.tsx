"use client";


import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Local Focus',
      description: 'We understand local businesses because we are one. We know what works for cafes, salons, clinics, and resorts.',
    },
    {
      title: 'Results-Driven',
      description: 'Every website we build is designed to convert visitors into customers and help your business grow.',
    },
    {
      title: 'Personal Touch',
      description: 'You work directly with our team, not account managers. We build relationships, not just websites.',
    },
    {
      title: 'Ongoing Partnership',
      description: 'We\'re here for the long haul with updates, support, and improvements as your business grows.',
    }
  ];

  // const teamStats = [
  //   { number: '5+', label: 'Years Experience' },
  //   { number: '50+', label: 'Happy Clients' },
  //   { number: '100+', label: 'Websites Built' },
  //   { number: '24/7', label: 'Support Available' }
  // ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1444px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Story */}
          <div>
            <span className="text-orange-500 font-semibold text-lg">About ShineSites</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              We Help Local Businesses 
              <span className="text-blue-800 block">Shine in the Digital World</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by a small team of passionate web developers, ShineSites was born from the belief 
              that every local business deserves a beautiful, professional website that helps them compete 
              and grow in today&apos;s digital marketplace.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We&apos;ve worked exclusively with local businesses for over 5 years, learning what works and 
              what doesn&apos;t. We know that your website isn&apos;t just about looking good – it&apos;s about bringing 
              in new customers and growing your business.
            </p>

            {/* Quick Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div> */}

          </div>

          {/* Right Column - Team Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="ShineSites team working together"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <Users className="text-primary" size={24} />
                <div>
                  <div className="font-bold text-gray-900">Small Team</div>
                  <div className="text-sm text-gray-600">Big Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values & Approach</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure every client gets the best results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work with a Team That Cares?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;d love to learn about your business and discuss how we can help you shine online.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-orange-500 hover:bg-orange-500/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
          >
            Let&apos;s Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;