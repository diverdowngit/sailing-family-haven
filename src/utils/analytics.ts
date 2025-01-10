declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const trackPageView = (path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path
    });
  }
};