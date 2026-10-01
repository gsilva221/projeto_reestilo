import { purposeCopy } from '../../data/content'

export function PurposeSection() {
  return (
    <section className="purpose-section" id="proposito" aria-labelledby="purpose-title">
      <div className="purpose-content">
        <div className="purpose-mark" aria-hidden="true">♡</div>
        <div>
          <p className="section-kicker">O que nos move</p>
          <h2 id="purpose-title">Moda para expressar quem você é.</h2>
          <p className="purpose-copy">{purposeCopy}</p>
        </div>
      </div>
    </section>
  )
}