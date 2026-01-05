"use client";

import { useState, useEffect } from "react";
import { 
  UserIcon, 
  BriefcaseIcon, 
  GraduationCapIcon, 
  CodeIcon, 
  SparklesIcon,
  HomeIcon
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const navigationItems = [
  { id: 'info', icon: HomeIcon, label: 'About Me' },
  { id: 'about', icon: UserIcon, label: 'About' },
  { id: 'work', icon: BriefcaseIcon, label: 'Experience' },
  { id: 'education', icon: GraduationCapIcon, label: 'Education' },
  { id: 'projects', icon: CodeIcon, label: 'Projects' },
  { id: 'skills', icon: SparklesIcon, label: 'Skills' },
];

export function NavigationSidebar() {
  const [activeSection, setActiveSection] = useState('info');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const viewportCenter = window.scrollY + (window.innerHeight / 2);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionBottom = sectionTop + section.element.offsetHeight;
          
          if (sectionTop <= viewportCenter && sectionBottom >= viewportCenter) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed md:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col items-center space-y-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <div
              key={item.id}
              className="group relative"
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                  "hover-lift",
                  isActive 
                    ? "glass-dark border-primary/50 hover-glow" 
                    : "glass-dark border-border/30 hover:border-border/50"
                )}
              >
                <Icon 
                  className={cn(
                    "w-4 h-4 transition-colors duration-300",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )} 
                />
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full border border-primary animate-pulse-slow" />
                )}
              </button>
              
              {/* Hover tooltip */}
              <div className={cn(
                "absolute right-full mr-3 top-1/2 -translate-y-1/2",
                "px-3 py-1 rounded-md text-sm font-medium",
                "glass-dark border-border/30",
                "opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200",
                "whitespace-nowrap"
              )}>
                {item.label}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2">
                  <div className="w-2 h-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-background/80 border-b-8 border-b-transparent transform rotate-90"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
