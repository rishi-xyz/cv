import { RESUME_DATA } from "../data/resume-data";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";

export const ProjectSection = () => {
    return (
        <Section>
            <h2 className="text-xl font-bold">Projects</h2>
            {RESUME_DATA.projects.map((proj) => {
                return (
                    <Card key={proj.title} className="bg-white/5 hover:bg-black/20 transition-colors">
                        <CardHeader>
                            <div className="flex items-center justify-between gap-x-2 text-base">
                                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                                    <a className="hover:underline" href={proj.link.website}>
                                        {proj.title}
                                    </a>
                                </h3>

                            </div>
                            <span className="inline-flex gap-x-1">
                                {proj.techStack.map((tech) => (
                                    <Badge
                                        variant="secondary"
                                        className="align-middle text-xs"
                                        key={tech}
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </span>
                        </CardHeader>
                        <CardContent className="text-base">
                            {proj.description}
                        </CardContent>
                    </Card>
                );
            })}
        </Section>
    );
};