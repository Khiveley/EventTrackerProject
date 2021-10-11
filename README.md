# EventTrackerProject

# Overview

This program implements CRUD (Create, Read, Update, and Delete) functionality utilizing Spring Data JPA and RESTful services.  I want to have a good structure in place for continuing to learn and code after this bootcamp completes; hence, the title for my app is "AfterBoot."  Creating an online study log will be useful since I'll already be working at the computer and have a means to input all of the information regarding study sessions for the day.

# How to Use

This project is provisioned to Tomcat: http://3.143.202.149:8080/AfterBoot/api/studies  Additional information about full application use will be provided once the front end code has been implemented.  Stay Tuned!

# Technologies Used

* Spring Tool Suite (Spring Data JPA, Spring Boot)
* MySQL Workbench (SQL)
* Atom
* Gradle
* Postman
* Java
* MAMP
* Bash Terminal

# Application Expected Routes

| Return Type  | Route                   | Functionality                   |
|--------------|-------------------------|---------------------------------|
|`List<Study>` |`GET api/studies`        | Get all studies                 |
|`Study`       |`GET api/studies/{id}`   | Get one study by id             |
|`Study`       |`POST api/studies`       | Create a new study              |
|`Study`       |`PUT api/studies/{id}`   | Replace an existing study by id |
|`void`        |`DELETE api/studies/{id}`| Delete an existing study by id  |

# Lessons Learned

This project continued to reinforce my learning to work with Object Oriented Programming and introduced working with request mappings, repositories, and services outside of the examples that were provided in our classroom setting. I was hesitant to work with Date and Time after some of the other projects; however, since I really want to be able to visualize Date and Time data once the front end is built I forged ahead.  In my Postman tests for CREATE and UPDATE functions, I kept getting null for a return on my studyDate field and I spent the longest time trying to determine why the field would return via both of the READ functions properly.  I had provided the SQL syntax study_date instead of studyDate.  Updating the field label/name in my methods then allowed for them to work correctly.
