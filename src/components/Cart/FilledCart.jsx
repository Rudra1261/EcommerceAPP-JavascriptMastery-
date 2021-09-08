import React from 'react'
import {Grid, Button, Typography} from '@material-ui/core'
import useStyles from './styles'
import {Link} from 'react-router-dom'
import CartItem from './CartItem/CartItem'
const FilledCart = ({cart, handleDeleteCart, handleUpdateCartQty, handleRemoveCart}) => {
    const classes = useStyles() 
    return (
        <>
           <Grid container spacing={3}>
               {cart.line_items.map(element => (
                   <Grid item xs={12} sm={4} key={element.id}>
                    <CartItem cartItem={element}
                    handleUpdateCartQty = {handleUpdateCartQty}
                    handleRemoveCart = {handleRemoveCart}/>
                   </Grid>
               ))}
               </Grid> 
               <div className={classes.cardDetails}>
                   <Typography variant='h4'>
                       Subtotal : {cart.subtotal.formatted_with_symbol}
                   </Typography>
                   <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'
                   onClick={()=>{handleDeleteCart()}}>Empty Cart</Button>
                   <Button component={Link} to='/checkout' className={classes.checkOutButton} size='large' type='button' variant='contained' color='primary'>checkout</Button>

               </div>
        </>
    )
}

export default FilledCart
