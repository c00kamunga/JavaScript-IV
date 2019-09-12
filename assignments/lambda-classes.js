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



class Instructor extends Person{
    constructor(sensei){
        super(sensei);
        this.speceialy = sensei.specialty;
        this.favlanguage = sensei.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}.`
    }
}