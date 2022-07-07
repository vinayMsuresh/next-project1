const transporter=require('./transpotor')
const config=require('../config')
const handlebars=require('handlebars')
const fs=require('fs');
const path=require('path')

function send_mail(body){
  const filePath = path.join(__dirname,'./adminmail.html');
  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const template = handlebars.compile(source);
  const replacements = {
    firt_name:body.first_name,
    last_name:body.last_name,
    email:body.email,
    address:body.address,
    phone:body.phone
  };
  const htmlToSend = template(replacements);
const mail_options={
  from:`The mail testing <${config.user}>`,
  to:body.email,
  subject:"Atesting mail",
  html:htmlToSend
}

transporter.sendMail(mail_options,function(error,result){
  if(error){
      console.log('Error',error)
  }else{
      console.log("Success",result)
  }
  transporter.close()
})
}
module.exports=send_mail;