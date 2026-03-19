import { NexusCard } from '../common/NexusCard';
import { NexusBadge } from '../common/NexusBadge';
import { MapPin, Trophy, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedChampionship = () => {
  return (
    <section className="mb-24">
      <NexusCard className="p-0 overflow-hidden" hover={false}>
        <div className="relative h-64 md:h-80">
          <img
            src="https://lh5.googleusercontent.com/proxy/qu8iuo9MGnt1Agd7-t8WLM9WCDx_UH54XkCu6FfT2pZTXByix4EDUgPXtkW3462PYjJjsAMwD64cHfwAgtazreWJ-eNWNb2qJzUyyLQEmGruZ8SRA3OadNgh1Fk"
            className="w-full h-full object-cover opacity-30"
            alt="Championship Arena"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-12">
            <div className="max-w-2xl">
              <NexusBadge variant="accent">Featured Event</NexusBadge>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mt-4 mb-6 text-foreground">
                Mid-Season Invitational 2024
              </h2>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} className="text-accent" />
                  <span className="text-sm font-medium">Chengdu, China</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy size={16} className="text-accent" />
                  <span className="text-sm font-medium">$250,000 Prize Pool</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} className="text-accent" />
                  <span className="text-sm font-medium">May 1 – 19, 2024</span>
                </div>
              </div>
              <Link
                to="/championships"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-button font-bold hover:bg-accent/90 transition-colors"
              >
                View Tournament Details
              </Link>
            </div>
          </div>
        </div>
      </NexusCard>
    </section>
  );
};
