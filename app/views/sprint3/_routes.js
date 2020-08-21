const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// --------------------------------------- //
// ------------- ELIGIBILITY ------------- //
// --------- APPLICANT QUESTIONS --------- //
// --------------------------------------- //

// Have you applied for an EHIC before?
// router.post('/previousEhic', function (req, res) {
//   var previousEhic = req.session.data['previous-ehic']
//   if (previousEhic == "Yes"){
//     res.redirect('')
//   }
//   else {
//     res.redirect('where-do-you-live')
//   }

// })

// Who is the application for?
router.post('/whoFor', function (req, res) {
  var whoFor = req.session.data['who-for']
  if (whoFor == "Myself and members of my family"){
    res.redirect('where-do-you-live')
  }
  else {
    res.redirect('where-do-you-live')
  }
})

// Where do you live?
router.post('/whereDoYouLive', function (req, res) {
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
router.post('/bornInUk', function (req, res) {
  var bornInUk = req.session.data['born-in-uk']
  if (bornInUk == "Yes"){
    res.redirect('application/full-name')
  }
  else {
    res.redirect('settled-status')
  }
})

// Were you born in the UK? (if living in the EU)
router.post('/euBornInUk', function (req, res) {
  var euBornInUk = req.session.data['eu-born-in-uk']
  if (euBornInUk == "Yes"){
    res.redirect('eligible-with-evidence')
  }
  else {
    res.redirect('settled-status-2')
  }
})

// Do you have UK settled status?
router.post('/ukSettled', function (req, res) {
  var ukSettled = req.session.data['uk-settled']
  if (ukSettled == "Yes"){
    res.redirect('application-settled/full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you have UK settled status? (if living in the EU)
router.post('/euUkSettled', function (req, res) {
  var euUkSettled = req.session.data['eu-uk-settled']
  if (euUkSettled == "Yes"){
    res.redirect('application-settled/nhs-number')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you have a permanent residency document?
// router.post('/permanentRes', function (req, res) {
//   var permanentRes = req.session.data['permanent-res']
//   if (permanentRes == "Yes"){
//     res.redirect('eligible-with-residency-1')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Are you retired and living in the EU?
router.post('/euRetired', function (req, res) {
  var euRetired = req.session.data['eu-retired']
  if (euRetired == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('eu-studying')
  }
})

// Are you a UK national studying in the EU?
router.post('/euStudying', function (req, res) {
  var euStudent = req.session.data['eu-studying']
  if (euStudent == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('eu-working')
  }
})

// Are you working in the EU?
router.post('/euWorking', function (req, res) {
  var euWorking = req.session.data['eu-working']
  if (euWorking == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('ineligible')
  }
})

// Add someone else to your application?
router.post('/addSomeoneElse', function (req, res) {
  var addSomeoneElse = req.session.data['add-someone-else']
  if (addSomeoneElse == "Yes"){
    res.redirect('add-another')
  }
  else {
    res.redirect('application/what-you-need')
  }
})

// Add someone else to your application? (if eligible-with-evidence)
router.post('/settledAddSomeoneElse', function (req, res) {
  var settledAddSomeoneElse = req.session.data['settled-add-someone-else']
  if (settledAddSomeoneElse == "Yes"){
    res.redirect('add-another')
  }
  else {
    res.redirect('application-settled/what-you-need')
  }
})

// Add someone else to your application? (if eligible-with-residency)
router.post('/residencyAddSomeoneElse', function (req, res) {
  var residencyAddSomeoneElse = req.session.data['residency-add-someone-else']
  if (residencyAddSomeoneElse == "Yes"){
    res.redirect('add-another')
  }
  else {
    res.redirect('application-residency/what-you-need')
  }
})

// Who do you want to add to your application?
router.post('/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "My partner"){
    res.redirect('partner-eligibility/partner-name')
  }
  else {
    res.redirect('child-eligibility/child-name')
  }
})


// --------------------------------------- //
// ------------- ELIGIBILITY ------------- //
// ---------- PARTNER QUESTIONS ---------- //
// --------------------------------------- //

// Where does your partner live?
router.post('/partner-eligibility/whereDoYouLive', function (req, res) {
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
router.post('/partner-eligibility/bornInUk', function (req, res) {
  var bornInUk = req.session.data['born-in-uk']
  if (bornInUk == "Yes"){
    res.redirect('eligible')
  }
  else {
    res.redirect('settled-status')
  }
})

// Were you born in the UK? (if living in the EU)
router.post('/partner-eligibility/euBornInUk', function (req, res) {
  var euBornInUk = req.session.data['eu-born-in-uk']
  if (euBornInUk == "Yes"){
    res.redirect('eligible-with-evidence')
  }
  else {
    res.redirect('settled-status-2')
  }
})

// Does your partner have UK settled status?
router.post('/partner-eligibility/ukSettled', function (req, res) {
  var ukSettled = req.session.data['uk-settled']
  if (ukSettled == "Yes"){
    res.redirect('eligible')
  }
  else {
    res.redirect('permanent-residency')
  }
})

// Do you have UK settled status? (if living in the EU)
router.post('/partner-eligibility/euUkSettled', function (req, res) {
  var euUkSettled = req.session.data['eu-uk-settled']
  if (euUkSettled == "Yes"){
    res.redirect('eligible-with-settlement')
  }
  else {
    res.redirect('permanent-residency')
  }
})

// Does your partner have a permanent residency document?
router.post('/partner-eligibility/permanentRes', function (req, res) {
  var permanentRes = req.session.data['permanent-res']
  if (permanentRes == "Yes"){
    res.redirect('eligible-with-residency-1')
  }
  else {
    res.redirect('ineligible')
  }
})

// Are you retired and living in the EU?
router.post('/partner-eligibility/euRetired', function (req, res) {
  var euRetired = req.session.data['eu-retired']
  if (euRetired == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('eu-studying')
  }
})

// Are you a UK national studying in the EU?
router.post('/partner-eligibility/euStudying', function (req, res) {
  var euStudent = req.session.data['eu-studying']
  if (euStudent == "Yes"){
    res.redirect('born-in-uk-2')
  }
  else {
    res.redirect('eu-working')
  }
})

// Are you working in the EU?
router.post('/partner-eligibility/euWorking', function (req, res) {
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
router.post('/application/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add someone else to your application? (if eligible-with-settlement)
router.post('/application-settled/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('add-partner')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your PARTNER to your application? (if eligible UK citizen)
router.post('/application/addPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('partner/partner-address')
  }
  else {
    res.redirect('add-child-1')
  }
})

// Does your PARTNER live with you? (if eligible UK citizen)
router.post('/application/partner/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your CHILD live with you? (if eligible UK citizen with PARTNER)
router.post('/application/child-2/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your CHILD live with you? (if eligible UK citizen, NO PARTNER)
router.post('/application/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you want to add your PARTNER to your application? (if eligible-with-settlement)
router.post('/application-settled/addPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('partner/partner-address')
  }
  else {
    res.redirect('add-child-1')
  }
})

// Does your PARTNER live with you? (if eligible-with-settlement)
router.post('/application-settled/partner/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you want to add your CHILDREN to your application? (if eligible-with-settlement)
router.post('/application-settled/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/child-address')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Does your CHILD live with you? (if eligible-with-settlement)
router.post('/application-settled/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your CHILD live with you? - NO PARTNER (if eligible-with-settlement)
router.post('/application-settled/child-2/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you want to add your CHILDREN to your application? - no partner (if eligible UK citizen)
router.post('/application/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/child-address')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your CHILDREN to your application? (after adding partner) (if eligible-with-settlement)
router.post('/application-settled/addChildAfterPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-2/child-address')
  }
  else {
    res.redirect('cya-couple')
  }
})

// Do you want to add your CHILDREN to your application? (after adding partner) (if eligible UK citizen)
router.post('/application/addChildAfterPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-2/child-address')
  }
  else {
    res.redirect('cya-couple')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// (after adding partner and one child) (if eligible-with-settlement)
router.post('/application-settled/addAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-2/child-address')
  }
  else {
    res.redirect('cya-family')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// (no partner and one child) (if eligible-with-settlement)
router.post('/application-settled/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-children')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// (after adding partner and one child) (if eligible-with-settlement)
router.post('/application/addAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-2/child-address')
  }
  else {
    res.redirect('cya-family')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// (no partner and one child) (if eligible-with-settlement)
router.post('/application/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-children')
  }
})




// Do you want to add someone else to your application? (if eligible-with-residency-1)
router.post('/application-residency/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('')
  }
  else {
    res.redirect('cya-individual')
  }
})


module.exports = router