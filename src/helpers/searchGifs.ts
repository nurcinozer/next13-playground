import {
	GIPHY_API_BASE_URL,
	GIPHY_API_SEARCH_ENDPOINT,
	GIPHY_API_LIMIT,
} from '@/constants';

export const searchGifs = async (searchTerm: string) => {
	const response = await fetch(
		`${GIPHY_API_BASE_URL}${GIPHY_API_SEARCH_ENDPOINT}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${searchTerm}&limit=${GIPHY_API_LIMIT}`,
	);

	if (!response.ok) {
		throw new Error('Failed to fetch gifs');
	}

	const { data } = await response.json();
	return data;
};
