import { PageWrapper } from '@/components/layout/PageWrapper';
import { SectionHeading } from '@/components/common/SectionHeading';
import { NexusCard } from '@/components/common/NexusCard';
import { Trophy, Users, Globe, Zap } from 'lucide-react';

const stats = [
  { icon: Trophy, label: 'Championships Covered', value: '120+' },
  { icon: Users, label: 'Pro Players Tracked', value: '2,400+' },
  { icon: Globe, label: 'Regions Supported', value: '12' },
  { icon: Zap, label: 'Live Matches Streamed', value: '10K+' },
];

const AboutPage = () => {
  return (
    <PageWrapper>
      <SectionHeading subtitle="Our Story" title="About Nexus League" />

      <div className="max-w-3xl mb-16">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Nexus League is the definitive destination for League of Legends esports. We deliver real-time match data, in-depth player analytics, and premium editorial coverage of the global competitive scene.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Founded by passionate fans and data engineers, our mission is to elevate the esports viewing experience with broadcast-quality presentation and Swiss-precision data density. From LCK to LCS, we cover every region, every split, every play.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you're a casual viewer or a hardened analyst, Nexus League provides the tools and content to deepen your understanding and enjoyment of competitive League of Legends.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <NexusCard key={stat.label} className="p-8 text-center" hover={false}>
            <stat.icon size={32} className="text-accent mx-auto mb-4" />
            <p className="text-3xl font-black font-mono text-foreground mb-2">{stat.value}</p>
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
          </NexusCard>
        ))}
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
