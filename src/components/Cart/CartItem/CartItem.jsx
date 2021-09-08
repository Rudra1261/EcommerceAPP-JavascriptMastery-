import React from 'react'
import { Typography, Card, Button, CardActions, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'
const CartItem = ({ cartItem, handleUpdateCartQty, handleRemoveCart }) => {
    const classes = useStyles()
    return (

        <>
            <Card>
                <CardMedia image={cartItem.media.source} alt={cartItem.name} className={classes.media} />
                <CardContent className={classes.cardContent}>
                    <Typography variant='h4'>{cartItem.name}</Typography>
                    <Typography variant='h5'>{cartItem.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions className={classes.CardActions}>
                    <div className={classes.button}>
                        <button type='button' size='small' onClick={()=>{
                            handleUpdateCartQty(cartItem.id, (cartItem.quantity)-1)
                            console.log(cartItem.quantity)
                            console.log(cartItem.id)
                        }}>-</button>
                        <Typography>{cartItem.quantity}</Typography>
                        <button type='button' size='small'  onClick={()=>{
                            handleUpdateCartQty(cartItem.id, cartItem.quantity+1)
                            
                        }}>+</button>
                    </div>
                    <Button variant='contained' type='button' color='secondary' onClick={()=>{
                            handleRemoveCart(cartItem.id)
                        }}>Remove</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CartItem
