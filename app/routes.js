// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get('Referrer'); // previous screen
  req.folder = req.originalUrl.split('/')[1]; //folder, e.g. 'current'
  req.subfolder = req.originalUrl.split('/')[2]; //sub-folder e.g. 'service'
  res.locals.folder = req.folder; // what folder the url is
  res.locals.subfolder = req.subfolder; // what subfolder the URL is in
console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
  console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
  next();
});


// current sprint, remember to add older sprint when adding a new folder!
router.use('/current', require('./views/current/_routes'));
router.use('/current/apply', require('./views/current/apply/_routes'));
router.use('/current/replacement', require('./views/current/replacement/_routes'));
router.use('/current/file-upload', require('./views/current/file-upload/_routes'));

// Start folder specific routes

// router.use('/sprint1', require('./views/sprint1/_routes'));

// Experimental //

// tasklist format //
// router.use('/tasklist/prereg', require('./views/tasklist/prereg/_routes'));
// router.use('/tasklist/postjan', require('./views/tasklist/postjan/_routes'));



module.exports = router;




