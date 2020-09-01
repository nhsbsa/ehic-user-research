const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// What is your nationality? - nationality.html
router.post('/nationality', function (req, res) {
  var nationality = req.session.data['nationality']
  if (nationality == "British"){
    res.redirect('where-do-you-live')
  }
  else if (nationality == "EU, EEA or Swiss"){
    // res.redirect('born-in-uk-1')
    res.redirect('where-do-you-live-eu-citizen')
  }
  else {
    res.redirect('ineligible')
  }
})

// Where will you be living? - where-do-you-live.html
router.post('/whereDoYouLive', function (req, res) {
  var whereDoYouLive = req.session.data['where-do-you-live']
  if (whereDoYouLive == "UK"){
    res.redirect('uk-studying')
  }
  else if (whereDoYouLive == "EU"){
    res.redirect('exp-ben')
  }
  else {
    res.redirect('ineligible')
  }
})

// Where will you be living? - where-do-you-live-eu-citizen.html
router.post('/willYouBeLiving', function (req, res) {
  var willYouBeLiving = req.session.data['where-will-you-live']
  if (willYouBeLiving == "UK"){
    // res.redirect('application-settled/full-name')
    res.redirect('settled-status')
  }
  else if (willYouBeLiving == "EU"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('ineligible')
  }
})

// Are you a UK national? (living in the UK)
router.post('/bornInUk', function (req, res) {
  var bornInUk = req.session.data['born-in-uk']
  if (bornInUk == "Yes"){
    res.redirect('student')
    res.redirect('eu-working')
  }
  else {
    res.redirect('cannot-apply')
  }
})

// Receiving exportable benefits - exp-ben.html
router.post('/expBen', function (req, res) {
  var expBen = req.session.data['expBen']
  if (expBen == "Yes"){
    // res.redirect('application-s1/country')
    res.redirect('application-s1/full-name')
  }
  else {
    res.redirect('eu-studying')
  }
})

// Are you studying, or do you intend to study in the EU, EEA or
// Switzerland before 1 January 2021? - uk-studying.html
router.post('/ukStudying', function (req, res) {
  var ukStudying = req.session.data['uk-studying']
  if (ukStudying == "Yes"){
    res.redirect('application-student/evidence-student')
  }
  else {
    res.redirect('application/full-name')
  }
})

// Are you working in the EU, EEA or Switzerland? - eu-working.html
router.post('/euWorking', function (req, res) {
  var student = req.session.data['eu-working']
  if (student == "Yes"){
    res.redirect('application-pw/evidence-pw')
  }
  else {
    res.redirect('ineligible')
  }
})

// Posted worker form type - form-type.html
router.post('/application-pw/pwFormType', function (req, res) {
  var pwFormType = req.session.data['form-type']
  if (pwFormType == "A1"){
    res.redirect('a1-country')
  }
  else if (pwFormType == "S1"){
    res.redirect('s1-country')
  }
  else {
    res.redirect('../ineligible')
  }
})

// Will you be studying in the EU, EEA or Switzerland
// before 1 January 2021? - eu-studying.html
router.post('/euStudying', function (req, res) {
  var euStudent = req.session.data['eu-studying']
  if (euStudent == "Yes"){
    res.redirect('application-student-in-eu/evidence-student')
  }
  else {
    res.redirect('eu-working')
  }
})

// Do you have UK settled status?
router.post('/ukSettled', function (req, res) {
  var ukSettled = req.session.data['uk-settled']
  if (ukSettled == "Yes"){
    res.redirect('application-settled/full-name')
  }
  else {
    res.redirect('application-settled/full-name')
  }
})


// Do you want to add any children to your application? - add-child-1.html
router.post('/application-s1/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/child-address')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Does your CHILD live with you? (if RETIRED and living in EU)
router.post('/application-s1/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('address-eu')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// (after adding partner and one child) (if eligible-with-settlement)
router.post('/application-s1/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/child-address')
  }
  else {
    res.redirect('cya-children')
  }
})

// Do you want to add your PARTNER to your application? (S1 only)
// router.post('/application-s1/addPartner', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('partner/full-name')
//   }
//   else {
//     res.redirect('cya-individual')
//   }
// })

// Does your PARTNER live with you? (S1 only)
// router.post('/application-s1/partner/partnerAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('email-address')
//   }
//   else {
//     res.redirect('address-eu')
//   }
// })


// Do you intend to study in the EU, EEA or Switzerland?
// router.post('/student', function (req, res) {
//   var student = req.session.data['student']
//   if (student == "Yes"){
//     res.redirect('application-student/evidence-student')
//   }
//   else {
//     res.redirect('cannot-apply')
//   }
// })

// Do you intend to study in the EU, EEA or Switzerland? - EU Settled
// router.post('/eussStudent', function (req, res) {
//   var student = req.session.data['student']
//   if (student == "Yes"){
    // res.redirect('application-student-ss/evidence-student')
//     res.redirect('cannot-apply')
//   }
//   else {
//     res.redirect('application-settled/full-name')
//   }
// })

// Were you born in the UK? (if RETIRED and living in the EU)
// router.post('/euBornInUk', function (req, res) {
//   var euBornInUk = req.session.data['eu-born-in-uk']
//   if (euBornInUk == "Yes"){
//     res.redirect('application-s1/full-name')
//   }
//   else {
//     res.redirect('cannot-apply')
//   }
// })



// Do you have UK settled status? (if RETIRED and living in the EU)
// router.post('/euUkSettled', function (req, res) {
//   var euUkSettled = req.session.data['eu-uk-settled']
//   if (euUkSettled == "Yes"){
//     res.redirect('application-s1-ss/full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Are you retired and living in the EU?
// router.post('/euRetired', function (req, res) {
//   var euRetired = req.session.data['eu-retired']
//   if (euRetired == "Yes"){
//     res.redirect('born-in-uk-s1')
//   }
//   else {
//     res.redirect('cannot-apply')
//   }
// })




module.exports = router