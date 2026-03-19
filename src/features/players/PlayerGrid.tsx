import { players } from '@/data/players';
import { NexusCard } from '@/components/common/NexusCard';

export const PlayerGrid = ({ limit }: { limit?: number }) => {
  const displayPlayers = limit ? players.slice(0, limit) : players;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayPlayers.map((player) => (
        <NexusCard key={player.id} className="relative aspect-[3/4] group overflow-hidden">
          <img
            src={player.image}
            alt={player.name}
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-accent text-accent-foreground text-[10px] font-black uppercase rounded">
                {player.role}
              </span>
              <span className="text-xs font-bold text-foreground/70 uppercase tracking-widest">
                {player.team}
              </span>
            </div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-foreground">{player.name}</h3>

            <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">KDA Ratio</p>
                <p className="font-mono font-bold text-accent">{player.kda}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Nation</p>
                <p className="font-bold text-foreground">{player.nationality}</p>
              </div>
            </div>
          </div>
        </NexusCard>
      ))}
    </div>
  );
};
