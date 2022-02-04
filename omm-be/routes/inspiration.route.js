let express = require('express'),
  fetch = require('node-fetch'),
  router = express.Router()
  

router.route('/get-inspiration').get(async (req, res) => {
  await fetch('http://inspirobot.me/api?generate=true')
        .then(response => response.text())
        .then(data => res.send(data));
})

module.exports = router
