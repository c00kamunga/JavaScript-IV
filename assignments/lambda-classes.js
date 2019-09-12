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



class ProjectManager extends Instructor{
    constructor(tactician){
        super(tactician);
        this.gradClassName = tactician.gradclassName;
        this,favInstructor = tactician.favInstructor;
    }
    standUp(projectMAnager, channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(apprentice, subject){
        return `${this.name} debugs ${apprentice.name}'s code on ${subject}`
    }
}



///////////////// LAMBDA INSTRUCTOR OBJECTS BELOW
const Vader = new Instructor({
    name: 'Lord Vader',
    speciality: 'everything',
    favlanguage: 'python', 
    catchPhrase: "You dont know the power of higer order functions...."
})

const sidious = new Instructor ({
    name: 'Lord Sidious',
    specialty: 'everything',
    favLanguage: 'JavaSith',
    catchPhrase: "UNLIMITED POWER!!!!!!!"
})

const Yoda = new Instructor({
    name: 'Grand Master Yoda',
    specialty: 'everything',
    favLanguage: 'Backwards everything',
    catchPhrase: "Powerful you have become, a software developer i sense in you..."
})


//CODE below here for your Lambda Student Ojbects

const Charmander = new Student ({
    name: 'Charmander',
    previousBackground: 'cashier',
    className: 'Order 66',
    favSubjects : ['Control Flow', 'Data Models', 'Asynchronity', 'Transpilation']
})

const Pikachu = new Student ({
    name: 'Pikachu',
    previousBackground: 'accountant',
    className: 'Burger Boys',
    favSubjects : ['React', 'Closures', 'CSS', 'HTML']
})


const Charmander = new Student ({
    name: 'Snorlax',
    previousBackground: 'cashier',
    className: 'Order 66',
    favSubjects : ['Methods', 'Objects', 'CSS', 'HTML']
})



//CODE BELOW HERE FOR YOUR LAMBDA PROJECT MANADERS

const PeterGriffin = new ProjectManager({
    name: 'Peter Griffin',
    gradClassName: 'Family Guy',
    favInstructor: 'Grand Master Yoda'
})

const PeterGriffin = new ProjectManager({
    name: 'Peter Griffin',
    gradClassName: 'Family Guy',
    favInstructor: 'Grand Master Yoda'
})

const PeterGriffin = new ProjectManager({
    name: 'Peter Griffin',
    gradClassName: 'Family Guy',
    favInstructor: 'Grand Master Yoda'
})


