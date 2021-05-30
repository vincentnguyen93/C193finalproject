"use strict"

/* 


   Author:  
   Date:    
   
   Function List
   =============
   
   donorSubmission()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Transfer data values from donation in to the
      registration summary form

*/

window.addEventListener("load", function(){
    donorSubmission();
    document.getElementById("fnBox").onblur = donorSubmission;
    document.getElementById("lnBox").onblur = donorSubmission;
    document.getElementById("donation").onblur = donorSubmission;
    document.getElementById("mailBox").onblur = donorSubmission;
    document.getElementById("phoneBox").onblur = donorSubmission;
 })


 function donorSubmission() {
    sessionStorage.name = document.forms.donorForm.elements.firstName.value + " " + document.forms.donorForm.elements.lastName.value;
    sessionStorage.donation = document.forms.donorForm.elements.donation.value;
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