'use client';
import {
	GIPHY_API_BASE_URL,
	GIPHY_API_LIMIT,
	GIPHY_API_SEARCH_SUGGESTIONS_ENDPOINT,
} from '@/constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const SearchBar = () => {
	const [search, setSearch] = useState('');
	const [suggestions, setSuggestions] = useState<string[]>([]);

	const fetcher = (url: string) => fetch(url).then(res => res.json());

	const router = useRouter();

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch('');
		router.push(`/search/${search}`);
	};

	const handleSuggestions = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		e.preventDefault();
		setSearch(e.target.value);

		const url = `${GIPHY_API_BASE_URL}${GIPHY_API_SEARCH_SUGGESTIONS_ENDPOINT}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${e.target.value}&limit=${GIPHY_API_LIMIT}`;
		try {
			const data = await fetcher(url);
			setSuggestions(
				data.data.map(
					(suggestion: { name: string }) => suggestion.name,
				),
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			className="flex items-center justify-center mb-5 gap-2"
			onSubmit={handleSearch}>
			<input
				className="border border-gray-400 rounded-lg py-2 px-4 text-black"
				type="text"
				value={search}
				onChange={e => handleSuggestions(e)}
				placeholder="Search for a gif"
			/>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Search
			</button>
			{suggestions.length > 0 && (
				<div className="absolute flex flex-col gap-2 bg-white border border-gray-400 rounded-lg py-2 px-4 text-black">
					{suggestions.map(suggestion => (
						<button
							key={suggestion}
							className="hover:bg-gray-200"
							onClick={() => {
								setSearch(suggestion);
								setSuggestions([]);
							}}>
							{suggestion}
						</button>
					))}
				</div>
			)}
		</form>
	);
};
