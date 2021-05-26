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

window.addEventListener("load", function(){
    calcCart();
    document.getElementById("regSubmit").onclick = sessionTest;
    document.getElementById("fnBox").onblur = calcCart;
    document.getElementById("lnBox").onblur = calcCart;
    document.getElementById("groupBox").onblur = calcCart;
    document.getElementById("mailBox").onblur = calcCart;
    document.getElementById("phoneBox").onblur = calcCart;
    document.getElementById("banquetBox").onblur = calcCart;
    document.getElementById("sessionBox").onchange = calcCart;
    document.getElementById("mediaCB").onclick = calcCart;
})



// Provides validation test for selection list
function sessionTest() {
    var conferenceSession = document.getElementById("sessionBox");
    if (conferenceSession.selectedIndex === -1) {
        conferenceSession.setCustomValidity("Select a session packagae")
    } else {
        conferenceSession.setCustomValidity(" ");
    }
}

// Calculates the registration cost and saves customer's information and choices
function calcCart() {
    sessionStorage.confName = document.forms.regForm.elements.firstName.value + " " + document.forms.regForm.elements.lastName.value;
    sessionStorage.confGroup = document.forms.regForm.elements.group.value;
    sessionStorage.confMail = document.forms.regForm.elements.email.value;
    sessionStorage.confPhone = document.forms.regForm.elements.phoneNumber.value;
    sessionStorage.confBanquet = document.forms.regForm.elements.banquetGuests.value;


    sessionStorage.confBanquetCost = document.forms.regForm.elements.banquetGuests.value*55;

    // Record which session the user chose
    var selectedSession = document.getElementById("sessionBox").selectedIndex;
    if (selectedSession !== -1) {
        sessionStorage.conferenceSession = document.forms.regForm.elements.sessionBox[selectedSession].text;
        sessionStorage.conferenceSessionCost = document.forms.regForm.elements.sessionBox[selectedSession].value;
    } else {
        sessionStorage.conferenceSession = "No";
        sessionStorage.conferenceSessionCost = 0;
    }

    // Enables user to purchase media package
    if (document.forms.regForm.elements.mediaCB.checked) {
        sessionStorage.confPack = "Yes";
        sessionStorage.confPackCost = 115;
    } else {
        sessionStorage.confPack = "No";
        sessionStorage.confPackCost = 0;
    }

    // Calculate the total session cost
    sessionStorage.confTotal = parseFloat(sessionStorage.conferenceSessionCost) + parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confPackCost); 


    writeSessionValues();
}



function writeSessionValues() {
    document.getElementById("regName").textContent = sessionStorage.confName
    document.getElementById("regGroup").textContent = sessionStorage.confGroup
    document.getElementById("regPhone").textContent = sessionStorage.confPhone
    document.getElementById("regSession").textContent = sessionStorage.conferenceSession
    document.getElementById("regBanquet").textContent = sessionStorage.confBanquet
    document.getElementById("regPack").textContent = sessionStorage.confPack
    document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal
}



