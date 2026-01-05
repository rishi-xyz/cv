import { RESUME_DATA } from "../data/resume-data";
import { Badge } from "./ui/badge";
import { Section } from "./ui/section";

export const SkillsSection = () => {
    return (
        <Section>
            <div className="space-y-10">
                <h2 className="text-4xl font-bold tracking-tight gradient-text">
                    Skills
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-4">
                    {RESUME_DATA.skills.map((skill, index) => {
                        return (
                            <div
                                key={skill}
                                className="animate-scale-in hover-lift"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <Badge 
                                    className="px-4 py-2 text-sm glass-dark border-border/30 hover-glow transition-all duration-300"
                                >
                                    {skill}
                                </Badge>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};