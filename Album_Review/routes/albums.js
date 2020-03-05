const express = require('express');
const router = express.Router();
const album_Model = require('../models/album_model');


/* GET home page. */
router.get('/', async function (request, response, next) {
  const data = await album_Model.getAllAlbums();

  response.render('template', { 
    locals: {
      title: 'Album Directory',
      data: data
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

router.get('/:id', async (request, response, next) => {
  const {id} = request.params;
  const data = await album_Model.getAlbumById(id);
  const reviewList = await album_Model.getReviewsByAlbumId(id);

  response.render('template', {
    locals: {
      title: data[0].name,
      data: data,
      reviewList: reviewList
    },
    partials: {
      partial: 'partial-review'
    }
  });
});

router.post('/', async (request, response) => {
  const {album_id, review_title, review_text} =request.body;
  const idAsInt =parseInt(album_id);
  const postData = await album_Model.addReview(idAsInt, review_title, review_text);

  console.log(postData);
  response.sendStatus(200);
});

module.exports = router;
