const express = require('express')
const router = express.Router()

const axios = require('axios');

// ------------------------------------------
// ------------------------------------------
// USE /reissue/_routes.js FOR REISSUE ROUTES !!!
// ------------------------------------------
// ------------------------------------------


// Add your routes here - above the module.exports line


// Is the user under 18 or over 18
// router.post('/application-settled/child-1/user-age-handler', function (req, res) {
//     const day = req.session.data['example-day']
//     const month = req.session.data['example-month']
//     const year =req.session.data['example-year']

//     const fullDOB = year + "-" + month + "-" + day;

//     function userDOB(dob) {

//         this.dateOfBirth = new Date(dob);

//         this.calculateAge = function() {
//           const diff = Date.now() - this.dateOfBirth.getTime(); 
//           const ageDate = new Date(diff); 
//           return Math.abs(ageDate.getUTCFullYear() - 1970);
//         };

//     }

//     const age =new userDOB(fullDOB).calculateAge();

//     if (age >= '18') {
//         res.redirect('full-name')
//     } else {
//         res.redirect('address-lookup');
//     }

// })


// Are you applying for a new card or a replacement? - new-application.html
// router.post('/newApplication', function (req, res) {
//   var newApplication = req.session.data['new-application']
//   if (newApplication == "new") {
//     res.redirect('where-do-you-live')
//   }
//   else if (newApplication == "replacement") {
//     // res.redirect('living-eu/exp-ben')
//     res.redirect('../replacement/card-type')
//   }
//   else if (newApplication == "renew") {
//     res.redirect('../renew/card-type')
//   }
//   else {
//     res.redirect('new-application')
//   }
// })

// Do you currently have a valid EHIC? current-ehic.html
router.post('/planTravel', function (req, res) {
  var planTravel = req.session.data['plan-travel']
  if (planTravel == "Yes") {
    res.redirect('current-ehic')
  }
  else if (planTravel == "No") {
    // res.redirect('plan-travel-ko')
    res.redirect('current-ehic')
  }
  else {
    res.redirect('plan-travel')
  }
})

// Do you currently have a valid EHIC? current-ehic.html
router.post('/currentEhic', function (req, res) {
  var currentEhic = req.session.data['current-ehic']
  if (currentEhic == "Yes") {
    res.redirect('current-ehic-ko')
  }
  else if (currentEhic == "No") {
    res.redirect('where-do-you-live')
  }
  else if (currentEhic == "lost") {
    // res.redirect('lost-ehic')
    res.redirect('where-do-you-live')
  }
  else {
    res.redirect('current-ehic')
  }
})

// What is your nationality? - nationality.html

//Version 2: Nationality Checkboxes

function arraysContainSame(a, b) {
  a = Array.isArray(a) ? a : [];
  b = Array.isArray(b) ? b : [];
  return a.length === b.length && a.every(el => b.includes(el));
}

router.post('/nationality', function (req, res) {

  var nationality = req.session.data['nationality'];
  console.log(nationality);

  if (arraysContainSame(nationality, ['UK', 'Other']) == true) {
    res.redirect('studying-uk-citizen')
  }
  else if (nationality == 'UK') {
    res.redirect('studying-uk-citizen')
  }
  else if (arraysContainSame(nationality, ['UK', 'EU, EEA or Swiss', 'Other']) == true) {
    res.redirect('birth-country-uk')
  }
  else if (arraysContainSame(nationality, ['EU, EEA or Swiss', 'Other']) == true) {
    res.redirect('uk-citizenship')
  }
  else if (nationality == 'EU, EEA or Swiss') {
    res.redirect('uk-citizenship')
  }
  else if (nationality == 'Other') {
    res.redirect('uk-citizenship')
  }
  else if (arraysContainSame(nationality, ['UK', 'EU, EEA or Swiss']) == true) {
    res.redirect('birth-country-uk')
  }
  else {
    res.redirect('nationality')
  }
})


// What is your nationality? - living-eu/nationality.html
router.post('/living-eu/nationality', function (req, res) {

  var nationality = req.session.data['nationality']

  if (arraysContainSame(nationality, ['UK', 'Other']) == true) {
    res.redirect('studying-uk-citizen')
  }
  else if (nationality == 'UK') {
    res.redirect('studying-uk-citizen')
  }
  else if (arraysContainSame(nationality, ['UK', 'EU, EEA or Swiss', 'Other']) == true) {
    res.redirect('birth-country-uk')
  }
  else if (arraysContainSame(nationality, ['EU, EEA or Swiss', 'Other']) == true) {
    res.redirect('uk-citizenship')
  }
  else if (nationality == 'EU, EEA or Swiss') {
    res.redirect('uk-citizenship')
  }
  else if (nationality == 'Other') {
    res.redirect('uk-citizenship')
  }
  else if (arraysContainSame(nationality, ['UK', 'EU, EEA or Swiss']) == true) {
    res.redirect('birth-country-uk')
  }
  else {
    res.redirect('nationality')
  }
})


// What is your nationality? - nationality-in-eu.html
router.post('/inEuNationality', function (req, res) {
  var inEuNationality = req.session.data['inEuNationality']
  if (inEuNationality == "UK") {
    res.redirect('studying-uk-citizen-in-eu')
  }
  else if (inEuNationality == "dual") {
    res.redirect('birth-country-in-eu')
  }
  else if (inEuNationality == "EU, EEA or Swiss") {
    res.redirect('uk-citizenship-in-eu')
  }
  else if (inEuNationality == "Other") {
    res.redirect('studying-uk-citizen-in-eu')
  }
  else {
    res.redirect('nationality-in-eu')
  }
})

// Have you ever held UK citizenship? - uk-citizenship.html
router.post('/ukCitizenship', function (req, res) {
  var ukCitizenship = req.session.data['uk-citizenship']
  if (ukCitizenship == "Yes") {
    res.redirect('national-other-eu')
  }
  else if (ukCitizenship == "No") {
    res.redirect('birth-country')
  }
  else {
    res.redirect('uk-citizenship')
  }
})

// Have you ever held UK citizenship? - living-eu/uk-citizenship.html
router.post('/living-eu/ukCitizenship', function (req, res) {
  var ukCitizenship = req.session.data['uk-citizenship']
  if (ukCitizenship == "Yes") {
    res.redirect('birth-country')
  }
  else if (ukCitizenship == "No") {
    res.redirect('birth-country')
  }
  else {
    res.redirect('uk-citizenship')
  }
})

// Have you ever held UK citizenship? - uk-citizenship-in-eu.html
router.post('/inEuUkCitizenship', function (req, res) {
  var inEuUkCitizenship = req.session.data['inEuUkCitizenship']
  if (inEuUkCitizenship == "Yes") {
    res.redirect('national-other-eu-in-eu')
  }
  else if (inEuUkCitizenship == "No") {
    res.redirect('birth-country-in-eu')
  }
  else {
    res.redirect('uk-citizenship-in-eu')
  }
})

// Are you a national of another EU country? - national-other-eu.html
router.post('/nationalOtherEu', function (req, res) {
  var nationalOtherEu = req.session.data['national-other-eu']
  if (nationalOtherEu == "Yes") {
    res.redirect('birth-country')
  }
  else if (nationalOtherEu == "No") {
    res.redirect('ineligible-4')
  }
  else {
    res.redirect('national-other-eu')
  }
})

// Are you a national of another EU country? - living-eu/national-other-eu.html
router.post('/living-eu/nationalOtherEu', function (req, res) {
  var nationalOtherEu = req.session.data['national-other-eu']
  if (nationalOtherEu == "Yes") {
    res.redirect('birth-country')
  }
  else if (nationalOtherEu == "No") {
    res.redirect('ineligible-temp')
  }
  else {
    res.redirect('national-other-eu')
  }
})

// Are you a national of another EU country? UK Citizen - national-other-eu-uk.html
router.post('/nationalOtherEuUk', function (req, res) {
  var nationalOtherEuUk = req.session.data['national-other-eu-uk']
  if (nationalOtherEuUk == "Yes") {
    res.redirect('birth-country-uk')
  }
  else if (nationalOtherEuUk == "No") {
    // res.redirect('ineligible-4')
    res.redirect('studying-uk-citizen')
  }
  else {
    res.redirect('national-other-eu')
  }
})

// Are you a national of another EU country? UK Citizen - living-eu/national-other-eu-uk.html
router.post('/living-eu/nationalOtherEuUk', function (req, res) {
  var nationalOtherEuUk = req.session.data['national-other-eu-uk']
  if (nationalOtherEuUk == "Yes") {
    res.redirect('birth-country-uk')
  }
  else if (nationalOtherEuUk == "No") {
    res.redirect('studying-uk-citizen')
  }
  else {
    res.redirect('national-other-eu')
  }
})

// Were you resident in the UK for 1 January 2021? - resident-before-jan.html
router.post('/residentBeforeJan', function (req, res) {
  var residentBeforeJan = req.session.data['resident-before-jan']
  if (residentBeforeJan == "Yes") {
    res.redirect('nationality')
  }
  else if (residentBeforeJan == "No") {
    res.redirect('nationality')
    // res.redirect('ineligible-2')
  }
  else {
    res.redirect('resident-before-jan')
  }
})



// GHIC - for UK nationals
//
// Do you plan to permanently move to another country in the next 5 years? - emigrate.html
router.post('/application/emigrate', function (req, res) {
  var emigrate = req.session.data['emigrate']
  if (emigrate == "Yes") {
    res.redirect('emigration-date')
  }
  else if (emigrate == "No") {
    // res.redirect('email-address')
    res.redirect('nino')
  }
  else {
    res.redirect('emigrate')
  }
})

// Do you want to add anyone else to your application? - add-someone.html
router.post('/application/addSomeone', function (req, res) {
  var addSomeone = req.session.data['addSomeone']
  if (addSomeone == "Yes") {
    res.redirect('add-partner')
  }
  else if (addSomeone == "No") {
    res.redirect('cya-individual')
  }
  else {
    res.redirect('add-someone')
  }
})

// Do you want to add a PARTNER / SPOUSE to your application?
router.post('/application/addPartner', function (req, res) {
  var addPartner = req.session.data['add-partner']
  if (addPartner == "Yes") {
    res.redirect('partner/full-name')
    // partner/married
  }
  else if (addPartner == "No") {
    res.redirect('add-child-1')
  }
  else {
    res.redirect('add-partner')
  }
})

// Does your PARTNER live with you?
router.post('/application/partner/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dob')
  }
  else if (addAnother == "No") {
    res.redirect('partner-address-country')
  }
  else {
    res.redirect('address-eu')
  }
})

// Where does your partner live?
router.post('/application/partner/partnerCountry', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "UK") {
    res.redirect('partner-ko')
  }
  else if (addAnother == "EU") {
    res.redirect('address-eu')
  }
  else {
    res.redirect('partner-address-country')
  }
})

// Do you plan to permanently move to another country in the next 5 years? - emigrate.html
router.post('/application/emigrate', function (req, res) {
  var emigrate = req.session.data['emigrate']
  if (emigrate == "Yes") {
    res.redirect('emigration-date')
  }
  else if (emigrate == "No") {
    res.redirect('email-address')
  }
  else {
    res.redirect('emigrate')
  }
})

// Do you want to add any children to your application? - add-child-2.html
router.post('/application/addChildAfterPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-2/full-name')
  }
  else if (addAnother == "No") {
    // res.redirect('child-2/child-address')
    res.redirect('cya-couple')
  }
  else {
    res.redirect('add-child-2')
  }
})

// Does your child live with you?
router.post('/application/child-2/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dob')
  }
  else if (addAnother == "No") {
    res.redirect('child-address-country')
  }
  else {
    res.redirect('child-address')
  }
})

// Does your child live with you?
router.post('/application/child-2/childCountry', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('address-eu')
  }
  else if (addAnother == "No") {
    res.redirect('child-ko')
  }
  else {
    res.redirect('child-address-country')
  }
})

// Does your child live with you?
router.post('/application/child-1/childCountry', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('address-eu')
  }
  else if (addAnother == "No") {
    res.redirect('child-ko')
  }
  else {
    res.redirect('child-address-country')
  }
})

// Do you want to add ANOTHER CHILD to your application?
router.post('/application/addAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-2/full-name')
  }
  else if (addAnother == "No") {
    res.redirect('child-2/cya-child')
  }
  else {
    res.redirect('add-another-child-2')
  }
})

// Do you want to add any children to your application?
router.post('/application/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Does your child live with you?
router.post('/application/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dob')
  }
  else if (addAnother == "No") {
    res.redirect('child-address-country')
  }
  else {
    res.redirect('child-address')
  }
})

// Do you want to add another child to your application?
router.post('/application/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('child-1/cya-child')
  }
})









// GHIC - for EU nationals living in the UK
//
// What type of overseas health cover would you like? - card-type.html
router.post('/application-settled/chooseCover', function (req, res) {
  var chooseCover = req.session.data['choose-cover']
  if (chooseCover == "GHIC") {
    res.redirect('ghic/full-name')
  }
  else if (chooseCover == "UK-EHIC") {
    res.redirect('full-name')
  }
  else {
    res.redirect('card-type')
  }
})

// Do you know your NHS number? - know-nhs-number.html
router.post('/application-settled/ghic/knowNhsNumber', function (req, res) {
  var knowNhsNumber = req.session.data['know-nhs-number']
  if (knowNhsNumber == "Yes") {
    res.redirect('nhs-number')
  }
  else if (knowNhsNumber == "No") {
    res.redirect('gender')
  }
  else {
    res.redirect('know-nhs-number')
  }
})

// Do you plan to permanently move to another country in the next 5 years? - emigrate.html
router.post('/application-settled/ghic/emigrate', function (req, res) {
  var emigrate = req.session.data['emigrate']
  if (emigrate == "Yes") {
    res.redirect('emigration-date')
  }
  else if (emigrate == "No") {
    res.redirect('email-address')
  }
  else {
    res.redirect('emigration')
  }
})

// Do you want to add anyone else to your application? EUSS
router.post('/application-settled/ghic/addSomeone', function (req, res) {
  var addAnother = req.session.data['add-someone']
  if (addAnother == "Yes") {
    // res.redirect('partner/full-name')
    // res.redirect('partner/married')
    //res.redirect('spouses')
    res.redirect('add-partner')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add a partner, spouse or civil partner to your application?
router.post('/application-settled/ghic/addPartner', function (req, res) {
  var addPartner = req.session.data['add-another']
  if (addPartner == "Yes") {
    res.redirect('partner/full-name')
  }
  else if (addPartner == "No") {
    res.redirect('add-child-1')
  }
  else {
    res.redirect('add-partner')
  }
})

// Does your PARTNER live with you?
router.post('/application-settled/ghic/partner/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dob')
  }
  else if (addAnother == "No") {
    res.redirect('partner-address-country')
  }
  else {
    res.redirect('address-eu')
  }
})

// Where does your partner live?
router.post('/application-settled/ghic/partner/partnerCountry', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "UK") {
    res.redirect('partner-ko')
  }
  else if (addAnother == "EU") {
    res.redirect('address-eu')
  }
  else {
    res.redirect('partner-address-country')
  }
})


// Do you want to add any children to your application?
router.post('/application-settled/ghic/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add any children to your application? - add-child-2.html
router.post('/application-settled/ghic/addChildAfterPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-2/full-name')
  }
  else if (addAnother == "No") {
    // res.redirect('child-2/child-address')
    res.redirect('cya-couple')
  }
  else {
    res.redirect('add-child-2')
  }
})

// Do you want to add any children to your application? - add-child-2.html
router.post('/application-settled/addChildAfterPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-2/full-name')
  }
  else if (addAnother == "No") {
    // res.redirect('child-2/child-address')
    res.redirect('cya-couple')
  }
  else {
    res.redirect('add-child-2')
  }
})


// Does your child live with you?
router.post('/application-settled/ghic/child-2/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dob')
  }
  else if (addAnother == "No") {
    res.redirect('child-address-country')
  }
  else {
    res.redirect('child-address')
  }
})

// Do you want to add ANOTHER CHILD to your application?
router.post('/application-settled/ghic/addAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-2/full-name')
  }
  else if (addAnother == "No") {
    res.redirect('child-2/cya-child')
  }
  else {
    res.redirect('add-another-child-2')
  }
})

// Do you want to add ANOTHER CHILD to your application?
router.post('/application-settled/addAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-2/full-name')
  }
  else if (addAnother == "No") {
    res.redirect('child-2/cya-child')
  }
  else {
    res.redirect('add-another-child-2')
  }
})

// Does your child live with you?
router.post('/application-settled/ghic/child-2/childCountry', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('address-eu')
  }
  else if (addAnother == "No") {
    res.redirect('child-ko')
  }
  else {
    res.redirect('child-address-country')
  }
})

// Does your child live with you?
router.post('/application-settled/ghic/child-1/childCountry', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('address-eu')
  }
  else if (addAnother == "No") {
    res.redirect('child-ko')
  }
  else {
    res.redirect('child-address-country')
  }
})

// Does your child live with you?
router.post('/application-settled/ghic/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dob')
  }
  else if (addAnother == "No") {
    res.redirect('child-address-country')
  }
  else {
    res.redirect('child-address')
  }
})

// Do you want to add another child to your application?
router.post('/application-settled/ghic/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('child-1/cya-child')
  }
})


















// Do you plan to permanently move to another country in the next 5 years? - emigrate.html
router.post('/application-settled/emigrate', function (req, res) {
  var emigrate = req.session.data['emigrate']
  if (emigrate == "Yes") {
    res.redirect('emigration-date')
  }
  else if (emigrate == "No") {
    res.redirect('email-address')
  }
  else {
    res.redirect('emigrate')
  }
})

// Do you plan to permanently move to another country in the next 5 years? - emigrate.html
router.post('/application-ni/emigrate', function (req, res) {
  var emigrate = req.session.data['emigrate']
  if (emigrate == "Yes") {
    res.redirect('emigration-date')
  }
  else if (emigrate == "No") {
    res.redirect('email-address')
  }
  else {
    res.redirect('emigrate')
  }
})

// Do you have an authority issued S1? - authority-s1.html
router.post('/authS1', function (req, res) {
  var authS1 = req.session.data['auth-s1']
  if (authS1 == "Yes") {
    res.redirect('ineligible-temp')
  }
  else if (authS1 == "No") {
    res.redirect('resident-before-jan')
  }
  else {
    res.redirect('authority-s1')
  }
})

// Where were you born? - birth-country-dual.html
router.post('/dualBirthCountry', function (req, res) {
  var dualBirthCountry = req.session.data['dual-birth-country']
  if (dualBirthCountry == "Yes") {
    res.redirect('studying-dual-esw')
    //res.redirect('ineligible-esw')
  }
  // else if (dualBirthCountry == "NI") {
  //   res.redirect('renounce')
  // }
  else if (dualBirthCountry == "No") {
    res.redirect('studying-dual-citizen')
    // res.redirect('application-settled/info-dual')
  }
  else {
    res.redirect('birth-country-dual')
  }
})

// Where were you born? - living-eu/birth-country-dual.html
router.post('/living-eu/dualBirthCountry', function (req, res) {
  var dualBirthCountry = req.session.data['dual-birth-country']
  if (dualBirthCountry == "Yes") {
    res.redirect('studying-dual-esw')
    //res.redirect('ineligible-esw')
  }
  // else if (dualBirthCountry == "NI") {
  //   res.redirect('renounce')
  // }
  else if (dualBirthCountry == "No") {
    res.redirect('studying-eu-citizen')
    // res.redirect('application-settled/info-dual')
  }
  else {
    res.redirect('birth-country-dual')
  }
})

// Where were you born? - birth-country-dual-in-eu.html
router.post('/euDualBirthCountry', function (req, res) {
  var dualBirthCountry = req.session.data['dual-birth-country']
  if (dualBirthCountry == "Yes") {
    res.redirect('ineligible-esw')
  }
  // else if (dualBirthCountry == "NI") {
  //   res.redirect('renounce')
  // }
  else if (dualBirthCountry == "No") {
    res.redirect('studying-uk-citizen-in-eu')
    // res.redirect('application-settled/info-dual')
    // res.redirect('application-settled/full-name')
  }
  else {
    res.redirect('birth-country-dual-in-eu')
  }
})

// Where were you born? - birth-country-in-eu.html
router.post('/inEuBirthCountry', function (req, res) {
  var inEuBirthCountry = req.session.data['inEuBirthCountry']
  if (inEuBirthCountry == "Yes") {
    res.redirect('ineligible-esw')
  }
  // else if (inEuBirthCountry == "NI") {
  //   res.redirect('renounce-in-eu')
  // }
  else if (inEuBirthCountry == "No") {
    // res.redirect('application-settled/full-name')
    res.redirect('studying-eu-citizen-in-eu')
  }
  else {
    res.redirect('birth-country-dual')
  }
})

// Where were you born?
// Were you born in the UK? - birth-country.html
router.post('/birthCountry', function (req, res) {
  var birthCountry = req.session.data['birth-country']
  if (birthCountry == "Yes") {
    res.redirect('studying-uk-citizen-born-esw')
  }
  // else if (birthCountry == "NI") {
  //   res.redirect('renounce')
  // }
  else if (birthCountry == "No") {
    // res.redirect('application-settled/full-name')
    //res.redirect('studying-eu-citizen')
    res.redirect('studying-eu-citizen-eu-other')
  }
  else {
    res.redirect('birth-country')
  }
})

// Where were you born? - living-eu/birth-country.html
router.post('/living-eu/birthCountry', function (req, res) {
  var birthCountry = req.session.data['birth-country']
  if (birthCountry == "Yes") {
    res.redirect('studying-eu-citizen-born-esw')
  }
  // else if (birthCountry == "NI") {
  //   res.redirect('renounce')
  // }
  else if (birthCountry == "No") {
    res.redirect('studying-eu-citizen-eu-other')
  }
  else {
    res.redirect('birth-country-uk')
  }
})

// RENOUNCE UK CITIZENSHIP - renounce
router.post('/renounce', function (req, res) {
  var renounce = req.session.data['renounce']
  if (renounce == "Yes") {
    res.redirect('studying-renounced')
    // res.redirect('application-ni/info-ni')
  }
  else if (renounce == "No") {
    res.redirect('studying-not-renounced')
    // res.redirect('ineligible-ni')
  }
  else {
    res.redirect('renounce')
  }
})

// RENOUNCE UK CITIZENSHIP - renounce
router.post('/living-eu/renounce', function (req, res) {
  var renounce = req.session.data['renounce']
  if (renounce == "Yes") {
    res.redirect('studying-renounced')
  }
  else if (renounce == "No") {
    res.redirect('studying-not-renounced')
  }
  else {
    res.redirect('renounce')
  }
})

// RENOUNCE UK CITIZENSHIP - renounce-in-eu
router.post('/inEuRenounce', function (req, res) {
  var inEuRenounce = req.session.data['inEuRenounce']
  if (inEuRenounce == "Yes") {
    // res.redirect('application-ni/info-ni')
    res.redirect('studying-eu-citizen-in-eu')
  }
  else if (inEuRenounce == "No") {
    res.redirect('ineligible-ni')
  }
  else {
    res.redirect('renounce-in-eu')
  }
})

// router.post('/renounce', function (req, res) {
//   var renounce = req.session.data['renounce']
//   if (renounce == "Yes"){
//     res.redirect('studying-renounced')
//     res.redirect('application-ni/info-ni')
//   }
//   else if (renounce == "No"){
//     res.redirect('ineligible-ni')
//   }
//   else {
//     res.redirect('renounce')
//   }
// })

// Do you know your NHS number? - know-nhs-number.html
router.post('/application-settled/knowNhsNumber', function (req, res) {
  var knowNhsNumber = req.session.data['know-nhs-number']
  if (knowNhsNumber == "Yes") {
    res.redirect('nhs-number')
  }
  else if (knowNhsNumber == "No") {
    res.redirect('gender')
  }
  else {
    res.redirect('know-nhs-number')
  }
})

// Do you know your NHS number? - know-nhs-number.html
router.post('/application-student-ss/knowNhsNumber', function (req, res) {
  var knowNhsNumber = req.session.data['know-nhs-number']
  if (knowNhsNumber == "Yes") {
    res.redirect('nhs-number')
  }
  else if (knowNhsNumber == "No") {
    res.redirect('gender')
  }
  else {
    res.redirect('know-nhs-number')
  }
})

// Do you know your NHS number? - know-nhs-number.html
router.post('/application-student-ss-in-eu/knowNhsNumber', function (req, res) {
  var knowNhsNumber = req.session.data['know-nhs-number']
  if (knowNhsNumber == "Yes") {
    res.redirect('nhs-number')
  }
  else if (knowNhsNumber == "No") {
    res.redirect('gender')
  }
  else {
    res.redirect('know-nhs-number')
  }
})

// Do you know your NHS number? - know-nhs-number.html
router.post('/application-ni/knowNhsNumber', function (req, res) {
  var knowNhsNumber = req.session.data['know-nhs-number']
  if (knowNhsNumber == "Yes") {
    res.redirect('nhs-number')
  }
  else if (knowNhsNumber == "No") {
    res.redirect('gender')
  }
  else {
    res.redirect('know-nhs-number')
  }
})


// Where do you live? - where-do-you-live.html
router.post('/whereDoYouLive', function (req, res) {
  var whereDoYouLive = req.session.data['where-do-you-live']
  if (whereDoYouLive == "UK") {
    res.redirect('authority-s1')
    // res.redirect('resident-before-jan')
  }
  else if (whereDoYouLive == "EU") {
    res.redirect('living-eu/exp-ben')
  }
  else {
    res.redirect('ineligible-1')
  }
})

// Where will you be living? - where-do-you-live-eu-citizen.html
router.post('/willYouBeLiving', function (req, res) {
  var willYouBeLiving = req.session.data['where-will-you-live']
  if (willYouBeLiving == "UK") {
    // res.redirect('application-settled/full-name')
    res.redirect('settled-status')
  }
  else if (willYouBeLiving == "EU") {
    res.redirect('ineligible')
  }
  else {
    res.redirect('ineligible')
  }
})


// Receiving exportable benefits - exp-ben.html
router.post('/living-eu/expBen', function (req, res) {
  var expBen = req.session.data['expBen']
  if (expBen == "Yes") {
    // res.redirect('application-s1/card-type')
    // res.redirect('application-s1/info-s1')
    // res.redirect('application-s1/full-name')
    res.redirect('application-s1/move-date')
  }
  else if (expBen == "No") {
    // res.redirect('eu-studying')
    res.redirect('nationality')
  }
  else {
    res.redirect('exp-ben')
  }
})

// Do you want to add another address for correspondence? S1
router.post('/living-eu/application-s1/addCorres', function (req, res) {
  var addCorres = req.session.data['addCorres']
  if (addCorres == "Yes") {
    res.redirect('address-eu-corres')
  }
  else if (addCorres == "No") {
    res.redirect('know-nino')
  }
  else {
    res.redirect('corres-address')
  }
})

// Do you want to add another address for correspondence? S1
router.post('/living-eu/application-s1/ghic/addCorres', function (req, res) {
  var addCorres = req.session.data['addCorres']
  if (addCorres == "Yes") {
    res.redirect('address-eu-corres')
  }
  else if (addCorres == "No") {
    res.redirect('know-nino')
  }
  else {
    res.redirect('corres-address')
  }
})

// Do you know your National Insurance number? - know-nino.html
router.post('/living-eu/application-s1/knowNino', function (req, res) {
  var knowNino = req.session.data['knowNino']
  if (knowNino == "Yes") {
    res.redirect('nino')
  }
  else if (knowNino == "No") {
    res.redirect('email-address')
  }
  else {
    res.redirect('know-nino')
  }
})

// Do you know your National Insurance number? - know-nino.html
router.post('/living-eu/application-s1/ghic/knowNino', function (req, res) {
  var knowNino = req.session.data['knowNino']
  if (knowNino == "Yes") {
    res.redirect('nino')
  }
  else if (knowNino == "No") {
    res.redirect('email-address')
  }
  else {
    res.redirect('know-nino')
  }
})

// Are you studying, or do you intend to study in the EU, EEA or
// Switzerland before 1 January 2021? - uk-studying.html
router.post('/ukStudying', function (req, res) {
  var ukStudying = req.session.data['uk-studying']
  if (ukStudying == "Yes") {
    res.redirect('application-student/evidence-student')
  }
  else {
    res.redirect('application/full-name')
  }
})

// Are you working in the EU, EEA or Switzerland? - eu-working.html
router.post('/euWorking', function (req, res) {
  var student = req.session.data['eu-working']
  if (student == "Yes") {
    res.redirect('application-pw/evidence-pw')
  }
  else {
    res.redirect('ineligible')
  }
})

// Posted worker form type - form-type.html
router.post('/application-pw/pwFormType', function (req, res) {
  var pwFormType = req.session.data['form-type']
  if (pwFormType == "A1") {
    res.redirect('a1-country')
  }
  else if (pwFormType == "S1") {
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
  if (euStudent == "Yes") {
    res.redirect('../apply/living-eu/application-student-in-eu/evidence-student')
  }
  else {
    res.redirect('eu-working')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-uk-citizen.html
router.post('/studyingUkCitizenBornESW', function (req, res) {
  var studyingUkCitizen = req.session.data['studying-uk-citizen']
  if (studyingUkCitizen == "Yes") {
    res.redirect('application-student/course-date')
  }
  else {
    res.redirect('application-settled/card-type')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// living-eu/studying-uk-citizen.html
router.post('/living-eu/studyingUkCitizenBornESW', function (req, res) {
  var studyingUkCitizen = req.session.data['studying-uk-citizen']
  if (studyingUkCitizen == "Yes") {
    res.redirect('application-student-in-eu/evidence-student')
  }
  else {
    res.redirect('ineligible-temp')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// living-eu/studying-uk-citizen.html
router.post('/living-eu/studyingEuCitizenBornESW', function (req, res) {
  var studyingEuCitizenBornESW = req.session.data['studying-eu-citizen-born-esw']
  if (studyingEuCitizenBornESW == "Yes") {
    res.redirect('application-student-in-eu/evidence-student')
  }
  else {
    res.redirect('ineligible-temp')
  }
})






// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-dual-Citizen.html
router.post('/studyingDualCitizen', function (req, res) {
  var studyingDualCitizen = req.session.data['studying-dual-citizen']
  if (studyingDualCitizen == "Yes") {
    res.redirect('application-student-ss/evidence-student')
  }
  else {
    res.redirect('application-settled/card-type')
  }
})




// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-uk-citizen.html
router.post('/studyingUkCitizen', function (req, res) {
  var studyingUkCitizen = req.session.data['studying-uk-citizen']
  if (studyingUkCitizen == "Yes") {
    // res.redirect('application-student/evidence-student')
    res.redirect('application-student/course-date')
  }
  else if (studyingUkCitizen == "No") {
    res.redirect('application/info-uk-national')
  }
  else {
    res.redirect('studying-uk-citizen')
  }
})

// Student course dates option (card choice) student-options.html
// router.post('/application-student/studentOptions', function (req, res) {
//   var studentOptions = req.session.data['student-options']
//   if (studentOptions == "before"){
//     res.redirect('card-type')
//   }
//   else if (studentOptions == "after"){
//     res.redirect('evidence-student')
//   }
//   else {
//     res.redirect('student-options')
//   }
// })

// Student course dates option (card choice) student-options.html
router.post('/application-student/courseDate', function (req, res) {
  var courseDate = req.session.data['course-date']
  if (courseDate == "before") {
    res.redirect('student-options')
  }
  else if (courseDate == "after") {
    res.redirect('ghic-only/evidence-student')
  }
  else {
    res.redirect('course-date')
  }
})

// Student course dates option (card choice) student-options.html
router.post('/living-eu/application-s1/s1Options', function (req, res) {
  var s1Options = req.session.data['s1-options']
  if (s1Options == "UK Global Health Insurance Card (GHIC)") {
    res.redirect('ghic/full-name')
  }
  else if (s1Options == "UK European Health Insurance Card (EHIC)") {
    res.redirect('full-name')
  }
  else {
    res.redirect('s1-options')
  }
})

// Student course dates option (card choice) student-options.html
router.post('/living-eu/application-student-in-eu/courseDate', function (req, res) {
  var courseDate = req.session.data['course-date']
  if (courseDate == "before") {
    res.redirect('student-options')
  }
  else if (courseDate == "after") {
    res.redirect('ghic-only/evidence-student')
  }
  else {
    res.redirect('course-date')
  }
})

// Student course dates option (card choice) student-options.html
router.post('/living-eu/application-s1/moveDate', function (req, res) {
  var moveDate = req.session.data['move-date']
  if (moveDate == "before") {
    res.redirect('s1-options')
  }
  else if (moveDate == "after") {
    res.redirect('ghic/info-s1')
  }
  else {
    res.redirect('move-date')
  }
})



// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// living-eu/studying-uk-citizen.html
router.post('/living-eu/studyingUkCitizen', function (req, res) {
  var studyingUkCitizen = req.session.data['studying-uk-citizen']
  if (studyingUkCitizen == "Yes") {
    // res.redirect('application-student-in-eu/evidence-student')
    res.redirect('application-student-in-eu/course-date')
  }
  else {
    res.redirect('ineligible-temp')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-uk-citizen.html
router.post('/inEuStudyingUkCitizen', function (req, res) {
  var inEuStudyingUkCitizen = req.session.data['inEuStudyingUkCitizen']
  if (inEuStudyingUkCitizen == "Yes") {
    res.redirect('application-student-in-eu/evidence-student')
  }
  else {
    res.redirect('ineligible-not-studying')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-eu-citizen.html
router.post('/studyingEuCitizen', function (req, res) {
  var studyingEuCitizen = req.session.data['studying-eu-citizen']
  if (studyingEuCitizen == "Yes") {
    res.redirect('application-student-ss/evidence-student')
  }
  else {
    // res.redirect('application-settled/info-eu-national')
    res.redirect('application/info-uk-national')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// living-eu/studying-eu-citizen.html
router.post('/living-eu/studyingEuCitizen', function (req, res) {
  var studyingEuCitizen = req.session.data['studying-eu-citizen']
  if (studyingEuCitizen == "Yes") {
    res.redirect('application-student-in-eu/evidence-student')
  }
  else {
    res.redirect('ineligible-temp')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-dual-esw.html
router.post('/studyingDualEsw', function (req, res) {
  var studyingDualEsw = req.session.data['studying-dual-esw']
  if (studyingDualEsw == "Yes") {
    res.redirect('ineligible-temp')
  }
  else {
    res.redirect('ineligible-temp')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// living-eu/studying-dual-esw.html
router.post('/living-eu/studyingDualEsw', function (req, res) {
  var studyingDualEsw = req.session.data['studying-dual-esw']
  if (studyingDualEsw == "Yes") {
    res.redirect('ineligible-temp')
  }
  else {
    res.redirect('ineligible-temp')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-eu-citizen-eu-other.html
router.post('/studyingEuCitizenEuOther', function (req, res) {
  var studyingEuCitizen = req.session.data['studying-eu-citizen']
  if (studyingEuCitizen == "Yes") {
    res.redirect('application-student/course-date')
  }
  else if (studyingEuCitizen == "No") {
    res.redirect('application-settled/card-type')
  }
  else {
    res.redirect('studying-eu-citizen-eu-other')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// living-eu/studying-eu-citizen-eu-other.html
router.post('/living-eu/studyingEuCitizenEuOther', function (req, res) {
  var studyingEuCitizen = req.session.data['studying-eu-citizen']
  if (studyingEuCitizen == "Yes") {
    res.redirect('ineligible-temp')
  }
  else {
    res.redirect('ineligible-temp')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-renounced.html
router.post('/studyingRenounced', function (req, res) {
  var studyingRenounced = req.session.data['studying-renounced']
  if (studyingRenounced == "Yes") {
    res.redirect('ineligible-temp')
  }
  else {
    res.redirect('application-ni/info-ni')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// living-eu/studying-renounced.html
router.post('/living-eu/studyingRenounced', function (req, res) {
  var studyingRenounced = req.session.data['studying-renounced']
  if (studyingRenounced == "Yes") {
    res.redirect('ineligible-temp')
  }
  else {
    res.redirect('ineligible-temp')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-not-renounced.html
router.post('/studyingNotRenounced', function (req, res) {
  var studyingNotRenounced = req.session.data['studying-not-renounced']
  if (studyingNotRenounced == "Yes") {
    res.redirect('application-student/evidence-student')
  }
  else {
    res.redirect('ineligible-temp')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// living-eu/studying-not-renounced.html
router.post('/living-eu/studyingNotRenounced', function (req, res) {
  var studyingNotRenounced = req.session.data['studying-not-renounced']
  if (studyingNotRenounced == "Yes") {
    res.redirect('application-student-in-eu/evidence-student')
  }
  else {
    res.redirect('ineligible-temp')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-eu-citizen.html
router.post('/inEuStudyCitizen', function (req, res) {
  var inEuStudyCitizen = req.session.data['inEuStudyCitizen']
  if (inEuStudyCitizen == "Yes") {
    res.redirect('application-student-ss-in-eu/evidence-student')
  }
  else if (inEuStudyCitizen == "No") {
    res.redirect('application-settled-in-eu/info-eu-national')
  }
  else {
    res.redirect('studying-eu-citizen-in-eu')
  }
})

// Do you want to add your PARENTS to your application? - EUSS
router.post('/application-settled/addParent', function (req, res) {
  var addParent = req.session.data['add-parent']
  if (addParent == "Yes") {
    res.redirect('parent/full-name')
  }
  else {
    // res.redirect('add-grandparent')
    res.redirect('cya-family')
  }
})

// Do you want to add your PARENTS to your application? - EUSS living in EU
router.post('/application-settled-in-eu/addParent', function (req, res) {
  var addParent = req.session.data['add-parent']
  if (addParent == "Yes") {
    res.redirect('parent/full-name')
  }
  else {
    // res.redirect('add-grandparent')
    res.redirect('cya-family')
  }
})

// What is your parent's nationality? - EUSS
router.post('/application-settled/parent/parentNationality', function (req, res) {
  var addParent = req.session.data['parent-nationality']
  if (addParent == "UK") {
    res.redirect('ineligible2')
  }
  else if (addParent == "EU") {
    res.redirect('arrival')
  }
  else if (addParent == "Other") {
    res.redirect('settled-status')
  }
  else {
    res.redirect('nationality')
  }
})

// What is your parent's nationality? - EUSS living in EU
router.post('/application-settled-in-eu/parent/parentNationality', function (req, res) {
  var addParent = req.session.data['parent-nationality']
  if (addParent == "UK") {
    res.redirect('ineligible2')
  }
  else if (addParent == "EU") {
    res.redirect('arrival')
  }
  else if (addParent == "Other") {
    res.redirect('settled-status')
  }
  else {
    res.redirect('nationality')
  }
})

// Do you want to add your PARENTS to your application? - NI
router.post('/application-ni/addParent', function (req, res) {
  var addParent = req.session.data['add-parent']
  if (addParent == "Yes") {
    res.redirect('parent/commence-date')
  }
  else {
    res.redirect('add-grandparent')
  }
})

// Do you want to add ANOTHER PARENT to your application? EUSS
router.post('/application-settled/parentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('parent/full-name')
  }
  else {
    // res.redirect('add-grandparent')
    res.redirect('parent/cya-parent')
  }
})

// Do you want to add ANOTHER PARENT to your application? EUSS living in EU
router.post('/application-settled-in-eu/parentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('parent/full-name')
  }
  else {
    // res.redirect('add-grandparent')
    res.redirect('parent/cya-parent')
  }
})

// Do you want to add ANOTHER PARENT to your application? NI
router.post('/application-ni/parentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('parent/commence-date')
  }
  else {
    res.redirect('add-grandparent')
  }
})

// PARENTS - Did your relationship commence before 1 January 2021?
router.post('/application-settled/parent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// GRANDPARENTS - Did your relationship commence before 1 January 2021?
router.post('/application-settled/grandparent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes") {
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// PARENTS - Did your relationship commence before 1 January 2021? - NI
router.post('/application-ni/parent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes") {
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// GRANDPARENTS - Did your relationship commence before 1 January 2021? - NI
router.post('/application-ni/grandparent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes") {
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you want to add your GRANDPARENTS to your application? - EUSS
router.post('/application-settled/addGrand', function (req, res) {
  var addGrand = req.session.data['add-grand']
  if (addGrand == "Yes") {
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add your GRANDPARENTS to your application? - NI
router.post('/application-ni/addGrand', function (req, res) {
  var addGrand = req.session.data['add-grand']
  if (addGrand == "Yes") {
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add ANOTHER GRANDPARENT to your application? EUSS
router.post('/application-settled/grandparentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add ANOTHER GRANDPARENT to your application? NI
router.post('/application-ni/grandparentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add your GRANDCHILDREN to your application?
router.post('/application-settled/grandchild', function (req, res) {
  var addGrand = req.session.data['add-grandchild']
  if (addGrand == "Yes") {
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-family')
  }
})

// Do you want to add ANOTHER GRANDCHILD to your application? EUSS
router.post('/application-settled/grandchildAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-all')
  }
})

// Do you want to add your GRANDCHILDREN to your application? - NI
router.post('/application-ni/grandchild', function (req, res) {
  var addGrand = req.session.data['add-grandchild']
  if (addGrand == "Yes") {
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-family')
  }
})

// Do you want to add ANOTHER GRANDCHILD to your application? - NI
router.post('/application-ni/grandchildAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-all')
  }
})

// Do you want to add anyone else to your application? EUSS
router.post('/application-settled/addSomeone', function (req, res) {
  var addAnother = req.session.data['add-someone']
  if (addAnother == "Yes") {
    // res.redirect('partner/full-name')
    // res.redirect('partner/married')
    res.redirect('spouses')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add anyone else to your application? EUSS living in EU
router.post('/application-settled-in-eu/addSomeone', function (req, res) {
  var addAnother = req.session.data['add-someone']
  if (addAnother == "Yes") {
    // res.redirect('partner/full-name')
    // res.redirect('partner/married')
    res.redirect('spouses')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add anyone else to your application? NI
router.post('/application-ni/addSomeone', function (req, res) {
  var addAnother = req.session.data['add-someone']
  if (addAnother == "Yes") {
    // res.redirect('partner/full-name')
    // res.redirect('partner/married')
    res.redirect('spouses')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your spouse or civil partner to your application? EUSS
router.post('/application-settled/spouses', function (req, res) {
  var spouses = req.session.data['spouses']
  if (spouses == "Yes") {
    res.redirect('spouse/full-name')
  }
  // else if (partners == "Durable"){
  //   res.redirect('durable/full-name')
  // }
  else if (spouses == "No") {
    res.redirect('partners')
  }
  else {
    res.redirect('spouses')
  }
})

// Do you want to add your spouse or civil partner to your application? EUSS
router.post('/application-settled-in-eu/spouses', function (req, res) {
  var spouses = req.session.data['spouses']
  if (spouses == "Yes") {
    res.redirect('spouse/full-name')
  }
  // else if (partners == "Durable"){
  //   res.redirect('durable/full-name')
  // }
  else if (spouses == "No") {
    res.redirect('partners')
  }
  else {
    res.redirect('spouses')
  }
})

// Where does your spouse or civil partner live? - EUSS
router.post('/application-settled/spouse/addressCountry', function (req, res) {
  var addressCountry = req.session.data['address-country']
  if (addressCountry == "UK") {
    res.redirect('partner-address')
  }
  else if (addressCountry == "EU") {
    res.redirect('address-eu')
  }
  else if (addressCountry == "Other") {
    res.redirect('ineligible2')
  }
  else {
    res.redirect('address-country')
  }
})

// Where does your spouse or civil partner live? - EUSS living in EU
router.post('/application-settled-in-eu/spouse/addressCountry', function (req, res) {
  var addressCountry = req.session.data['address-country']
  if (addressCountry == "UK") {
    res.redirect('partner-address')
  }
  else if (addressCountry == "EU") {
    res.redirect('address-eu')
  }
  else if (addressCountry == "Other") {
    res.redirect('ineligible2')
  }
  else {
    res.redirect('address-country')
  }
})

// Do you want to add your spouse or civil partner to your application? - NI
router.post('/application-ni/spouses', function (req, res) {
  var spouses = req.session.data['spouses']
  if (spouses == "Yes") {
    res.redirect('spouse/partner-address')
  }
  // else if (partners == "Durable"){
  //   res.redirect('durable/full-name')
  // }
  else if (spouses == "No") {
    // res.redirect('add-child-1')
    res.redirect('partners')
  }
  else {
    res.redirect('spouses')
  }
})

// Do you want to add your unmarried (durable) partner to your application? EUSS
router.post('/application-settled/partners', function (req, res) {
  var partners = req.session.data['partners']
  if (partners == "Yes") {
    res.redirect('durable/full-name')
  }
  else if (partners == "No") {
    res.redirect('add-child-1')
  }
  else {
    res.redirect('partners')
  }
})

// Do you want to add your unmarried (durable) partner to your application? EUSS living in EU
router.post('/application-settled-in-eu/partners', function (req, res) {
  var partners = req.session.data['partners']
  if (partners == "Yes") {
    res.redirect('durable/full-name')
  }
  else if (partners == "No") {
    res.redirect('add-child-1')
  }
  else {
    res.redirect('partners')
  }
})

// Do you want to add your unmarried (durable) partner to your application? NI
router.post('/application-ni/partners', function (req, res) {
  var partners = req.session.data['partners']
  if (partners == "Yes") {
    res.redirect('durable/full-name')
  }
  else if (partners == "No") {
    res.redirect('add-child-1')
  }
  else {
    res.redirect('partners')
  }
})

// What is your partner's nationality? - nationality.html
router.post('/application-settled/durable/partnerNationality', function (req, res) {
  var partnerNationality = req.session.data['partnerNationality']
  if (partnerNationality == "UK") {
    res.redirect('ineligible')
  }
  // else if (partnerNationality == "dual"){
  //   res.redirect('relationship-date')
  // }
  else if (partnerNationality == "EU, EEA or Swiss") {
    res.redirect('arrival')
  }
  else {
    res.redirect('settled-status')
  }
})

// What is your partner's nationality? - nationality.html
router.post('/application-settled-in-eu/durable/partnerNationality', function (req, res) {
  var partnerNationality = req.session.data['partnerNationality']
  if (partnerNationality == "UK") {
    res.redirect('ineligible')
  }
  // else if (partnerNationality == "dual"){
  //   res.redirect('relationship-date')
  // }
  else if (partnerNationality == "EU, EEA or Swiss") {
    res.redirect('arrival')
  }
  else {
    res.redirect('settled-status')
  }
})

// Did your partner arrive in the UK before 1 January 2021? - arrival.html
router.post('/application-settled/durable/arrival', function (req, res) {
  var arrival = req.session.data['arrival']
  if (arrival == "Yes") {
    res.redirect('own-app')
  }
  else if (arrival == "No") {
    res.redirect('ineligible5')
  }
  else {
    res.redirect('arrival')
  }
})

// Did your partner arrive in the UK before 1 January 2021? - arrival.html
router.post('/application-settled-in-eu/durable/arrival', function (req, res) {
  var arrival = req.session.data['arrival']
  if (arrival == "Yes") {
    res.redirect('own-app')
  }
  else if (arrival == "No") {
    res.redirect('ineligible5')
  }
  else {
    res.redirect('arrival')
  }
})

// Did your PARENT arrive in the UK before 1 January 2021? - arrival.html
router.post('/application-settled/parent/arrival', function (req, res) {
  var arrival = req.session.data['arrival']
  if (arrival == "Yes") {
    res.redirect('own-app')
  }
  else if (arrival == "No") {
    res.redirect('ineligible5')
  }
  else {
    res.redirect('arrival')
  }
})

// Did your PARENT arrive in the UK before 1 January 2021? - arrival.html
router.post('/application-settled-in-eu/parent/arrival', function (req, res) {
  var arrival = req.session.data['arrival']
  if (arrival == "Yes") {
    res.redirect('own-app')
  }
  else if (arrival == "No") {
    res.redirect('ineligible5')
  }
  else {
    res.redirect('arrival')
  }
})

// Does your PARTNER have UK settled status? - settled-status.html
router.post('/application-settled/durable/partnerSettled', function (req, res) {
  var partnerSettled = req.session.data['partner-settled']
  if (partnerSettled == "Yes") {
    res.redirect('address-lookup')
  }
  else if (partnerSettled == "No") {
    res.redirect('relationship-date')
  }
  else {
    res.redirect('settled-status')
  }
})

// Does your PARTNER have UK settled status? - settled-status.html
router.post('/application-settled-in-eu/durable/partnerSettled', function (req, res) {
  var partnerSettled = req.session.data['partner-settled']
  if (partnerSettled == "Yes") {
    res.redirect('address-lookup')
  }
  else if (partnerSettled == "No") {
    res.redirect('relationship-date')
  }
  else {
    res.redirect('settled-status')
  }
})

// Does your PARENT have UK settled status? - settled-status.html
router.post('/application-settled/parent/parentSettled', function (req, res) {
  var parentSettled = req.session.data['parent-settled']
  if (parentSettled == "Yes") {
    res.redirect('address-lookup')
  }
  else if (parentSettled == "No") {
    res.redirect('commence-date')
  }
  else {
    res.redirect('settled-status')
  }
})

// What is your partner's nationality? - nationality.html
router.post('/application-ni/durable/partnerNationality', function (req, res) {
  var partnerNationality = req.session.data['partnerNationality']
  if (partnerNationality == "UK") {
    res.redirect('ineligible')
  }
  else if (partnerNationality == "dual") {
    res.redirect('relationship-date')
  }
  else if (partnerNationality == "EU, EEA or Swiss") {
    res.redirect('relationship-date')
  }
  else {
    res.redirect('relationship-date')
  }
})

// Does your spouse or civil partner live with you? (EUSS)
router.post('/application-settled/spouse/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dob')
  }
  else if (addAnother == "No") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Does your spouse or civil partner live with you? EUSS living in EU
router.post('/application-settled-in-eu/spouse/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dob')
  }
  else if (addAnother == "No") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Does your partner live with you? (EUSS)
router.post('/application-settled/durable/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('full-name')
  }
  else if (addAnother == "No") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Does your spouse or civil partner live with you? NI
router.post('/application-ni/spouse/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('full-name')
  }
  else if (addAnother == "No") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Does your partner live with you? NI
router.post('/application-ni/durable/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('full-name')
  }
  else if (addAnother == "No") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Did your relationship commence before 1 January 2021? (EUSS)
router.post('/application-settled/durable/relationshipDate', function (req, res) {
  var addAnother = req.session.data['relationship-date']
  if (addAnother == "Yes") {
    res.redirect('live-together')
  }
  else if (addAnother == "No") {
    res.redirect('ineligible2')
  }
  else {
    res.redirect('relationship-date')
  }
})

// Did your relationship commence before 1 January 2021? (EUSS)
router.post('/application-settled-in-eu/durable/relationshipDate', function (req, res) {
  var addAnother = req.session.data['relationship-date']
  if (addAnother == "Yes") {
    res.redirect('live-together')
  }
  else if (addAnother == "No") {
    res.redirect('ineligible2')
  }
  else {
    res.redirect('relationship-date')
  }
})

// Did your relationship commence before 1 January 2021? (EUSS living in EU
router.post('/application-settled-in-eu/durable/relationshipDate', function (req, res) {
  var addAnother = req.session.data['relationship-date']
  if (addAnother == "Yes") {
    res.redirect('live-together')
  }
  else if (addAnother == "No") {
    res.redirect('ineligible2')
  }
  else {
    res.redirect('relationship-date')
  }
})

// Did your relationship commence before 1 January 2021? NI
router.post('/application-ni/durable/relationshipDate', function (req, res) {
  var addAnother = req.session.data['relationship-date']
  if (addAnother == "Yes") {
    res.redirect('relationship-length')
  }
  else if (addAnother == "No") {
    res.redirect('ineligible2')
  }
  else {
    res.redirect('relationship-date')
  }
})

// Has the relationship existed for more than 2 years prior to 1 January 2021? - EUSS
router.post('/application-settled/durable/relationshipLength', function (req, res) {
  var relationshipLength = req.session.data['relationship-length']
  if (relationshipLength == "Yes") {
    res.redirect('live-together')
  }
  else if (relationshipLength == "No") {
    res.redirect('child-together')
  }
  else {
    res.redirect('relationship-length')
  }
})

// Has the relationship existed for more than 2 years prior to 1 January 2021? - NI
router.post('/application-ni/durable/relationshipLength', function (req, res) {
  var relationshipLength = req.session.data['relationship-length']
  if (relationshipLength == "Yes") {
    res.redirect('live-together')
  }
  else if (relationshipLength == "No") {
    res.redirect('child-together')
  }
  else {
    res.redirect('relationship-length')
  }
})

// Did you a have a child with your partner before 1 January 2021? EUSS
router.post('/application-settled/durable/childTogether', function (req, res) {
  var childTogether = req.session.data['child-together']
  if (childTogether == "Yes") {
    res.redirect('address-lookup')
  }
  else if (childTogether == "No") {
    res.redirect('ineligible3')
  }
  else {
    res.redirect('child-together')
  }
})

// Did you a have a child with your partner before 1 January 2021? EUSS
router.post('/application-settled-in-eu/durable/childTogether', function (req, res) {
  var childTogether = req.session.data['child-together']
  if (childTogether == "Yes") {
    res.redirect('address-lookup')
  }
  else if (childTogether == "No") {
    res.redirect('ineligible3')
  }
  else {
    res.redirect('child-together')
  }
})

// Did you a have a child with your partner before 1 January 2021? NI
router.post('/application-ni/durable/childTogether', function (req, res) {
  var childTogether = req.session.data['child-together']
  if (childTogether == "Yes") {
    res.redirect('live-together')
  }
  else if (childTogether == "No") {
    res.redirect('ineligible3')
  }
  else {
    res.redirect('child-together')
  }
})

// Has your partner lived with you for 2 years or more? - live-together.html - EUSS
router.post('/application-settled/durable/durableLiving', function (req, res) {
  var durableLiving = req.session.data['durable-living']
  if (durableLiving == "Yes") {
    res.redirect('address-lookup')
  }
  else if (durableLiving == "No") {
    res.redirect('child-together')
  }
  else {
    res.redirect('live-together')
  }
})

// Has your partner lived with you for 2 years or more? - live-together.html - EUSS
router.post('/application-settled-in-eu/durable/durableLiving', function (req, res) {
  var durableLiving = req.session.data['durable-living']
  if (durableLiving == "Yes") {
    res.redirect('address-lookup')
  }
  else if (durableLiving == "No") {
    res.redirect('child-together')
  }
  else {
    res.redirect('live-together')
  }
})

// Does your partner live with you? - live-together.html - NI
router.post('/application-ni/durable/durableLiving', function (req, res) {
  var durableLiving = req.session.data['durable-living']
  if (durableLiving == "Yes") {
    res.redirect('dob')
  }
  else if (durableLiving == "No") {
    res.redirect('address-country')
  }
  else {
    res.redirect('live-together')
  }
})

// Does your partner live in the UK? - address-country.html - EUSS
router.post('/application-settled/durable/partnerCountry', function (req, res) {
  var partnerCountry = req.session.data['partner-country']
  if (partnerCountry == "Yes") {
    res.redirect('address-lookup')
  }
  else if (partnerCountry == "No") {
    res.redirect('ineligible4')
  }
  else {
    res.redirect('address-country')
  }
})

// Does your partner live in the UK? - address-country.html - NI
router.post('/application-ni/durable/partnerCountry', function (req, res) {
  var partnerCountry = req.session.data['partner-country']
  if (partnerCountry == "Yes") {
    res.redirect('address-lookup')
  }
  else if (partnerCountry == "No") {
    res.redirect('ineligible4')
  }
  else {
    res.redirect('address-country')
  }
})

// Do you want to add your PARTNER to your application? EUSS
router.post('/application-settled/addPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
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
  if (addAnother == "Yes") {
    res.redirect('email-address')
  }
  else {
    res.redirect('address-eu')
  }
})

// Do you want to add your CHILDREN to your application? EUSS with spouse 
router.post('/application-settled/addChildWithSpouse', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-3/full-name')
  }
  else {
    res.redirect('cya-spouse')
  }
})

// Do you want to add your CHILDREN to your application? EUSS, no partner 
router.post('/application-settled/addChildOnly', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your CHILDREN to your application? EUSS 
router.post('/application-settled/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    // res.redirect('add-parent')
    res.redirect('cya-family')
  }
})

// Do you want to add your CHILDREN to your application? EUSS living in EU
router.post('/application-settled-in-eu/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('add-parent')
    // res.redirect('cya-family')
  }
})

// What is Millie's nationality? - EUSS (under 21)
router.post('/application-settled/child-3/spouseChildNationality', function (req, res) {
  var childNationality = req.session.data['child-3-nationality']
  if (childNationality == "UK citizen") {
    res.redirect('address-manual')
  }
  else if (childNationality == "EU, Norwegian, Icelandic, Liechtensteiner or Swiss") {
    res.redirect('address-manual')
  }
  else if (childNationality == "Other") {
    res.redirect('address-manual')
  }
  else {
    res.redirect('nationality')
  }
})

// What is Millie's nationality? - EUSS (under 21)
router.post('/application-settled/child-2/partnerChildNationality', function (req, res) {
  var childNationality = req.session.data['child-2-nationality']
  if (childNationality == "UK citizen") {
    res.redirect('address-manual')
  }
  else if (childNationality == "EU, Norwegian, Icelandic, Liechtensteiner or Swiss") {
    res.redirect('address-manual')
  }
  else if (childNationality == "Other") {
    res.redirect('address-manual')
  }
  else {
    res.redirect('nationality')
  }
})

// What is Millie's nationality? - EUSS (under 21)
router.post('/application-settled/child-1/partnerChildNationality', function (req, res) {
  var childNationality = req.session.data['child-1-nationality']
  if (childNationality == "UK citizen") {
    res.redirect('address-manual')
  }
  else if (childNationality == "EU, Norwegian, Icelandic, Liechtensteiner or Swiss") {
    res.redirect('address-manual')
  }
  else if (childNationality == "Other") {
    res.redirect('address-manual')
  }
  else {
    res.redirect('nationality')
  }
})

// What is Millie's nationality? - EUSS (under 21)
router.post('/application-settled/child-1/childNationality', function (req, res) {
  var childNationality = req.session.data['child-nationality']
  if (childNationality == "UK") {
    res.redirect('address-manual')
  }
  else if (childNationality == "EU") {
    res.redirect('address-manual')
  }
  else if (childNationality == "Other") {
    res.redirect('address-manual')
  }
  else {
    res.redirect('nationality')
  }
})

// What is Millie's nationality? - EUSS living in EU (under 21)
router.post('/application-settled-in-eu/child-1/childNationality', function (req, res) {
  var childNationality = req.session.data['child-nationality']
  if (childNationality == "UK") {
    res.redirect('address-manual')
  }
  else if (childNationality == "EU") {
    res.redirect('address-manual')
  }
  else if (childNationality == "Other") {
    res.redirect('address-manual')
  }
  else {
    res.redirect('nationality')
  }
})

// Do you want to add your CHILDREN to your application? 
// NI 
router.post('/application-ni/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('add-parent')
  }
})

// Is Millie dependant on you? CHILD
router.post('/application-settled/child-1/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes") {
    res.redirect('child-address')
  }
  else if (over21 == "No") {
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Is Millie dependant on you? CHILD
router.post('/application-ni/child-1/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes") {
    res.redirect('child-address')
  }
  else if (over21 == "No") {
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Is Freddie dependant on you? GRANDCHILD
router.post('/application-settled/grandchild/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes") {
    res.redirect('child-address')
  }
  else if (over21 == "No") {
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Is Freddie dependant on you? GRANDCHILD - NI
router.post('/application-ni/grandchild/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes") {
    res.redirect('child-address')
  }
  else if (over21 == "No") {
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Does your CHILD live with you? (if eligible UK citizen, NO PARTNER)
router.post('/application-settled/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('nationality')
  }
  else if (addAnother == "No") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your CHILD live with you? (if eligible UK citizen, NO PARTNER)
router.post('/application-ni/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('nationality')
  }
  else if (addAnother == "No") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your GRANDCHILD live with you?
router.post('/application-settled/grandchild/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('nationality')
  }
  else if (addAnother == "No") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your GRANDCHILD live with you? - NI
router.post('/application-ni/grandchild/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('nationality')
  }
  else if (addAnother == "No") {
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// EUSS
router.post('/application-settled/spouseAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-3/full-name')
  }
  else {
    // res.redirect('add-parent')
    res.redirect('child-3/cya-child')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// EUSS
router.post('/application-settled/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    // res.redirect('add-parent')
    res.redirect('child-1/cya-child')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// EUSS living in EU
router.post('/application-settled-in-eu/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    // res.redirect('add-parent')
    res.redirect('child-1/cya-child')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// NI
router.post('/application-ni/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('add-parent')
  }
})

// getAddress lookup API - Application-settled
router.get('/application-settled/ghic/address-list-handler', function (req, res) {

  const postcode = req.session.data['postcode']
  const regex = RegExp('^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$')

  if (regex.test(postcode) === true) {

    if (postcode) {

      axios.get("https://api.getAddress.io/find/" + postcode + "?api-key=" + process.env.POSTCODE_API_KEY)
        .then(response => {
          console.log(response.data.addresses);
          var items = response.data.addresses;
          // res.render('current/apply/application-settled/ghic/address-list');
          res.render('current/apply/application-settled/ghic/address-list', { items: items });
        })
        .catch(error => {
          console.log(error);
          res.redirect('current/apply/application/address-manual')
        });

    } else {
      res.redirect('current/apply/application/address-manual')
    }
    
  }

});

// getAddress lookup API - Main Application
router.get('/application/address-list-handler', function (req, res) {

  const postcode = req.session.data['postcode']
  const regex = RegExp('^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$')

  if (regex.test(postcode) === true) {

    if (postcode) {

      axios.get("https://api.getAddress.io/find/" + postcode + "?api-key=" + process.env.POSTCODE_API_KEY)
        .then(response => {
          console.log(response.data.addresses);
          var items = response.data.addresses;
          // res.render('current/apply/application-settled/ghic/address-list');
          res.render('current/apply/application/address-list', { items: items });
        })
        .catch(error => {
          console.log(error);
          res.redirect('current/apply/application/address-manual')
        });

    } else {
      res.redirect('current/apply/application/address-manual')
    }
    
  }

});

router.post('/application/address-manual', (req, res) => {
  delete req.session.data['select-1']
  res.render('current/apply/application/address-manual')
});

router.post('/application/partner/partner-same-address', (req, res) => {
  const isSameAddress = req.session.data['partner-same-address']

  if (isSameAddress === "Yes") { 
    res.redirect('dob')
  } else if (isSameAddress === "No") {
    res.redirect('partner-address-country')
  } else {
    res.redirect('partner-address');
  }

})


module.exports = router