import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Connect through <span className="text-secondary">creativity</span> across borders
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
          Join a global community of artists and art enthusiasts. Share your work, discover amazing art from around the world, and collaborate with creators from different cultures and backgrounds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button asChild size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
            <Link href="/signup">Start Creating</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
            <Link href="#explore">Explore Art</Link>
          </Button>
        </div>
      </div>
      <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none lg:mx-0">
        <Image
          src="https://i.pinimg.com/736x/e4/ce/19/e4ce197f122c2ff21693c61401f7581d.jpg"
          alt="Artists collaborating and sharing their work"
          fill
          className="object-cover rounded-2xl shadow-2xl"
          data-ai-hint="art collaboration"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </div>
    </section>
  );
}
