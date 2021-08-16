const express = require('express')
const router = express.Router()

const axios = require('axios');

// Add your routes here - above the module.exports line


// Are you applying for a new card or a reissue? - new-application.html
// Are you applying for a new card or a replacement? - new-application.html
router.post('/newApplication', function (req, res) {
  var newApplication = req.session.data['new-application']
  if (newApplication == "new") {
    res.redirect('apply/where-do-you-live')
  }
  else if (newApplication == "replacement") {
    // res.redirect('living-eu/exp-ben')
    res.redirect('../replacement/card-type')
  }
  else if (newApplication == "renew") {
    res.redirect('../renew/card-type')
  }
  else {
    res.redirect('new-application')
  }
})




module.exports = router