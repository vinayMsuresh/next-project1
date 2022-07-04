import { Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div className={styles.container}>
      <Typography variant='h2'>Admin Login</Typography>
      <Stack
      component="form"
      sx={{
        width: '25ch',
        
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder='Enter Email id'
       type="email"
        size="small"
      />
      <TextField
      type="password"
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder='password'
       
      />
    </Stack>
    </div>
  )
}
