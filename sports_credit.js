"use strict";

/*
   Filename:  sports_credit.js

   Author:  Vincent Nguyen
   Date:    June 9, 2021
   

   Function List
   =============

   writeSessionValues()
   Calls values from sports_donors_sort to distribute to sports_donors.html, sports_credit.html
   and sports_checkout.html to display in corresponding aside HTML elements. 
   It displays donor's information for the donor to confirm on each page.

   
   runSubmit()
   Tests validation when user hits the submit button
      
   validateCVC()
   Validates the credit card CVC number
      
   validateDate()
   Validates user's credit card expiration date 

   validateNumber()
   Validates user's credit card number
      
   validateCredit()
   Validates user's selected credit card type
      
   validateName()
   Validates user's name on credit card 
      
   sumDigits(numStr)
   Adds the digits characters in a text string to validate credit card number
      
   luhn(idNum)
   Returns true of idNum satisfies the Luhn Algorithm to validate credit card number

*/

window.addEventListener("load", function() {
   document.getElementById("subButton").onclick = runSubmit;
   document.getElementById("cardHolder").oninput = validateName;
   document.getElementById("cardNumber").oninput = validateNumber;
   document.getElementById("expDate").oninput = validateDate;
   document.getElementById("cvc").oninput = validateCVC;
});


/* runSubmit() tests validation when user hits the submit button */
function runSubmit() {
   validateName();
   validateCredit();
   validateNumber();
   validateDate();
   validateCVC();
}

/* validateDate() validates user's credit card expiration date  */
function validateDate() {
   var cardDate = document.getElementById("expDate");
   if (cardDate.validity.valueMissing) {cardDate.setCustomValidity("Enter the expiration date.");}
   else if (/^(0[1-9]|1[0-2])\/20[12]\d$/.test(cardDate.value) === false) {cardDate.setCustomValidity("Enter valid expiration date");}
   else {cardDate.setCustomValidity("");}
}

/* validateName() validates user's name on credit card */
function validateName() {
   var cardName = document.getElementById("cardHolder");
   if (cardName.validity.valueMissing) {cardName.setCustomValidity("Enter name of card holder");}
   else {cardName.setCustomValidity("");}
}

/* validateCredit() validates user's selected credit card type */
function validateCredit() {
   var creditCard = document.forms.credit.elements.company[0];
   if (creditCard.validity.valueMissing) {creditCard.setCustomValidity("Select your credit card company");}
   else {creditCard.setCustomValidity("");}
}

/* validateNumber() validates user's credit card number */
function validateNumber() {
   var cardNumber = document.getElementById("cardNumber");
   if (cardNumber.validity.valueMissing) {cardNumber.setCustomValidity("Enter your card number");}
   else if (cardNumber.validity.patternMismatch) {cardNumber.setCustomValidity("Enter a valid card number");}
   else if (luhn(cardNumber.value) === false) {cardNumber.setCustomValidity("Enter a legitimate card number");}
   else {cardNumber.setCustomValidity("");}
}


/* validateCVC() validates the credit card CVC number*/
function validateCVC() {
   var cardCVC = document.getElementById("cvc");
   var creditCard = document.querySelector('input[name="company"]:checked').value;

   if (cardCVC.validity.valueMissing) {cardCVC.setCustomValidity("Enter your code CVC number");}
   else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
      cardCVC.setCustomValidity("Enter a 4-digit CVC number");
   } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
      cardCVC.setCustomValidity("Enter a 3-digit CVC number");
   } else {cardCVC.setCustomValidity("");}
}
 
/* sumDigits(numStr) adds the digits characters in a text string to validate credit card number */
function sumDigits(numStr) {
   var digitTotal = 0;
   for (var i = 0; i < numStr.length; i++) {
      digitTotal += parseInt(numStr.charAt(i));
   }
   return digitTotal;
}


/* luhn(idNum) returns true of idNum satisfies the Luhn Algorithm to validate credit card number */
function luhn(idNum) {
   var string1 = "";
   var string2 = "";

   // Get odd number digits
   for (var i = idNum.length - 1; i >=0; i -= 2) {
      string1 += idNum.charAt(i);
   }

   // Get even number digits
   for (var i = idNum.length - 2; i >=0; i -= 2) {
      string2 += 2 * idNum.charAt(i);
   }

   // Determine if the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
}

