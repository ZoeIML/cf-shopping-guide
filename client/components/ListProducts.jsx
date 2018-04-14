import React from 'react'
import {Link} from 'react-router-dom'

import ListShops from './ListShops'

const productData = require('../data/products.js')

const ListProducts = (props) => {
    const city = props.match.params.city

    return (
        <div className="product-list-wrapper">
            {productData.products.map(product => {
                if (product.city === city) {
                    return (
                        <div className="product-list" key={product.id}>
                            <div className="product-listing">
                                <div className="product-name"> 
                                    {product.name} 
                                </div> 
                                <div className="product-type">
                                    {product.type} 
                                </div> 
                                <div className="product-shop-link">
                                    Available
                                    <Link to={`/${city}/${product.name}/shops`}> here</Link> 
                                </div>
                                <br/>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default ListProducts