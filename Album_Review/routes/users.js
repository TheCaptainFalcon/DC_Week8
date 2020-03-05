const express = require('express');
bcrypt = require('bcryptjs');
const user_Model = require('../models/users'); 
const router = express.Router();


/* GET users listing. */

router.get('/signup', function(request, response, next) {
  

  response.render('template', { 
    locals: {
      title: 'Sign Up',
      
    },
    partials: {
      partial: 'partial-signup'
    }
  });
});

router.get('/login', function(request, response, next) {
  

  response.render('template', { 
    locals: {
      title: 'Login',
      
    },
    partials: {
      partial: 'partial-login'
    }
  });
});

router.post('/login', function(request, response, next) {
  const { email, password } =req.body;
  
  const user = newUserModel(null, null, null, email, password);
  user.login();
  response.sendStatus(200);

  response.sendStatus(200);
});

router.post('/signup', function(request, response, next){
  const { first_name, last_name, password, email } = req.body;
  
  
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = new UserModel(null, first_name, last_name, email, hash);
  user.addUser();
  response.Status(200).redirect('/');
});

module.exports = router;
