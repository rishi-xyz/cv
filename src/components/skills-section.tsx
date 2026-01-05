import { RESUME_DATA } from "../data/resume-data";
import { Badge } from "./ui/badge";
import { Section } from "./ui/section";

export const SkillsSection = () => {
    return (
        <Section>
            <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Skills</h2>
                <div className="flex flex-wrap gap-x-3 gap-y-3">
                    {RESUME_DATA.skills.map((skill) => {
                        return (
                            <Badge 
                                key={skill} 
                                className="px-3 py-2 text-sm bg-background/50 border-border/50 hover:bg-background/80 transition-colors"
                            >
                                {skill}
                            </Badge>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};