import { matches } from '@/data/matches';
import { NexusCard } from '@/components/common/NexusCard';
import { NexusBadge } from '@/components/common/NexusBadge';
import { PlayCircle } from 'lucide-react';

export const MatchList = ({ limit }: { limit?: number }) => {
  const displayMatches = limit ? matches.slice(0, limit) : matches;

  return (
    <div className="grid gap-4">
      {displayMatches.map((match) => (
        <NexusCard key={match.id} className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 group">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 flex-1">
            <div className="w-24 text-center md:text-left">
              <NexusBadge variant={match.status === 'LIVE' ? 'live' : 'default'}>{match.status}</NexusBadge>
              <p className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wider">{match.league}</p>
            </div>

            <div className="flex items-center gap-6 flex-1 justify-center">
              <div className="flex flex-col items-end gap-1 w-24 md:w-32">
                <span className="font-bold text-lg text-foreground">{match.teamA}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Blue Side</span>
              </div>

              <div className="flex items-center gap-4 px-6 py-2 bg-muted rounded-xl border border-border">
                <span className={`text-3xl font-black font-mono ${match.scoreA > match.scoreB ? 'text-accent' : 'text-foreground'}`}>
                  {match.scoreA}
                </span>
                <span className="text-muted-foreground/30 font-bold">:</span>
                <span className={`text-3xl font-black font-mono ${match.scoreB > match.scoreA ? 'text-accent' : 'text-foreground'}`}>
                  {match.scoreB}
                </span>
              </div>

              <div className="flex flex-col items-start gap-1 w-24 md:w-32">
                <span className="font-bold text-lg text-foreground">{match.teamB}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Red Side</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm font-bold text-foreground">{match.time}</p>
              <p className="text-xs text-muted-foreground">{match.date}</p>
            </div>
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all duration-300">
              <PlayCircle size={24} />
            </button>
          </div>
        </NexusCard>
      ))}
    </div>
  );
};
