import {
	GIPHY_API_BASE_URL,
	GIPHY_API_SEARCH_SUGGESTIONS_ENDPOINT,
	GIPHY_API_LIMIT,
} from '@/constants';
import { fetchTrendingGifs, fetcher } from '@/helpers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const offset = searchParams?.get('offset');
	const trendingGifs = await fetchTrendingGifs(GIPHY_API_LIMIT, offset);

	return NextResponse.json({ trendingGifs });
}
