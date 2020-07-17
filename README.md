# About this Project
This project has been developed to test a React application, using Cypress IO for UI and API test

# Details:
The project constracted using: 
1. Cypress IO : used to Buidl both the END - END Test and API Test
2. Plugins : cypress-testing-library, to develop high abstract test that is strong and addept changes of the content

# Importent Consideration:
In order to reach a goo artichture within the suite I conisder the following:
1. Typescript for strong type code: using typescript in the Cypress project, this enable me to create interface named car 
2. Dynamic Data rahter than hard coded data: uing the interface car, the main purpose to use the interface is to have stander data model, so check the data within the test will be dynamic, also the check will be based on dynamic data not hard coded data
3. Using generaic data reterival appraoch: using the cypress-testing-library to do generic reterival appraoch regardingless the website changes

# How to use the project:
1. Clone the development project and do the following: 
- goto dir: `cd search-form`
- install dependencies: `npm install`
- start application: `npm run start`
- visit: http://localhost:3000
2. Clone the test project 
3. To run the project through cmd code: go to project based and using npx cypress run 
4. To run the project using the cypress desktop version you can follow these steps:
	* Run the following code npm install cypress --save-dev
	* Run the command npx cypress open, you will have the cypress desktop run enviroment, select one of the two files, in api folder of the e2e-ui folder


in case you have any questions please let me know :)