"use strict";

/*

   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateDate()
      Validates that the user has entered a valid expiration date for the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load", function() {
   sessionStorage.name = document.forms.donorForm.elements.fnBox.value + " " + document.forms.donorForm.elements.lnBox.value;
   sessionStorage.donation = document.forms.donorForm.elements.donation.value;
   sessionStorage.email = document.forms.donorForm.elements.emailBox.value;
   sessionStorage.phone = document.forms.donorForm.elements.phoneBox.value;

   writeSessionValues();
});

window.addEventListener("load", function() {
   document.getElementById("subButton").onclick = runSubmit;
   document.getElementById("cardHolder").oninput = validateName;
   document.getElementById("cardNumber").oninput = validateNumber;
   document.getElementById("expDate").oninput = validateDate;
   document.getElementById("cvc").oninput = validateCVC;
});

function runSubmit() {
   validateName();
   validateCredit();
   validateNumber();
   validateDate();
   validateCVC();
}

function validateDate() {
   var cardDate = document.getElementById("expDate");
   if (cardDate.validity.valueMissing) {cardDate.setCustomValidity("Enter the expiration date.");}
   else if (/^(0[1-9]|1[0-2])\/20[12]\d$/.test(cardDate.value) === false) {cardDate.setCustomValidity("Enter valid expiration date");}
   else {cardDate.setCustomValidity("");}
}

function validateName() {
   var cardName = document.getElementById("cardHolder");
   if (cardName.validity.valueMissing) {cardName.setCustomValidity("Enter name of card holder");}
   else {cardName.setCustomValidity("");}
}


function validateCredit() {
   var creditCard = document.forms.credit.elements.company[0];
   if (credidCard.validity.valueMissing) {creditCard.setCustomValidity("Select your credit card company");}
   else {creditCard.setCustomValidity("");}
}

function validateNumber() {
   var cardNumber = document.getElementById("cardNumber");
   if (cardNumber.validity.valueMissing) {cardNumber.setCustomValidity("Enter your card number");}
   else if (cardNumber.validity.patternMismatch) {cardNumber.setCustomValidity("Enter a valid card number");}
   else if (luhn(cardNumber.value) === false) {cardNumber.setCustomValidity("Enter a legitimate card number");}
   else {cardNumber.setCustomValidity("");}
}

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

function sumDigits(numStr) {
   var digitTotal = 0;
   for (var i = 0; i < numStr.length; i++) {
      digitalTotal += parseInt(numStr.charAt(i));
   }
   return digitTotal;
}

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


function writeSessionValues() {
   document.getElementById("donorName").textContent = sessionStorage.name;
   document.getElementById("donation").textContent = sessionStorage.donation;
   document.getElementById("donorEmail").textContent = sessionStorage.email;
   document.getElementById("donorPhone").textContent = sessionStorage.phone;
}