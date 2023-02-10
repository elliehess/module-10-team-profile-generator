const Employee = require('./employee'); //since we are extending Employee, we require the class

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email); //inherit this fron Employee but changing the values
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}; 

module.exports = Intern;