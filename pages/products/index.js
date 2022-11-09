import Product from '../../components/product/Product'

const Products = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      <div gap={2} justify="flex-start">
        {products.map(product => (
          <div key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Temp, replace with db call
  const products = Array.from(Array(8).keys()).map(i => ({
    id: i,
    name: 'product ' + i,
    description: 'a bit of decription',
    price: '0.0',
    images: [
      '/images/utespelare-gaming-chair-bomstad-grey__0997779_pe822756_s5.avif',
    ],
    summary: 'just summary ... yes',
  }))
  return { props: { products } }
}

export default Products
