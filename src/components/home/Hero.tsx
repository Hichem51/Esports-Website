import { motion } from 'framer-motion';
import { NexusButton } from '../common/NexusButton';
import { Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden rounded-3xl mb-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070"
          className="w-full h-full object-cover opacity-40 scale-105"
          alt="Esports Arena"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-gold" />
            Live: LCK Spring Split 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase italic text-foreground">
            Witness the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-foreground">Evolution</span> of Legends
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            The road to Worlds begins here. Track every kill, every objective, and every upset in the most competitive season yet.
          </p>
          <div className="flex gap-4">
            <Link to="/highlights">
              <NexusButton className="px-8 py-4 text-lg flex items-center gap-2">
                <Play size={20} fill="currentColor" /> Watch Stream
              </NexusButton>
            </Link>
            <Link to="/schedule">
              <NexusButton variant="outline" className="px-8 py-4 text-lg flex items-center gap-2">
                Match Schedule <ChevronRight size={20} />
              </NexusButton>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 hidden md:flex gap-8">
        <div className="text-right">
          <span className="block text-muted-foreground text-xs font-bold uppercase tracking-widest mb-1">Viewers</span>
          <span className="text-3xl font-mono font-bold tracking-tighter text-foreground">1.2M+</span>
        </div>
        <div className="text-right">
          <span className="block text-muted-foreground text-xs font-bold uppercase tracking-widest mb-1">Prize Pool</span>
          <span className="text-3xl font-mono font-bold tracking-tighter text-accent">$2.5M</span>
        </div>
      </div>
    </section>
  );
};
