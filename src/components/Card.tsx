'use client';
import Image from 'next/image';

type CardProps = {
	title: string;
	image_url: string;
	image_width: number;
	image_height: number;
};

export const Card = ({
	title,
	image_url,
	image_width,
	image_height,
}: CardProps) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<Image
				src={image_url}
				alt={title}
				width={image_width}
				height={image_height}
				priority={true}
			/>
			<div className="px-6 py-4">
				<h1 className="font-bold text-xl mb-2">{title}</h1>
			</div>
		</div>
	);
};
