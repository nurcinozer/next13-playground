import { GIPHY_API_BASE_URL } from '@/constants';
import { fetcher } from './fetcher';

export const fetchGifById = async (id: string) => {
	const url = `${GIPHY_API_BASE_URL}/${id}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}`;

	try {
		const { data } = await fetcher(url);
		return data;
	} catch (error) {
		throw new Error('Failed to fetch gif by id');
	}
};
