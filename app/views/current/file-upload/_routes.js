const express = require('express')
const router = express.Router()

const axios = require('axios');

// Add your routes here - above the module.exports line


// Do you live in the UK? - uk-address.html
router.post('/ukAddress', function (req, res) {
  var ukAddress = req.session.data['uk-address']
  if (ukAddress == "yes") {
    res.redirect('address-lookup')
  }
  else if (ukAddress == "no") {
    res.redirect('address-eu')
  }
  else {
    res.redirect('uk-address')
  }
})

// Do you need to provide evidence of your right to reside in the UK? - provide-rtr-evid.html
router.post('/provideRTR', function (req, res) {
  var provideRTR = req.session.data['provide-RTR']
  if (provideRTR == "yes") {
    // res.redirect('upload-reside')
    res.redirect('evidence-type')
  }
  else if (provideRTR == "no") {
    res.redirect('provide-res-uk-evid')
  }
  else {
    res.redirect('provide-rtr-evid')
  }
})

// What kind of evidence would you like to provide? - evidence-type.html
router.post('/evidenceType', function (req, res) {
  var evidenceType = req.session.data['evidence-type']
  if (evidenceType == "sharecode") {
    res.redirect('share-code')
  }
  else if (evidenceType == "document") {
    res.redirect('upload-reside')
  }
  else {
    res.redirect('evidence-type')
  }
})

// Do you need to provide evidence of your UK residency? - provide-res-uk-evid.html
router.post('/provideUkRes', function (req, res) {
  var provideUkRes = req.session.data['provide-uk-res']
  if (provideUkRes == "yes") {
    res.redirect('upload-res-uk')
  }
  else if (provideUkRes == "no") {
    res.redirect('additional-info-1')
  }
  else {
    res.redirect('provide-res-uk-evid')
  }
})


// Do you want to add another? (evidence for Right to Reside in UK) 
// - upload-reside-another.html, upload-reside-another2.html
router.post('/addEvidRight', function (req, res) {
  var addEvidRight = req.session.data['add-evid-right']
  if (addEvidRight == "Yes") {
    res.redirect('upload-reside2')
  }
  else if (addEvidRight == "No") {
    // res.redirect('upload-res-uk')
    res.redirect('provide-res-uk-evid')
  }
  else {
    res.redirect('upload-reside-another')
  }
})

// Do you want to add another? (evidence for UK residency) 
// - upload-res-uk-another.html, upload-res-uk-another2.html
router.post('/addEvidResUK', function (req, res) {
  var addEvidResUK = req.session.data['add-evid-res-uk']
  if (addEvidResUK == "Yes") {
    res.redirect('upload-res-uk2')
  }
  else if (addEvidResUK == "No") {
    // res.redirect('cya')
    res.redirect('additional-info')
  }
  else {
    res.redirect('upload-res-uk-another')
  }
})


module.exports = router