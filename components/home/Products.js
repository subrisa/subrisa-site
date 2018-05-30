import React from 'react'
import Title from '../base/Title'
import WidthLimiter from '../struct/WidthLimiter'
import { RichText } from 'prismic-reactjs'

const Products = ({ products }) =>
  <WidthLimiter>
    <div className='root' id='products'>
      <h2><Title text='Productos'  color='rgb(132, 120, 148)' /></h2>
      <ul>
        {products.length > 0 ?
          products.map(({ product: { data: { name, image, description } } }) =>
            <li>
              <ProductItem
                name={name}
                image={image}
                description={description}
              />
            </li>
          ):
          <div><p>No products to show</p></div>
        }
      </ul>
    </div>
    <style jsx>{`
      .root {
        margin-bottom: 4rem;
      }
      .root > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0;
        flex-wrap: wrap;
      }
      .root > ul > li {
        width: 30%;
        text-align: center;
      }
    `}</style>
  </WidthLimiter>

const ProductItem = ({ name, image, description }) =>
  <div>
    <h3>{RichText.render(name)}</h3>
    <div><img src={image.thumb.url} /></div>
    <p>{RichText.render(description)}</p>
    <style jsx>{`
      h3 {
        text-transform: uppercase;
        font-weight: 300;
        font-size: 22px;
      }
    `}</style>
  </div>

export default Products
