import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Paintbrush, Globe, Users, Rocket, GraduationCap, Briefcase } from "lucide-react";

const featuresData = [
    {
        icon: <Paintbrush className="w-10 h-10 text-secondary" />,
        title: "Share Your Art",
        description: "Upload your creations to your personal gallery and share them with a global audience. Support for all art forms including digital, traditional, photography, and sculpture.",
    },
    {
        icon: <Globe className="w-10 h-10 text-secondary" />,
        title: "Connect Globally",
        description: "Find artists and art lovers from around the world. Break down language barriers with our built-in translation tools and cultural context features.",
    },
    {
        icon: <Users className="w-10 h-10 text-secondary" />,
        title: "Join Communities",
        description: "Become part of specialized art communities based on styles, mediums, cultures, or themes. Share techniques, get feedback, and grow together.",
    },
    {
        icon: <Rocket className="w-10 h-10 text-secondary" />,
        title: "Collaborative Projects",
        description: "Find collaborators for cross-cultural art projects. Create art that bridges perspectives and celebrates diversity through creative expression.",
    },
    {
        icon: <GraduationCap className="w-10 h-10 text-secondary" />,
        title: "Learn & Teach",
        description: "Exchange techniques and styles from different artistic traditions. Host or join virtual workshops and skill-sharing sessions.",
    },
    {
        icon: <Briefcase className="w-10 h-10 text-secondary" />,
        title: "Showcase & Sell",
        description: "Optional marketplace features to help artists monetize their work globally while retaining full control of their intellectual property.",
    },
];


export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-card">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">How CanvasConverge Works</h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-4">A platform built for artists, by artists</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuresData.map((feature, index) => (
                    <Card key={index} className="bg-background border-border/60 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="mb-4">{feature.icon}</div>
                            <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                            <CardDescription className="pt-2 text-base">{feature.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
