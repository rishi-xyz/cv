import { RESUME_DATA } from "../data/resume-data";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";

export const EducationSection = () => {
    return (
        <Section>
            <div className="space-y-10">
                <h2 className="text-4xl font-bold tracking-tight gradient-text">Education</h2>
                <div className="space-y-6">
                    {RESUME_DATA.education.map((education, index) => {
                        return (
                            <Card 
                                key={education.school} 
                                className="glass-dark border-border/30 hover-lift hover-glow animate-slide-in-left"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-x-4">
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-semibold leading-none text-foreground">
                                                {education.school}
                                            </h3>
                                            <h4 className="text-lg font-medium text-muted-foreground">
                                                {education.degree}
                                            </h4>
                                        </div>
                                        <div className="text-sm text-muted-foreground whitespace-nowrap font-mono bg-muted/30 px-3 py-1 rounded-full">
                                            {education.start} - {education.end}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-x-6 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-x-2">
                                            <span className="font-medium">Grade:</span>
                                            <span className="text-foreground font-semibold">{education.grade}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};