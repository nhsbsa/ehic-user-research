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
    // res.redirect('living-eu/exp-ben')
    res.redirect('replacement/applicant-type')
  }
  else {
    res.redirect('new-application')
  }
})




module.exports = router