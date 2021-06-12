"use strict";

/*
   Filename:  sports_donors_sort.js

   Author:  Vincent Nguyen
   Date:    June 9, 2021
   
   Variables:
   The 'donors' variable is created to have a corresponding array for the writeDonorRow function,
   which creates the table row for the main donor table.

   It includes all values for the table stored in an array. 

   The variables have column indices that have corresponding values:
   donors[0] - donorID
   donors[1] - first name
   donors[2] - last name
   donors[3] - phone number
   donors[4] - email
   donors[5] - donation amount
   donors[6] - donation date   


   Functions
   =============

   calcSum(donorAmt)
   This is a callback function to add the array's donation amount to the variable donationTotal

   findMajorDonors(donorAmt)
   This is a callback function returning true if the value of the person's donation is => 1000 (they all are).

   donorSortDescending(a, b)
   This is a callback function sorting the donations in descending order.

   writeDonorRow(value)
   This is a callback function that creates table rows and adds them into the HTML file. 



*/


var donors = 
[
   ["donor1", "Plaschke", "Bill", "626-515-9238", "billplaschke@latimes.com", 20000, "5/13/2021"],
   ["donor2", "Smith", "Stephen", "213-121-0192", "stephenasmith@espn.com", 1000, "5/13/2021"],
   ["donor3", "Ireland", "John",  "502-555-2851", "johnireland@espn.com", 2000, "5/15/2021"],
   ["donor4", "Johnson", "Ernie", "859-555-9374", "ernestjohnson@turner.com", 2000, "5/16/2021"],
   ["donor5", "Thompson", "Mychal", "270-555-3249", "mychalthompson@espn.com", 2000, "5/17/2021"],
   ["donor6", "Hill", "Jim", "818-138-2130", "jimhill@cbs.com", 1000, "5/20/2021"],
   ["donor7", "Aldridge", "David", "212-837-4342", "davidaldridge@athletic.com", 2000, "5/20/2021"],
   ["donor8", "Shelburne", "Ramona", "213-441-9837", "ramonashelburne@espn.com", 2000, "5/21/2021"],
   ["donor9", "Sedano", "Jorge", "213-746-2554", "jorgesedano@espn.com", 2000, "5/23/2021"],
   ["donor10", "Cooper", "Michael", "626-221-5281", "michaelcooper@abc.com", 2000, "5/23/2021"],
   ["donor14", "Bayless", "Skip", "212-824-8102", "skipbayless@fox.com", 1000, "5/3/2021"],
   ["donor15", "Schefter", "Adam", "212-374-7662", "adamschefter@espn.com", 1000, "5/5/2021"],
   ["donor16", "Wojnarowski", "Adrian", "212-622-2139", "wojbomb@espn.com", 5000, "5/7/2021"],
   ["donor17", "Nichols", "Rachel", "213-622-2231", "rachelnichols@espn.com", 1000, "5/11/2021"],
   ["donor19", "Van Pelt", "Scott", "212-013-6193", "scottvanpelt@espn.com", 1000, "5/14/2021"],
   ["donor20", "Goon", "Kyle", "213-818-6262", "kylegoon@scng.com", 2000, "5/17/2021"],
   ["donor21", "Oram", "Bill",  "818-213-7146", "kylegoon@athletic.com", 5000, "5/19/2021"],
   ["donor22", "Granderson", "LZ", "859-555-9684", "lzgranderson@latimes.com", 1000, "5/19/2021"],
   ["donor23", "Farmer", "Sam", "626-725-0261", "samfarmer@latimes.com", 1000, "5/20/2021"],
   ["donor26", "Torre", "Pablo", "212-791-5397", "pablotorre@espn.com", 5000, "5/28/2021"],
   ["donor27", "Grosbard", "Adam", "626-039-6281", "adamgrosbard@scng.com", 1000, "6/2/2021"],
   ["donor28", "Swanson", "Mirjam", "818-622-3380", "mirjamswanson@scng.com", 2000, "6/2/2021"],
   ["donor29", "Robledo", "Fred", "626-947-6920", "fredrobledo@scng.com", 2000, "6/2/2021"],
   ["donor30", "Fryer", "Steve", "714-733-9100", "stevefryer@scng.com", 2000, "6/4/2021"],
   ["donor31", "Barnes", "Evan", "323-878-6553", "evanbarnes@scng.com", 2000, "6/4/2021"],
   ["donor32", "Jones", "Bomani", "212-038-9047", "bomanijones@espn.com", 1000, "6/4/2021"],
   ["donor33", "Tyler", "Martin", "+6166193104", "martintyler@bbc.com", 2000, "6/4/2021"],
   ["donor34", "Jackson", "Mark", "212-911-4900", "markjackson@espn.com", 1000, "6/5/2021"],
   ["donor35", "Van Gundy", "Jeff", "714-772-1209", "jeffvangundy@espn.com", 1000, "6/9/2021"],
   ["donor36", "Breen", "Mike", "909-213-2019", "mikebreen@espn.com", 20000, "6/11/2021"],
]


/* Calculate the total donation */

var donationTotal = 0;
donors.forEach(calcSum);

/* Tables for total donors and total donated */

var summaryTable = "<table>";
summaryTable += "<tr><th>Donors</th><td>" + donors.length + "</td></tr>";
summaryTable += "<tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr>" 
summaryTable += "</table>";

document.getElementById("donationSummary").innerHTML = summaryTable;

/* Array created for those who donated $1000 or more --- 
For the sake of this assignment, everyone donated $1000 */

var majorDonors = donors.filter(findMajorDonors);

/* Donors sorted in descending order */

majorDonors.sort(donorSortDescending);

/* Main table of major donors */

var donorTable = "<table>";
donorTable += "<caption>Major Donors</caption>";
donorTable += "<tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Phone</th><th>E-mail</th></tr>"

/* Table rows created for donors */

majorDonors.forEach(writeDonorRow);
donorTable += "</table>"
document.getElementById("donorTable").innerHTML = donorTable;

/* calcSum and findMajorDonors uses parameter 'donorAmt' from donors array */
function calcSum(donorAmt) {
   donationTotal += donorAmt[5];
}

function findMajorDonors(donorAmt) {
   return donorAmt[5] >= 1000;
}

function donorSortDescending(a, b) {
   return b[5] - a[5];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[5].toLocaleString() + "</td>";
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[6] + "</td>";
   donorTable += "<td>" + value[2] + " " + value[1] + "</td>";
   donorTable += "<td>" + value[3] + "</td>";
   donorTable += "<td>" + value[4] + "</td>";
   donorTable += "</tr>";
}