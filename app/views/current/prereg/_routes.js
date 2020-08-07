const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Do you need an EHIC before 1 January 2021?
// router.post('/ehicBeforeJan', function (req, res) {
//   var ehicBeforeJan = req.session.data['ehic-before-jan']
//   if (ehicBeforeJan == "Yes"){
//     res.redirect('use-current-ehic')
//   }
//   else {
//     res.redirect('where-do-you-live')
//   }
// })

// What is your nationality?
router.post('/nationality', function (req, res) {
  var nationality = req.session.data['nationality']
  if (nationality == "British"){
    res.redirect('where-do-you-live')
  }
  else if (nationality == "EU, EEA or Swiss"){
    // res.redirect('born-in-uk-1')
    res.redirect('')
  }
  else {
    res.redirect('ineligible')
  }
})

// Where will you be living?
router.post('/whereDoYouLive', function (req, res) {
  var whereDoYouLive = req.session.data['where-do-you-live']
  if (whereDoYouLive == "UK"){
    res.redirect('')
  }
  else if (whereDoYouLive == "EU"){
    res.redirect('exp-ben')
  }
  else {
    res.redirect('ineligible')
  }
})

// Receiving exportable benefits
router.post('/expBen', function (req, res) {
  var expBen = req.session.data['expBen']
  if (expBen == "Yes"){
    res.redirect('application-s1/country')
  }
  else {
    res.redirect('eu-studying')
  }
})



// Are you a UK national? (living in the UK)
router.post('/bornInUk', function (req, res) {
  var bornInUk = req.session.data['born-in-uk']
  if (bornInUk == "Yes"){
    // res.redirect('student')
    res.redirect('eu-working')
  }
  else {
    res.redirect('cannot-apply')
  }
})

// Are you working in the EU, EEA or Switzerland?
router.post('/euWorking', function (req, res) {
  var student = req.session.data['eu-working']
  if (student == "Yes"){
    res.redirect('application-pw/evidence-pw')
  }
  else {
    res.redirect('cannot-apply')
  }
})

// Posted worker form type
router.post('/application-pw/pwFormType', function (req, res) {
  var pwFormType = req.session.data['form-type']
  if (pwFormType == "A1"){
    res.redirect('a1-country')
  }
  else {
    res.redirect('s1-full-name')
  }
})

// Do you intend to study in the EU, EEA or Switzerland?
router.post('/student', function (req, res) {
  var student = req.session.data['student']
  if (student == "Yes"){
    res.redirect('application-student/evidence-student')
  }
  else {
    res.redirect('cannot-apply')
  }
})

// Do you intend to study in the EU, EEA or Switzerland? - EU Settled
router.post('/eussStudent', function (req, res) {
  var student = req.session.data['student']
  if (student == "Yes"){
    // res.redirect('application-student-ss/evidence-student')
    res.redirect('cannot-apply')
  }
  else {
    res.redirect('application-settled/full-name')
  }
})

// Were you born in the UK? (if RETIRED and living in the EU)
router.post('/euBornInUk', function (req, res) {
  var euBornInUk = req.session.data['eu-born-in-uk']
  if (euBornInUk == "Yes"){
    res.redirect('application-s1/full-name')
  }
  else {
    res.redirect('cannot-apply')
  }
})

// Do you have UK settled status?
router.post('/ukSettled', function (req, res) {
  var ukSettled = req.session.data['uk-settled']
  if (ukSettled == "Yes"){
    res.redirect('student-ss')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you have UK settled status? (if RETIRED and living in the EU)
router.post('/euUkSettled', function (req, res) {
  var euUkSettled = req.session.data['eu-uk-settled']
  if (euUkSettled == "Yes"){
    res.redirect('application-s1-ss/full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Are you retired and living in the EU?
router.post('/euRetired', function (req, res) {
  var euRetired = req.session.data['eu-retired']
  if (euRetired == "Yes"){
    res.redirect('born-in-uk-s1')
  }
  else {
    res.redirect('cannot-apply')
  }
})

// Will you be studying in the EU, EEA or Switzerland before 1 January 2021?
router.post('/euStudying', function (req, res) {
  var euStudent = req.session.data['eu-studying']
  if (euStudent == "Yes"){
    res.redirect('application-student/evidence-student')
  }
  else {
    res.redirect('eu-working')
  }
})


module.exports = router