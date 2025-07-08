"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
const projects = [
  {
    title: "Pawna Lake Glamping/Camping",
    category: "Resort",
    description:
      "A scenic and adventure-focused website built for a glamping/camping site at Pawna Lake, featuring gallery sections, package details, and an integrated inquiry system to boost direct bookings.",
    results: "40% increase in online orders",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop",
    ],
    tags: ["Resort", "Camping", "Adventure Booking"],
  },
  {
    title: "Insta Store Ecommerce Site",
    category: "E-commerce",
    description:
      "A clean and responsive e-commerce website tailored for Instagram sellers, featuring product listings, secure checkout, and mobile-first design to maximize conversion directly from social platforms.",
    results: "60% more online bookings",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop",
    ],
    tags: ["E-commerce", "Instagram Store", "Mobile-Optimized"],
  },
  {
    title: "AI-Proposal Generator",
    category: "AI & Software",
    description:
      "A powerful SaaS tool designed for freelancers and agencies to instantly generate high-converting proposals using AI. Includes customizable templates, auto-fill client details, and export features.",
    results: "50% increase in direct bookings",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop",
    ],
    tags: ["AI Tool", "Proposal Generator", "Freelancer SaaS"],
  },
];


  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-[1444px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Real Results for
            <span className="text-blue-800 block">Real Local Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we&apos;ve helped local businesses like yours increase their
            online presence, attract more customers, and grow their revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden p-0"
            >
              <div className="relative overflow-hidden">
                <Carousel
                  className="w-full h-full"
                  opts={{ align: "start", loop: true }}
                >
                  <CarouselContent className="h-full">
                    {project.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex} className="h-full">
                        <div className="relative h-full">
                          <img
                            src={image}
                            alt={`${project.title} - Image ${imageIndex + 1}`}
                            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Carousel Navigation */}
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1  transition-opacity duration-300">
                    {project.images.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                      />
                    ))}
                  </div>
                </Carousel>
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 pt-0">
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
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-blue-800 font-semibold group-hover:text-orange-500 transition-colors flex items-center">
                  View Case Study
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
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s create a website that helps your business stand out and
            attract more customers.
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
