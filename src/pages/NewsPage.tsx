import { PageWrapper } from '@/components/layout/PageWrapper';
import { SectionHeading } from '@/components/common/SectionHeading';
import { NexusCard } from '@/components/common/NexusCard';
import { news } from '@/data/news';

const NewsPage = () => {
  return (
    <PageWrapper>
      <SectionHeading subtitle="Media" title="Latest News & Analysis" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...news, ...news].map((item, i) => (
          <NexusCard key={`${item.id}-${i}`} className="group cursor-pointer">
            <div className="aspect-video overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                <span className="text-muted-foreground text-[10px] font-medium uppercase">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold leading-snug text-foreground group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
                Deep dive analysis covering the latest developments in competitive League of Legends and what it means for the upcoming season.
              </p>
            </div>
          </NexusCard>
        ))}
      </div>
    </PageWrapper>
  );
};

export default NewsPage;
