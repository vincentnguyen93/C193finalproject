"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  
   Date:    
   
   Function List
   =============
   
   sessionTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

window.addEventListener("load", writeSessionValues)


function writeSessionValues() {
    document.getElementById("donorName").textContent = sessionStorage.name;
    document.getElementById("donation").textContent = sessionStorage.donation;
    document.getElementById("donorEmail").textContent = sessionStorage.email;
    document.getElementById("donorPhone").textContent = sessionStorage.phone;
 }


