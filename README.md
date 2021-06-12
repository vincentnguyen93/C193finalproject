
# The Unrecruited

This final project is an idea stemmed from last semester's C192 final project. 
I designed a news website inspired by the Los Angeles Times, and this time around, I resdesigned it with a new color scheme and three extended pages that include JS codes for entering form identification and credit card information.

It resembles work we've done throughout the semester, and the form inputs and card information form is a direct resemblance of the case studies we did midway into the course.

Initially, I wanted to create a donation table that showcases the top donors, but it felt too simple. I thought about how people donate money to begin with. What's good of a website if it's just going to show information and not be able to gather it? 

The design is newly revamped as well. I tried to make it a little more sleak and modern. 

Challenges: 

My biggest challenge is having every element be so stagnant. This was something I had trouble with in C192 with the grid layout, and I wanted it more flexible, but a time crunch had me resort to the basics.

I initially wanted to do just a plan donor's table page for a made-up high school athletic department, but then I thought it was too plain and simple like I said before.

I had a few ideas that I wanted to add to the plain checkout page. It just displays a thank you note and the donor's information once again (can't get enough of that...an investor should always be reminded of their investment).

After Paolo's presentation, I wanted to add a weather API at the checkout page, but I was having trouble connecting the file with the cross-origin request. I tried this on Thursday and felt I had insufficient time to figure it out, so I scrapped it. 

I wanted to try to add a small, pop-up window that would display a top story, but I couldn't find an example that would help me put it in the lower portion of the checkout page. 

Lastly, I wanted to be able to update the donor's table with new inputs. I planned on using SQL to see if I can install an outside database so that the donor table can update every time someone new input their information, but I couldn't get around to implementing it.

Here we go with the nitty gritty, starting with the HTML files:

-- vn_sports.html --

This is the web page I designed for C192, but it originally had a white-black-gray color scheme to it. 

I ended up using a teal-white-black linear gradient to make it look a little more sleak and eye-popping. 

The primary layout is the same, but the headers adapted the color scheme and the navigation bar has a new hover feature on it.

There are several key elements to the page like other news publications have, the big one being the main story and two key articles. This page layout is really inspired by a typical newspaper layout.

A new addition to the page is the "Donate" tab in the nav bar, which segues us into the next page.

-- sports_donors.html --

This file displays the top donors and their information (donor ID, donation amount, donor name, donor email and donor phone). The email and phone is crucial information because it displays transparency. It also can provide other donor seekers to contact the donors for contribution...sorry for the spam emails/calls!

The form uses js files to validate the inputted information. Below the form is an aside element that displays the donor's information and pops up as the user inputs their donation amount, name, email and phone number. The latter two information provides the web developer to send newsletters or any vital information that comes with the website.

The donor table and donation summary located below the aside element uses a js file to be displayed. The donor table's information is stored in the js file and the donation summary table is added up to show total amount of contributions and total amount of donors from the main donor table. This is reminiscent of a case study we did in class, and, again, shows the website's transparency to the public. The purpose is akin to a political figure's election contributions. You want to show the news outlet's unbias character!



-- sports_credit.html --

This is a basic credit card validation form. The main element is set to the right side because I believe the donor's information is just as important. What if the information that I submitted is wrong? What if I donated more money than I wanted? Or what if I want to donate more? They can return to the donate page and rectify their submission.

If they are happy with it, the user can move on and submit their credit information and continue on to the checkout page.


-- sports_checkout.html --

This again displays the stored information from the initial donors page so that it can confirm the user's submission. It's a receipt for the user. 

This page is the simplest of the lot. I transferred the aside element from the previous two pages and tweaked the style a bit to display it bigger alongside a thank you note. A button is there to send the user back to the home page if desired.


And on to the JS files:

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


   Function List

   =============

   calcSum(donorAmt)
   This is a callback function to add the array's donation amount to the variable donationTotal

   findMajorDonors(donorAmt)
   This is a callback function returning true if the value of the person's donation is => 1000 (they all are).

   donorSortDescending(a, b)
   This is a callback function sorting the donations in descending order.

   writeDonorRow(value)
   This is a callback function that creates table rows and adds them into the HTML file. 

===========================================

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

===========================================

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

===========================================

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
