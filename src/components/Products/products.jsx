import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/product'
import useStyles from './styles'
const Products = ({ product, onAddToCart }) => {

    const classes = useStyles()
    return (
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justifyContent="center" spacing={4}>
                    {product.map((element) => (
                        <Grid item key={element.id} xs={12} sm={6} md={4} lg={3}>
                            <Product onAddToCart={onAddToCart} name={element.name} 
                            description={element.description} price={element.price.formatted_with_symbol} 
                            image={element.media.source} 
                            id={element.id}/>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </>
    )
}

export default Products
