import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          className="product-image"
          src={product.imageUrl}
          alt={`${product.name}, ${product.category.toLowerCase()}`}
          loading="lazy"
        />
        <span className="product-tag">{product.category}</span>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <strong>R$ {product.price.toFixed(2).replace('.', ',')}</strong>
      </div>
    </article>
  )
}
