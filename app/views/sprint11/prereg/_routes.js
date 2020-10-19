const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// What is your nationality? - nationality.html
router.post('/nationality', function (req, res) {
  var nationality = req.session.data['nationality']
  if (nationality == "UK"){
    res.redirect('application/full-name')
  }
  else if (nationality == "dual"){
    res.redirect('birth-country-dual')
  }
  else if (nationality == "EU, EEA or Swiss"){
    // res.redirect('born-in-uk-1')
    // res.redirect('where-do-you-live-eu-citizen')
    res.redirect('uk-citizenship')
  }
  else {
    res.redirect('ineligible')
  }
})

// Have you ever held UK citizenship? - uk-citizenship.html
router.post('/ukCitizenship', function (req, res) {
  var ukCitizenship = req.session.data['uk-citizenship']
  if (ukCitizenship == "Yes"){
    res.redirect('national-other-eu')
  }
  else if (ukCitizenship == "No"){
    res.redirect('birth-country')
  }
  else {
    res.redirect('uk-citizenship')
  }
})

// Are you a national of another EU country? - national-other-eu.html
router.post('/nationalOtherEu', function (req, res) {
  var nationalOtherEu = req.session.data['national-other-eu']
  if (nationalOtherEu == "Yes"){
    res.redirect('birth-country')
  }
  else if (nationalOtherEu == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('national-other-eu')
  }
})

// Were you resident in the UK for 1 January 2021? - resident-before-jan.html
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

// Where were you born? - birth-country-dual.html
router.post('/dualBirthCountry', function (req, res) {
  var dualBirthCountry = req.session.data['dual-birth-country']
  if (dualBirthCountry == "UK"){
    res.redirect('ineligible')
  }
  else if (dualBirthCountry == "NI"){
    res.redirect('renounce')
  }
  else if (dualBirthCountry == "Other"){
    res.redirect('application-settled/full-name')
  }
  else {
    res.redirect('birth-country-dual')
  }
})

// Where were you born? - birth-country.html
router.post('/birthCountry', function (req, res) {
  var birthCountry = req.session.data['birth-country']
  if (birthCountry == "UK"){
    res.redirect('ineligible')
  }
  else if (birthCountry == "NI"){
    res.redirect('renounce')
  }
  else if (birthCountry == "Other"){
    res.redirect('application-settled/full-name')
  }
  else {
    res.redirect('birth-country-dual')
  }
})

// Where were you born? - renounce.html
router.post('/renounce', function (req, res) {
  var renounce = req.session.data['renounce']
  if (renounce == "Yes"){
    res.redirect('application-ni/full-name')
  }
  else if (renounce == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('renounce')
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
// router.post('/relationship', function (req, res) {
//   var relationship = req.session.data['relationship']
//   if (relationship == "Spouse or partner"){
//     res.redirect('married')
//   }
//   else if (relationship == "Child"){
//     res.redirect('relationship')
//   }
//   else if (relationship == "Parent"){
//     res.redirect('relationship')
//   }
//   else if (relationship == "Grandparent"){
//     res.redirect('relationship')
//   }
//   else if (relationship == "Other"){
//     res.redirect('ineligible')
//   }
//   else {
//     res.redirect('relationship')
//   }
// })

// Are you married to them? - married.html
// router.post('/application-settled/partner/married', function (req, res) {
//   var married = req.session.data['married']
//   if (married == "Yes"){
//     res.redirect('application-other-settled/full-name')
//   }
//   else {
//     res.redirect('married-other')
//   }
// })

// Are you married to someone else? - married-other.html
// router.post('/marriedOther', function (req, res) {
//   var married = req.session.data['married-other']
//   if (married == "Yes"){
//     res.redirect('divorced')
//   }
//   else if (married == "No"){
//     res.redirect('live-together')
//   }
//   else {
//     res.redirect('married-other')
//   }
// })

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
// router.post('/intendLiving', function (req, res) {
//   var married = req.session.data['intend-living']
//   if (married == "Yes"){
//     res.redirect('application-other-settled/full-name')
//   }
//   else if (married == "No"){
//     res.redirect('ineligible')
//   }
//   else {
//     res.redirect('intend-living')
//   }
// })

// Does your spouse need also need an EHIC? - other-ehic.html
// router.post('/application-other-settled/otherEhic', function (req, res) {
//   var otherEhic = req.session.data['other-ehic']
//   if (otherEhic == "Yes"){
//     res.redirect('')
//   }
//   else if (otherEhic == "No"){
//     res.redirect('cya-individual')
//   }
//   else {
//     res.redirect('')
//   }
// })

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

// Do you want to add your PARENTS to your application?
router.post('/application-settled/addParent', function (req, res) {
  var addParent = req.session.data['add-parent']
  if (addParent == "Yes"){
    res.redirect('parent/commence-date')
  }
  else {
    res.redirect('add-grandparent')
  }
})

// Do you want to add ANOTHER PARENT to your application? EUSS
router.post('/application-settled/parentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('parent/commence-date')
  }
  else {
    res.redirect('add-grandparent')
  }
})

// PARENTS - Did your relationship commence before 1 January 2021?
router.post('/application-settled/parent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// GRANDPARENTS - Did your relationship commence before 1 January 2021?
router.post('/application-settled/grandparent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you want to add your GRANDPARENTS to your application?
router.post('/application-settled/addGrand', function (req, res) {
  var addGrand = req.session.data['add-grand']
  if (addGrand == "Yes"){
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add ANOTHER GRANDPARENT to your application? EUSS
router.post('/application-settled/grandparentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add your GRANDCHILDREN to your application?
router.post('/application-settled/grandchild', function (req, res) {
  var addGrand = req.session.data['add-grandchild']
  if (addGrand == "Yes"){
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-family')
  }
})

// Do you want to add ANOTHER GRANDCHILD to your application? EUSS
router.post('/application-settled/grandchildAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-all')
  }
})

// Do you want to add anyone else to your application? EUSS
router.post('/application-settled/addSomeone', function (req, res) {
  var addAnother = req.session.data['add-someone']
  if (addAnother == "Yes"){
    // res.redirect('partner/full-name')
    // res.redirect('partner/married')
    res.redirect('partners')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your partner to your application? EUSS
router.post('/application-settled/partners', function (req, res) {
  var partners = req.session.data['partners']
  if (partners == "Spouse"){
    res.redirect('spouse/partner-address')
  }
  // else if (partners == "Durable"){
  //   res.redirect('durable/relationship-date')
  // }
  else if (partners == "No"){
    res.redirect('add-child-1')
  }
  else {
    res.redirect('partners')
  }
})

// Does your spouse or civil partner live with you? (EUSS)
router.post('/application-settled/spouse/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Does your partner live with you? (EUSS)
router.post('/application-settled/durable/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Did your relationship commence before 1 January 2021? (EUSS)
router.post('/application-settled/durable/relationshipDate', function (req, res) {
  var addAnother = req.session.data['relationship-date']
  if (addAnother == "Yes"){
    res.redirect('live-together')
  }
  else if (addAnother == "No"){
    res.redirect('')
  }
  else {
    res.redirect('relationship-date')
  }
})

// Have you lived together for 2 years or more? - live-together.html
router.post('/application-settled/durable/durableLiving', function (req, res) {
  var durableLiving = req.session.data['durable-living']
  if (durableLiving == "Yes"){
    res.redirect('full-name')
  }
  else if (durableLiving == "No"){
    res.redirect('child-together')
  }
  else {
    res.redirect('live-together')
  }
})

// Do you want to add your PARTNER to your application? EUSS
router.post('/application-settled/addPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    // res.redirect('partner/full-name')
    res.redirect('partner/married')
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

// Do you want to add your CHILDREN to your application? 
// EUSS 
router.post('/application-settled/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('add-parent')
  }
})

// Is Millie dependant on you? CHILD
router.post('/application-settled/child-1/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes"){
    res.redirect('child-address')
  }
  else if (over21 == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Is Freddie dependant on you? GRANDCHILD
router.post('/application-settled/grandchild/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes"){
    res.redirect('child-address')
  }
  else if (over21 == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Does your CHILD live with you? (if eligible UK citizen, NO PARTNER)
router.post('/application-settled/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('nationality')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your GRANDCHILD live with you?
router.post('/application-settled/grandchild/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('nationality')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// EUSS
router.post('/application-settled/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('add-parent')
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