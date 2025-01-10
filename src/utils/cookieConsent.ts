export const setCookieConsent = (accepted: boolean) => {
  localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'rejected');
};

export const getCookieConsent = (): boolean | null => {
  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'accepted') return true;
  if (consent === 'rejected') return false;
  return null;
};