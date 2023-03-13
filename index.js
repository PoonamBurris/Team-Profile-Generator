const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const genTeamprofile = require ('./src/genTeamprofile.js');

//Array of user input
const team = [];

//Prompt questions and choices to build new team
const data = async () => { 
  const ans = await inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "Who would you like to add to your team?",
        choices:['Engineer', 'Intern', 'Manager', 'None']
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
    
  ]) 
if (ans.role === 'Manager'){
    const manans = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'officenum',
            message: "Enter manager's office number:",
        },     
    ])
    const newManager = new Manager(
    ans.name,
    ans.id,
    ans.email,
    manans.officenum
    );
    team.push(newManager);
} else if(ans.role === 'Engineer'){
    const githubans = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'github',
            message: "Enter employee's github profile link:",
        },
    ])
    const newEngineer = new Engineer(
        ans.name,
        ans.id,
        ans.email,
        githubans.github
        );
        team.push(newEngineer); 
}else if (ans.role === 'Intern'){
    const internans = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'school',
            message: 'Enter which school was attended by your intern:',
        },
     
    ])
    const newIntern = new Intern(
        ans.name,
        ans.id,
        ans.email,
        internans.school
        );
        team.push(newIntern); 
}
};

async function otherquestions(){
    await data()

    const giveOptions = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'none',
            choices: ['Add team member', 'Build team'],
            message: 'How would you like to proceed?',
        },
    ])
    if (giveOptions.none === 'Add team member'){
        return otherquestions()
    }
    return buildTeam();
}
otherquestions();

function buildTeam (){
    console.log("New html has been created")
    fs.writeFileSync('./dist/profile.html',genTeamprofile(team),'utf-8');
}































    


            
