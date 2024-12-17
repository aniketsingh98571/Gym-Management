"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Gym Logo" width={32} height={32} />
            <span className="font-bold text-lg">GymCenter</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => smoothScroll("features")}
              className="text-sm hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => smoothScroll("notify-section")}
              className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => smoothScroll("features")}
              className="text-sm hover:text-primary transition-colors text-left px-4 py-2"
            >
              Features
            </button>
            <button
              onClick={() => smoothScroll("notify-section")}
              className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
