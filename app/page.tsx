import { Card, CardHeader, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { CommandMenu } from "@/src/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/src/components/ui/section";
import { RESUME_DATA } from "@/src/data/resume-data";
import { InfoSection } from "@/src/components/info";
import { AboutSection } from "@/src/components/about-section";
import { WorkExpSection } from "@/src/components/work-experience";
import { EducationSection } from "@/src/components/education-section";
import { ProjectSection } from "@/src/components/project-section";
import { SkillsSection } from "@/src/components/skills-section";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto w-full max-w-4xl px-6 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="space-y-16">
          {/**Info */}
          <div className="animate-fade-in">
            <InfoSection />
          </div>
          {/**About Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <AboutSection/>
          </div>
          {/**Work Experience */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <WorkExpSection />
          </div>
          {/**Education */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <EducationSection />
          </div>
          {/**Projects */}
          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <ProjectSection />
          </div>
          {/**Skills */}
          <div className="animate-slide-up" style={{ animationDelay: '1s' }}>
            <SkillsSection />
          </div>
        </div>
      </div>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}