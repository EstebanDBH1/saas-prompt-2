'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Prompt {
    id: string;
    title: string;
    description: string;
    content: string;
    tags?: string[];
    price: string;
}

interface Props {
    hasSubscription: boolean;
    prompts: Prompt[];
}

export function PromptsList({ hasSubscription, prompts }: Props) {
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const { toast } = useToast();

    const handleCopy = async (content: string, id: string) => {
        try {
            await navigator.clipboard.writeText(content);
            setCopiedId(id);
            toast({
                description: "Prompt copiado al portapapeles",
            });
            setTimeout(() => setCopiedId(null), 2000);
        } catch {
            toast({
                description: "Error al copiar",
                variant: "destructive"
            });
        }
    };

    if (!prompts || prompts.length === 0) {
        return (
            <div className="text-center text-muted-foreground py-10">
                No hay prompts disponibles por el momento.
            </div>
        )
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {prompts.map((prompt) => (
                <Card key={prompt.id} className="bg-card border-border flex flex-col justify-between hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-medium line-clamp-1">{prompt.title}</CardTitle>
                        <CardDescription className="text-muted-foreground text-sm line-clamp-2 min-h-[40px]">{prompt.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {prompt.tags?.map((tag: string) => (
                                <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">{tag}</Badge>
                            ))}
                        </div>
                        <div className="text-xl font-bold text-primary">{prompt.price}</div>
                    </CardContent>
                    <CardFooter className="pt-0">
                        {hasSubscription ? (
                            <Button
                                size="sm"
                                variant="outline"
                                className="w-full h-8 text-xs"
                                onClick={() => handleCopy(prompt.content, prompt.id)}
                            >
                                {copiedId === prompt.id ? (
                                    <>
                                        <Check className="h-3 w-3 mr-1" />
                                        Copiado
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-3 w-3 mr-1" />
                                        Copy
                                    </>
                                )}
                            </Button>
                        ) : (
                            <Button
                                size="sm"
                                variant="ghost"
                                className="w-full h-8 text-xs cursor-not-allowed opacity-50"
                                disabled
                            >
                                Requiere suscripción
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
