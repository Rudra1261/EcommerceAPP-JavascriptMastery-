import React from 'react'
import {AppBar, IconButton, Badge, Toolbar, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/logo.png'
import {Link, useLocation} from 'react-router-dom'
import useStyles from './styles'
const Navbar = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation()
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' className={classes.title} color='inherit' variant='h6'>
                        <img src={logo} alt='Jai' height='25px' className={classes.image}/>
                    </Typography>
                
                <div className={classes.grow}/>
                <div className={classes.button}>
                    {location.pathname==='/'&&(
                    <IconButton component={Link} to='/cart' aria-label='show Items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>)}
                </div></Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
