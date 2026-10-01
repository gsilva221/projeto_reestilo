import { Link } from 'react-router-dom'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-nav">
        <Link to="/" className="wordmark" aria-label="Reestilo com propósito, início">
          Reestilo <span>com propósito</span>
        </Link>
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="/#proposito">Propósito</a>
          <a href="/#vitrine">Vitrine</a>
          <a href="/#contato">Contato</a>
        </nav>
        <a
          className="nav-instagram"
          href="https://www.instagram.com/reestilo.bazar/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </header>
  )
}