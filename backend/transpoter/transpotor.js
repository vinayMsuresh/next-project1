const nodemailer=require('nodemailer');
const { google }=require('googleapis')
const config=require('../config')
const OAuth2=google.auth.OAuth2

const OAuth2_client=new OAuth2(config.clientId,config.clientScret)
OAuth2_client.setCredentials({refresh_token:config.refreshToken})

const accessToken=OAuth2_client.getAccessToken()
const transporter=nodemailer.createTransport({
  service:'gmail',
  auth:{
      type:'OAuth2',
      user:config.user,
      clientId:config.clientId,
      clientSecret:config.clientScret,
      refreshToken:config.refreshToken,
      accessToken:accessToken
  }
})

  module.exports = transporter;