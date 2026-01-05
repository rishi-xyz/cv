import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { RESUME_DATA } from "../data/resume-data";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const InfoSection = () => {
    return (
        <div className="flex flex-col items-center space-y-8 text-center md:flex-row md:text-left md:space-y-0 md:space-x-12">
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight gradient-text md:text-6xl animate-fade-in">
                {RESUME_DATA.name}
              </h1>
              <p className="text-xl font-medium text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {RESUME_DATA.about}
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground md:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <GlobeIcon className="h-4 w-4" />
              <a
                className="hover:text-foreground transition-colors duration-200"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {RESUME_DATA.location}
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3 print:hidden md:justify-start animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {RESUME_DATA.contact.email && (
                <div className="hover-lift">
                  <Button
                    className="h-12 w-12 rounded-full glass-dark border-border/30 hover-glow transition-all duration-300"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              )}
              {RESUME_DATA.contact.tel && (
                <div className="hover-lift">
                  <Button
                    className="h-12 w-12 rounded-full glass-dark border-border/30 hover-glow transition-all duration-300"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              )}
              {RESUME_DATA.contact.social.map((social, index) => (
                <div
                  key={social.name}
                  className="hover-lift animate-scale-in"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <Button
                    className="h-12 w-12 rounded-full glass-dark border-border/30 hover-glow transition-all duration-300"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="hidden flex-col space-y-2 text-sm text-muted-foreground print:flex animate-fade-in">
              {RESUME_DATA.contact.email && (
                <Link href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-foreground transition-colors">
                  {RESUME_DATA.contact.email}
                </Link>
              )}
              {RESUME_DATA.contact.tel && (
                <Link href={`tel:${RESUME_DATA.contact.tel}`} className="hover:text-foreground transition-colors">
                  {RESUME_DATA.contact.tel}
                </Link>
              )}
            </div>
          </div>

          <div className="relative hover-lift animate-float">
            <Avatar className="relative h-36 w-36 border-2 border-border/50">
              <AvatarImage alt={RESUME_DATA.name} src="/profile-linkedin.png" />
              <AvatarFallback className="bg-background text-foreground text-2xl font-bold">
                {RESUME_DATA.initials}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
    );
};