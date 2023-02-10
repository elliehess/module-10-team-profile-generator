const Employee = require('./employee'); //since we are extending Employee, we require the class

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); //inherit this fron Employee but changing the values
        this.officeNumber = officeNumber;
    }

    getRole () {
        return "Manager";
    }
}; 

module.exports = Manager;