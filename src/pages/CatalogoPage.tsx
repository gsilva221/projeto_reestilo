import { ProductCard } from '../components/ProductCard'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { products } from '../data/products'

export function CatalogoPage() {
  const availableProducts = products.filter((product) => product.inStock)

  return (
    <>
      <SiteHeader />
      <main className="catalog-page content-section">
        <div className="catalog-heading">
          <div>
            <p className="section-kicker">Garimpo Reestilo</p>
            <h1>Mostrar <em>vestuário.</em></h1>
            <p>Peças únicas, prontas para continuar a história com você.</p>
          </div>
          <a className="text-link" href="/#vitrine">Voltar para a vitrine</a>
        </div>
        <p className="catalog-count">{availableProducts.length} peças no acervo</p>
        <div className="product-grid">
          {availableProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}