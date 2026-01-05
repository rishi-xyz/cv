import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { RESUME_DATA } from "../data/resume-data";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const InfoSection = () => {
    return (
        <div className="flex flex-col items-center space-y-6 text-center md:flex-row md:text-left md:space-y-0 md:space-x-8">
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {RESUME_DATA.name}
              </h1>
              <p className="text-lg font-medium text-muted-foreground">
                {RESUME_DATA.about}
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground md:justify-start">
              <GlobeIcon className="h-4 w-4" />
              <a
                className="hover:text-foreground transition-colors"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {RESUME_DATA.location}
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-2 print:hidden md:justify-start">
              {RESUME_DATA.contact.email && (
                <div className="hover:scale-110 transition-transform duration-200">
                  <Button
                    className="h-10 w-10 rounded-full border-border/20 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-200"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
              {RESUME_DATA.contact.tel && (
                <div className="hover:scale-110 transition-transform duration-200">
                  <Button
                    className="h-10 w-10 rounded-full border-border/20 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-200"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
              {RESUME_DATA.contact.social.map((social, index) => (
                <div
                  key={social.name}
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Button
                    className="h-10 w-10 rounded-full border-border/20 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-200"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="hidden flex-col space-y-1 text-sm text-muted-foreground print:flex">
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

          <div className="relative hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-xl rounded-full"></div>
            <Avatar className="relative h-32 w-32 border-2 border-border/50">
              <AvatarImage alt={RESUME_DATA.name} src="/profile-linkedin.png" />
              <AvatarFallback className="bg-background text-foreground text-xl font-semibold">
                {RESUME_DATA.initials}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
    );
};