import React from 'react';
import { twMerge } from 'tailwind-merge';

interface NexusCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const NexusCard = React.forwardRef<HTMLDivElement, NexusCardProps>(
  ({ children, className, hover = true, onClick }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={twMerge(
          'glass-panel rounded-card overflow-hidden transition-all duration-300',
          hover && 'hover:border-foreground/20 hover:bg-surface-hover',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

NexusCard.displayName = 'NexusCard';
