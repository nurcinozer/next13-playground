type GifImage = {
	downsized: {
		url: string;
		width: number;
		height: number;
	};
};

export type Gif = {
	id: string;
	title: string;
	images: GifImage;
};
