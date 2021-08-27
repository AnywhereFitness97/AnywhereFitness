# endpoints

# HERE IS THE API BASE URL

https://anywherefitnessapis.herokuapp.com/

# endpoints for Auth "Register/Login"

# REGISTER USER INFO TO DATABASE

https://anywherefitnessapis.herokuapp.com/api/v1/auth/register

# Please send the data in this form in this format:

{
first_name:"string",
last_name:"string",
email:"string that includes "@" ",
username:"string",
password:"string",
role:"Instructor or Client roles Only"
}

# Response

- {
  "code": 100,
  "message": "Welcome to your new gym Random1, Allow us to show you all your Client features",
  "NewUserLogin": {
  "userID": 11,
  "first_name": "Random1",
  "last_name": "Person52",
  "email": "RP25@gmail.com",
  "username": "Random123456",
  "password": "$2a$10$HRSynco4twC4BVDzq0Z/Sew8TDjFWKRjAOCr85Tmso1KrvJGXbAeW",
  "role": "Instructor"
  }
  }

# LOGIN USER INFO TO DATABASE

https://anywherefitnessapis.herokuapp.com/api/v1/auth/login

# Please send the data in this form in this format:

{
username:"string",
password:"string",
role: "Instructor or Client roles Only"
}

# Response if Credentialls are Correct

{
"message": "Welcome back Jamie, Here is your AccessToken",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5NTEyNDMsImV4cCI6MTYyOTk1MTI3M30.fL0Po1gd1nExBwiNcYlVWhJKBUmNzTAqUxYfxve5IoI"
}

# GET ALL USERS

https://anywherefitnessapis.herokuapp.com/api/v1/user/userinfo

# Response

- {
  "Status": "Success",
  "Member_Count": 2,
  "Members_Info": [
  {
  "userID": number,
  "first_name": "string",
  "last_name": "string",
  "email": "string that includes "@"@gmail.com",
  "username": "string",
  "password": "hashpassword",
  "role": "Instructor or Client"
  },
  {
  "userID": number,
  "first_name": "string",
  "last_name": "string",
  "email": "string that includes "@"@gmail.com",
  "username": "string",
  "password": "hashpassword",
  "role": "Instructor or Client"
  }

# GET USER BY ID

https://anywherefitnessapis.herokuapp.com/api/v1/user/userinfo/:id

# Please replace ":id" with a Number or "userId" whom you are looking for. params takes in params

# Response

- {
  "Status": "Success",
  "Member_Count": 1,
  "Members_Info": [
  {
  "userID": number,
  "first_name": "string",
  "last_name": "string",
  "email": "string that includes "@"@gmail.com",
  "username": "string",
  "password": "hashpassword",
  "role": "Instructor or Client"
  },

# UPDATE USER BY ID

https://anywherefitnessapis.herokuapp.com/api/v1/user/userinfo/:id

# Please replace ":id" with a Number or "userId" whom you are looking to update. params takes in params

# Response

- {
  "Status": "Success",
  "Member_Count": 1,
  "Members_Info": [
  {
  "userID": number,
  "first_name": "string",
  "last_name": "string",
  "email": "string that includes "@"@gmail.com",
  "username": "string",
  "password": "hashpassword",
  "role": "Instructor or Client"
  },

# DELETE USER BY ID

https://anywherefitnessapis.herokuapp.com/api/v1/user/userinfo/:id

# Please replace ":id" with a Number or "userId" whom you are looking to DELETE. params takes in params

# Response

{
"deleteStatus": "string",
"message": "string"
}

# GET ALL CLASSES

https://anywherefitnessapis.herokuapp.com/api/v1/class/

# Response

{
"classCount": 2,
"allClasses": [
{
"classId": 1,
"class_name": "Running The Block",
"class_time": "12:00",
"class_am_or_pm": "pm",
"class_date": "2021-26-08",
"class_duration": 90,
"class_type": "Cardio",
"class_intensity_level": "Hard",
"class_location": "Naples",
"class_client_list_id": 1,
"class_description": "You know what it is. time to run the block, hold down my set, get shit started",
"class_instructor_username": "tjackreece",
"class_cost": 35
},
{
"classId": 2,
"class_name": "Running Up a Hill",
"class_time": "5:00",
"class_am_or_pm": "AM",
"class_date": "2021-26-08",
"class_duration": 120,
"class_type": "Cardio",
"class_intensity_level": "Hard",
"class_location": "Naples",
"class_client_list_id": 2,
"class_description": "You know what it is. time to run this, hold down my breakfast",
"class_instructor_username": "tjackreece",
"class_cost": 20
}
]
}

# GET CLASS BY ID

https://anywherefitnessapis.herokuapp.com/api/v1/class/:id

# Please replace ":id" with a Number or "classId" whisch you are looking for. params takes in params

# Response

{
"classCount": 1,
"Class": [
{
"classId": 1,
"class_name": "Running The Block",
"class_time": "12:00",
"class_am_or_pm": "pm",
"class_date": "2021-26-08",
"class_duration": 90,
"class_type": "Cardio",
"class_intensity_level": "Hard",
"class_location": "Naples",
"class_client_list_id": 1,
"class_description": "You know what it is. time to run the block, hold down my set, get shit started",
"class_instructor_username": "tjackreece",
"class_cost": 35
},
]
}

# CREATE CLASS

https://anywherefitnessapis.herokuapp.com/api/v1/class/

# Please send the data in this form in this format:

{
"class_name":"Running The Block",
"class_time":"12:00",
"class_am_or_pm":"pm",
"class_date":"2021-26-08",
"class_duration":90,
"class_type":"Cardio",
"class_intensity_level":"Hard",
"class_location":"Naples",
"class_description":"You know what it is. time to run the block, hold down my set, get shit started",
"class_instructor_username":"tjackreece",
"class_cost":"35"
}

# Response

{
"createdClassCount": 1,
"newClass": [
{
"classId": 3,
"class_name": "Running The Block",
"class_time": "12:00",
"class_am_or_pm": "pm",
"class_date": "2021-26-08",
"class_duration": 90,
"class_type": "Cardio",
"class_intensity_level": "Hard",
"class_location": "Naples",
"class_client_list_id": 3,
"class_description": "You know what it is. time to run the block, hold down my set, get shit started",
"class_instructor_username": "tjackreece",
"class_cost": 35
}
]
}

# UPDATE CLASS

https://anywherefitnessapis.herokuapp.com/api/v1/class/:id

# Please send the data in this form in this format:

{
"class_name":"Running The Block",
"class_time":"12:00",
"class_am_or_pm":"pm",
"class_date":"2021-26-08",
"class_duration":"90",
"class_type":"Cardio",
"class_intensity_level":"Hard",
"class_location":"Naples",
"class_description":"You know what it is. time to run the block, hold down my set, get shit started",
"class_instructor_username":"tjackreece",
"class_cost": "25"
}

# Response

{
"Code": 201,
"UpdatedStatus": "Class Updated Successfully",
"UpdatedClassCount": 1,
"UpdatedClass": [
{
"classId": 1,
"class_name": "Running The Block",
"class_time": "12:00",
"class_am_or_pm": "pm",
"class_date": "2021-26-08",
"class_duration": 90,
"class_type": "Cardio",
"class_intensity_level": "Hard",
"class_location": "Naples",
"class_client_list_id": 1,
"class_description": "You know what it is. time to run the block, hold down my set, get shit started",
"class_instructor_username": "tjackreece",
"class_cost": 25
}
]
}

# DELETE CLASS

https://anywherefitnessapis.herokuapp.com/api/v1/class/:id

# Please replace ":id" with a Number or "classId" which you are looking to DELETE. params takes in params

{
"class_name":"Running The Block",
"class_time":"12:00",
"class_am_or_pm":"pm",
"class_date":"2021-26-08",
"class_duration":"90",
"class_type":"Cardio",
"class_intensity_level":"Hard",
"class_location":"Naples",
"class_description":"You know what it is. time to run the block, hold down my set, get shit started",
"class_instructor_username":"tjackreece",
"class_cost": "25"
}

# Response

{
"deleteStatus": "string",
"message": "string"
}

# Get all Client List

https://anywherefitnessapis.herokuapp.com/api/v1/clientList/

# Response

- {
  "classListsCount": 12,
  "allClassLists": [
  {
  "client_list_id": 1,
  "class_id": 1,
  "usersId": 1
  },{
  "client_list_id": 2,
  "class_id": 1,
  "usersId": 1
  }
  ]
  }

  GET CLIENT LISTS BY ID

https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/:id

# Please replace ":id" with a Number or "client_list_id" whisch you are looking for. params takes in params

# Response

{
"classListCount": 1,
"ClassList": [
{
"client_list_id": 1,
"class_id": 1,
"usersId": 1
}
]
}

# CREATE CLIENT LISTS

https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/

# Please send the data in this form in this format:

Provide "classId": "number"

provide a usersId:"number"

{
"class_id":number,
"usersId":number
}

# Response

{
"message": "Client added in class successfully",
"ClassInfo": {
"ClassID": 1,
"Classname": "Running The Block",
"ClassTime": "12:00 pm",
"ClassDate": "2021-26-08",
"Location": "Naples",
"Cost": 25
},
"MemberInfo": {
"UserID": 1,
"Name": "Timothy Jackreece",
"Email": "tjackreece1@gmail.com",
"Username": "tjackreece",
"Role": "Instructor"
},
"InstructorInfo": {
"Firstname": "Timothy",
"Lastname": "Jackreece",
"Email": "tjackreece1@gmail.com",
"Ussername": "tjackreece"
},
"FoundClientList": [
{
"client_list_id": 10,
"class_id": 1,
"usersId": 1
}
]
}

# UPDATE CLASS

https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/:id

# Please replace ":id" with a Number or "client_list_id" whisch you are looking for. params takes in params

# Please send the data in this form in this format:

# Please send the data in this form in this format:

Provide "classId": "number"

provide a usersId:"number"

{
"class_id":number,
"usersId":number
}

# Response

{
"message": "Client has been updated in database successfully",
"ClassInfo": {
"ClassID": 2,
"Classname": "Running Up a Hill",
"ClassTime": "5:00 AM",
"ClassDate": "2021-26-08",
"Location": "Naples",
"Cost": 20
},
"MemberInfo": {
"UserID": 5,
"Name": "James Terude",
"Email": "jamesT@gmail.com",
"Username": "jTdoYouLoveMe",
"Role": "Client"
},
"InstructorInfo": {
"Firstname": "Timothy",
"Lastname": "Jackreece",
"Email": "tjackreece1@gmail.com",
"Ussername": "tjackreece"
},
"FoundClientList": [
{
"client_list_id": 1,
"class_id": 2,
"usersId": 5
}
]
}

DELETE CLASS

https://anywherefitnessapis.herokuapp.com/api/v1/class/:id

# Please replace ":id" with a Number or "classId" which you are looking to DELETE. params takes in params

{
"class_name":"Running The Block",
"class_time":"12:00",
"class_am_or_pm":"pm",
"class_date":"2021-26-08",
"class_duration":"90",
"class_type":"Cardio",
"class_intensity_level":"Hard",
"class_location":"Naples",
"class_description":"You know what it is. time to run the block, hold down my set, get shit started",
"class_instructor_username":"tjackreece",
"class_cost": "25"
}

# Response

{
"deleteStatus": "string",
"message": "string"
}

# SEARCH BAR

https://anywherefitnessapis.herokuapp.com/api/v1/search/instructorusername

https://anywherefitnessapis.herokuapp.com/api/v1/search/instructorfirstname

https://anywherefitnessapis.herokuapp.com/api/v1/search/date

https://anywherefitnessapis.herokuapp.com/api/v1/search/time

https://anywherefitnessapis.herokuapp.com/api/v1/search/location

https://anywherefitnessapis.herokuapp.com/api/v1/search/classname

https://anywherefitnessapis.herokuapp.com/api/v1/search/type

https://anywherefitnessapis.herokuapp.com/api/v1/search/intensitylevel

https://anywherefitnessapis.herokuapp.com/api/v1/search/clientfirstname

https://anywherefitnessapis.herokuapp.com/api/v1/search/clientusername
