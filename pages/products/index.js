import Product from '../../components/product/Product'

const Products = ({ products }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900">Products</h2>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
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
    name: 'Product ' + i,
    description: 'A bit of decription',
    price: '$120.6',
    images: [
      '/images/utespelare-gaming-chair-bomstad-grey__0997779_pe822756_s5.avif',
    ],
    summary: 'Just a summary ... yes',
  }))
  return { props: { products } }
}

export default Products
