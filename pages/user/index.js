import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../styles/login.module.css'

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <Stack spacing={5}>
        <Grid container direction='row'>
            <Grid item md={6} className={styles.heading}>
              <Typography variant='h2'>Login</Typography>
            </Grid>
            <Grid item md={6} className={styles.body}>
                <Typography variant='h3'>Login</Typography>
                <Stack spacing={3} className={styles.form}>
                  <TextField
                    type="text"
                    className={styles.fields}
                    placeholder='Enter Email'
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                  />
                  <TextField
                    type="password"
                    name="password"
                    className={styles.fields}
                    placeholder='Enter Password'
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Button variant='contained' color='success' className={styles.btn}>Login</Button>
                </Stack>
            </Grid>
        </Grid>
    </Stack>
  )
}
