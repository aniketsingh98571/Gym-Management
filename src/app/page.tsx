"use client";

import Image from "next/image";
import {
  BellIcon,
  CalendarIcon,
  ArrowRightIcon,
  CheckIcon,
  UsersIcon,
  BuildingIcon,
  StarIcon,
} from "lucide-react";
import { DumbbellIcon } from "./icons/DumbbellIcon";
import { SaladIcon } from "./icons/SaladIcon";
import { Navbar } from "@/components/Navbar";

/**
 * Note: The mockup images used are temporary placeholders from Unsplash.
 * These will be replaced with actual app screenshots in future launches.
 */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GymCenter",
  applicationCategory: "BusinessApplication",
  operatingSystem: "iOS, Android",
  description:
    "A comprehensive gym management system for modern fitness centers",
  offers: {
    "@type": "Offer",
    availability: "PreOrder",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "500",
  },
};

export default function Home() {
  const scrollToSection = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center px-4 md:px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Unleash Your
              <span className="text-primary"> Gym&apos;s </span>
              Full Potential
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
              Streamlining Operations, Maximizing Performance with our Gym
              Management System.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
              <button
                onClick={() => scrollToSection("notify-section")}
                className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium flex items-center gap-2 transition-colors text-sm md:text-base"
              >
                Start Onboarding
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] mt-8 md:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000"
              alt="GymCenter Mobile App Interface - Manage your gym efficiently"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent rounded-2xl" />
            <div className="absolute top-4 right-4 flex gap-4">
              <div className="bg-background/80 backdrop-blur-sm p-3 rounded-xl border border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs md:text-sm font-medium">
                    500+ Gyms Trust Us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section id="features" className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center">
            Everything You Need to Manage Your Gym
          </h2>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0
                  ? "md:grid-flow-col"
                  : "md:grid-flow-col-reverse"
              } mb-20`}
            >
              {/* Feature Content */}
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{benefit.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Mockup */}
              <div className="relative w-[300px] h-[600px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-3xl -rotate-6" />
                <div className="absolute inset-0 bg-background rounded-3xl border-4 border-border overflow-hidden">
                  <Image
                    src={feature.mockup}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Emphasis Section */}
      <section className="py-20 px-4 md:px-6 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Transform Your Gym Management Today
              </h2>
              <p className="text-muted-foreground">
                Join hundreds of successful gym owners who have revolutionized
                their business with our comprehensive management solution.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">10,000+ Active Members</h4>
                    <p className="text-sm text-muted-foreground">
                      Managed through our platform
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BuildingIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">500+ Gyms</h4>
                    <p className="text-sm text-muted-foreground">
                      Trust our platform daily
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <StarIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">4.9/5 Rating</h4>
                    <p className="text-sm text-muted-foreground">
                      From satisfied customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1000"
                alt="Gym Dashboard"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Waitlist Section */}
      <section
        id="notify-section"
        className="py-12 md:py-20 px-4 md:px-6 bg-muted"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Waitlist Form */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join Waiting List
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-8">
              Be the first to know when we launch. Early access for waitlist
              members.
            </p>
            <form className="flex flex-col gap-2 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
              />
              <button
                className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm md:text-base"
                aria-label="Join GymCenter Waitlist"
              >
                Join Now
              </button>
            </form>
          </div>

          {/* Mobile App Mockup */}
          <div className="relative w-[300px] h-[600px] mx-auto order-first md:order-last">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-[3rem] -rotate-6" />
            <div className="absolute inset-0 bg-background rounded-[3rem] border-8 border-border shadow-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&h=600&fit=crop"
                alt="Mobile App Preview"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <p className="text-sm font-medium">Coming Soon to App Store</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <Image
              src="/logo.svg"
              alt="GymCenter - Gym Management System"
              width={32}
              height={32}
            />
            <span className="font-bold text-lg">GymCenter</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground max-w-md text-center md:text-left mx-auto md:mx-0">
            High-quality benefits of each membership with progressive training.
          </p>
          <div className="border-t border-border mt-8 md:mt-12 pt-8 text-xs md:text-sm text-center text-muted-foreground">
            © 2024 GymCenter. All rights reserved.
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

const features = [
  {
    icon: <DumbbellIcon className="w-6 h-6" />,
    title: "Digital Onboarding",
    description:
      "Streamline your member registration process with our digital onboarding system",
    mockup:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=300&h=600&fit=crop",
    benefits: [
      {
        title: "Quick Registration",
        description:
          "Complete member registration in under 2 minutes with our intuitive form",
      },
      {
        title: "Digital Records",
        description:
          "Maintain organized digital records of all member information",
      },
      {
        title: "Automated Welcome",
        description: "Send automated welcome emails with membership details",
      },
    ],
  },
  {
    icon: <BellIcon className="w-6 h-6" />,
    title: "Renewal Alerts",
    description: "Automated notifications for membership renewals",
    mockup:
      "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?w=300&h=600&fit=crop",
    benefits: [
      {
        title: "Timely Reminders",
        description: "Get automatic notifications before membership expires",
      },
      {
        title: "Flexible Renewal",
        description: "Multiple options for membership renewal",
      },
      {
        title: "Payment Tracking",
        description: "Track all membership payments and history",
      },
    ],
  },
  {
    icon: <SaladIcon className="w-6 h-6" />,
    title: "Diet Plans",
    description: "Personalized diet plans sent directly to members",
    mockup:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=600&fit=crop",
    benefits: [
      {
        title: "Customized Meal Plans",
        description: "Get personalized meal plans based on your goals",
      },
      {
        title: "Nutritional Guidance",
        description: "Expert advice on nutrition and supplements",
      },
      {
        title: "Diet Tracking",
        description: "Track your daily nutrition and progress",
      },
    ],
  },
  {
    icon: <CalendarIcon className="w-6 h-6" />,
    title: "Workout Schedule",
    description: "Custom workout plans and progress tracking",
    mockup:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=300&h=600&fit=crop",
    benefits: [
      {
        title: "Personalized Routines",
        description: "Custom workout plans for your goals",
      },
      {
        title: "Exercise Tutorials",
        description: "Detailed guides for each exercise",
      },
      {
        title: "Progress Monitoring",
        description: "Track your fitness journey",
      },
    ],
  },
];
