export interface ShortUrlModel {
  id: number;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  clickCount: number;
  maxClicks: number | null;
  createdAt: string;
  expiresAt: string | null;
  active: boolean;
}
