import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export const ContentfulCredentials = () => {
  const { toast } = useToast();
  const [spaceId, setSpaceId] = useState(localStorage.getItem('CONTENTFUL_SPACE_ID') || '');
  const [accessToken, setAccessToken] = useState(localStorage.getItem('CONTENTFUL_ACCESS_TOKEN') || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('CONTENTFUL_SPACE_ID', spaceId);
    localStorage.setItem('CONTENTFUL_ACCESS_TOKEN', accessToken);
    toast({
      title: "Credentials saved",
      description: "Your Contentful credentials have been saved. Please refresh the page.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2">
        <Label htmlFor="spaceId">Space ID</Label>
        <Input
          id="spaceId"
          value={spaceId}
          onChange={(e) => setSpaceId(e.target.value)}
          placeholder="Enter your Contentful Space ID"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="accessToken">Access Token</Label>
        <Input
          id="accessToken"
          value={accessToken}
          onChange={(e) => setAccessToken(e.target.value)}
          type="password"
          placeholder="Enter your Contentful Access Token"
          required
        />
      </div>
      <Button type="submit" className="w-full">Save Credentials</Button>
      <p className="text-sm text-gray-500 mt-4">
        You can find these credentials in your Contentful dashboard under Settings {'>'} API keys.
        Make sure to use the Content Delivery API access token.
      </p>
    </form>
  );
};