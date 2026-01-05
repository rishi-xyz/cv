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
    <main className="relative mx-auto w-full scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 dark:bg-gray-950">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6 dark:bg-gray-950">
        {/**Info */}
        <InfoSection />
        {/**About Section */}
        <AboutSection/>
        {/**Work Experience */}
        <WorkExpSection />
        {/**Education */}
        <EducationSection />
        {/**Projects */}
        <ProjectSection />
        {/**Skills */}
        <SkillsSection />
      </section>

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