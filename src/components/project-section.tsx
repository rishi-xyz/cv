import { RESUME_DATA } from "../data/resume-data";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";

export const ProjectSection = () => {
    return (
        <Section>
            <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Projects</h2>
                <div className="space-y-6">
                    {RESUME_DATA.projects.map((proj) => {
                        return (
                            <Card key={proj.title} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                                <CardHeader>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between gap-x-4">
                                            <h3 className="text-xl font-semibold leading-none">
                                                <a 
                                                    className="hover:text-primary transition-colors" 
                                                    href={proj.link.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {proj.title}
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-x-2 gap-y-2">
                                            {proj.techStack.map((tech) => (
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs px-2 py-1 bg-background/50 border-border/50"
                                                    key={tech}
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {proj.description}
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