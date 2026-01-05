import { RESUME_DATA } from "../data/resume-data";
import { Section } from "./ui/section";

export const AboutSection = () => {
    return (
        <Section>
            <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight gradient-text">About</h2>
                <div className="glass-dark rounded-xl p-6 border-border/30 hover-lift">
                    <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
                        {RESUME_DATA.summary}
                    </p>
                </div>
            </div>
        </Section>
    );
};