import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="signup" className="py-20 md:py-28 bg-card">
      <div className="container text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Ready to Connect Through Art?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 mb-8">
          Join thousands of artists and art enthusiasts from over 150 countries. Create your free account and start sharing your creativity with the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                <Link href="/signup">Create Free Account</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link href="#features">Learn More</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
