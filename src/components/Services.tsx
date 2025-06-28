"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Custom Web Design",
      description:
        "Beautiful, unique websites that reflect your brand and attract customers.",
      features: ["Custom design", "Brand integration", "User-friendly layouts"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Mobile Optimization",
      description:
        "Ensure your website looks perfect on all devices and screen sizes.",
      features: [
        "Responsive design",
        "Touch-friendly interface",
        "Fast mobile loading",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "SEO & Local Search",
      description:
        "Get found by local customers when they search for your services.",
      features: [
        "Local SEO setup",
        "Google My Business",
        "Search optimization",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Fast Performance",
      description:
        "Lightning-fast websites that keep visitors engaged and improve rankings.",
      features: ["Speed optimization", "Image compression", "Clean code"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Content Management",
      description:
        "Easy-to-use systems that let you update your website yourself.",
      features: ["Simple editing", "Training included", "Ongoing support"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Ongoing Support",
      description:
        "We're here to help with updates, maintenance, and improvements.",
      features: ["Regular updates", "Security monitoring", "Priority support"],
      color: "from-pink-500 to-pink-600",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1444px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Everything Your Business Needs to
            <span className="text-blue-800 block">Shine Online</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beautiful design to technical optimization, we handle
            everything so you can focus on running your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg p-0"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 flex items-center justify-center`}
                >
                  <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="text-blue-800 font-semibold group-hover:text-orange-500 transition-colors flex items-center">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a website that helps your
            business shine online.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-orange-500 hover:bg-orange-500/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
          >
            Let&apos;s Build Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
