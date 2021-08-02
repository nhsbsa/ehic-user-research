const express = require('express')
const router = express.Router()


// Is the user under 18 or over 18
// router.post('/user-age-handler', function (req, res) {
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
//         res.redirect('greater-than-18')
//     } else {
//         res.redirect('less-than-18');
//     }

// })

module.exports = router