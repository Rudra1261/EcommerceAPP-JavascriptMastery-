import React,{useState, useEffect} from 'react'
import { Select, MenuItem, Button, Grid, Typography, InputLabel} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import CustomTextField from './CustomTextField'
import {Commerce} from '../../lib/commerce'
const AdressForm = ({checkoutToken}) => {
    const methods = useForm()
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('')
    const [Subdivisions, setsubdivisions] = useState([])
    const [subdivision, setSubdivision] = useState('')
    const [options, setOptions] = useState([])
    const [option, setOption] = useState('')
    const fetchShippingCountries = async (checkoutTokenId)=>{
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
        setCountries(countries)
    }
    useEffect(()=>{
        fetchShippingCountries(checkoutToken.id)
    },[])
    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={}>
                    <Grid container spacing={3}>
                        <CustomTextField required name='firstname' label='First name'/>
                        <CustomTextField required name='lastname' label='Last name'/>
                        <CustomTextField required name='email' label='Email'/>
                        <CustomTextField required name='adress1' label='Address'/>
                        <CustomTextField required name='city' label='City'/>
                        <CustomTextField required name='zip' label='Zip'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AdressForm
