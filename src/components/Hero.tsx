"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const benefits = [
    "Mobile-friendly & fast loading",
    "SEO optimized for local search",
    "Professional design that converts",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center"
    >
      <div className="max-w-[1444px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-orange-600/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Premium Web Development Agency
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
               Shine Where 
                <span className="text-blue-800 block">Customers Search</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We build beautiful, fast, and mobile-friendly websites that
                boost your first impression and help local businesses like
                cafes, salons, clinics, and resorts attract more customers.
              </p>
            </div>

            {/* Benefits List */}
            <div className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-orange-500 hover:bg-orange-500/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 group"
              >
                Book Free Consultation
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                onClick={() => scrollToSection("#portfolio")}
                variant="outline"
                size="lg"
                className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by 50+ local businesses
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">95%</div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">
                    2-3 Weeks
                  </div>
                  <div className="text-sm text-gray-600">Average Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern website design on laptop"
                className="rounded-2xl shadow-2xl w-full"
              />
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border animate-scale-in">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Fast Loading</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border animate-scale-in">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Mobile Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
