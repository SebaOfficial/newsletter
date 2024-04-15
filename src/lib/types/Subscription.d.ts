export interface Subscription {
	email?: string;
	status?: 'ongoing' | 'success' | 'error';
	message?: string | null;
}
