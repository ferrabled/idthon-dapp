const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/


// birthday is less than today -18 years
const today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
//if month is less than 10, add 0 before the month
if (month < 10) {
  month = `0${month}`;
}
var day = today.getDate();
//if day is less than 10, add 0 before the day
if (day < 10) {
  day = `0${day}`;
}
year = year - 18;
const date = `${year}${month}${day}`;
const finaldate = parseInt(date);


const humanReadableAuthReason = "Must be +18, " + "birthday less than " + finaldate; 

const credentialSubject = {
  birthday: {
    // users must have more than 18 years
    // birthday is less than today -18 years
    $lt: finaldate,
  },
};

const proofRequest = KYCAgeCredential(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
