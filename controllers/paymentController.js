import payUMoney from 'payumoney_nodejs';
// npm i js-sha512
// npm install payumoney_nodejs --save

import PDFDocument from 'pdfkit'
import fs from 'fs'

// Create a document
const doc = new PDFDocument();

// Saving the pdf file in root directory.
doc.pipe(fs.createWriteStream('receipt.pdf'));


import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
 service:'gmail', // true for port 465, false for other ports
  auth: {
    user: "phpenquiry@gmail.com",
    pass: "nvxg gyez juez kwmq ",
  },
});

async function main(to,filepath) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '<phpenquiry@gmail.com>', // sender address
      to: to, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
      attachments:[
        {   // filename and content type is derived from path
            path: filepath
        }
      ]
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

payUMoney.setProdKeys('6PqKSK15', 'sAOVPuJG2X');
payUMoney.isProdMode(true);
function paymentAction(req,res){
    console.log(req.body);

    req.body.txnid = Date.now();
    req.body.surl ='http://localhost:9900/payment/success';
    req.body.furl ='http://localhost:9900/payment/failure'
    console.log(req.body);

    payUMoney.pay(req.body, function(error, response) {
        if (error) {
            console.log(error);
            res.send({url: null , status:false})

            
          // Some error console.log(response);
        } else {
          
            console.log("response");
            console.log(response);
            res.send({url: response , status:true})
        }
    });
    // res.send({message:'payment action called'})
    
}

function paymentSuccess(req,res){
    console.log(req.body);

    doc
    .fontSize(27)
    .text(req.body.firstname, 100, 100);

    doc
    .fontSize(27)
    .text(req.body.phone, 200, 200);

    doc.end();

    main(req.body.email , './receipt.pdf')
    .then(()=>{})
    .catch(err=>{
        console.log(err);
        
    });
    res.redirect("http://localhost:3000/receipt");
}
function paymentFailure(req,res){
    console.log(req.body);
    res.redirect("http://localhost:3000/checkout-page");
}

export  {
    paymentSuccess,
    paymentFailure,
    paymentAction
};