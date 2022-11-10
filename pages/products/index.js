import Product from '../../components/product/Product'
import Category from '../../components/category/Category'

const Products = ({ products, categories }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 my-10">Products</h2>
      <div className="grid gap-x-2 gap-y-4 grid-cols-8 mb-8">
        {categories.map(cat => (
          <Category {...cat} />
        ))}
      </div>

      <div className="mb-16">
        <a href="/categories">
          <span className="font-bold underline">Show all categories </span>
          <span>(+10)</span>
        </a>
      </div>
      <h3 className="text-2xl font-bold mb-8">Loram ipson</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <div className="flex flex-1 justify-center items-center m-8">
        <button className="rounded border border-slate-800 bg-slate-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-slate-800 focus:outline-none focus:ring active:text-slate-700">
          Load More
        </button>
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
    price: '$278',
    images: [
      '/images/utespelare-gaming-chair-bomstad-grey__0997779_pe822756_s5.avif',
      '/images/utespelare-gaming-chair-bomstad-grey__0985643_pe816715_s5.avif',
    ],
    summary: 'Just a summary ... yes',
  }))

  const categories = Array.from(Array(8).keys()).map(i => ({
    id: i,
    name: 'Category ' + i,
    image:
      '/images/knoxhult-base-cabinet-with-doors-and-drawer-white__0628064_ph136514_s5.avif',
  }))
  return { props: { products, categories } }
}

export default Products
