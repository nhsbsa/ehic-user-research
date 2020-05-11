// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line


// --------------------------------------- //
// ------------- ELIGIBILITY ------------- //
// --------- APPLICANT QUESTIONS --------- //
// --------------------------------------- //

// Have you applied for an EHIC before?
router.post('/v1_0/previousEhic', function (req, res) {
  var previousEhic = req.session.data['previous-ehic']
  if (previousEhic == "Yes"){
    res.redirect('')
  }
  else {
    res.redirect('where-do-you-live')
  }

})

// Who is the application for?
router.post('/v1_0/whoFor', function (req, res) {
  var whoFor = req.session.data['who-for']
  if (whoFor == "Myself"){
    res.redirect('previous-ehic')
  }
  else {
    res.redirect('previous-ehic')
  }
})

// Where do you live?
router.post('/v1_0/whereDoYouLive', function (req, res) {
  var whereDoYouLive = req.session.data['where-do-you-live']
  if (whereDoYouLive == "UK"){
    res.redirect('born-in-uk-1')
  }
  else if (whereDoYouLive == "EU"){
    res.redirect('eu-retired')
  }
  else {
    res.redirect('ineligible')
  }
})

// Were you born in the UK?
router.post('/v1_0/bornInUk', function (req, res) {
  var bornInUk = req.session.data['born-in-uk']
  if (bornInUk == "Yes"){
    res.redirect('eligible')
  }
  else {
    res.redirect('settled-status')
  }
})

// Were you born in the UK? (if living in the EU)
router.post('/v1_0/euBornInUk', function (req, res) {
  var euBornInUk = req.session.data['eu-born-in-uk']
  if (euBornInUk == "Yes"){
    res.redirect('eligible-with-evidence')
  }
  else {
    res.redirect('settled-status-2')
  }
})

// Do you have UK settled status?
router.post('/v1_0/ukSettled', function (req, res) {
  var ukSettled = req.session.data['uk-settled']
  if (ukSettled == "Yes"){
    res.redirect('eligible')
  }
  else {
    res.redirect('permanent-residency')
  }
})

// Do you have UK settled status? (if living in the EU)
router.post('/v1_0/euUkSettled', function (req, res) {
  var euUkSettled = req.session.data['eu-uk-settled']
  if (euUkSettled == "Yes"){
    res.redirect('eligible-with-settlement')
  }
  else {
    res.redirect('permanent-residency')
  }
})

// Do you have a permanent residency document?
router.post('/v1_0/permanentRes', function (req, res) {
  var permanentRes = req.session.data['permanent-res']
  if (permanentRes == "Yes"){
    res.redirect('eligible-with-residency-1')
  }
  else {
    res.redirect('ineligible')
  }
})

// Are you retired and living in the EU?
router.post('/v1_0/euRetired', function (req, res) {
  var euRetired = req.session.data['eu-retired']
  if (euRetired == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('eu-studying')
  }
})

// Are you a UK national studying in the EU?
router.post('/v1_0/euStudying', function (req, res) {
  var euStudent = req.session.data['eu-studying']
  if (euStudent == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('eu-working')
  }
})

// Are you working in the EU?
router.post('/v1_0/euWorking', function (req, res) {
  var euWorking = req.session.data['eu-working']
  if (euWorking == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('ineligible')
  }
})

// Add someone else to your application?
router.post('/v1_0/addSomeoneElse', function (req, res) {
  var addSomeoneElse = req.session.data['add-someone-else']
  if (addSomeoneElse == "Yes"){
    res.redirect('add-another')
  }
  else {
    res.redirect('application/what-you-need')
  }
})

// Who do you want to add to your application?
router.post('/v1_0/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "My partner"){
    res.redirect('partner-eligibility/partner-name')
  }
  else {
    res.redirect('')
  }
})


// --------------------------------------- //
// ------------- ELIGIBILITY ------------- //
// ---------- PARTNER QUESTIONS ---------- //
// --------------------------------------- //

// Where does your partner live?
router.post('/v1_0/partner-eligibility/whereDoYouLive', function (req, res) {
  var whereDoYouLive = req.session.data['where-do-you-live']
  if (whereDoYouLive == "UK"){
    res.redirect('born-in-uk-1')
  }
  else if (whereDoYouLive == "EU"){
    res.redirect('eu-retired')
  }
  else {
    res.redirect('ineligible')
  }
})

// Was your partner born in the UK?
router.post('/v1_0/partner-eligibility/bornInUk', function (req, res) {
  var bornInUk = req.session.data['born-in-uk']
  if (bornInUk == "Yes"){
    res.redirect('eligible')
  }
  else {
    res.redirect('settled-status')
  }
})

// Were you born in the UK? (if living in the EU)
router.post('/v1_0/partner-eligibility/euBornInUk', function (req, res) {
  var euBornInUk = req.session.data['eu-born-in-uk']
  if (euBornInUk == "Yes"){
    res.redirect('eligible-with-evidence')
  }
  else {
    res.redirect('settled-status-2')
  }
})

// Does your partner have UK settled status?
router.post('/v1_0/partner-eligibility/ukSettled', function (req, res) {
  var ukSettled = req.session.data['uk-settled']
  if (ukSettled == "Yes"){
    res.redirect('eligible')
  }
  else {
    res.redirect('permanent-residency')
  }
})

// Do you have UK settled status? (if living in the EU)
router.post('/v1_0/partner-eligibility/euUkSettled', function (req, res) {
  var euUkSettled = req.session.data['eu-uk-settled']
  if (euUkSettled == "Yes"){
    res.redirect('eligible-with-settlement')
  }
  else {
    res.redirect('permanent-residency')
  }
})

// Does your partner have a permanent residency document?
router.post('/v1_0/partner-eligibility/permanentRes', function (req, res) {
  var permanentRes = req.session.data['permanent-res']
  if (permanentRes == "Yes"){
    res.redirect('eligible-with-residency-1')
  }
  else {
    res.redirect('ineligible')
  }
})

// Are you retired and living in the EU?
router.post('/v1_0/partner-eligibility/euRetired', function (req, res) {
  var euRetired = req.session.data['eu-retired']
  if (euRetired == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('eu-studying')
  }
})

// Are you a UK national studying in the EU?
router.post('/v1_0/partner-eligibility/euStudying', function (req, res) {
  var euStudent = req.session.data['eu-studying']
  if (euStudent == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('eu-working')
  }
})

// Are you working in the EU?
router.post('/v1_0/partner-eligibility/euWorking', function (req, res) {
  var euWorking = req.session.data['eu-working']
  if (euWorking == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('ineligible')
  }
})



// --------------------------------------- //
// ------------- APPLICATION ------------- //
// ----------- MAIN APPLICANT ------------ //
// --------------------------------------- //

// Do you want to add someone else to your application?
router.post('/v1_0/application/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('')
  }
  else {
    res.redirect('cya-individual')
  }
})












module.exports = router;
