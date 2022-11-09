import React from 'react'
import Product from '../../components/product'

const Products = ({products}) => {

  return (
    <div>
        <h1>Products</h1>
        <div>
            {products.map(product => <Product key={product.id} {...product} />)}
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
        images: [],
        summary: 'just summary ... yes'
    }))
    return {props: {products}}
}


export default Products