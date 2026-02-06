'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useUserInfo } from '@/hooks/useUserInfo';
import Header from '@/components/home/header/header';
import { HeroSection } from '@/components/home/hero-section/hero-section';
import { SubHero } from '@/components/home/sub-hero/sub-hero';
import { WhatIncludes } from '@/components/home/what-includes/what-includes';
import { Pricing } from '@/components/home/pricing/pricing';
import { WhyDifferent } from '@/components/home/why-different/why-different';
import { SocialProof } from '@/components/home/social-proof/social-proof';
import { NoRisk } from '@/components/home/no-risk/no-risk';
import { FinalCTA } from '@/components/home/final-cta/final-cta';
import { Footer } from '@/components/home/footer/footer';

export function HomePage() {
  const supabase = createClient();
  const { user } = useUserInfo(supabase);
  const [country] = useState('US');

  return (
    <div className="bg-background min-h-screen">
      <Header user={user} />
      <HeroSection />
      <SubHero />
      <WhatIncludes />
      <div id="pricing">
        <Pricing country={country} user={user} />
      </div>
      <WhyDifferent />
      <SocialProof />
      <NoRisk />
      <FinalCTA />
      <Footer />
    </div>
  );
}
