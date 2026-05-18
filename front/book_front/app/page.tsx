'use client';

import { useState } from 'react';

import Navbar from '@/components/Navbar';
import BookCard from '@/components/BookCard';
import { books } from '@/data/books';

export default function HomePage() {
  const [activeMenu, setActiveMenu] =
    useState('all');

  const filteredBooks = books.filter((book) => {
    if (activeMenu === 'reading') {
      return !book.completed;
    }

    if (activeMenu === 'completed') {
      return book.completed;
    }

    return true;
  });

  return (
    <>
      <Navbar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div className="container">
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>
      </div>
    </>
  );
}