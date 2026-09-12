import { Link } from 'react-router-dom'
import { ProductCard } from './components/ProductCard'
import { products } from './data/products'
import './App.css'

function App() {
  return (
    <main>
      <nav className="site-nav" aria-label="Navegacao principal">
        <Link to="/" className="wordmark">reestilo <span>com propósito</span></Link>
        <div className="nav-links"><a href="#vitrine">Vitrine</a><a href="#proposito">Nosso propósito</a><a href="#contato">Contato</a></div>
        <a className="nav-instagram" href="https://www.instagram.com/matue/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </nav>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">Bazar de moda circular</p><h1 id="hero-title">Vista o que<br /><em>faz sentido.</em></h1><p className="hero-description">Peças com história para quem entende que estilo também é uma forma de cuidar do mundo.</p><a className="button button-dark" href="#vitrine">Conheça o bazar <span aria-hidden="true">↘</span></a></div>
        <div className="hero-art" aria-label="Mulher usando uma peça de segunda mao" role="img"><div className="hero-sun"></div><div className="hero-label">peças que<br /><strong>continuam</strong><br />histórias</div><span className="hero-stamp">desde<br /><strong>2024</strong></span></div>
        <div className="hero-note">segunda mão<br /><span>primeira escolha</span></div>
      </section>

      <section className="purpose-section" id="proposito" aria-labelledby="purpose-title"><div className="section-kicker">01 / nosso propósito</div><div className="purpose-content"><div className="purpose-icon" aria-hidden="true">♡</div><div><h2 id="purpose-title">Moda para expressar<br /><em>quem você é.</em></h2><p>O Reestilo nasceu para aproximar você de roupas que têm a sua cara e um jeito mais gentil de circular. Cada escolha prolonga uma história, reduz excessos e ajuda a transformar cuidado em ação.</p><a className="text-link" href="#impacto">Entenda o impacto <span aria-hidden="true">↗</span></a></div></div></section>

      <section className="pillars-section" aria-labelledby="pillars-title"><div className="section-heading"><div className="section-kicker">02 / no que acreditamos</div><h2 id="pillars-title">Pequenas escolhas,<br /><em>grandes sentidos.</em></h2></div><div className="pillars-grid"><article className="pillar"><span className="pillar-mark">✦</span><h3>Moda consciente</h3><p>Garimpo acessível e cheio de personalidade, longe da pressa do descarte.</p></article><article className="pillar pillar-featured"><span className="pillar-mark">⌁</span><h3>Estilo que representa</h3><p>Peças para experimentar, se reconhecer e criar combinações que só poderiam ser suas.</p></article><article className="pillar"><span className="pillar-mark">♡</span><h3>Cuidado que circula</h3><p>Parte do lucro apoia ONGs que protegem animais e fazem o bem continuar.</p></article></div></section>

      <section className="how-section" aria-labelledby="how-title"><div><div className="section-kicker">03 / como funciona</div><h2 id="how-title">Garimpe com calma.<br /><em>Escolha com intenção.</em></h2></div><div className="how-steps"><p><strong>01</strong> A gente encontra peças especiais, em ótimo estado e prontas para uma nova história.</p><p><strong>02</strong> Você conhece tudo pela vitrine online ou no nosso mostruário presencial.</p><p><strong>03</strong> O seu estilo ganha uma peça nova. E um animal ganha mais cuidado.</p></div></section>

      <section className="collection-section" id="vitrine" aria-labelledby="collection-title"><div className="collection-heading"><div><div className="section-kicker">04 / achados do momento</div><h2 id="collection-title">Para usar<br /><em>e reusar.</em></h2></div><a className="text-link" href="#vitrine">Ver o mostruário completo <span aria-hidden="true">↗</span></a></div><div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>

      <section className="impact-section" id="impacto" aria-labelledby="impact-title"><div className="impact-mark" aria-hidden="true">♥</div><div><div className="section-kicker">05 / impacto que importa</div><h2 id="impact-title">Seu estilo pode<br /><em>mudar histórias.</em></h2><p>Parte do lucro do bazar é destinada a ONGs de proteção animal. Porque vestir o que faz sentido também é deixar o mundo um pouco mais cuidado.</p><a className="button button-light" href="mailto:oi@reestilo.com.br">Fale com a gente <span aria-hidden="true">↗</span></a></div></section>

      <footer id="contato" className="site-footer"><div className="footer-brand"><div className="wordmark">reestilo <span>com propósito</span></div><p>Moda com significado,<br />do seu jeito.</p></div><div className="footer-links"><div><span className="footer-label">encontre</span><a href="#vitrine">Vitrine</a><a href="#proposito">Nosso propósito</a><a href="#impacto">Impacto</a></div><div><span className="footer-label">acompanhe</span><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:oi@reestilo.com.br">oi@reestilo.com.br</a></div></div><div className="footer-bottom"><span>© 2024 Reestilo</span><span>feito para circular</span></div></footer>
    </main>
  )
}

export default App
