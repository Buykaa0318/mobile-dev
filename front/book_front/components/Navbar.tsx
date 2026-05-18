// components/Navbar.tsx
'use client';

import Link from 'next/link';

interface Props {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function Navbar({
  activeMenu,
  setActiveMenu,
}: Props) {
  return (
    <nav className="navbar">
      <div className="container nav-wrapper">

        <div className="logo">
          BOOK APP
        </div>

        <div className="nav-menu">

          <button
            onClick={() => setActiveMenu('all')}
            className={
              activeMenu === 'all'
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <span>Бүх ном</span>
          </button>

          <button
            onClick={() => setActiveMenu('reading')}
            className={
              activeMenu === 'reading'
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <span>Уншиж буй</span>
          </button>

          <button
            onClick={() => setActiveMenu('completed')}
            className={
              activeMenu === 'completed'
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <span>Уншсан</span>
          </button>

        </div>
      </div>
    </nav>
  );
}