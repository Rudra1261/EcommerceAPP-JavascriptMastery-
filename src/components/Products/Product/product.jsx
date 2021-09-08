import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from "@material-ui/icons"
import useStyles from "./styles"
const Product = ({name, description, price, image, onAddToCart, id}) => {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} title={name} image={image}/>
                <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant='h5' >
                        {price}
                    </Typography>
                    <Typography  dangerouslySetInnerHTML={{__html:description}} variant='body2' color='textSecondary'/>
                       
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label='Add to cart' onClick={()=>{onAddToCart(id, 1)}}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
