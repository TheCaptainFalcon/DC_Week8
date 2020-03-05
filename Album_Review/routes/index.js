const express = require('express');
const router = express.Router();
const album_Model = require('../models/album_model');


/* GET home page. */
router.get('/', async function (request, response, next) {
  const data = await album_Model.getAllAlbums();

  response.render('template', { 
    locals: {
      title: 'This is the Home Page',
      data: data 
      
    },
    partials: {
      partial: 'partial-home'
    }
  });
});

module.exports = router;
