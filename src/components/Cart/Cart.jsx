import React from 'react'
import {Container, Typography} from '@material-ui/core'
import EmptyCart from './EmptyCart'
import  FilledCart from './FilledCart'
import useStyles from './styles'
const Cart = ({cart, handleDeleteCart, handleUpdateCartQty, handleRemoveCart}) => {
    const classes = useStyles()
    if (!cart.line_items) return 'loading...'
    return (
        <Container>
            
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant='h3' gutterBottom>The shopping cart</Typography>
            {!cart.line_items.length?<EmptyCart/>:<FilledCart cart={cart}
            handleUpdateCartQty = {handleUpdateCartQty}
            handleRemoveCart = {handleRemoveCart}
            handleDeleteCart = {handleDeleteCart}
            />}
        </Container>
    )
}

export default Cart
