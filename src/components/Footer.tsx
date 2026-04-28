'use client'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copy">
          &copy; {year} Luke Rathunde. All rights reserved.
        </p>
        <div className="footer__links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}