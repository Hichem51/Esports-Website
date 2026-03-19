import { Link } from "react-router-dom";
import { Twitter, Youtube, Instagram } from "lucide-react";

export const SiteFooter = () => {
  const socialLinks = [
    { icon: Twitter, link: "https://twitter.com/lolesports" },
    { icon: Youtube, link: "https://www.youtube.com/@lolesports" },
    { icon: Instagram, link: "https://www.instagram.com/lolesports" },
  ];
  return (
    <footer className="bg-surface border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <span className="font-black text-2xl tracking-tighter uppercase italic block mb-6 text-foreground">
              Nexus<span className="text-accent">League</span>
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The definitive source for League of Legends esports. Real-time
              data, deep analytics, and premium coverage of the global pro
              scene.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-foreground">
              Regions
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/teams"
                  className="hover:text-accent transition-colors"
                >
                  LCK Korea
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className="hover:text-accent transition-colors"
                >
                  LPL China
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className="hover:text-accent transition-colors"
                >
                  LEC Europe
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className="hover:text-accent transition-colors"
                >
                  LCS North America
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-foreground">
              Platform
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/schedule"
                  className="hover:text-accent transition-colors"
                >
                  Match Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/players"
                  className="hover:text-accent transition-colors"
                >
                  Pro Players
                </Link>
              </li>
              <li>
                <Link
                  to="/highlights"
                  className="hover:text-accent transition-colors"
                >
                  VODs & Highlights
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-accent transition-colors"
                >
                  Latest News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/60 text-xs">
            © 2026 Nexus League Esports. Not affiliated with Riot Games.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground/60">
            <a href="#" className="hover:text-muted-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-muted-foreground">
              Terms of Service
            </a>
            <a href="#" className="hover:text-muted-foreground">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
