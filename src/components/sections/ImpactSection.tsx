export function ImpactSection() {
  return (
    <section className="impact-section" aria-labelledby="impact-title">
      <div className="impact-art" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <path d="M37 61c-10-2-16 7-16 18 0 10 6 16 15 12l24-9 24 9c9 4 15-2 15-12 0-11-6-20-16-18-8 1-13 6-23 6s-15-5-23-6Z" />
          <circle cx="39" cy="39" r="8" />
          <circle cx="57" cy="29" r="8" />
          <circle cx="78" cy="29" r="8" />
          <circle cx="95" cy="39" r="8" />
          <path d="M47 69c-5-5-12 1-5 7l18 13 18-13c7-6 0-12-6-7l-12 8z" />
        </svg>
      </div>
      <div className="impact-copy">
        <p className="section-kicker">Cuidado que vai além do vestir</p>
        <h2 id="impact-title">Uma parte de cada escolha ajuda quem precisa.</h2>
        <p>Parte do lucro do bazar apoia ONGs de proteção animal. Assim, uma peça ganha nova vida e o cuidado também chega a outros lugares.</p>
        <a className="button button-light" href="mailto:oi@reestilo.com.br">Conheça nosso propósito</a>
      </div>
    </section>
  )
}