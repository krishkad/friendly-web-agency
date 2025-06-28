"use client";



import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Sunset Cafe',
      category: 'Restaurant',
      description: 'A warm and inviting website for a local cafe, featuring online menu and reservation system.',
      results: '40% increase in online orders',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Restaurant', 'Online Ordering', 'Mobile-First']
    },
    {
      title: 'Serenity Spa',
      category: 'Health & Wellness',
      description: 'Elegant website for a luxury spa with booking system and service showcase.',
      results: '60% more online bookings',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Spa', 'Booking System', 'Luxury Design']
    },
    {
      title: 'Mountain View Resort',
      category: 'Hospitality',
      description: 'Stunning website showcasing resort amenities with integrated booking platform.',
      results: '50% increase in direct bookings',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Resort', 'Booking Platform', 'Visual Showcase']
    },
    {
      title: 'Urban Fitness Studio',
      category: 'Fitness',
      description: 'Dynamic website for a fitness studio with class schedules and member portal.',
      results: '35% growth in memberships',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Fitness', 'Class Booking', 'Member Portal']
    },
    {
      title: 'Coastal Dental Clinic',
      category: 'Healthcare',
      description: 'Professional website for a dental practice with appointment booking and patient resources.',
      results: '45% more appointment requests',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Healthcare', 'Appointments', 'Patient Portal']
    },
    {
      title: 'Artisan Hair Salon',
      category: 'Beauty',
      description: 'Stylish website for a premium hair salon with gallery and online booking.',
      results: '55% increase in new clients',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Beauty', 'Gallery', 'Online Booking']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-[1444px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Real Results for
            <span className="text-blue-800 block">Real Local Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we&apos;ve helped local businesses like yours increase their online presence, 
            attract more customers, and grow their revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden p-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <p className="text-green-800 font-semibold text-sm">
                    📈 {project.results}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-blue-800 font-semibold group-hover:text-orange-500 transition-colors flex items-center">
                  View Case Study
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s create a website that helps your business stand out and attract more customers.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-orange-500 hover:bg-orange-500/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
          >
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;