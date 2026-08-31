'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Melis</Link>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
