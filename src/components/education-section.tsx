import { RESUME_DATA } from "../data/resume-data";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";

export const EducationSection = () => {
    return (
        <Section>
            <h2 className="text-xl font-bold">Education</h2>
            {RESUME_DATA.education.map((education) => {
                return (
                    <Card key={education.school} className="bg-white/5 hover:bg-black/20 transition-colors">
                        <CardHeader>
                            <div className="flex items-center justify-between gap-x-2 text-base">
                                <h3 className="font-semibold leading-none">
                                    {education.school}
                                </h3>
                                <div className="text-sm tabular-nums text-gray-500">
                                    {education.start} - {education.end}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm">
                                <h5>Grade: {education.grade}</h5>
                                <h4>{education.degree}</h4>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </Section>
    );
};