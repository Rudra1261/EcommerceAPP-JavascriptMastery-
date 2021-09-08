import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import {Paper, Stepper, Step, Typography, StepLabel, CircularProgress, Divider, Button} from '@material-ui/core'
import AdressForm from '../AdressForm'
import PaymentForm from '../PaymentForm'
import Confirmation from '../Confirmation'
import {commerce} from '../../../lib/commerce'
const Checkout = ({cart}) => {
    const [activeStep, setActiveStep] = useState(0)
    
    const classes = useStyles()
    const steps = ['Shipping address', 'Payment Details']
    const [checkoutToken, setCheckoutToken] = useState(0)
    useEffect(()=>{
        const generateToken = async () => {
            try{
                const token = commerce.checkout.generateToken(cart.id,{type:'cart'})
                setCheckoutToken(token)
            }
            catch(error){
                console.log(error)
            }
        }
        generateToken()
    },[cart])
    return (
        <>
        
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step)=>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {checkoutToken && activeStep === 0 ?<AdressForm checkoutToken={checkoutToken}/>:<PaymentForm/>}
                </Paper>
                {activeStep==steps.length && <Confirmation/>}
            </main>
            
        </>
    )
}

export default Checkout
