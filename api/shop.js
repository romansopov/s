'use strict'
const _ = require('lodash')

const getProducts = (req, res) => {
  res.json([
      {id: 1, name: 'product 1', price: 100},
      {id: 2, name: 'product 2', price: 150},
      {id: 3, name: 'product 3', price: 50.99},
      {id: 4, name: 'product 4', price: 149.90},
      {id: 5, name: 'product 5', price: 39}
    ])
}

const addProductToCart = (req, res) => {
  console.log(req.session)
  if (_.has(req.session, 'shop.count')) {
    req.session.shop.count++
  } else {
    _.set(req.session, 'shop.count', 1)
  }
  res.json({
    success: true
  })
}

module.exports = (app) => {
  app.get('/api/products/', getProducts)
  app.post('/api/shop/addProductToCart/', addProductToCart)
}
