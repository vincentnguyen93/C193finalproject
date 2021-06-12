"use strict";
/*
   
   Filename:  sports_donor_info.js

   Author:  Vincent Nguyen
   Date:    June 9, 2021

   Function List
   =============
      
   writeSessionValues()
   Calls values from sports_donors_sort to distribute to sports_donors.html, sports_credit.html
   and sports_checkout.html to display in corresponding aside HTML elements. 
   It displays donor's information for the donor to confirm on each page.


*/

window.addEventListener("load", writeSessionValues)

function writeSessionValues() {
    document.getElementById("donorName").textContent = sessionStorage.name;
    document.getElementById("donation").textContent = "$" + sessionStorage.donation;
    document.getElementById("donorEmail").textContent = sessionStorage.email;
    document.getElementById("donorPhone").textContent = sessionStorage.phone;
 }
