const express = require('express');
const router = express.Router();
var TeleSignSDK = require('telesignsdk');


router.post('/sendSMS',async (req,res,next)=>{

    const receiverPhoneNo = req.body.phoneNo;
  
  try{
    
    var TeleSignSDK = require('telesignsdk');
  
    const customerId = "BA490AC9-577B-4672-BEC5-82738279459B";
    const apiKey = "SBnLkkwV2qXumscFRtQWcQmCGgmGMK1jy+57YYhNSDcV9+tnHybgAUyC1VYhAx84XQdw8Aye0e+7OmopDsy6oA==";
    const rest_endpoint = "https://rest-api.telesign.com";
    const timeout = 10*1000; // 10 secs
  
    const client = new TeleSignSDK( customerId,
        apiKey,
        rest_endpoint,
        timeout // optional
        // userAgent
    );
  
    
    const message = "SENSOR WARNING MESSAGE ------ TAKE A ACTION SOON ";
    const messageType = "ARN";
  
    console.log("## MessagingClient.message ##");
  
    function messageCallback(error, responseBody) {
        if (error === null) {
            console.log(`Messaging response for messaging phone number: ${receiverPhoneNo}` +
                ` => code: ${responseBody['status']['code']}` +
                `, description: ${responseBody['status']['description']}`);
  
                res.json('send sms successfully');
        } else {
            console.error("Unable to send message. " + error);
        }
    }
    client.sms.message(messageCallback, receiverPhoneNo, message, messageType);
    
  } 
  catch(e){
  console.log(e);
  }
  
  });




module.exports = router;