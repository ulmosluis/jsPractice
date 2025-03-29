/* let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let firstName = person.firstName;
let lastName = person.lastName; 

console.log(firstName); // John
console.log(lastName); // Doe

let { firstName: fname, lastName: lname } = person;
console.log(fname); // John
console.log(lname); // Doe */

/* let person = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28 */
/* let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: {
        firstName,
        lastName
    }
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe */

/* let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: {
        firstName,
        lastName
    },
    name
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' } */

let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);