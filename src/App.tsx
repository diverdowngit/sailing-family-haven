import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy, useState, useEffect } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import LoadingPage from "./components/LoadingPage";
import { useToast } from "@/hooks/use-toast";
import { getCookieConsent, setCookieConsent } from "./utils/cookieConsent";
import { Toaster } from "@/components/ui/toaster";

// Lazy load routes
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Merchandise = lazy(() => import("./pages/Merchandise"));
const Patreon = lazy(() => import("./pages/Patreon"));

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show cookie consent if not already set
    const consent = getCookieConsent();
    if (consent === null) {
      toast({
        title: "Cookie Consent",
        description: "We use cookies to enhance your experience. Do you accept our cookie policy?",
        duration: Infinity,
        action: (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setCookieConsent(true);
                toast({
                  description: "Thank you for accepting cookies!",
                  duration: 3000,
                });
              }}
              className="bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm"
            >
              Accept
            </button>
            <button
              onClick={() => {
                setCookieConsent(false);
                toast({
                  description: "Cookies have been rejected.",
                  duration: 3000,
                });
              }}
              className="bg-secondary text-secondary-foreground px-3 py-2 rounded-md text-sm"
            >
              Reject
            </button>
          </div>
        ),
      });
    }
  }, [toast]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/patreon" element={<Patreon />} />
            </Routes>
          </Suspense>
        </Layout>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;