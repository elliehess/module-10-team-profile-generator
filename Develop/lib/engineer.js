const Employee = require('./employee'); //since we are extending Employee, we require the class

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email); //inherit this fron Employee but changing the values
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}; 

module.exports = Engineer;