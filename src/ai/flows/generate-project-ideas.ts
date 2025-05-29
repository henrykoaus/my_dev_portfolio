// src/ai/flows/generate-project-ideas.ts
'use server';
/**
 * @fileOverview An AI agent for generating project ideas for a developer portfolio.
 *
 * - generateProjectIdeas - A function that generates project ideas based on the developer's skills and interests.
 * - GenerateProjectIdeasInput - The input type for the generateProjectIdeas function.
 * - GenerateProjectIdeasOutput - The return type for the generateProjectIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectIdeasInputSchema = z.object({
  skillsAndInterests: z
    .string()
    .describe('A description of the developer\'s skills and interests.'),
});
export type GenerateProjectIdeasInput = z.infer<
  typeof GenerateProjectIdeasInputSchema
>;

const GenerateProjectIdeasOutputSchema = z.object({
  projectIdeas: z
    .array(z.string())
    .describe('A list of project ideas based on the provided skills and interests.'),
});
export type GenerateProjectIdeasOutput = z.infer<
  typeof GenerateProjectIdeasOutputSchema
>;

export async function generateProjectIdeas(
  input: GenerateProjectIdeasInput
): Promise<GenerateProjectIdeasOutput> {
  return generateProjectIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectIdeasPrompt',
  input: {schema: GenerateProjectIdeasInputSchema},
  output: {schema: GenerateProjectIdeasOutputSchema},
  prompt: `You are an AI assistant that helps developers generate project ideas for their portfolio.

  Based on the developer's skills and interests, suggest some project ideas that would be suitable for their portfolio.

  Skills and Interests: {{{skillsAndInterests}}}

  Project Ideas:
  `,
});

const generateProjectIdeasFlow = ai.defineFlow(
  {
    name: 'generateProjectIdeasFlow',
    inputSchema: GenerateProjectIdeasInputSchema,
    outputSchema: GenerateProjectIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
