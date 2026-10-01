import { bazarSteps } from '../../data/content'

export function HowItWorks() {
  return (
    <section className="how-section" aria-labelledby="how-title">
      <div className="how-intro">
        <p className="section-kicker">Do garimpo até você</p>
        <h2 id="how-title">Uma nova história começa com uma escolha.</h2>
      </div>
      <ol className="how-steps">
        {bazarSteps.map((step, index) => (
          <li key={step}>
            <span className="step-number">0{index + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}