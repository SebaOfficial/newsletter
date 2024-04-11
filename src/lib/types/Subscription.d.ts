export interface Subscription {
  email?: string;
  status?: 'ongoing' | 'success' | 'error' = 'ongoing';
  message?: string | null = null;
}
