import { GIPHY_API_BASE_URL } from '@/constants';

export const fetchGifById = async (id: string) => {
	const response = await fetch(
		`${GIPHY_API_BASE_URL}/${id}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}`,
	);

	if (!response.ok) {
		throw new Error('Failed to fetch gif by id');
	}

	const { data } = await response.json();
	return data;
};
