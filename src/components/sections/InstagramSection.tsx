export function InstagramSection() {
  return (
    <section className="instagram-section content-section" aria-labelledby="instagram-title">
      <img src="/images/ropaCima.jpeg" alt="Peça garimpada no bazar Reestilo" loading="lazy" />
      <div>
        <p className="section-kicker">Acompanhe o garimpo</p>
        <h2 id="instagram-title">Novas histórias aparecem por lá.</h2>
        <p>Veja os achados, novidades e ações do bazar no Instagram.</p>
        <a className="text-link" href="https://www.instagram.com/reestilo.bazar/" target="_blank" rel="noreferrer">
          @reestilo.bazar
        </a>
      </div>
    </section>
  )
}