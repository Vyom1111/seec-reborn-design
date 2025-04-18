
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import CommitteePage from "./pages/CommitteePage";
import DatesPage from "./pages/DatesPage";
import CallForPapersPage from "./pages/CallForPapersPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TechnicalProgramPage from "./pages/TechnicalProgramPage";
import SpeakersPage from "./pages/SpeakersPage";
import TravelPage from "./pages/TravelPage";
import AccommodationPage from "./pages/AccommodationPage";
import SponsorshipPage from "./pages/SponsorshipPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/dates" element={<DatesPage />} />
          <Route path="/call-for-papers" element={<CallForPapersPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/technical-program" element={<TechnicalProgramPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
