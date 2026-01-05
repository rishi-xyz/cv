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
            <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    Projects
                </h2>
                <div className="space-y-6">
                    {RESUME_DATA.projects.map((proj, index) => {
                        return (
                            <div
                                key={proj.title}
                                className="animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                                    <CardHeader>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between gap-x-4">
                                                <h3 className="text-xl font-semibold leading-none hover:scale-102 transition-transform duration-200">
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
                                                {proj.techStack.map((tech, techIndex) => (
                                                    <div
                                                        key={tech}
                                                        className="animate-scale-in"
                                                        style={{ animationDelay: `${index * 0.1 + techIndex * 0.05}s` }}
                                                    >
                                                        <Badge
                                                            variant="secondary"
                                                            className="text-xs px-2 py-1 bg-background/50 border-border/50"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {proj.description}
                                        </p>
                                        <div className="flex gap-x-3">
                                            <div className="hover:scale-105 transition-transform duration-200">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-border/50 bg-background/50 hover:bg-background/80"
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
                                                    className="hover:scale-105 transition-transform duration-200 animate-fade-in"
                                                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                                                >
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-border/50 bg-background/50 hover:bg-background/80"
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