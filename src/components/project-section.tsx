import { RESUME_DATA } from "../data/resume-data";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

export const ProjectSection = () => {
    return (
        <Section>
            <div className="space-y-10">
                <h2 className="text-4xl font-bold tracking-tight gradient-text">
                    Projects
                </h2>
                <div className="space-y-8">
                    {RESUME_DATA.projects.map((proj, index) => {
                        return (
                            <div
                                key={proj.title}
                                className="animate-slide-in-right"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="glass-dark border-border/30 hover-lift hover-glow">
                                    <CardHeader>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between gap-x-4">
                                                <h3 className="text-2xl font-semibold leading-none hover-lift">
                                                    <a 
                                                        className="hover:text-primary transition-colors duration-200" 
                                                        href={proj.link.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {proj.title}
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="flex flex-wrap gap-x-2 gap-y-2">
                                                {proj.techStack.map((tech, techIndex) => (
                                                    <div
                                                        key={tech}
                                                        className="animate-scale-in"
                                                        style={{ animationDelay: `${index * 0.1 + techIndex * 0.05}s` }}
                                                    >
                                                        <Badge
                                                            variant="secondary"
                                                            className="text-xs px-3 py-1 glass-dark border-border/30 hover-lift"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <p className="text-base leading-relaxed text-muted-foreground">
                                            {proj.description}
                                        </p>
                                        <div className="flex gap-x-4">
                                            <div className="hover-lift">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="glass-dark border-border/30 hover-glow px-4 py-2"
                                                    asChild
                                                >
                                                    <Link 
                                                        href={proj.link.website} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-x-2"
                                                    >
                                                        <ExternalLinkIcon className="h-4 w-4" />
                                                        Live Demo
                                                    </Link>
                                                </Button>
                                            </div>
                                            {proj.link.code && (
                                                <div 
                                                    className="hover-lift animate-fade-in"
                                                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                                                >
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="glass-dark border-border/30 hover-glow px-4 py-2"
                                                        asChild
                                                    >
                                                        <Link 
                                                            href={proj.link.code} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-x-2"
                                                        >
                                                            <GithubIcon className="h-4 w-4" />
                                                            Source Code
                                                        </Link>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};