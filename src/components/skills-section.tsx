import { RESUME_DATA } from "../data/resume-data";
import { Badge } from "./ui/badge";
import { Section } from "./ui/section";

export const SkillsSection = () => {
    return (
        <Section>
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
                {RESUME_DATA.skills.map((skill) => {
                    return <Badge key={skill}>{skill}</Badge>;
                })}
            </div>
        </Section>
    );
};