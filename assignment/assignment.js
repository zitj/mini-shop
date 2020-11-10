
class Course {

    #price;

    get price(){
        return  this.#price + ' marke';
    }
    set price(value){
        if(value < 0){
            throw 'Invalid value!';
        }
        this.#price = value;
    }

    constructor(courseTitle, courseLength, coursePrice){
        this.title = courseTitle;
        this.length = courseLength;
        this.price = coursePrice;
    }

    courseValue(){
        console.log(' Value of this course is ' + (this.#price / this.length).toFixed(2)  + ' marke po satu');
    }

}

class PracticalCourse extends Course{
    constructor(title, length, price, excercisesCount){
        super(title, length, price);
        this.numOfExcercises = excercisesCount;
    }
    courseSummary(){
        console.log(` Course name: ${this.title} \n Course length: ${this.length} hours \n Course price: ${this.price} \n Number of excercises: ${this.numOfExcercises}`);
    }
}
class TheoreticalCourse extends PracticalCourse{
    publish(){
        console.log(` This is the theoretical part of the ${this.title} course!`);
    }
}


const angularCourse = new TheoreticalCourse('Angular', 33.40, 200, 432);
const reactCourse = new TheoreticalCourse('React', 28.00, 80, 212); 

angularCourse.courseSummary();
angularCourse.courseValue();
angularCourse.publish();
