'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__name">
        LUKE RATHUNDE
      </Link>
      <nav className="header__nav">
        <Link href="/" className="header__link">
          Work
        </Link>
        <Link href="/about" className="header__link">
          About
        </Link>
        <Link href="/contact" className="header__link">
          Contact
        </Link>
      </nav>
    </header>
  )
}