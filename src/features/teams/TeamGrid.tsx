import { teams } from '@/data/teams';
import { NexusCard } from '@/components/common/NexusCard';
import { ChevronRight } from 'lucide-react';

export const TeamGrid = ({ limit }: { limit?: number }) => {
  const displayTeams = limit ? teams.slice(0, limit) : teams;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayTeams.map((team) => (
        <NexusCard key={team.id} className="p-8 group cursor-pointer">
          <div className="flex items-start justify-between mb-8">
            <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center p-4 border border-border group-hover:scale-110 transition-transform duration-500">
              <img src={team.logo} alt={team.name} className="w-full h-full object-contain" />
            </div>
            <div className="text-right">
              <span className="text-4xl font-black text-foreground/5 group-hover:text-accent/10 transition-colors">#0{team.rank}</span>
              <p className="text-xs font-bold text-accent uppercase tracking-widest mt-1">{team.region}</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 tracking-tight text-foreground">{team.name}</h3>

          <div className="flex items-center justify-between pt-6 border-t border-border">
            <div className="flex gap-6">
              <div>
                <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest mb-1">Wins</p>
                <p className="font-mono font-bold text-xl text-foreground">{team.wins}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest mb-1">Losses</p>
                <p className="font-mono font-bold text-xl text-foreground">{team.losses}</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all">
              <ChevronRight size={20} />
            </div>
          </div>
        </NexusCard>
      ))}
    </div>
  );
};
