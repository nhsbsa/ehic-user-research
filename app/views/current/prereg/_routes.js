const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// What is your nationality? - nationality.html
router.post('/nationality', function (req, res) {
  var nationality = req.session.data['nationality']
  if (nationality == "UK"){
    res.redirect('where-do-you-live')
  }
  else if (nationality == "dual"){
    res.redirect('birth-country')
  }
  else if (nationality == "EU, EEA or Swiss"){
    // res.redirect('born-in-uk-1')
    // res.redirect('where-do-you-live-eu-citizen')
    res.redirect('application-settled/full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Were you resident in the UK for 1 Janaury 2021? - resident-before-jan.html
router.post('/residentBeforeJan', function (req, res) {
  var residentBeforeJan = req.session.data['resident-before-jan']
  if (residentBeforeJan == "Yes"){
    res.redirect('nationality')
  }
  else if (residentBeforeJan == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('resident-before-jan')
  }
})

// Where were you born? - birth-country.html
router.post('/birthCountry', function (req, res) {
  var birthCountry = req.session.data['birth-country']
  if (birthCountry == "UK"){
    res.redirect('ineligible')
  }
  else if (birthCountry == "NI"){
    res.redirect('')
  }
  else if (birthCountry == "Other"){
    res.redirect('')
  }
  else {
    res.redirect('birth-country')
  }
})

// Who is the application for? - who-for-eu.html
router.post('/whoFor', function (req, res) {
  var whoFor = req.session.data['who-for']
  if (whoFor == "Myself and members of my family"){
    res.redirect('settled-status')
  }
  else if (whoFor == "Someone else"){
    res.redirect('')
  }
  else {
    res.redirect('who-for-eu')
  }
})

// Where do you live? - where-do-you-live.html
router.post('/whereDoYouLive', function (req, res) {
  var whereDoYouLive = req.session.data['where-do-you-live']
  if (whereDoYouLive == "UK"){
    res.redirect('resident-before-jan')
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

// Do you have UK settled status? - settled-status.html
router.post('/ukSettled', function (req, res) {
  var ukSettled = req.session.data['uk-settled']
  if (ukSettled == "Yes"){
    res.redirect('application-settled/full-name')
  }
  else {
    res.redirect('other-settled-status')
  }
})

// Does someone you live with have UK settled or 
// pre-settled status? - other-settled-status.html
router.post('/ukOtherSettled', function (req, res) {
  var ukSettled = req.session.data['uk-settled']
  if (ukSettled == "Yes"){
    res.redirect('relationship')
  }
  else {
    res.redirect('ineligible')
  }
})

// What is their relationship to you? - relationship.html
router.post('/relationship', function (req, res) {
  var relationship = req.session.data['relationship']
  if (relationship == "Spouse or partner"){
    res.redirect('married')
  }
  else if (relationship == "Child"){
    res.redirect('relationship')
  }
  else if (relationship == "Parent"){
    res.redirect('relationship')
  }
  else if (relationship == "Grandparent"){
    res.redirect('relationship')
  }
  else if (relationship == "Other"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('relationship')
  }
})

// Are you married to them? - married.html
router.post('/married', function (req, res) {
  var married = req.session.data['married']
  if (married == "Yes"){
    res.redirect('application-other-settled/full-name')
  }
  else {
    res.redirect('married-other')
  }
})

// Are you married to someone else? - married-other.html
router.post('/marriedOther', function (req, res) {
  var married = req.session.data['married-other']
  if (married == "Yes"){
    res.redirect('divorced')
  }
  else if (married == "No"){
    res.redirect('live-together')
  }
  else {
    res.redirect('married-other')
  }
})

// Have you lived together for 2 years or more? - live-together.html
router.post('/liveTogether', function (req, res) {
  var married = req.session.data['live-together']
  if (married == "Yes"){
    res.redirect('application-other-settled/full-name')
  }
  else if (married == "No"){
    res.redirect('intend-living')
  }
  else {
    res.redirect('live-together')
  }
})

// Do you intend to live together permanently? - intend-living.html
router.post('/intendLiving', function (req, res) {
  var married = req.session.data['intend-living']
  if (married == "Yes"){
    res.redirect('application-other-settled/full-name')
  }
  else if (married == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('intend-living')
  }
})

// Does your spouse need also need an EHIC? - other-ehic.html
router.post('/application-other-settled/otherEhic', function (req, res) {
  var otherEhic = req.session.data['other-ehic']
  if (otherEhic == "Yes"){
    res.redirect('')
  }
  else if (otherEhic == "No"){
    res.redirect('cya-individual')
  }
  else {
    res.redirect('')
  }
})

// Do you want to add your PARTNER to your application? (S1 only)
router.post('/application-s1/addPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('partner/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Does your PARTNER live with you? (S1 only)
router.post('/application-s1/partner/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('email-address')
  }
  else {
    res.redirect('address-eu')
  }
})


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