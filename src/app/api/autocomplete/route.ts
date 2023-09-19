import {
	GIPHY_API_BASE_URL,
	GIPHY_API_SEARCH_SUGGESTIONS_ENDPOINT,
	GIPHY_API_LIMIT,
} from '@/constants';
import { fetcher } from '@/helpers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('query');

	const url = `${GIPHY_API_BASE_URL}${GIPHY_API_SEARCH_SUGGESTIONS_ENDPOINT}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${query}&limit=${GIPHY_API_LIMIT}`;

	try {
		const data = await fetcher(url);
		const suggestions = data.data.map(
			(suggestion: { name: string }) => suggestion.name,
		);
		return NextResponse.json({ suggestions });
	} catch (error) {
		console.error(error);
	}
}
