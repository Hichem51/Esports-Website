import { PageWrapper } from '@/components/layout/PageWrapper';
import { SectionHeading } from '@/components/common/SectionHeading';
import { tournaments } from '@/data/tournaments';
import { NexusCard } from '@/components/common/NexusCard';
import { NexusBadge } from '@/components/common/NexusBadge';
import { MapPin, DollarSign } from 'lucide-react';

const ChampionshipsPage = () => {
  return (
    <PageWrapper>
      <SectionHeading subtitle="Tournaments" title="Global Championships" />
      <div className="grid gap-6">
        {tournaments.map((t) => (
          <NexusCard key={t.id} className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <NexusBadge variant="accent">{t.status}</NexusBadge>
              <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mt-4 mb-4 text-foreground">{t.name}</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} className="text-accent" />
                  <span className="text-sm font-medium">{t.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign size={16} className="text-accent" />
                  <span className="text-sm font-medium">{t.prize}</span>
                </div>
              </div>
            </div>
            <button className="bg-foreground text-background px-8 py-3 rounded-button font-bold hover:bg-accent hover:text-accent-foreground transition-colors shrink-0">
              Tournament Details
            </button>
          </NexusCard>
        ))}
      </div>
    </PageWrapper>
  );
};

export default ChampionshipsPage;
