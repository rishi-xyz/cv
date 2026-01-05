import { RESUME_DATA } from "../data/resume-data";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";

export const WorkExpSection = () => {
    return (
        <Section>
            <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Work Experience</h2>
                <div className="space-y-6">
                    {RESUME_DATA.work.map((work) => {
                        return (
                            <Card key={work.company} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-x-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-x-2">
                                                <h3 className="text-xl font-semibold leading-none">
                                                    <a 
                                                        className="hover:text-primary transition-colors" 
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
                                                            className="text-xs px-2 py-1 bg-background/50 border-border/50"
                                                            key={badge}
                                                        >
                                                            {badge}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <h4 className="text-base font-medium text-muted-foreground">
                                                {work.title}
                                            </h4>
                                        </div>
                                        <div className="text-sm text-muted-foreground whitespace-nowrap">
                                            {work.start} - {work.end ?? "Present"}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
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