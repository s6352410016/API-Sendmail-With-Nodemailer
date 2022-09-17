const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.post('/sendmail' , (req , res) => {
    const transpoter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'bellsau5087@hotmail.com',
            pass: 'Your Password'
        }
    });

    const mailOptions = {
        from: 'bellsau5087@hotmail.com',
        to: 's6352410016@sau.ac.th',
        subject: 'Test Send By Bunlung',
        html: `<h1>Hello DTI SAU</h1>
               <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logosau-02.png/180px-Logosau-02.png'></img>`
    }

    transpoter.sendMail(mailOptions , (err , sendResult) => {
        if(err){
            console.log(err);
        }else{
            res.status(200).json({msg: sendResult});
        }
    });
});

app.listen(5000 , () => {
    console.log('Start Server...');
})