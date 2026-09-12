export type Product = {
  id: string
  name: string
  price: number
  imageUrl: string
  category: string
  description: string
  inStock: boolean
}

export const products: Product[] = [
  {
    id: '01',
    name: 'Camisa Aurora',
    price: 89,
    imageUrl: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=85',
    category: 'Camisas',
    description: 'Algodao leve, gola classica e uma estampa que ilumina o dia.',
    inStock: true,
  },
  {
    id: '02',
    name: 'Vestido Jardim',
    price: 149,
    imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=85',
    category: 'Vestidos',
    description: 'Silhueta fluida para acompanhar seus movimentos com leveza.',
    inStock: true,
  },
  {
    id: '03',
    name: 'Saia Terra',
    price: 119,
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=900&q=85',
    category: 'Saias',
    description: 'Textura natural e corte midi para combinar do seu jeito.',
    inStock: true,
  },
]
