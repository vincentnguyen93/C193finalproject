"use strict"

/* 

   Filename:  sports_donor_signup.js

   Author:  Vincent Nguyen
   Date:    June 9, 2021
   
   Function List
   =============
   
   donorSubmission()
   Calls values from sports_donors_sort and plugs it into form HTML elements using sessionStorage and corresponding
   variable. This will be distributed to other aside HTML elements to display donor information.
      
   writeSessionValues()
   Calls values from sports_donors_sort to distribute to sports_donors.html, sports_credit.html
   and sports_checkout.html to display in corresponding aside HTML elements. 
   It displays donor's information for the donor to confirm on each page.


*/

window.addEventListener("load", function(){
    donorSubmission();
    document.getElementById("fnBox").onblur = donorSubmission;
    document.getElementById("lnBox").onblur = donorSubmission;
    document.getElementById("donationBox").onblur = donorSubmission;
    document.getElementById("emailBox").onblur = donorSubmission;
    document.getElementById("phoneBox").onblur = donorSubmission;
 })


 function donorSubmission() {
    sessionStorage.name = document.forms.donorForm.elements.firstName.value + " " + document.forms.donorForm.elements.lastName.value;
    sessionStorage.donation = document.forms.donorForm.elements.donationAmt.value;
    sessionStorage.email = document.forms.donorForm.elements.email.value;
    sessionStorage.phone = document.forms.donorForm.elements.phoneNumber.value;
 
    writeSessionValues();
 };


function writeSessionValues() {
    document.getElementById("donorName").textContent = sessionStorage.name;
    document.getElementById("donation").textContent = "$" + sessionStorage.donation;
    document.getElementById("donorEmail").textContent = sessionStorage.email;
    document.getElementById("donorPhone").textContent = sessionStorage.phone;
 }