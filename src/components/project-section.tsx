"use client";

import { useState } from "react";
import { RESUME_DATA } from "../data/resume-data";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { ExternalLinkIcon, GithubIcon, CalendarIcon, ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export const ProjectSection = () => {
    const [visibleProjects, setVisibleProjects] = useState(5);
    const hasMoreProjects = RESUME_DATA.projects.length > visibleProjects;

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 3);
    };

    return (
        <Section>
            <div className="space-y-10">
                <h2 className="text-4xl font-bold tracking-tight gradient-text">
                    Projects
                </h2>
                <div className="space-y-8">
                    {RESUME_DATA.projects.slice(0, visibleProjects).map((proj, index) => {
                        return (
                            <div
                                key={proj.title}
                                className="animate-slide-in-right"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="glass-dark border-border/30 hover-lift hover-glow">
                                    <CardHeader>
                                        <div className="space-y-4">
                                            {/* Project date and title */}
                                            <div className="flex items-center justify-between gap-x-4">
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
                                                        <span>{proj.date || "2024"}</span>
                                                    </div>
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
                                            </div>

                                            {/* Tech stack badges */}
                                            <div className="flex flex-wrap gap-x-2 gap-y-2">
                                                {proj.techStack.map((tech, techIndex) => (
                                                    <div
                                                        key={tech}
                                                        className="animate-scale-in"
                                                        style={{ animationDelay: `${index * 0.1 + techIndex * 0.05}s` }}
                                                    >
                                                        <Badge
                                                            variant="secondary"
                                                            className="text-xs px-3 py-1 bg-white/10 border-border/30 hover-lift"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {/* Project description */}
                                        <p className="text-base leading-relaxed text-muted-foreground">
                                            {proj.description}
                                        </p>

                                        {/* Project links */}
                                        <div className="flex flex-wrap gap-x-4 gap-y-3">
                                            <div className="hover-lift">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="glass-dark border-border/30 hover-glow px-4 py-2"
                                                    asChild
                                                >{proj.link.website &&
                                                    <Link
                                                        href={proj.link.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-x-2"
                                                    >
                                                        <ExternalLinkIcon className="h-4 w-4" />
                                                        Live Demo
                                                    </Link> 
                                                }
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

                {/* Load more button */}
                {hasMoreProjects && (
                    <div className="flex justify-center pt-8 animate-fade-in">
                        <Button
                            onClick={loadMoreProjects}
                            variant="outline"
                            className="glass-dark border-border/30 hover-glow hover-lift px-6 py-3"
                        >
                            <ChevronDownIcon className="h-4 w-4 mr-2" />
                            Load More Projects
                            <span className="ml-2 text-sm text-muted-foreground">
                                ({RESUME_DATA.projects.length - visibleProjects} remaining)
                            </span>
                        </Button>
                    </div>
                )}

                {/* Show all projects loaded message */}
                {!hasMoreProjects && RESUME_DATA.projects.length > 5 && (
                    <div className="text-center pt-8 text-sm text-muted-foreground animate-fade-in">
                        All {RESUME_DATA.projects.length} projects loaded
                    </div>
                )}
            </div>
        </Section>
    );
};