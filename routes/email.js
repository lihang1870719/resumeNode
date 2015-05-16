var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

var testUser = "1157995231@qq.com";
var myEmail = "1514397419@qq.com";
var password = 'XiaoJia1314520';
var transporter = nodemailer.createTransport({
  service: 'QQ',
  auth: {
    user: testUser,
    pass: password
  }
});

router.post('/', function(req, res, next) {
  var postData = req.body;
  res.send({success:1});
  transporter.sendMail({
    from    : 'contact<' + testUser + '>'
  , to      : myEmail
  , subject : postData.subject
  , html    : postData.message + ' from ' + postData.email
}, function(err, res) {
  console.log(err, res);
});
});

module.exports = router;
