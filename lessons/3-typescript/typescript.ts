// type annotations
function simpleGreeter(person: string): string {
    return "Hello, " + person;
  }

var x:string = simpleGreeter("Person")

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
    getName: (s: string)=>string
}

function interfaceGreeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let interfaceUser:Person = { firstName: "Jane", lastName: "User", getName: (s: string)=>s };
 
document.body.textContent = interfaceGreeter(interfaceUser);

// Classes
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
 
interface Person {
  firstName: string;
  lastName: string;
}
 
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
 
let user = new Student("Jane", "M.", "User");
 
//document.body.textContent = greeter(user);
