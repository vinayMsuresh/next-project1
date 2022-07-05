import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import styles from '../../styles/register.module.css'

export default function registration() {
  return (
    <div>
        <Grid container direction='row'>
            <Grid item md={6} className={styles.left}>
                   <h1>Registration</h1>
            </Grid>
            <Grid item md={6} className={styles.right}>
                <Typography variant='h3'>Registration</Typography>
                <div>
                <TextField
                type="text"
                placeholder='Enter first name'
                name="firstname"
                />
                <TextField
                type="text"
                name="lastname"
                placeholder='Enter lastname'
                />
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
