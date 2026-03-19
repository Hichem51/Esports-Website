import { useState } from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Hero } from '@/components/home/Hero';
import { FeaturedChampionship } from '@/components/home/FeaturedChampionship';
import { PhotoGallery } from '@/components/home/PhotoGallery';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MatchList } from '@/features/matches/MatchList';
import { TeamGrid } from '@/features/teams/TeamGrid';
import { PlayerGrid } from '@/features/players/PlayerGrid';
import { NexusButton } from '@/components/common/NexusButton';
import { NexusCard } from '@/components/common/NexusCard';
import { highlights } from '@/data/highlights';
import { news } from '@/data/news';
import { ArrowRight, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <PageWrapper>
      <Hero />
      <FeaturedChampionship />

      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors">
              <X size={28} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full rounded-card"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Player"
            />
          </div>
        </div>
      )}

      <section className="mb-24">
        <SectionHeading
          subtitle="Live & Upcoming"
          title="Match Schedule"
          action={<Link to="/schedule"><NexusButton variant="ghost" className="flex items-center gap-2">View Full Schedule <ArrowRight size={16} /></NexusButton></Link>}
        />
        <MatchList limit={3} />
      </section>

      <section className="mb-24">
        <SectionHeading
          subtitle="Global Rankings"
          title="Top Tier Teams"
          action={<Link to="/teams"><NexusButton variant="ghost" className="flex items-center gap-2">View All Teams <ArrowRight size={16} /></NexusButton></Link>}
        />
        <TeamGrid limit={3} />
      </section>

      <section className="mb-24">
        <SectionHeading
          subtitle="Pro Profiles"
          title="Star Players"
          action={<Link to="/players"><NexusButton variant="ghost" className="flex items-center gap-2">Player Database <ArrowRight size={16} /></NexusButton></Link>}
        />
        <PlayerGrid limit={4} />
      </section>

      <section className="mb-24">
        <SectionHeading
          subtitle="Highlights"
          title="Video Replays"
          action={<Link to="/highlights"><NexusButton variant="ghost" className="flex items-center gap-2">All Highlights <ArrowRight size={16} /></NexusButton></Link>}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.slice(0, 2).map((vid) => (
            <NexusCard key={vid.id} className="group cursor-pointer" onClick={() => setActiveVideo(vid.youtubeId)}>
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={28} fill="currentColor" className="text-accent-foreground ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-background/80 text-foreground text-xs font-mono px-2 py-1 rounded">{vid.duration}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{vid.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{vid.views}</p>
              </div>
            </NexusCard>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <SectionHeading subtitle="Gallery" title="Pro Scene Moments" />
        <PhotoGallery />
      </section>

      <section className="mb-24">
        <SectionHeading
          subtitle="Media"
          title="Latest Coverage"
          action={<Link to="/news"><NexusButton variant="ghost" className="flex items-center gap-2">More News <ArrowRight size={16} /></NexusButton></Link>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <NexusCard key={item.id} className="group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                  <span className="text-muted-foreground text-[10px] font-medium uppercase">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold leading-snug text-foreground group-hover:text-accent transition-colors">{item.title}</h3>
              </div>
            </NexusCard>
          ))}
        </div>
      </section>

      <section className="bg-accent rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-accent-foreground text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">Join the Nexus Pro Membership</h2>
          <p className="text-accent-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Get exclusive access to pro-view replays, advanced statistical breakdowns, and early access to Worlds 2026 tickets.
          </p>
          <NexusButton variant="secondary" className="bg-background text-foreground px-12 py-4 text-lg hover:bg-background/90">
            Upgrade Now
          </NexusButton>
        </div>
      </section>
    </PageWrapper>
  );
};

export default HomePage;
