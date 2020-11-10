
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
        console.log(this.price / this.length  + ' marke po satu');
    }

    courseSummary(){
        console.log(` Course name: ${this.title} \n Course length: ${this.length} hours \n Course price: ${this.price} marke`);
    }

}

const angularCourse = new Course('Angular', 33.40, 200);
const reactCourse = new Course('React', 28.00, 80 ); 

console.log(reactCourse.courseSummary());
