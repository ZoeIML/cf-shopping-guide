import React from 'react'

import {Link} from 'react-router-dom'

const productData = require('../data/products.js')

const ListProductsByType = () => {
    return (
        <div className="product-type-list-wrapper">
            {productdata.products.map(product => {
                return (
                    <div className="product-type-list">
                        <div className="product-type-listing">
                            <h2>{product.type}</h2>
                            <Link to="">Auckland</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListProductsByType