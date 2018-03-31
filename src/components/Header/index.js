import React from 'react'
import Link from 'gatsby-link'

import logo from '../../images/logoexampletest.png'


const Header = () => (
  <div
    >
   
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'blue',
            background: 'black', 
            fontSize: 100,
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
