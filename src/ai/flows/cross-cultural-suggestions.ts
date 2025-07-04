'use server';

/**
 * @fileOverview Provides AI-powered suggestions for cross-cultural art collaborations.
 *
 * - crossCulturalSuggestions - A function to get collaboration suggestions.
 * - CrossCulturalSuggestionsInput - The input type for the crossCulturalSuggestions function.
 * - CrossCulturalSuggestionsOutput - The return type for the crossCulturalSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CrossCulturalSuggestionsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('Description of the user profile, including art style, interests, and cultural background.'),
  collaborationGoal: z
    .string()
    .describe('The desired goal or theme of the cross-cultural art collaboration.'),
});
export type CrossCulturalSuggestionsInput = z.infer<
  typeof CrossCulturalSuggestionsInputSchema
>;

const CrossCulturalSuggestionsOutputSchema = z.object({
  suggestedCollaborators: z
    .array(z.string())
    .describe(
      'A list of potential collaborators from different cultural backgrounds, with brief descriptions.'
    ),
  rationale: z
    .string()
    .describe('Explanation of why these collaborators are good matches.'),
});
export type CrossCulturalSuggestionsOutput = z.infer<
  typeof CrossCulturalSuggestionsOutputSchema
>;

export async function crossCulturalSuggestions(
  input: CrossCulturalSuggestionsInput
): Promise<CrossCulturalSuggestionsOutput> {
  return crossCulturalSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'crossCulturalSuggestionsPrompt',
  input: {schema: CrossCulturalSuggestionsInputSchema},
  output: {schema: CrossCulturalSuggestionsOutputSchema},
  prompt: `You are an AI assistant designed to suggest potential collaborators for artists interested in cross-cultural art projects.

  Based on the artist's profile and their collaboration goals, identify potential collaborators from different cultural backgrounds who would be a good fit.

  Artist Profile: {{{userProfile}}}
  Collaboration Goal: {{{collaborationGoal}}}

  Consider diverse artistic styles, cultural backgrounds, and interests when making your suggestions.
  Explain why each suggested collaborator would be a good match for the project.
  Suggest at least 3 collaborators.
  `,
});

const crossCulturalSuggestionsFlow = ai.defineFlow(
  {
    name: 'crossCulturalSuggestionsFlow',
    inputSchema: CrossCulturalSuggestionsInputSchema,
    outputSchema: CrossCulturalSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
