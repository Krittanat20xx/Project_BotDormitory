var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secret = 'Login-dormitory'

app.use(cors())

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dormitory'
  });

app.post('/register',jsonParser, function (req, res, next) {

  bcrypt.hash(req.body.password_user, saltRounds, function(err, hash) {

    connection.execute(
        'INSERT INTO user (password_user,name_user,lastname_user,email_user,tel_user,roomnumber_user) VALUES (?,?,?,?,?,?)',
        [hash,req.body.name_user,req.body.lastname_user,req.body.email_user,req.body.tel_user,req.body.roomnumber_user],
        function(err, results, fields) {
          if(err) {
            
            res.json({status:'error',message:err})
            return
        }
          res.json({status:'ok'})
        }
      );



});
})

app.post('/login',jsonParser, function (req, res, next) {

  connection.execute(
    'SELECT * FROM user WHERE email_user =?',
    [req.body.email_user],
    function(err, user, fields) {


      if(err) {res.json({status:'error',message:err});return}

      if(user.length == 0){res.json({status:'error',message: "user not found"});return}
        
      bcrypt.compare(req.body.password_user, user[0].password_user, function(err, isLogin) {
          if (isLogin){

            var token = jwt.sign({email_user: user[0].email_user },secret,{ expiresIn: '1h' });
            res.json({status:'ok', message:'Login Success',token})
          }else{

            res.json({status:'error', message:'Login Failed'})
          }
      });
          
        
    }
  );
})

app.post('/authen',jsonParser, function (req, res, next) {

    try{

     const token = req.headers.authorization.split(' ')[1]
     var decoded = jwt.verify(token,secret);
     res.json({status:'ok',decoded})


  } catch(err){

    res.json({status:'error',message:err.message})

  }
})





app.listen(3333,jsonParser, function () {
  console.log('CORS-enabled web server listening on port 3333')
})