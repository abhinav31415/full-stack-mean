let express = require('express');
let router = express.Router();

router
  .route('/json')
  .get((req, res) => {
    console.log('Get the json');
    res
      .status(200)
      .json({
        'jsonData': true
      });
  })
  .post((req, res) => {
    console.log('Post the json');
    res
      .status(200)
      .json({
        'jsonData': 'Post received'
      });
  });

module.exports = router;