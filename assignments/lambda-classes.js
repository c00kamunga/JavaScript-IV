// CODE here for your Lambda Classes
class Person{
    constructor(civilian){
        this.name = civilian.name;
        this.age = civilian.age;
        this.location = civilian.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}