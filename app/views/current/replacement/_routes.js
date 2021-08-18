const express = require('express')
const router = express.Router()

const axios = require('axios');

// Add your routes here - above the module.exports line


// Is the replacement for you? - who-for.html
router.post('/whoFor', function (req, res) {
  var whoFor = req.session.data['who-for']
  if (whoFor == "yes") {
    res.redirect('card-type')
  }
  else if (whoFor == "someone-else") {
    res.redirect('info')
  }
  else if (whoFor == "more") {
    res.redirect('info')
  }
  else {
    res.redirect('who-for')
  }
})


// Which card do you have? - card-type.html
router.post('/replacementType', function (req, res) {
  var replacementType = req.session.data['replacement-type']
  if (replacementType == "UK GHIC") {
    res.redirect('replacement-ghic/full-name')
  }
  else if (replacementType == "UK EHIC") {
    // res.redirect('replacement-ehic/full-name')
    res.redirect('replacement-ghic/full-name')
  }
  else {
    res.redirect('ineligible-1')
  }
})


// Do you live in the UK? - uk-address.html
router.post('/replacement-ghic/ukAddress', function (req, res) {
  var ukAddress = req.session.data['uk-address']
  if (ukAddress == "yes") {
    res.redirect('postcode')
  }
  else if (ukAddress == "no") {
    res.redirect('nino')
  }
  else {
    res.redirect('uk-address')
  }
})


// Do you know your GHIC reference number? - replacement-ghic/know-ohs-number.html
// router.post('/replacement-ghic/knowOhsNumber', function (req, res) {
//   var knowOhsNumber = req.session.data['know-ohs-number']
//   if (knowOhsNumber == "yes") {
//     res.redirect('ohs-number')
//   }
//   else if (knowOhsNumber == "no") {
//     res.redirect('replacement-reason')
//   }
//   else {
//     res.redirect('know-ohs-number')
//   }
// })







// What is the reason for the replacement? - replacement-ghic/replacement-reason.html
router.post('/replacement-ghic/addDependant', function (req, res) {
  var addDependant = req.session.data['add-dependant']
  if (addDependant == "Yes") {
    res.redirect('dep-full-name')
  }
  else if (addDependant == "No") {
    res.redirect('replacement-reason')
  }
  else {
    res.redirect('')
  }
})


// Do they live in the UK? - dep-uk-address.html
router.post('/replacement-ghic/depUkAddress', function (req, res) {
  var depUkAddress = req.session.data['dep-uk-address']
  if (depUkAddress == "yes") {
    res.redirect('dep-postcode')
  }
  else if (depUkAddress == "no") {
    res.redirect('dep-latency')
  }
  else {
    res.redirect('dep-uk-address')
  }
})


// What is the reason for the replacement? - replacement-ghic/replacement-reason.html
router.post('/replacement-ghic/replacementReason', function (req, res) {
  var replacementReason = req.session.data['replacement-reason']
  if (replacementReason == "Lost") {
    res.redirect('cya-individual')
  }
  else if (replacementReason == "Damaged") {
    res.redirect('cya-individual')
  }
  else if (replacementReason == "Stolen") {
    res.redirect('cya-individual')
  }
  else {
    res.redirect('replacement-reason')
  }
})


module.exports = router