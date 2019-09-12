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


class Student extends Person{
    constructor(apprentice){
        super(apprentice);
        this.previousBackground = apprentice.previousBackground;
        this.className = apprentice.className;
        this.faSubjects = apprentice.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects)
    }
    PRAssignment(subjects){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}