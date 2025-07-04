import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { CollaborationForm } from "./collaboration-form";

export default function CollaborationAssistantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">AI Collaboration Assistant</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover your next creative partner. Describe your artistic style and goals, and let our AI suggest potential collaborators from diverse cultural backgrounds.
            </p>
          </div>
          <CollaborationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
