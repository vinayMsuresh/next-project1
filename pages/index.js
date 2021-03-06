import { Button, Typography,Grid } from '@mui/material'
import styles from '../styles/Home.module.css'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Home() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const router=useRouter()

  const handleSignIn = async() => {
    const payload = {email, password};
    try{
    const response = await axios.post('/api/admin/signin', payload);
    console.log(response.data)
    } catch(e) {
      console.log(e);
      alert(e.response.data)
    }
  }
  const handleSignUp = async() => {
    const payload = {email, password};
    try{
    const response = await axios.post('/api/admin/register', payload);
    console.log(response.data)
    } catch(e) {
      console.log(e);
    }
  }
  const handleregister=()=>{
    router.push('/user/registration')
  }
  return (
    <Grid container direction='row' >
      <Grid item md={6} sx={{mt:5,p:5}}>
        <Image src='/login.gif' alt="imad" width="500px" height='400px' />

      </Grid>
      <Grid item md={6} >
    <div className={styles.container}>
  
      <Stack
      component="form"
      sx={{
        width: '25ch',
        margin:"auto",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
          <Typography variant='h4' >Admin Login</Typography>
      <TextField
        id="filled-hidden-label-small"
        placeholder='Enter Email id'
       type="email"
        size="small"
        value={email}
        name='email'
        onChange={(e) => setEmail(e.target.value)}
        error={email === ""}
        helperText={email === "" ? 'Empty field!' : ' '}
      />
      <TextField
      name="password"
        type="password"
        
        id="filled-hidden-label-normal"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant='contained' onClick={handleSignIn}>Sign In</Button>
      <Button variant='contained' onClick={handleSignUp}>SignUp</Button>
      <Button variant='contained' onClick={handleregister}>User Register</Button>
    </Stack>
    
    </div>
    </Grid>
    </Grid>
  )
}
