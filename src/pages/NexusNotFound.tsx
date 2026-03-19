import { Link } from 'react-router-dom';
import { NexusButton } from '@/components/common/NexusButton';

const NexusNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background">
      <h1 className="text-[10rem] md:text-[12rem] font-black italic tracking-tighter leading-none text-foreground/5 absolute select-none">404</h1>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-foreground">You've wandered into the Jungle.</h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another lane.
        </p>
        <Link to="/">
          <NexusButton className="px-8 py-3">Return to Nexus</NexusButton>
        </Link>
      </div>
    </div>
  );
};

export default NexusNotFound;
