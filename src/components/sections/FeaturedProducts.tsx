import { Link } from 'react-router-dom'
import { ProductCard } from '../ProductCard'
import { products } from '../../data/products'

export function FeaturedProducts() {
  return (
    <section className="collection-section content-section" id="vitrine" aria-labelledby="collection-title">
      <div className="collection-heading">
        <div>
          <p className="section-kicker">Achados do momento</p>
          <h2 id="collection-title">Peças para usar e reusar.</h2>
        </div>
        <Link className="text-link" to="/catalogo">
          Mostrar vestuário
        </Link>
      </div>
      <div className="product-grid">
        {products.filter((product) => product.inStock).slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}