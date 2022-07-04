import { Button, Typography } from '@mui/material'
import styles from '../styles/Home.module.css'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Home() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  return (
    <div className={styles.container}>
  
      <Stack
      component="form"
      sx={{
        width: '25ch',
        margin:"auto"
        
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
      error
      name="password"
        type="password"
        id="filled-hidden-label-normal"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant='contained'>Sign In</Button>
      <Button variant='contained'>SignUp</Button>
    </Stack>
    
    </div>
  )
}
