const Intern = require('../lib/Intern');

test('Should add school with constructor.', () =>{
const testval = "GT"
const e = new Intern('foo',1 ,'Schcheck@test.com',testval);
expect(e.printschool()).toBe(testval);
});

test('printtype Should add type Intern.', () =>{
const testval = "Intern"
const e = new Intern('foo',1 ,'Schcheck@test.com','GT');
expect(e.printtype()).toBe(testval);
});
