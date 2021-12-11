// Creating objects: object literal:
const _student = {
    id: 1,
    name: "Reed",
    subjects: [],
    addSubject(subject) { // in an object literal, the function name is the property name
      // ... spread operator
      // taking all exising subjects and adding new subject
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      // this represents the object created by the object literal
      this.subjects = [...this.subjects, subject]; 
    }
}
  
_student.addSubject('Math')
//console.log(_student.subjects);

// Creating objects: constructor functions: creates an instance of a class called an object
function _Student(id, name, subjects = []) {
    // this is the object that is created by the constructor function (by the new )
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

// prototype: built in property of a function (used to inherit features with each other)  
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes 
// Cannot use an arrow function because arrow functions do not have a this
_Student.prototype.addSubject = function(subject) {
        this.subjects = [...this.subjects, subject];
}

// constructor functions require the 'new' keyword:
// note: functions are objects, so we can use the 'new' keyword
const student1 = new _Student(1, 'Reed');
const student2 = new _Student(2, 'Lisa');

student1.addSubject('Math');
//console.log(`${student1.name} is taking ${student1.subjects}`);

student2.addSubject('English');
student2.addSubject('History');
//console.log(`${student2.name} is taking ${student2.subjects}`);   

// Creating objects: Class sytnax
// note: classes operate in the same way as constructor functions
//       they are syntactic sugar for constructor functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Student {
    // constructor: creates a this context for properties of a class
    // note: a this context refers to the object(s) created from a class
    constructor(id, name, subjects = []) {
        this.id = id;
        this.name = name;
        this.subjects = subjects;
    } // no comma like with object literals (methods are not properties in classes)

    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
    }
}

// console.log(typeof Student); // => proof that a class is a function

const student3 = new Student(3, 'Jenny', 'English');
console.log(student3);