import {Person} from './Person'

class Student extends Person{
    study(): string{
        return `${this.name} is studying`
    }
}

const student = new Student('Park');

console.log(student.sayHello());
console.log(student.study());
