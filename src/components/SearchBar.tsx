'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const SearchBar = () => {
	const [search, setSearch] = useState('');

	const router = useRouter();

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch('');
		router.push(`/search/${search}`);
	};

	return (
		<form
			className="flex items-center justify-center mb-5 gap-2"
			onSubmit={handleSearch}>
			<input
				className="border border-gray-400 rounded-lg py-2 px-4 text-black"
				type="text"
				value={search}
				onChange={e => setSearch(e.target.value)}
				placeholder="Search for a gif"
			/>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Search
			</button>
		</form>
	);
};
