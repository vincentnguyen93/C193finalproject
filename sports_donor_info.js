"use strict";
/*
   
   Filename: 

   Author:  
   Date:    
   
   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

window.addEventListener("load", writeSessionValues)

function writeSessionValues() {
    document.getElementById("donorName").textContent = sessionStorage.name;
    document.getElementById("donation").textContent = "$" + sessionStorage.donation;
    document.getElementById("donorEmail").textContent = sessionStorage.email;
    document.getElementById("donorPhone").textContent = sessionStorage.phone;
 }
