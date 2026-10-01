export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">Bazar de moda circular</p>
        <h1 id="hero-title">
          Reestilo <em>com propósito</em>
        </h1>
        <p className="hero-description">
          Peças com história para encontrar um estilo que tem a sua cara e faz o bem circular.
        </p>
        <a className="button button-dark" href="#vitrine">Conheça o bazar</a>
        <p className="hero-signature">segunda mão, primeira escolha</p>
      </div>
      <figure className="hero-visual">
        <img
          src="/images/roupaCimaBaixo.jpeg"
          alt="Conjunto esportivo cinza com top e calça escura"
          fetchPriority="high"
        />
        <figcaption>Peças que continuam histórias</figcaption>
      </figure>
    </section>
  )
}