import React from 'react'

const shopData = require('../data/shops.js')

const ListShops = (props) => {
  const city = props.match.params.city

  return (
    <div className="shop-list-wrapper">
      {shopData.shops.map(shop => {
        if (shop.city === city) {
          return (
            <div className="shop-list" key={shop.id}>
              {shop.name}
              {shop.address}
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

export default ListShops
