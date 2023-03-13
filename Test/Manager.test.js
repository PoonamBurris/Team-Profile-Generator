const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test("Should set officenumber with constructor", () =>{
    const testval = 30;
    const e = new Manager('foo', 1, 'test@test.com', testval);
    expect(e.officenum).toBe(testval);
});

test('printtype Should add type Manager.', () =>{
    const testval = "Manager"
    const e = new Manager('foo',1 ,'test@test.com',30);
    expect(e.printtype()).toBe(testval);
    });

