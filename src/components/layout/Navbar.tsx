"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<"menu" | "contact">("menu");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const navGroupRef = useRef<HTMLDivElement>(null);
  const menuLinkRef = useRef<HTMLAnchorElement>(null);
  const contactLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const activeRef =
        activeSection === "contact" ? contactLinkRef.current : menuLinkRef.current;
      const container = navGroupRef.current;

      if (!activeRef || !container) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const linkRect = activeRef.getBoundingClientRect();

      setIndicatorStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    };

    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "contact") {
        setActiveSection("contact");
      } else if (hash === "menu") {
        setActiveSection("menu");
      }
    };

    handleHash();
    updateIndicator();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    updateIndicator();

    window.addEventListener("resize", updateIndicator);
    window.addEventListener("hashchange", handleHash);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateIndicator);
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id === "contact") {
          setActiveSection("contact");
        } else if (visibleEntry?.target.id === "menu") {
          setActiveSection("menu");
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.5, 0.8],
      }
    );

    const menuSection = document.getElementById("menu");
    const contactSection = document.getElementById("contact");

    if (menuSection) {
      observer.observe(menuSection);
    }

    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-charcoal/10 bg-cream/50 backdrop-blur transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Novelty
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <div ref={navGroupRef} className="relative flex items-center gap-4 sm:gap-6">
            <Link
              ref={menuLinkRef}
              href="/#menu"
              className={`relative z-10 px-1 pb-2 transition-colors ${
                activeSection === "menu" ? "text-spice" : "hover:text-spice"
              }`}
            >
              Menu
            </Link>
            <Link
              ref={contactLinkRef}
              href="/#contact"
              className={`relative z-10 px-1 pb-2 transition-colors ${
                activeSection === "contact" ? "text-spice" : "hover:text-spice"
              }`}
            >
              Contact
            </Link>
            <span
              className="absolute bottom-0 h-0.5 rounded-full bg-spice transition-all duration-300"
              style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }}
            />
          </div>
          <Link
            href="/order"
            className="bg-spice text-cream px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
