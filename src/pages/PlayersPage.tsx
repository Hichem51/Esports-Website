import { PageWrapper } from '@/components/layout/PageWrapper';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PlayerGrid } from '@/features/players/PlayerGrid';

const PlayersPage = () => {
  return (
    <PageWrapper>
      <SectionHeading subtitle="Pro Database" title="Star Players" />
      <div className="mb-12 flex flex-wrap gap-4">
        {['All Roles', 'Top', 'Jungle', 'Mid', 'ADC', 'Support'].map((role) => (
          <button key={role} className="px-4 py-2 rounded-button border border-border text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            {role}
          </button>
        ))}
      </div>
      <PlayerGrid />
    </PageWrapper>
  );
};

export default PlayersPage;
