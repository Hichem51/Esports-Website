import { PageWrapper } from '@/components/layout/PageWrapper';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TeamGrid } from '@/features/teams/TeamGrid';

const TeamsPage = () => {
  return (
    <PageWrapper>
      <SectionHeading subtitle="Global Database" title="Professional Teams" />
      <div className="mb-12 flex flex-wrap gap-4">
        {['All Regions', 'LCK', 'LPL', 'LEC', 'LCS'].map((region) => (
          <button key={region} className="px-4 py-2 rounded-button border border-border text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            {region}
          </button>
        ))}
      </div>
      <TeamGrid />
    </PageWrapper>
  );
};

export default TeamsPage;
