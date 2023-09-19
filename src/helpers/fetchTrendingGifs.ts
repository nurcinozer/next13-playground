import {
	GIPHY_API_BASE_URL,
	GIPHY_API_LIMIT,
	GIPHY_API_OFFSET,
	GIPHY_API_TRENDING_ENDPOINT,
} from '@/constants';
import { fetcher } from './fetcher';

export const fetchTrendingGifs = async (
	limit: number = GIPHY_API_LIMIT,
	offset: string | null = '0',
) => {
	const url = `${GIPHY_API_BASE_URL}${GIPHY_API_TRENDING_ENDPOINT}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=${limit}&offset=${offset}`;

	try {
		const { data } = await fetcher(url);
		return data;
	} catch (error) {
		throw new Error('Failed to fetch trending gifs');
	}
};
