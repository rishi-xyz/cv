import { RESUME_DATA } from "../data/resume-data";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";

export const EducationSection = () => {
    return (
        <Section>
            <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Education</h2>
                <div className="space-y-6">
                    {RESUME_DATA.education.map((education) => {
                        return (
                            <Card key={education.school} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-x-4">
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold leading-none text-foreground">
                                                {education.school}
                                            </h3>
                                            <h4 className="text-base font-medium text-muted-foreground">
                                                {education.degree}
                                            </h4>
                                        </div>
                                        <div className="text-sm text-muted-foreground whitespace-nowrap">
                                            {education.start} - {education.end}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-x-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-x-2">
                                            <span className="font-medium">Grade:</span>
                                            <span className="text-foreground">{education.grade}</span>
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