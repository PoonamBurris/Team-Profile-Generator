const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('lib/Engineer.js');
const Intern = require('lib/Intern.js');
const Manager = require('lib/Manager.js');
const genTeamprofile = require ('src/genTeamprofile.js');
const webTeam = require('dist/profile.html');

team = [];

const addmember = ()=> {
    return inquirer.prompt([{
        type: 'list',
        name: 'addmember',
        message: "Who would you like to add to your team?",
        choices:['Engineer', 'Intern', 'Manager']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of your employee:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the ID of your employee:',  
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter a valid email address for your employee:',
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter employee's github profile link:",
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter which school was attended by your intern:',
    },

    ])
}
            
   