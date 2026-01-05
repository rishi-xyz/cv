import { RESUME_DATA } from "../data/resume-data";
import { Section } from "./ui/section";

export const AboutSection = () => {
    return (
        <Section>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">About</h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-3xl">
                    {RESUME_DATA.summary}
                </p>
            </div>
        </Section>
    );
};