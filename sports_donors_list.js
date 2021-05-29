"use strict";


/*
   Filename: ah_product.js  
   
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
   ["donor87", "Mildred", "Moore", "9451 Pearse Grove Drive", "Maysville", "KY", "41056", "606-555-2928", "mmoore@example.com/mail", 200, "3/13/2021"],
   ["donor88", "Jodi", "Wells", "3463 Wolfe Lane", "Lexington", "KY", "40503", "859-555-4667", "jwells@example.com/mail", 1000, "3/13/2021"],
   ["donor89", "Irene", "Berry", "8058 King Villas Lane", "Louisville", "KY", "40211", "502-555-2851", "iberry@example.com/mail", 2000, "3/15/2021"],
   ["donor90", "Guillermo", "Shafer", "2862 Roppe Street", "Lexington", "KY", "40506", "859-555-9374", "gshafe@example.com/mail", 200, "3/16/2021"],
   ["donor91", "Monica", "Gray", "7383 Galwey Lane", "Bowling Green", "KY", "42104", "270-555-3249", "mgray@example.com/mail", 200, "3/17/2021"],
   ["donor92", "Jerold", "Cole", "9047 Temple Lane", "Frankfort", "KY", "40601", "502-555-9286", "jcole@example.com/mail", 100, "3/20/2021"],
   ["donor93", "David", "Butler", "6637 Clarence Street", "Lexington", "KY", "40512", "859-555-1769", "dbutle@example.com/mail", 200, "3/20/2021"],
   ["donor94", "Mae", "Tillman", "9307 Eden Avenue", "Frankfort", "KY", "40604", "502-555-7789", "mtillm@example.com/mail", 2000, "3/21/2021"],
   ["donor95", "Raymond", "Adams", "1039 Hill Court", "Bowling Green", "KY", "42101", "270-555-1686", "radams@example.com/mail", 200, "3/23/2021"],
   ["donor96", "James", "Smith", "8275 Strandside Way", "Lexington", "KY", "40518", "859-555-8359", "jsmith@example.com/mail", 200, "3/23/2021"],
   ["donor97", "Frederick", "Turner", "4106 Crampton Court", "Albany", "KY", "42602", "606-555-6493", "fturne@example.com/mail", 100, "3/23/2021"],
   ["donor98", "Alfred", "Woodson", "6211 Connell Way", "Louisville", "KY", "40211", "502-555-2485", "awoods@example.com/mail", 100, "3/29/2021"],
   ["donor99", "Matthew", "Hebert", "7697 Parkgate Street", "Louisville", "KY", "40220", "502-555-1445", "mheber@example.com/mail", 100, "3/29/2021"],
   ["donor100", "Michelle", "Hatfield", "2838 King Avenue SW", "Bowling Green", "KY", "42104", "270-555-5533", "mhatfi@example.com/mail", 100, "4/3/2021"],
   ["donor101", "Jeffrey", "Harris", "397 Crescent Drive", "Louisville", "KY", "40220", "502-555-7281", "jharri@example.com/mail", 100, "4/5/2021"],
   ["donor102", "Corene", "Reece", "1089 Sandstone Court", "Bowling Green", "KY", "42102", "270-555-5783", "creece@example.com/mail", 200, "4/7/2021"],
   ["donor103", "Francis", "Guzman", "9409 Applemarket Avenue", "Lexington", "KY", "40516", "859-555-7487", "fguzma@example.com/mail", 100, "4/11/2021"],
   ["donor104", "Patricia", "Curtis", "5837 Croft Street", "Lexington", "KY", "40518", "859-555-2443", "pcurti@example.com/mail", 100, "4/13/2021"],
   ["donor105", "William", "Joyce", "5317 Mead Court", "Louisville", "KY", "40206", "502-555-9262", "wjoyce@example.com/mail", 100, "4/14/2021"],
   ["donor106", "Margaret", "Parra", "4702 Barley Hill Street", "Louisville", "KY", "40213", "502-555-4388", "mparra@example.com/mail", 200, "4/17/2021"],
   ["donor107", "Toni", "Bourdon", "1567 House Street", "Ashland", "KY", "41102", "606-555-2757", "tbourd@example.com/mail", 5000, "4/19/2021"],
   ["donor108", "Joshua", "Voss", "6166 Sarsfield Lane", "Winchester", "KY", "40392", "859-555-9684", "jvoss@example.com/mail", 100, "4/19/2021"],
   ["donor109", "Marilyn", "Sams", "1321 Causeway Drive", "London", "KY", "40744", "606-555-2458", "msams@example.com/mail", 100, "4/20/2021"],
   ["donor110", "Donald", "Brown", "8500 Baggot Lane", "Frankfort", "KY", "40601", "502-555-2786", "dbrown@example.com/mail", 100, "4/26/2021"],
   ["donor111", "Richard", "Grahm", "1985 Henrietta Drive", "Maysville", "KY", "41056", "606-555-7384", "rgrahm@example.com/mail", 500, "4/26/2021"],
   ["donor112", "Marjorie", "Mendez", "3087 Abbey Terrace Lane", "Lexington", "KY", "40523", "859-555-2683", "mmende@example.com/mail", 500, "4/28/2021"],
   ["donor113", "Royce", "Natividad", "6245 Benburb  Lane", "Louisville", "KY", "40203", "502-555-8112", "rnativ@example.com/mail", 100, "5/2/2021"],
   ["donor114", "Robert", "Pelletier", "3350 Arnott Circle", "Lexington", "KY", "40519", "859-555-6454", "rpelle@example.com/mail", 200, "5/2/2021"],
   ["donor115", "Mary", "Tso", "2246 College Street", "Louisville", "KY", "40215", "502-555-3586", "mtso@example.com/mail", 200, "5/2/2021"],
   ["donor116", "Michele", "Reed", "820 Brabazon Court", "Shelbyville", "KY", "40065", "502-555-5133", "mreed@example.com/mail", 200, "5/4/2021"],
   ["donor117", "Tiffany", "Grainger", "6653 Jacknell Street", "Lexington", "KY", "40518", "859-555-6554", "tgrain@example.com/mail", 200, "5/4/2021"],
   ["donor118", "Megan", "Sanders", "1898 Strandside Lane", "Lexington", "KY", "40510", "859-555-3857", "msande@example.com/mail", 100, "5/4/2021"],
   ["donor119", "Grace", "Montgomery", "749 Jewell Drive", "Ashland", "KY", "41101", "606-555-2839", "gmontg@example.com/mail", 200, "5/4/2021"],
   ["donor120", "Harold", "Cook", "1897 Vale Street", "Bowling Green", "KY", "42104", "270-555-1134", "hcook@example.com/mail", 1000, "5/5/2021"],
   ["donor121", "Nicolette", "Howe", "7179 Serlondes Street", "Frankfort", "KY", "40604", "502-555-3462", "nhowe@example.com/mail", 1000, "5/9/2021"],
   ["donor122", "Todd", "Rhodes", "3287 Beresford Avenue", "Lexington", "KY", "40505", "859-555-8411", "trhode@example.com/mail", 200, "5/11/2021"],
   ["donor123", "Louis", "Valdez", "9902 Chancery Drive", "Louisville", "KY", "40222", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2021"],
]