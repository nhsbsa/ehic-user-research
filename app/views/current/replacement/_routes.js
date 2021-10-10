const express = require('express')
const router = express.Router()

const axios = require('axios');

// Add your routes here - above the module.exports line


// Did you apply for your UK GHIC or UK EHIC? - applicant-type.html
router.post('/applicantType', function (req, res) {
  var applicantType = req.session.data['applicant-type']
  if (applicantType == "Yes") {
    res.redirect('main-who-for')
  }
  else if (applicantType == "No") {
    res.redirect('dep-who-for')
  }
  else {
    res.redirect('applicant-type')
  }
})


// Is the replacement for you? - main-who-for.html
router.post('/mainWhoFor', function (req, res) {
  var mainWhoFor = req.session.data['main-who-for']
  if (mainWhoFor == "Myself") {
    // res.redirect('card-type')
    res.redirect('main/full-name')
  }
  else if (mainWhoFor == "Someone") {
    res.redirect('main-other/info')
  }
  else if (mainWhoFor == "Myself-and-someone") {
    res.redirect('main/full-name')
  }
  else {
    res.redirect('main-who-for')
  }
})



// Who needs a replacement card? - dep-who-for.html
router.post('/depWhoFor', function (req, res) {
  var depWhoFor = req.session.data['dep-who-for']
  if (depWhoFor == "Myself") {
    res.redirect('dep/info-dep')
  }
  else if (depWhoFor == "Someone") {
    res.redirect('dep-other/info-dep')
  }
  else if (depWhoFor == "Myself-and-someone") {
    res.redirect('dep-and-other/info-dep')
  }
  else {
    res.redirect('dep-who-for')
  }
})



// Which card do you have? - card-type.html
// router.post('/replacementType', function (req, res) {
//   var replacementType = req.session.data['replacement-type']
//   if (replacementType == "UK GHIC") {
//     res.redirect('main/full-name')
//   }
//   else if (replacementType == "UK EHIC") {
//     res.redirect('main/full-name')
//   }
//   else {
//     res.redirect('ineligible-1')
//   }
// })


// Do you live in the UK? - uk-address.html
router.post('/main/ukAddress', function (req, res) {
  var ukAddress = req.session.data['uk-address']
  if (ukAddress == "yes") {
    res.redirect('postcode')
  }
  else if (ukAddress == "no") {
    res.redirect('country')
  }
  else {
    res.redirect('uk-address')
  }
})

// Do you live in the UK? - uk-address.html
router.post('/main-other/ukAddress', function (req, res) {
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

// Do you live in the UK? - uk-address.html
router.post('/dep/ukAddress', function (req, res) {
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

// Do you live in the UK? - uk-address.html
router.post('/dep-other/ukAddress', function (req, res) {
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

// Do you live in the UK? - uk-address.html
router.post('/dep-and-other/ukAddress', function (req, res) {
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


// Do you know your GHIC reference number? - main/know-ohs-number.html
// router.post('/main/knowOhsNumber', function (req, res) {
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


// Do you need to get a replacement card for anyone else? - main/add-another.html
router.post('/main/addDependant', function (req, res) {
  var addDependant = req.session.data['add-dependant']
  if (addDependant == "Yes") {
    res.redirect('dep-full-name')
  }
  else if (addDependant == "No") {
    res.redirect('replacement-reason')
  }
  else {
    res.redirect('add-dependant')
  }
})

// Do you need to get a replacement card for anyone else? - main-other/add-another.html
router.post('/main-other/addDependant', function (req, res) {
  var addDependant = req.session.data['add-dependant']
  if (addDependant == "Yes") {
    res.redirect('dep-full-name')
  }
  else if (addDependant == "No") {
    res.redirect('replacement-reason')
  }
  else {
    res.redirect('add-dependant')
  }
})

// Do you need to get a replacement card for anyone else? - main/add-another.html
router.post('/main/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dep-full-name')
  }
  else if (addAnother == "No") {
    res.redirect('dep-replacement-reason')
  }
  else {
    res.redirect('add-another')
  }
})

// Do you need to get a replacement card for anyone else? - main-other/add-another.html
router.post('/main-other/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dep-full-name')
  }
  else if (addAnother == "No") {
    res.redirect('dep-replacement-reason')
  }
  else {
    res.redirect('add-another')
  }
})

// Do you need to get a replacement card for anyone else? - dep/add-another.html
router.post('/dep/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dep-full-name')
  }
  else if (addAnother == "No") {
    res.redirect('dep-replacement-reason')
  }
  else {
    res.redirect('add-another')
  }
})

// Do you need to get a replacement card for anyone else? - dep-other/add-another.html
router.post('/dep-other/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dep-full-name')
  }
  else if (addAnother == "No") {
    res.redirect('dep-replacement-reason')
  }
  else {
    res.redirect('add-another')
  }
})

// Do you need to get a replacement card for anyone else? - dep-other/add-another.html
router.post('/dep-and-other/addAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes") {
    res.redirect('dep-full-name')
  }
  else if (addAnother == "No") {
    res.redirect('dep-replacement-reason')
  }
  else {
    res.redirect('add-another')
  }
})




// Do they live in the UK? - dep-uk-address.html
router.post('/main/depUkAddress', function (req, res) {
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

// Do they live in the UK? - dep-uk-address.html
router.post('/main-other/depUkAddress', function (req, res) {
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

// Do they live in the UK? - dep-uk-address.html
router.post('/dep/depUkAddress', function (req, res) {
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

// Do they live in the UK? - dep-uk-address.html
router.post('/dep-other/depUkAddress', function (req, res) {
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

// Do they live in the UK? - dep-uk-address.html
router.post('/dep-other/otherUkAddress', function (req, res) {
  var otherUkAddress = req.session.data['other-uk-address']
  if (otherUkAddress == "yes") {
    res.redirect('other-postcode')
  }
  else if (otherUkAddress == "no") {
    res.redirect('other-latency')
  }
  else {
    res.redirect('other-uk-address')
  }
})

// Do they live in the UK? - dep-uk-address.html
router.post('/dep-and-other/depUkAddress', function (req, res) {
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


// What is the reason for the replacement? - main/replacement-reason.html
// router.post('/main/replacementReason', function (req, res) {
//   var replacementReason = req.session.data['replacement-reason']
//   if (replacementReason == "Lost") {
//     res.redirect('cya-individual')
//   }
//   else if (replacementReason == "Damaged") {
//     res.redirect('cya-individual')
//   }
//   else if (replacementReason == "Stolen") {
//     res.redirect('cya-individual')
//   }
//   else {
//     res.redirect('replacement-reason')
//   }
// })


module.exports = router