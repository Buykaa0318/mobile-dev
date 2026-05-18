'use client';

import Link from 'next/link';

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  currentPage: number;
  totalPages: number;
  completed: boolean;
}

export default function BookCard({
  book,
}: {
  book: Book;
}) {
  const percent =
    (book.currentPage / book.totalPages) * 100;

  return (
    <Link
      href={`/book/${book.id}`}
      style={{ textDecoration: 'none' }}
    >
      <div className="book-card">
        <img
          src={book.image}
          alt={book.title}
          className="book-image"
        />

        <div className="book-content">
          <div className="book-title">
            {book.title}
          </div>

          <div className="book-author">
            {book.author}
          </div>

          <div className="book-page">
            Page: {book.currentPage} /
            {book.totalPages}
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${percent}%` }}
            />
          </div>

          <button className="read-btn">
            Open Book
          </button>
        </div>
      </div>
    </Link>
  );
}