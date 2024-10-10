sayHi();

class Student {
    constructor(age, name, major, numberOfClasses) {
        this.age = age;
        this.name = name;
        this.major = major;
        this.numberOfClasses = numberOfClasses;
    }

    studentStats() {
        return `${this.name} is ${this.age} years old. They're a ${this.major} major and taking ${this.numberOfClasses} classes!`;
    }

    static totalClasses(student1, student2) {
        const classes1 = student1.numberOfClasses;
        const classes2 = student2.numberOfClasses;
        return classes1 + classes2;
    }
}

const csc = new Student(21, "Jaime", "Computer Science", 5);
const nur = new Student(20, "Elizabeth", "Nursing", 5);
const math = new Student(18, "Keren", "Math", 4);
const bio = new Student(19, "Jeremy", "Biology", 3);

console.log(csc);
console.log(csc.studentStats());
console.log(nur);
console.log(nur.studentStats());
console.log(Student.totalClasses(csc, nur));

function sayHi() {
    return console.log("Hello, this function can be called anywhere!");
}

sayHi();

document.getElementById("student1").innerText = csc.studentStats();
document.getElementById("student2").innerText = nur.studentStats();
document.getElementById("student3").innerText = math.studentStats();
document.getElementById("student4").innerText = bio.studentStats();