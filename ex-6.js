// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
// console.log(companyName.length);
for (let i = companyName.length - 1; i >= 0; i--) {
  reversedCompanyName += companyName[i];
}
console.log(reversedCompanyName);

// Another way to reverse string
// for (let i = 0; i < companyName.length; i++) {
//   reversedCompanyName=companyName[i]+reversedCompanyName;
// }
// console.log(reversedCompanyName);
