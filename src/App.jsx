import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart, Checkout } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { commerce } from './lib/commerce'
const App = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState({})
    const fetchProducts = async () => {
        const { data } = await commerce.products.list()
        setProduct(data)
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }
    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])
    // console.log(product)
    // console.log(cart)
    const handleAddToCart = async (productID, quantity) => {
        const item = await commerce.cart.add(productID, quantity)
        setCart(item.cart)
    }
    const handleUpdateCartQty = async (productID, quantity) => {
        const {cart} = await commerce.cart.update(productID, {quantity:quantity})
        setCart(cart)
    }
    const handleRemoveCart = async (productID) => {
        const {cart} = await commerce.cart.remove(productID)
        setCart(cart)
    }
    const handleDeleteCart = async () => {
        const {cart} = await commerce.cart.delete()
        setCart(cart)
    }

    return (
        <Router>
            <>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path='/'><Products product={product} onAddToCart={handleAddToCart} /></Route>
                    <Route exact path='/cart'><Cart cart={cart}
                    handleUpdateCartQty = {handleUpdateCartQty}
                    handleRemoveCart = {handleRemoveCart}
                    handleDeleteCart = {handleDeleteCart}
                     /></Route>
                     <Route exact path="/checkout">
                         <Checkout cart={cart}/>
                     </Route>
                </Switch>
            </>
        </Router>
    )
}

export default App
