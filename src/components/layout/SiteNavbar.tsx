import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import { Trophy, Calendar, Users, Play, Newspaper, Search } from 'lucide-react';

const navItems = [
  { path: '/championships', label: 'Championships', icon: Trophy },
  { path: '/teams', label: 'Teams', icon: Users },
  { path: '/schedule', label: 'Schedule', icon: Calendar },
  { path: '/highlights', label: 'Highlights', icon: Play },
  { path: '/news', label: 'News', icon: Newspaper },
];

export const SiteNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-t-0 border-x-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
            <Trophy className="text-accent-foreground w-6 h-6" />
          </div>
          <span className="font-black text-xl tracking-tighter uppercase italic text-foreground">
            Nexus<span className="text-accent">League</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <RouterNavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-button text-sm font-medium transition-colors ${
                  isActive ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`
              }
            >
              <item.icon size={16} />
              {item.label}
            </RouterNavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search size={20} />
          </button>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/highlights" className="bg-foreground text-background px-4 py-2 rounded-button text-sm font-bold hover:opacity-90 transition-opacity">
            Watch Live
          </Link>
        </div>
      </div>
    </nav>
  );
};
