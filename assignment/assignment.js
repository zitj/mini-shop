
class Course {
    title = 'DEFAULT';
    length;
    price;
    
    constructor(title, length, price){
        this.title = title;
        this.length = length;
        this.price = price;
    }

    courseValue(){
        console.log('Value of this course is ' + (this.price / this.length).toFixed(2)  + ' marke po satu');
    }

    courseSummary(){
        console.log(` Course name: ${this.title} \n Course length: ${this.length} hours \n Course price: ${this.price} marke`);
    }

}

class PracticalCourse extends Course{
    constructor(title, length, price, numOfExcercises){
        super(title, length, price);
        this.numOfExcercises = numOfExcercises;
    }
    courseSummary(){
        console.log(` Course name: ${this.title} \n Course length: ${this.length} hours \n Course price: ${this.price} marke \n Number of excercises: ${this.numOfExcercises}`);
    }
}
class TheoreticalCourse extends PracticalCourse{
    constructor(title, length, price, numOfExcercises){
        super(title, length, price, numOfExcercises);
        
    }
    publish(){
        console.log(`This is the theoretical part of the ${this.title} course!`);
    }
}


const angularCourse = new TheoreticalCourse('Angular', 33.40, 200, 432);
const reactCourse = new TheoreticalCourse('React', 28.00, 80, 212); 

angularCourse.courseSummary();
angularCourse.courseValue();
angularCourse.publish();
