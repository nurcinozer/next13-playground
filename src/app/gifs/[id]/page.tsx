import { Card } from '@/components';
import { fetchGifById } from '@/helpers';

export default async function GifById({ params }: { params: { id: string } }) {
	const gif = await fetchGifById(params.id);

	return (
		<Card
			key={gif.id}
			image_url={gif.images['downsized'].url}
			image_width={gif.images['downsized'].width}
			image_height={gif.images['downsized'].height}
			title={gif.title}
		/>
	);
}
