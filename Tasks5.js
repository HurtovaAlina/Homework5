//==================Task 1 ========================
// variant 1
let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
let count=Object.keys(mentor).length;
console.log(count);
//variant 2
let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
function propsCount(obj){
let count =0;
for (let key in obj){
if (obj.hasOwnProperty(key)) count++
}
return(count);
}
console.log("Count of properties", propsCount(mentor));

//==================Task 2 ========================
let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
function showProps(obj){
let array = [];
array = Object.keys(obj);
return(array);
};
console.log(showProps(mentor));
console.log(Object.values(mentor));

//==================Task 3 ========================
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name, this.surname);
  }
};

class Student extends Person {
             constructor(name, surname, year) {            
       super(name, surname);
	this.year = year;
   }
    showFullName(middlename) {
    console.log(this.name+" ", middlename +" ", this.surname);
  }
    showCourse(){
    let d = new Date();
    let nowYear = d.getFullYear();
    let currentCource= (nowYear-this.year);
    return currentCource;
}
        }

let person1 = new Person("Sam","Jackson");
person1.showFullName();  
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse());

//==================Task 4 ========================
class Worker {
    #experience = 1.2;
    set experience(value) {
    this.#experience = value;
  }
  get experience() {
    return this.#experience;
  }	

   constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    console.log("Salary= ", this.dayRate*this.workingDays);
  }
  showSalaryWithExperience(){
    return (this.dayRate*this.workingDays*this.#experience);
} 
};

function sortedSalary(){
 arr.sort((a, b) => a.salaryWithExperience > b.salaryWithExperience ? 1 : -1);
 console.log (arr[0].fullName,":", arr[0].salaryWithExperience);
 console.log (arr[1].fullName,":", arr[1].salaryWithExperience);
 console.log (arr[2].fullName,":", arr[2].salaryWithExperience);
};

let arr = [];
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log(worker1.experience);
console.log("Salary with experience = ", worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log("Salary with experience = ", worker1.showSalaryWithExperience());
worker1.salaryWithExperience = worker1.showSalaryWithExperience();
arr.push(worker1); 

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName); 
worker2.experience = 1.3;                
console.log("Salary with experience = ", worker2.showSalaryWithExperience());
worker2.salaryWithExperience = worker2.showSalaryWithExperience();
arr.push(worker2); 

let worker3 = new Worker("Andry Ander", 29, 23);
console.log(worker3.fullName); 
worker3.experience = 1.1;                
console.log("Salary with experience = ", worker3.showSalaryWithExperience());
worker3.salaryWithExperience = worker3.showSalaryWithExperience();
arr.push(worker3); 

console.log("Sorted salary:");
console.log(sortedSalary(arr));

//==================Task 5 ========================
class GeometricFigure {
  getArea() {
	return 0;
}
toString() {
     return Object.getPrototypeOf(this).constructor.name;
}
     };

class Triangle extends  GeometricFigure {
             constructor(side1, height) {            
              super();
	            this.side1 = side1;
              this.height = height
             }
    getArea(side1, height) {
   this.area = (this.side1*this.height)/2;
   return this.area};
};

class Square extends  GeometricFigure {
             constructor(side1) {
              super();
	          this.side1 = side1;
             }
    getArea(side1) {
   this.area = (this.side1*this.side1);
   return this.area};
};

class Circle extends  GeometricFigure {
             constructor(radius) {
              super();
	          this.radius = radius;
             }
    getArea(radius) {
   const pi=3.14
   this.area = (pi*this.radius*this.radius);
   return this.area};
};

function handleFigures(figures){
let areas =[];
for(i=0; i<figures.length; i++){
if (figures[i] instanceof GeometricFigure) {
console.log("Geometric figure: ", figures[i].toString(),"- area: ", figures[i].getArea())
areas.push(figures[i].getArea())};
}
let totalArea = areas.reduce(function(total, amount){
  return total + amount
},0);
  return totalArea;
}


let figures = [new Triangle(3,8),new Square(4),new Circle(8)];
console.log(handleFigures(figures));