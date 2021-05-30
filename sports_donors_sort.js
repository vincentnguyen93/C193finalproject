"use strict";


/*
   Filename:   
   
   Variables:
   the donors multi-dimension array contains the following data with following column indices
      donors[0] - donorID
      donors[1] - first name
      donors[2] - last name
      donors[3] - phone number
      donors[4] - email
      donors[5] - donation amount
      donors[6] - donation date   
*/

var donors = 
[
   ["donor1", "Mildred", "Moore", "606-555-2928", "mmoore@example.com", 200, "3/13/2021"],
   ["donor2", "Jodi", "Wells", "859-555-4667", "jwells@example.com", 1000, "3/13/2021"],
   ["donor3", "Irene", "Berry",  "502-555-2851", "iberry@example.com/mail", 2000, "3/15/2021"],
   ["donor4", "Guillermo", "Shafer", "859-555-9374", "gshafe@example.com/mail", 200, "3/16/2021"],
   ["donor5", "Monica", "Gray", "270-555-3249", "mgray@example.com/mail", 200, "3/17/2021"],
   ["donor6", "Jerold", "Cole", "502-555-9286", "jcole@example.com/mail", 100, "3/20/2021"],
   ["donor7", "David", "Butler", "859-555-1769", "dbutle@example.com/mail", 200, "3/20/2021"],
   ["donor8", "Mae", "Tillman", "502-555-7789", "mtillm@example.com/mail", 2000, "3/21/2021"],
   ["donor9", "Raymond", "Adams", "270-555-1686", "radams@example.com/mail", 200, "3/23/2021"],
   ["donor10", "James", "Smith", "859-555-8359", "jsmith@example.com/mail", 200, "3/23/2021"],
   ["donor11", "Frederick", "Turner", "606-555-6493", "fturne@example.com/mail", 100, "3/23/2021"],
   ["donor12", "Alfred", "Woodson", "502-555-2485", "awoods@example.com/mail", 100, "3/29/2021"],
   ["donor13", "Matthew", "Hebert", "502-555-1445", "mheber@example.com/mail", 100, "3/29/2021"],
   ["donor14", "Michelle", "Hatfield", "270-555-5533", "mhatfi@example.com/mail", 100, "4/3/2021"],
   ["donor15", "Jeffrey", "Harris", "502-555-7281", "jharri@example.com/mail", 100, "4/5/2021"],
   ["donor16", "Corene", "Reece", "270-555-5783", "creece@example.com/mail", 200, "4/7/2021"],
   ["donor17", "Francis", "Guzman", "859-555-7487", "fguzma@example.com/mail", 100, "4/11/2021"],
   ["donor18", "Patricia", "Curtis", "859-555-2443", "pcurti@example.com/mail", 100, "4/13/2021"],
   ["donor19", "William", "Joyce", "502-555-9262", "wjoyce@example.com/mail", 100, "4/14/2021"],
   ["donor20", "Margaret", "Parra", "502-555-4388", "mparra@example.com/mail", 200, "4/17/2021"],
   ["donor21", "Toni", "Bourdon",  "606-555-2757", "tbourd@example.com/mail", 5000, "4/19/2021"],
   ["donor22", "Joshua", "Voss", "859-555-9684", "jvoss@example.com/mail", 100, "4/19/2021"],
   ["donor23", "Marilyn", "Sams", "606-555-2458", "msams@example.com/mail", 100, "4/20/2021"],
   ["donor24", "Donald", "Brown", "502-555-2786", "dbrown@example.com/mail", 100, "4/26/2021"],
   ["donor25", "Richard", "Grahm", "606-555-7384", "rgrahm@example.com/mail", 500, "4/26/2021"],
   ["donor26", "Marjorie", "Mendez", "859-555-2683", "mmende@example.com/mail", 500, "4/28/2021"],
   ["donor27", "Royce", "Natividad", "502-555-8112", "rnativ@example.com/mail", 100, "5/2/2021"],
   ["donor28", "Robert", "Pelletier", "859-555-6454", "rpelle@example.com/mail", 200, "5/2/2021"],
   ["donor29", "Mary", "Tso", "502-555-3586", "mtso@example.com/mail", 200, "5/2/2021"],
   ["donor30", "Michele", "Reed", "502-555-5133", "mreed@example.com/mail", 200, "5/4/2021"],
   ["donor31", "Tiffany", "Grainger", "859-555-6554", "tgrain@example.com/mail", 200, "5/4/2021"],
   ["donor32", "Megan", "Sanders", "859-555-3857", "msande@example.com/mail", 100, "5/4/2021"],
   ["donor33", "Grace", "Montgomery", "606-555-2839", "gmontg@example.com/mail", 200, "5/4/2021"],
   ["donor34", "Harold", "Cook", "270-555-1134", "hcook@example.com/mail", 1000, "5/5/2021"],
   ["donor35", "Nicolette", "Howe", "502-555-3462", "nhowe@example.com/mail", 1000, "5/9/2021"],
   ["donor36", "Todd", "Rhodes", "859-555-8411", "trhode@example.com/mail", 200, "5/11/2021"],
   ["donor37", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor38", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor39", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor40", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor41", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor42", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor43", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor44", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor45", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor46", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor47", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor48", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor49", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
   ["donor50", "Louis", "Valdez", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
]

/*
   Author:  
   Date:

   Filename: 

   Functions:

   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable

   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000

   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order

   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor

*/

/* Calculate the total donation for all donors */
var donationTotal = 0;
donors.forEach(calcSum);

/* Display the summary of total number of donors and total donation */
var summaryTable = "<table>";
summaryTable += "<tr><th>Donors</th><td>" + donors.length + "</td></tr>";
summaryTable += "<tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr>" 
summaryTable += "</table>";

document.getElementById("donationSummary").innerHTML = summaryTable;

/* Create an array of donors who contributed $100 or more */
var majorDonors = donors.filter(findMajorDonors);

/* Sort the array in descending order of donation */
majorDonors.sort(donorSortDescending);

/* Create a table of major donors */
var donorTable = "<table>";
donorTable += "<caption>Major Donors</caption>";
donorTable += "<tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Phone</th><th>E-mail</th></tr>"

/* Write a separate table row for each donor */
majorDonors.forEach(writeDonorRow);
donorTable += "</table>"
document.getElementById("donorTable").innerHTML = donorTable;

function calcSum(donorAmt) {
   donationTotal += donorAmt[5];
}

function findMajorDonors(donorAmt) {
   return donorAmt[5] >= 100;
}

function donorSortDescending(a, b) {
   return b[5] - a[5];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[5].toLocaleString() + "</td>";
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[6] + "</td>";
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
   donorTable += "<td>" + value[3] + "</td>";
   donorTable += "<td>" + value[4] + "</td>";
   donorTable += "</tr>";
}