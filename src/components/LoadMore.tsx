'use client';

import { Gif } from '@/types';
import Link from 'next/link';
import { useState } from 'react';
import { Card } from '.';
import { GIPHY_API_OFFSET } from '@/constants';

export const LoadMore = () => {
	const [trendingGifs, setTrendingGifs] = useState<Gif[]>([]);
	const [offset, setOffset] = useState(GIPHY_API_OFFSET);

	const onLoadMore = async () => {
		const response = await fetch(`/api/trending?offset=${offset}`);
		if (response.ok) {
			const data = await response.json();
			setTrendingGifs([...trendingGifs, ...data.trendingGifs]);
			setOffset(offset + 25);
		} else {
			console.error('Failed to fetch trending gifs');
		}
	};

	return (
		<>
			{trendingGifs.map((gif: Gif) => (
				<Link href={`/gifs/${gif.id}`} key={gif.id}>
					<Card
						image_url={gif.images['downsized'].url}
						image_width={gif.images['downsized'].width}
						image_height={gif.images['downsized'].height}
						title={gif.title}
					/>
				</Link>
			))}
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={onLoadMore}>
				Load More
			</button>
		</>
	);
};
