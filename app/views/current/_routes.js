const express = require('express')
const router = express.Router()

const axios = require('axios');

// Add your routes here - above the module.exports line


// What do you want to do? - new-application.html
router.post('/newApplication', function (req, res) {
  var newApplication = req.session.data['new-application']
  if (newApplication == "new") {
    res.redirect('apply/where-do-you-live')
  }
  else if (newApplication == "renew") {
    // res.redirect('renew/card-type')
    res.redirect('apply/where-do-you-live')
  }
  else if (newApplication == "replacement") {
    res.redirect('coc')
    // res.redirect('replacement/applicant-type')
  }
  else {
    res.redirect('new-application')
  }
})

// Change of circumstance - coc.html
router.post('/changeCircs', function (req, res) {
  var changeCircs = req.session.data['change-circs']
  if (changeCircs == "new") {
    res.redirect('apply/where-do-you-live')
  }
  else if (changeCircs == "replacement") {
    res.redirect('replacement/applicant-type')
  }
  else {
    res.redirect('coc')
  }
})



module.exports = router