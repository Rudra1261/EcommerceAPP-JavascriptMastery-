import React from 'react'
import {Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './styles'
const EmptyCart = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant='subtitle1'>
                No nothing in the cart
                <Link to='/' className={classes.link} > Add something!</Link>
            </Typography>
        </>
    )
}

export default EmptyCart
