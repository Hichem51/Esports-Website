import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ title, subtitle, action }, ref) => {
    return (
      <div ref={ref} className="flex items-end justify-between mb-8">
        <div>
          {subtitle && <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{subtitle}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
        </div>
        {action && <div>{action}</div>}
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';
