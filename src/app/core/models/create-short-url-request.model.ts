export interface CreateShortUrlRequestModel {
  originalUrl: string;
  customAlias?: string | null;
  expiresAt?: string | null;
  maxClicks?: number | null;
}

