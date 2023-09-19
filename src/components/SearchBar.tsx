'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const SearchBar = () => {
	const [search, setSearch] = useState('');
	const [suggestions, setSuggestions] = useState<string[]>([]);

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

		try {
			const response = await fetch(
				`/api/autocomplete?query=${e.target.value}`,
			);
			if (response.ok) {
				const data = await response.json();
				setSuggestions(data.suggestions);
			} else {
				console.error('Failed to fetch suggestions');
			}
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
