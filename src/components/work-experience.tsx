import { RESUME_DATA } from "../data/resume-data";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";

export const WorkExpSection = () => {
    return (
        <Section>
            <div className="space-y-10">
                <h2 className="text-4xl font-bold tracking-tight gradient-text">Work Experience</h2>
                <div className="space-y-6">
                    {RESUME_DATA.work.map((work, index) => {
                        return (
                            <Card 
                                key={work.company} 
                                className="glass-dark border-border/30 hover-lift hover-glow animate-slide-in-left"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-x-4">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-x-3">
                                                <h3 className="text-2xl font-semibold leading-none">
                                                    <a 
                                                        className="hover:text-primary transition-colors duration-200" 
                                                        href={work.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {work.company}
                                                    </a>
                                                </h3>
                                                <div className="flex gap-x-2">
                                                    {work.badges.map((badge) => (
                                                        <Badge
                                                            variant="secondary"
                                                            className="text-xs px-3 py-1 glass-dark border-border/30 hover-lift"
                                                            key={badge}
                                                        >
                                                            {badge}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-medium text-muted-foreground">
                                                {work.title}
                                            </h4>
                                        </div>
                                        <div className="text-sm text-muted-foreground whitespace-nowrap font-mono bg-muted/30 px-3 py-1 rounded-full">
                                            {work.start} - {work.end ?? "Present"}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-base leading-relaxed text-muted-foreground">
                                        {work.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};