import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import HomePage from "./pages/HomePage";
import ChampionshipsPage from "./pages/ChampionshipsPage";
import TeamsPage from "./pages/TeamsPage";
import PlayersPage from "./pages/PlayersPage";
import HighlightsPage from "./pages/HighlightsPage";
import SchedulePage from "./pages/SchedulePage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import NexusNotFound from "./pages/NexusNotFound";
import ScrollToTop from "./components/common/ScrollToTop";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/championships" element={<ChampionshipsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/highlights" element={<HighlightsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NexusNotFound />} />
        </Routes>
      </AnimatePresence>
      <ScrollToTop />
      <SiteFooter />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
