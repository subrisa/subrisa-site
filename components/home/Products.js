import React from 'react'
import { withState, compose, withProps } from 'recompose'
import Title from '../base/Title'
import WidthLimiter from '../struct/WidthLimiter'
import { RichText } from 'prismic-reactjs'

const Products = ({ products, detailedProduct, setDetailedProduct }) =>
  <WidthLimiter>
    <div className={`root ${detailedProduct && 'detailed'}`} id='products'>
      <h2><Title text='Nostros Productos'  color='rgb(132, 120, 148)' /></h2>
      <ul>
        {products.length > 0 ?
          products.map(({ data, data: { name, image, description } }) =>
            <li>
              <ProductItem
                name={name}
                image={image}
                description={description}
                onClick={e=>setDetailedProduct(data)}
              />
            </li>
          ):
          <div><p>No products to show</p></div>
        }
      </ul>
      <div className='detail' onClick={e=>setDetailedProduct(null)}>
          {detailedProduct ? <ProductDetail
            {...detailedProduct}
            onClickClose={e=>setDetailedProduct(null)}
          /> : null}
      </div>
    </div>
    <style jsx>{`
      .root {
        margin-bottom: 4rem;
        position: relative;
      }
      .root > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0;
        flex-wrap: wrap;
        margin-bottom: -30px;
        transition: .6s all;
      }
      .root > ul > li {
        text-align: center;
        margin-bottom: 20px;
        font-weight: 300;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
      .detail {
        position: fixed;
        top: 0; left: 20px; right: 20px; bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: .5s opacity .4s;
      }
      .root.detailed .detail {
        opacity: 1;
        pointer-events: all;
      }
      .root.detailed > ul {
        filter: blur(14px);
        opacity: 0.35;
      }
      @media screen and (min-width: 600px) {
        .root > ul > li {
          width: 30%;
        }
        .detail {
          position: absolute;
        }
      }
    `}</style>
  </WidthLimiter>

const ProductItem = ({ onClick, name, image, description }) =>
  <div>
    <a onClick={onClick}>
      <h3>{RichText.render(name)}</h3>
      <div><img src={image.thumb.url} /></div>
      <p>{RichText.render(description)}</p>
    </a>
    <style jsx>{`
      h3 {
        text-transform: uppercase;
        font-weight: 300;
        font-size: 22px;
        margin-bottom: 0;
      }
      p {
        font-size: 14px;
      }
      img {
        transition: .3s transform;
      }
      a:hover img {
        transform: scale(1.05);
      }
    `}</style>
  </div>

  const ProductDetail = ({ onClickClose, name, detail_image, description, technical_data }) =>
    <div className='root'>
      <h3>{name && RichText.render(name)}</h3>
      <div>
        <img src={detail_image && detail_image.url} />
        <div>
          <p>{description && RichText.render(description)}</p>
          <p>{technical_data && RichText.render(technical_data)}</p>
        </div>
      </div>
      <style jsx>{`
        h3 {
          text-transform: uppercase;
          font-weight: 300;
          font-size: 28px;
          margin-bottom: 0;
        }
        p {
          font-size: 14px;
        }
        img {
          margin-right: 20px;
          width: 60%;
        }
        @media screen and (min-width: 600px) {
          .root > div {
            display: flex;
            align-items: flex-start;
          }
        }
        @media screen and (max-width: 600px) {
          .root {
            text-align: center;
          }
        }
      `}</style>
    </div>

export default compose(
  withState('detailedProduct', 'setDetailedProduct', null)
)(Products)
