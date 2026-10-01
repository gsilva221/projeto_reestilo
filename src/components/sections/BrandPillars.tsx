import { brandPillars } from '../../data/content'

function PillarIcon({ icon }: { icon: (typeof brandPillars)[number]['icon'] }) {
  if (icon === 'hanger') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 9a5 5 0 0 1 5 5c0 2-1.4 3.5-3.6 4.6-1.6.8-2.4 1.9-2.4 3.4" />
        <path d="m7 30 17-9 17 9v3H7zM12 33v7m24-7v7M12 40h24" />
        <path d="M22 26c-2-2-5 .5-2 3l4 3 4-3c3-2.5 0-5-2-3l-2 1.5z" />
      </svg>
    )
  }

  if (icon === 'tag') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 14V8h17l16 16-17 17L8 25z" />
        <circle cx="17" cy="17" r="2" />
        <path d="M24 22c-2-2-5 .5-2 3l4 3 4-3c3-2.5 0-5-2-3l-2 1.5z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M15 24c-4 0-6 4-6 9 0 5 3 8 7 6l8-3 8 3c4 2 7-1 7-6 0-5-2-9-6-9-3 0-5 2-9 2s-6-2-9-2Z" />
      <circle cx="15" cy="17" r="3" />
      <circle cx="22" cy="13" r="3" />
      <circle cx="30" cy="13" r="3" />
      <circle cx="36" cy="17" r="3" />
      <path d="M20 31c-2-2-4 .5-1.5 2.5L24 37l5.5-3.5c2.5-2 0-4.5-2-2.5L24 34z" />
    </svg>
  )
}

export function BrandPillars() {
  return (
    <section className="pillars-section content-section" aria-labelledby="pillars-title">
      <div className="section-heading">
        <p className="section-kicker">Escolhas que fazem sentido</p>
        <h2 id="pillars-title">Vestir bem também é cuidar.</h2>
      </div>
      <div className="pillars-grid">
        {brandPillars.map((pillar) => (
          <article className="pillar" key={pillar.title}>
            <span className="pillar-icon"><PillarIcon icon={pillar.icon} /></span>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}