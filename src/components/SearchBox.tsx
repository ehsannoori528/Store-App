'use client'
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

const SearchBox = () => {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') return; // اگر خالی بود کاری نکن
    router.push(`/products?query=${encodeURIComponent(input)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="جستجوی محصول..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </form>
  );
};

export default SearchBox;
