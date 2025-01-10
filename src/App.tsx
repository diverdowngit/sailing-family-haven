import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy, useState, useEffect } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import LoadingPage from "./components/LoadingPage";
import { useToast } from "@/hooks/use-toast";
import { getCookieConsent, setCookieConsent } from "./utils/cookieConsent";
import { Toaster } from "@/components/ui/toaster";
import { trackPageView } from "./utils/analytics";

// Lazy load routes
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Merchandise = lazy(() => import("./pages/Merchandise"));
const Patreon = lazy(() => import("./pages/Patreon"));

const queryClient = new QueryClient();

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === null) {
      const toastInstance = toast({
        title: "Cookie Consent",
        description: "We use cookies to enhance your experience and analyze site traffic. Do you accept our cookie policy?",
        duration: null,
        action: (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setCookieConsent(true);
                toast({
                  description: "Thank you for accepting cookies!",
                  duration: 3000,
                });
                toastInstance.dismiss();
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
                toastInstance.dismiss();
              }}
              className="bg-secondary text-secondary-foreground px-3 py-2 rounded-md text-sm"
            >
              Reject
            </button>
          </div>
        ),
      });

      return () => {
        toastInstance.dismiss();
      };
    }
  }, [toast]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RouteTracker />
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