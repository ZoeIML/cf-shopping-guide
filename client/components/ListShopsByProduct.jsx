import React from 'react'

const shopData = require('../data/shops.js')

const ListShopsByProduct = (props) => {
    const city = props.match.params.city
    const neededProduct = props.match.params.product
    const chosenShop = shopData.shops.find(shop => shop.city === city)

  return (
    <div className="shop-product-wrapper">
        {shopData.shops.map(shop => {
          if (shop.products.find(product => product === neededProduct) === neededProduct) {
                return (
                    <div className="shop-listing" key={shop.id}>
                        <div className="shop-name">
                            {shop.name}
                        </div>
                        <div className="shop-address">
                            {shop.address}, {shop.city}
                        </div>
                        <div className="shop-url">
                            <a href={`${shop.url}`}>{shop.url}</a>
                        </div>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default ListShopsByProduct
