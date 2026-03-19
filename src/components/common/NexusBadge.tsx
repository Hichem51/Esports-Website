import { cn } from '@/lib/utils';

interface NexusBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'live' | 'accent';
}

const styles = {
  default: 'bg-muted text-muted-foreground',
  live: 'bg-destructive/10 text-destructive border border-destructive/20',
  accent: 'bg-accent/10 text-accent border border-accent/20',
};

export const NexusBadge = ({ children, variant = 'default' }: NexusBadgeProps) => {
  return (
    <span className={cn('px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider inline-block', styles[variant])}>
      {children}
    </span>
  );
};
