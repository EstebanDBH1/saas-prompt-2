export interface Tier {
  name: string;
  id: 'starter' | 'pro' | 'advanced';
  icon: string;
  description: string;
  subtitle?: string;
  features: string[];
  featured: boolean;
  priceId: Record<string, string>;
}

export const PricingTier: Tier[] = [
  {
    name: 'Essential',
    id: 'starter',
    icon: '/assets/icons/price-tiers/free-icon.svg',
    subtitle: 'Para empezar a usar ChatGPT con intención.',
    description: 'Perfecto para empezar a monetizar tus primeros prompts.',
    features: [
      'Acceso a prompts esenciales',
      'Casos de uso más comunes',
      'Uso individual'
    ],
    featured: false,
    priceId: { month: 'pri_01kgqd8cxfkth64xv64d50awpy', year: 'pri_01kgqd8cxfkth64xv64d50awpy' },
  },
  {
    name: 'Pro',
    id: 'pro',
    icon: '/assets/icons/price-tiers/basic-icon.svg',
    subtitle: 'Para creadores, freelancers y profesionales.',
    description: 'Herramientas avanzadas para creadores de prompts serios.',
    features: [
      'Acceso completo al banco de prompts',
      'Prompts avanzados y estratégicos',
      'Nuevos prompts cada semana',
      'Uso ilimitado'
    ],
    featured: true,
    priceId: { month: 'pri_01kgqd8cxfkth64xv64d50awpy', year: 'pri_01kgqd8cxfkth64xv64d50awpy' },
  },
  {
    name: 'Business',
    id: 'advanced',
    icon: '/assets/icons/price-tiers/pro-icon.svg',
    subtitle: 'Equipos y negocios que usan IA a diario.',
    description: 'Para agencias y equipos que dominan la ingeniería de prompts.',
    features: [
      'Acceso para equipos',
      'Prompts orientados a procesos',
      'Soporte prioritario'
    ],
    featured: false,
    priceId: { month: 'pri_01kgqd8cxfkth64xv64d50awpy', year: 'pri_01kgqd8cxfkth64xv64d50awpy' },
  },
];
