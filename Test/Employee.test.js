const Employee = require('../lib/Employee');

test('Should add a new member.', () =>{
const e = new Employee();
expect(typeof(e)).toBe('object');
});

test('Should add a new member.', () =>{
const name = 'Jane';
const e = new Employee(name);
expect(e.printName()).toBe(name);
});

test('Should add a new id.', () =>{
const testval = 20;
const e = new Employee('foo',testval);
expect(e.printId()).toBe(testval);
});

test('Should add a new email.', () =>{
const testval = "test@check.com";
const e = new Employee('foo',1 ,testval);
expect(e.printEmail()).toBe(testval);
});

