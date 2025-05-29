"use client";

import { useState } from 'react';
import { generateProjectIdeas, type GenerateProjectIdeasInput, type GenerateProjectIdeasOutput } from '@/ai/flows/generate-project-ideas';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

export default function AiToolsPage() {
  const [skillsAndInterests, setSkillsAndInterests] = useState('');
  const [projectIdeas, setProjectIdeas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setProjectIdeas([]);

    try {
      const input: GenerateProjectIdeasInput = { skillsAndInterests };
      const result: GenerateProjectIdeasOutput = await generateProjectIdeas(input);
      setProjectIdeas(result.projectIdeas);
    } catch (e) {
      setError('Failed to generate project ideas. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">AI Project Suggester</CardTitle>
          <CardDescription>
            Unsure what to build next for your portfolio? Describe your skills and interests, and let our AI suggest some project ideas!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="skillsAndInterests" className="block text-sm font-medium text-foreground mb-1">
                Your Skills and Interests
              </Label>
              <Textarea
                id="skillsAndInterests"
                value={skillsAndInterests}
                onChange={(e) => setSkillsAndInterests(e.target.value)}
                placeholder="e.g., React, Next.js, TypeScript, building full-stack web apps, interested in AI and machine learning..."
                rows={5}
                className="focus:ring-accent focus:border-accent"
                required
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Be as detailed as possible for better suggestions.
              </p>
            </div>
            <Button type="submit" disabled={isLoading || !skillsAndInterests.trim()} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                'Get Project Ideas'
              )}
            </Button>
          </form>
        </CardContent>
        {(projectIdeas.length > 0 || error) && (
            <CardFooter className="flex flex-col items-start mt-6">
                {error && <p className="text-sm text-destructive mb-4">{error}</p>}
                {projectIdeas.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Suggested Project Ideas:</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                    {projectIdeas.map((idea, index) => (
                        <li key={index} className="p-2 bg-secondary/50 rounded-md">{idea}</li>
                    ))}
                    </ul>
                </div>
                )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
