import {
	GIPHY_API_BASE_URL,
	GIPHY_API_SEARCH_ENDPOINT,
	GIPHY_API_LIMIT,
} from '@/constants';
import { fetcher } from './fetcher';

export const searchGifs = async (searchTerm: string) => {
	const url = `${GIPHY_API_BASE_URL}${GIPHY_API_SEARCH_ENDPOINT}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${searchTerm}&limit=${GIPHY_API_LIMIT}`;

	try {
		const { data } = await fetcher(url);
		return data;
	} catch (error) {
		throw new Error('Failed to fetch gifs');
	}
};
