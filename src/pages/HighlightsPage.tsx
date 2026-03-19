import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { NexusCard } from "@/components/common/NexusCard";
import { highlights } from "@/data/highlights";
import { Play, X } from "lucide-react";

const HighlightsPage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <PageWrapper>
      <SectionHeading subtitle="VODs & Replays" title="Video Highlights" />

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={28} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full rounded-card"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((vid) => (
          <NexusCard
            key={vid.id}
            className="group cursor-pointer"
            onClick={() => setActiveVideo(vid.youtubeId)}
          >
            <div className="relative aspect-video bg-muted overflow-hidden">
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play
                    size={24}
                    fill="currentColor"
                    className="text-accent-foreground ml-1"
                  />
                </div>
              </div>
              <span className="absolute bottom-3 right-3 bg-background/80 text-foreground text-xs font-mono px-2 py-1 rounded">
                {vid.duration}
              </span>
              <span className="absolute top-3 left-3 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-accent/20">
                {vid.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {vid.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{vid.views}</p>
            </div>
          </NexusCard>
        ))}
      </div>
    </PageWrapper>
  );
};

export default HighlightsPage;
