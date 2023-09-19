// pages/api/suggestions.ts

import { NextApiRequest, NextApiResponse } from 'next';
import {
	GIPHY_API_BASE_URL,
	GIPHY_API_LIMIT,
	GIPHY_API_SEARCH_SUGGESTIONS_ENDPOINT,
} from '@/constants';
import { fetcher } from '@/helpers';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { query } = req.query;

	const url = `${GIPHY_API_BASE_URL}${GIPHY_API_SEARCH_SUGGESTIONS_ENDPOINT}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${query}&limit=${GIPHY_API_LIMIT}`;

	try {
		const data = await fetcher(url);
		const suggestions = data.data.map(
			(suggestion: { name: string }) => suggestion.name,
		);
		res.status(200).json({ suggestions });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
