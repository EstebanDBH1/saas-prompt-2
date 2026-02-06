import { DashboardPageHeader } from '@/components/dashboard/layout/dashboard-page-header';
import { PromptsList } from '@/components/dashboard/prompts/prompts-list';
import { getSubscriptions } from '@/utils/paddle/get-subscriptions';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';

export default async function LandingPage() {
  const { data: subscriptions } = await getSubscriptions();
  const hasActiveSubscription = subscriptions && subscriptions.length > 0 &&
    subscriptions.some(sub => sub.status === 'active');

  // Fetch prompts
  const supabase = await createClient();
  const { data: prompts } = await supabase.from('prompts').select('*').order('created_at', { ascending: false });

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-8">
      <DashboardPageHeader pageTitle={'Banco de Prompts'} />

      {!hasActiveSubscription ? (
        <Alert className="border-primary/50 bg-primary/10">
          <AlertDescription className="text-center py-8">
            <p className="text-lg font-medium mb-4">
              Necesitas una suscripción activa para acceder a los prompts
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#pricing">Ver Planes</Link>
            </Button>
          </AlertDescription>
        </Alert>
      ) : (
        <PromptsList hasSubscription={true} prompts={prompts || []} />
      )}
    </main>
  );
}
