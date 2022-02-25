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
  else if (newApplication == "replacement") {
    res.redirect('replacement/next-steps')
  }
  else {
    res.redirect('new-application')
  }
})


// What do you want to do? - new-application-not-found.html
router.post('/newAppNotFound', function (req, res) {
  var newAppNotFound = req.session.data['new-application-not-found']
  if (newAppNotFound == "new") {
    res.redirect('')
  }
  else if (newAppNotFound == "replacement") {
    res.redirect('replacement/not-found/next-steps')
  }
  else {
    res.redirect('new-application-not-found')
  }
})

// What do you want to do? - new-application-muliple-records.html
router.post('/newAppMultRecords', function (req, res) {
  var newAppMultRecords = req.session.data['new-application-multiple-records']
  if (newAppMultRecords == "new") {
    res.redirect('')
  }
  else if (newAppMultRecords == "replacement") {
    res.redirect('replacement/multiple-records/next-steps')
  }
  else {
    res.redirect('new-application-multiple-records')
  }
})


// Has anything changed since you last applied? - coc.html
router.post('/changeCircs', function (req, res) {
  var changeCircs = req.session.data['change-circs']
  if (changeCircs == "new") {
    // res.redirect('apply/where-do-you-live')
    res.redirect('contact-us')
  }
  else if (changeCircs == "replacement") {
    // res.redirect('replacement/applicant-type')
    res.redirect('replacement/main-who-for')
  }
  else {
    res.redirect('coc')
  }
})



module.exports = router