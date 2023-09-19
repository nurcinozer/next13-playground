import { Card, SearchBar } from '@/components';
import { LoadMore } from '@/components/LoadMore';
import { fetchTrendingGifs } from '@/helpers';
import { Gif } from '@/types';
import Link from 'next/link';

export default async function Home() {
	const trendingGifs = await fetchTrendingGifs();

	return (
		<>
			<SearchBar />
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
			<LoadMore />
		</>
	);
}
