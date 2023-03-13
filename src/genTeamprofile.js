const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const genTeamprofile = (team) => {


// Engineer card
const genEngineer = (Engineer)=> {
    return`
    <div class="products"> 
    <div class="card ">
      <div class="card-header p-3 mb-2 bg-primary text-white">
        <h2>${Engineer.printName()}</h2>
        <h3>${Engineer.printtype()}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${Engineer.printId()}</li>
        <li class="list-group-item">Email:${Engineer.printEmail()}</li>
        <li class="list-group-item">Github:${Engineer.printgithub()}</li>
      </ul>
    </div>
    </div>
    `;
};

//Intern card
const genIntern = (Intern)=> {
    return`
<div class="products">
<div class="card ">
<div class="card-header p-3 mb-2 bg-primary text-white">
      <h4>${Intern.printName()}</h4>
      <h5>${Intern.printtype()}</h5>
 </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${Intern.printId()}</li>
        <li class="list-group-item">Email:${Intern.printEmail()}</li>
        <li class="list-group-item">School:${Intern.printschool()}</li>
      </ul>
</div>
`;
};

// Manager card
const genManager = (Manager)=> {
    return`
    <div class="products"> 
    <div class="card ">
      <div class="card-header p-3 mb-2 bg-primary text-white">
        <h2>${Manager.printName()}</h2>
        <h3>${Manager.printtype()}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${Manager.printId()}</li>
        <li class="list-group-item">Email:${Manager.printEmail()}</li>
        <li class="list-group-item">Office Number:${Manager.printofficenun()}</li>
      </ul>
    </div>
    </div>
    `;
};

const genhtml = [];

genhtml.push(team
    .filter((Employee) => Employee.printtype()=== 'Manager')
    .map((Manager) => genManager(Manager))
    .join("")
);
genhtml.push(team
  .filter((Employee) => Employee.printtype()=== 'Engineer')
  .map((Engineer) => genEngineer(Engineer))
  .join("")
);
genhtml.push(team
  .filter((Employee) => Employee.printtype()=== 'Intern')
  .map((Intern) => genIntern(Intern))
  .join("")
);
return genhtml.join("");
};
module.exports = (team) => {
    return`
    <!DOCTYPE html>
<html>
  <head>
    <title>CSS Box Styling</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <!-- Header -->
    <header>
      <h1>My Team</h1> 
    </header>

    <!-- Body -->
    <main>
      
      <!-- Product Cards -->
      ${genTeamprofile(team)}
    </main>
  </body>
</html>   
    `;
};






























