const Engineer = require('../lib/Engineer');

test('Should add github account.', () =>{
const testval = "githubacc"
const e = new Engineer('foo',1 ,'gitcheck@test.com',testval);
expect(e.printgithub()).toBe(testval);
});

test('printtype Should add type Engineer.', () =>{
const testval = "Engineer"
const e = new Engineer('foo',1 ,'gitcheck@test.com','githubacc');
expect(e.printtype()).toBe(testval);
});

