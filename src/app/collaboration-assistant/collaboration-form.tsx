"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  crossCulturalSuggestions,
  CrossCulturalSuggestionsInput,
  CrossCulturalSuggestionsOutput,
} from "@/ai/flows/cross-cultural-suggestions";
import { Loader2, Wand2, Users, FileText } from "lucide-react";

const formSchema = z.object({
  userProfile: z.string().min(20, {
    message: "Profile description must be at least 20 characters.",
  }).max(500, {
    message: "Profile description must not exceed 500 characters."
  }),
  collaborationGoal: z.string().min(10, {
    message: "Collaboration goal must be at least 10 characters.",
  }).max(300, {
    message: "Collaboration goal must not exceed 300 characters."
  }),
});

export function CollaborationForm() {
  const [result, setResult] = useState<CrossCulturalSuggestionsOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userProfile: "",
      collaborationGoal: "",
    },
  });

  async function onSubmit(values: CrossCulturalSuggestionsInput) {
    setLoading(true);
    setResult(null);
    try {
      const res = await crossCulturalSuggestions(values);
      setResult(res);
      toast({
        title: "Suggestions Generated!",
        description: "Your collaboration suggestions are ready below.",
      });
    } catch (error) {
      console.error("Failed to get suggestions:", error);
      toast({
        variant: "destructive",
        title: "An Error Occurred",
        description: "Could not generate suggestions. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Find a Collaborator</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="userProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Artist Profile</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., I'm a digital artist from Brazil, specializing in surreal landscapes with vibrant colors. I'm inspired by folklore and mythology."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe your art style, interests, and cultural background.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="collaborationGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collaboration Goal</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., A project exploring the fusion of traditional patterns and modern digital art." {...field} />
                    </FormControl>
                    <FormDescription>
                      What is the desired theme or goal of the collaboration?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-primary hover:bg-secondary text-primary-foreground">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Get Suggestions
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {result && (
        <div className="mt-12">
            <h2 className="font-headline text-3xl text-center mb-8 text-primary">Collaboration Suggestions</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader className="flex-row items-center gap-4">
                        <Users className="w-8 h-8 text-secondary"/>
                        <CardTitle className="font-headline text-2xl">Suggested Collaborators</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                            {result.suggestedCollaborators.map((collaborator, index) => (
                                <li key={index} className="text-muted-foreground">{collaborator}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                     <CardHeader className="flex-row items-center gap-4">
                        <FileText className="w-8 h-8 text-secondary"/>
                        <CardTitle className="font-headline text-2xl">Rationale</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{result.rationale}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      )}
    </>
  );
}
