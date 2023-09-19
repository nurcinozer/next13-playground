import {
	GIPHY_API_BASE_URL,
	GIPHY_API_LIMIT,
	GIPHY_API_TRENDING_ENDPOINT,
} from '@/constants';

export const fetchTrendingGifs = async () => {
	const response = await fetch(
		`${GIPHY_API_BASE_URL}${GIPHY_API_TRENDING_ENDPOINT}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=${GIPHY_API_LIMIT}`,
	);

	if (!response.ok) {
		throw new Error('Failed to fetch trending gifs');
	}

	const { data } = await response.json();
	return data;
};
