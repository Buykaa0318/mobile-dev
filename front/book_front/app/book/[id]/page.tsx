// app/book/[id]/page.tsx
'use client';
import Link from 'next/link';

import { books } from '@/data/books';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function BookDetails() {

  const params = useParams();

  const book = books.find(
    (b) => b.id === Number(params.id)
  );

  const [showBookmark, setShowBookmark] =
    useState(false);

  const [page, setPage] =
    useState('');

  if (!book) {
    return <div>Book not found</div>;
  }

  const percent =
    (Number(page || 0) /
      book.totalPages) *
    100;

  const saveBookmark = () => {

    alert(
      `${page}-р хуудас хадгалагдлаа`
    );

    setShowBookmark(false);
  };

  return (
    <div className="details-container">

      <div className="details-card">
        

        <img
          src={book.image}
          alt={book.title}
          className="details-image"
        />

        <div className="details-content">
            <Link href="/" className="back-btn">
            ← Нүүр хуудас
            </Link>
          <h1>{book.title}</h1>

          <h3>{book.author}</h3>

          <div className="details-category">
            {book.category}
          </div>

          <p className="details-description">
            {book.description}
          </p>

          <div className="details-pages">
            Current Page:
            {' '}
            {page || 0}
          </div>

          <div className="details-pages">
            Total Pages:
            {' '}
            {book.totalPages}
          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${percent}%`,
              }}
            />

          </div>

          <div className="bookmark-section">

            {!showBookmark ? (

              <button
                onClick={() =>
                  setShowBookmark(true)
                }
                className="bookmark-btn"
              >
                Хуудас тэмдэглэх
              </button>

            ) : (

              <div className="bookmark-box">

                <input
                  type="number"

                  placeholder="Хуудас оруулах"

                  value={page}

                  onChange={(e) =>
                    setPage(e.target.value)
                  }

                  className="bookmark-input"
                />

                <button
                  onClick={saveBookmark}
                  className="bookmark-save-btn"
                >
                  Хадгалах
                </button>

              </div>

            )}

          </div>

        </div>
      </div>
    </div>
  );
}