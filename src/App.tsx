import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import { Skeleton } from "./components/ui/skeleton";

// Lazy load routes
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Merchandise = lazy(() => import("./pages/Merchandise"));
const Patreon = lazy(() => import("./pages/Patreon"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Suspense fallback={<Skeleton className="w-full h-screen" />}>
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
      </Router>
    </QueryClientProvider>
  );
}

export default App;