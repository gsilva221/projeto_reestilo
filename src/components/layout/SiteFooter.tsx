import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer id="contato" className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="wordmark">
            Reestilo <span>com propósito</span>
          </Link>
          <p>Moda com significado,<br />do seu jeito.</p>
          <p className="footer-purpose">Parte do lucro apoia ONGs de proteção animal.</p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">Explore</span>
            <a href="/#vitrine">Vitrine</a>
            <a href="/#proposito">Nosso propósito</a>
            <a href="/catalogo">
              Mostrar vestuário
            </a>
          </div>
          <div>
            <span className="footer-label">Acompanhe</span>
            <a href="https://www.instagram.com/reestilo.bazar/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="mailto:oi@reestilo.com.br">oi@reestilo.com.br</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Reestilo</span>
        <span>Moda que continua histórias</span>
      </div>
    </footer>
  )
}