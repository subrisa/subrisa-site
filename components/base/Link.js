import React from 'react'
import Link from 'next/link'

const Link = ({ children, style, ...props }) => <Link {...props}><a style={style}>{children}</a></Link>

export default Link
