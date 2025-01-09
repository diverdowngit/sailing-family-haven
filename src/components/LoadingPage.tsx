import { Anchor } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
      <Anchor className="w-12 h-12 animate-spin text-navy mb-4" />
      <p className="text-lg font-luminari text-navy">Loading</p>
    </div>
  );
};

export default LoadingPage;