import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "53 Pixels",
      business: "Marketing Agency",
      type: "Marketing Agency",
      content:
        "Working with FWA (friendlywebagency.com) was a great experience. They quickly understood our vision and delivered a clean, professional, and user-friendly website. Their creativity, responsiveness, and attention to detail truly stood out. Highly recommended!",
      rating: 5,
      image: "/53-pixels.jpeg",
    },
    {
      name: "Mr. Satish",
      business: "Glamping resort pawna",
      type: "Dental Practice",
      content:
        "FWA brought our Pawna camping experience to life online. They didn’t just build a site—they captured our vibe. Smooth bookings, stunning visuals, and a feel that truly reflects our place. Couldn’t have asked for a better partner!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Anonymous (on purpose)",
      business: "Spa",
      type: "Wellness Spa",
      content:
        "Our website perfectly captures the peaceful, luxurious feeling of our spa. The online booking system has increased our efficiency and we're getting 60% more bookings through the website.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    // {
    //   name: 'James Wilson',
    //   business: 'Mountain View Resort',
    //   type: 'Boutique Resort',
    //   content: 'The website showcases our resort beautifully and the integrated booking system has increased our direct bookings by 50%. ShineSites delivered exactly what we needed to compete with the big hotel chains.',
    //   rating: 5,
    //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    // },
    // {
    //   name: 'Maria Gonzalez',
    //   business: 'Artisan Hair Studio',
    //   type: 'Beauty Salon',
    //   content: 'The portfolio gallery on our new website has been amazing for showing our work. We\'ve had a 55% increase in new clients and the online booking saves us so much time. Thank you ShineSites!',
    //   rating: 5,
    //   image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    // },
    // {
    //   name: 'Tom Bradley',
    //   business: 'Urban Fitness Studio',
    //   type: 'Fitness Center',
    //   content: 'Our members love the new class scheduling system and the website really shows the energy of our studio. Membership has grown 35% since we launched. ShineSites understood our brand perfectly.',
    //   rating: 5,
    //   image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    // }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            What Local Business Owners
            <span className="text-blue-800 block">
              Say About Working With Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real business owners who have seen real results
            from their new websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-0"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.business}
                    </div>
                    <div className="text-xs text-accent font-medium">
                      {testimonial.type}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">100%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
