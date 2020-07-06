const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


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

// Were you born in the UK? (living in the UK)
router.post('/bornInUk', function (req, res) {
  var bornInUk = req.session.data['born-in-uk']
  if (bornInUk == "Yes"){
    res.redirect('student')
  }
  else {
    res.redirect('settled-status')
  }
})

// Do you intend to study in the EU, EEA or Switzerland?
router.post('/student', function (req, res) {
  var student = req.session.data['student']
  if (student == "Yes"){
    res.redirect('application-student/evidence-student')
  }
  else {
    res.redirect('application/full-name')
  }
})

// Do you intend to study in the EU, EEA or Switzerland? - EU Settled
router.post('/eussStudent', function (req, res) {
  var student = req.session.data['student']
  if (student == "Yes"){
    res.redirect('application-student-ss/evidence-student')
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
    res.redirect('settled-status-2')
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

// Do you have UK settled status? (if STUDYING and living in the EU)
router.post('/euStudentUkSettled', function (req, res) {
  var euUkSettled = req.session.data['eu-uk-settled']
  if (euUkSettled == "Yes"){
    res.redirect('application-student-ss/full-name')
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
    res.redirect('eu-studying')
  }
})

// Are you a UK national studying in the EU?
router.post('/euStudying', function (req, res) {
  var euStudent = req.session.data['eu-studying']
  if (euStudent == "Yes"){
    res.redirect('born-in-uk-study')
  }
  else {
    res.redirect('eu-irish')
  }
})

// Were you born in the UK? (if STUDYING and living in the EU)
router.post('/euStudyingBornInUk', function (req, res) {
  var euBornInUk = req.session.data['eu-born-in-uk']
  if (euBornInUk == "Yes"){
    res.redirect('application-student/full-name')
  }
  else {
    res.redirect('settled-status-3')
  }
})



// Are you working in the EU?
// Posted Workers
// router.post('/euWorking', function (req, res) {
//   var euWorking = req.session.data['eu-working']
//   if (euWorking == "Yes"){
//     res.redirect('born-in-uk-2')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Do you want to add your PARTNER to your application? (if eligible UK citizen)
// router.post('/application/addPartner', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('partner/partner-address')
//   }
//   else {
//     res.redirect('add-child-1')
//   }
// })

// Does your PARTNER live with you? (if eligible UK citizen)
// router.post('/application/partner/partnerAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Does your CHILD live with you? (if eligible UK citizen with PARTNER)
// router.post('/application/child-2/childAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Does your CHILD live with you? (if eligible UK citizen, NO PARTNER)
// router.post('/application/child-1/childAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Do you want to add your PARTNER to your application? (if eligible-with-settlement)
// router.post('/application-settled/addPartner', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('partner/partner-address')
//   }
//   else {
//     res.redirect('add-child-1')
//   }
// })

// Does your PARTNER live with you? (if eligible-with-settlement)
// router.post('/application-settled/partner/partnerAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Do you want to add your CHILDREN to your application? 
// EUSS 
router.post('/application-settled/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your CHILDREN to your application? 
// (if RETIRED and living in EU)
router.post('/application-s1/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your CHILDREN to your application?
// (if RETIRED and living in EU) - EUSS
router.post('/application-s1-ss/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your CHILDREN to your application? 
// (if STUDYING and living in EU, UK settled)
router.post('/application-student/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your CHILDREN to your application? 
// (if STUDYING and living in EU)
router.post('/application-student-ss/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Does your CHILD live with you? (if eligible-with-settlement)
// router.post('/application-settled/child-1/childAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Does your CHILD live with you? (if RETIRED and living in EU)
// router.post('/application-s1/child-1/childAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Does your CHILD live with you? (if RETIRED and living in EU)
// router.post('/application-s1-ss/child-1/childAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Does your CHILD live with you? (if RETIRED and living in EU)
// router.post('/application-s1/child-1/childAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Does your CHILD live with you? (if STUDYING and living in EU)
// router.post('/application-student/child-1/childAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Does your CHILD live with you? (if STUDYING and living in EU, UK settled)
// router.post('/application-student-ss/child-1/childAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Does your CHILD live with you? - NO PARTNER (if eligible-with-settlement)
// router.post('/application-settled/child-2/childAddress', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('full-name')
//   }
//   else {
//     res.redirect('ineligible')
//   }
// })

// Do you want to add your CHILDREN to your application?
// UK Citizen
router.post('/application/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your CHILDREN to your application? (after adding partner) (if eligible-with-settlement)
// router.post('/application-settled/addChildAfterPartner', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('child-2/child-address')
//   }
//   else {
//     res.redirect('cya-couple')
//   }
// })

// Do you want to add your CHILDREN to your application? (after adding partner) (if eligible UK citizen)
// router.post('/application/addChildAfterPartner', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('child-2/child-address')
//   }
//   else {
//     res.redirect('cya-couple')
//   }
// })

// Do you want to add ANOTHER CHILD to your application?
// (after adding partner and one child) (if eligible-with-settlement)
// router.post('/application-settled/addAnotherChild', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('child-2/child-address')
//   }
//   else {
//     res.redirect('cya-family')
//   }
// })

// Do you want to add ANOTHER CHILD to your application?
// EUSS
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
// router.post('/application/addAnotherChild', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('child-2/child-address')
//   }
//   else {
//     res.redirect('cya-family')
//   }
// })

// Do you want to add ANOTHER CHILD to your application?
// UK Citizen
router.post('/application/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-children')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// (if RETIRED and living in EU)
router.post('/application-s1/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-children')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// (if RETIRED and living in EU) - EUSS
router.post('/application-s1-ss/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-children')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// (if STUDYING and living in EU)
router.post('/application-student/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-children')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// (if STUDYING and living in EU) - EUSS
router.post('/application-student-ss/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('cya-children')
  }
})

// Do you want to add someone else to your application? (if eligible-with-residency-1)
// router.post('/application-residency/addAnother', function (req, res) {
//   var addAnother = req.session.data['add-another']
//   if (addAnother == "Yes"){
//     res.redirect('')
//   }
//   else {
//     res.redirect('cya-individual')
//   }
// })


module.exports = router