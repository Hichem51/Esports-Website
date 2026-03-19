import { PageWrapper } from '@/components/layout/PageWrapper';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MatchList } from '@/features/matches/MatchList';

const SchedulePage = () => {
  return (
    <PageWrapper>
      <SectionHeading subtitle="All Matches" title="Match Schedule" />
      <div className="mb-12 flex flex-wrap gap-4">
        {['All', 'Live', 'Upcoming', 'Finished'].map((filter) => (
          <button key={filter} className="px-4 py-2 rounded-button border border-border text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            {filter}
          </button>
        ))}
      </div>
      <MatchList />
    </PageWrapper>
  );
};

export default SchedulePage;
