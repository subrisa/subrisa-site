import React from 'react'
import LazyLoad from 'react-lazyload'
import { withProps, compose } from 'recompose'

const enhance = compose(
  withProps(({ size, ...p }) => {
    const sizeProps = size ? p[size] : p
    const { url, dimensions: { width, height }} = sizeProps
    return { url, width, height }
  })
)

const Image = ({ url, width, height, ...p }) =>
    <LazyLoad placeholder={<img {...p} width={width} height={height} />}>
      <img {...p} src={url} width={width} height={height} />
    </LazyLoad>

export default Image
