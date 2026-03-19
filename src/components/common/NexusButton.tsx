import { twMerge } from 'tailwind-merge';

interface NexusButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

const variantStyles = {
  primary: 'bg-accent text-accent-foreground hover:bg-accent/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'border border-border text-foreground hover:bg-muted',
  ghost: 'text-muted-foreground hover:text-foreground hover:bg-muted',
};

export const NexusButton = ({ children, variant = 'primary', className, ...props }: NexusButtonProps) => {
  return (
    <button
      className={twMerge(
        'px-5 py-2.5 rounded-button font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
