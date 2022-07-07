/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React ,{useState}from 'react'
import styles from '../../styles/register.module.css'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function registration() {

    const [first_name,setFirstname]=React.useState('');
    const [last_name,setLname]=useState(null);
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [address,setAddress]=useState();
    const [state,setState]=useState();
    const [country,setCountry]=useState()
    const [password,setPassword]=useState()
    const [cpassword,setCpassword]=useState()
    const [pincode,setPincode]=useState()
    const router=useRouter()

    const handleregister=async()=>{
        let data={first_name,last_name,email,phone,address,state,country,password,pincode}
        console.log(data)
        try{
            const response=await axios.post('/api/user/userregister',data)
            if(response.data.status_code===401 || response.data.status_code===400){
                alert(response.data.msg)
            }
            else{
                alert(response.data.msg)
                router.push('/user')
            }
           
        }
        catch(e){
        console.log(e)
        }

    }
  return (
    <div>
        <Grid container direction='row'>
            <Grid item md={6} className={styles.left}>
                   <h1 >Registration</h1>
            </Grid>
            <Grid item md={6} >
                <Stack className={styles.right} spacing={2} >
                <Typography variant='h3'>Registration</Typography>
                <div> 
                <TextField
                type="text"
                placeholder='Enter first name'
                name="first_name"
                onChange={(e)=>setFirstname(e.target.value)}
                />
                <TextField
                type="text"
                name="last_name"
                placeholder='Enter lastname'
                onChange={(e)=>setLname(e.target.value)}
                />
                </div>
                <div>
                    <TextField
                    type="email"
                    name="email"
                    placeholder='Enter your email'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                    type="number"
                    name="phone"
                    placeholder='Enter your Mobile number'
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    type="text"
                    name="address"
                    placeholder='Enter your address'
                    onChange={(e)=>setAddress(e.target.value)}
                    />
                    <TextField
                    type='text'
                    name="state"
                    placeholder='Enter your state'
                    onChange={(e)=>setState(e.target.value)}
                    />
                    </div>
                    <div>
                    <TextField
                    type="country"
                    name='country'
                    placeholder='country'
                    onChange={(e)=>setCountry(e.target.value)}
                    />
                    <TextField
                    type="password"
                    name="password"
                    placeholder='Enter password'
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                   </div>
                   <div>
                    <TextField
                    type="password"
                    name="cpassword"
                    placeholder='Enter confirm password'
                    onChange={(e)=>setCpassword(e.target.value)}
                    />
                    <TextField
                    type="number"
                    name="pincode"
                    placeholder='Enter pincode'
                    onChange={(e)=>setPincode(e.target.value)}
                    />
                </div>
                <Button variant='contained' onClick={handleregister}>Register</Button>
                
                </Stack>
            </Grid>
        </Grid>
    </div>
  )
}
