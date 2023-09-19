import { Card } from '@/components';
import { searchGifs } from '@/helpers';
import { Gif } from '@/types';
import Link from 'next/link';

export default async function Search({
	params,
}: {
	params: { search: string };
}) {
	const gifs = await searchGifs(params.search);

	return (
		<>
			{gifs.map((gif: Gif) => (
				<Link href={`/gifs/${gif.id}`} key={gif.id}>
					<Card
						image_url={gif.images['downsized'].url}
						image_width={gif.images['downsized'].width}
						image_height={gif.images['downsized'].height}
						title={gif.title}
					/>
				</Link>
			))}
		</>
	);
}
