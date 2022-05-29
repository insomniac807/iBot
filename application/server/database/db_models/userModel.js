module.exports = class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        return `Hello my name is ${name}!`;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}