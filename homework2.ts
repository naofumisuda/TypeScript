interface Shape {
    width: number;
    calc(): number;
}

class Square implements Shape {
    width: number;

    constructor(width: number) {
        this.width = width;
    }

    calc() {
        var area = this.width * this.width;
        return area;
    }

}

class Rectangle implements Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    calc() {
        var area = this.height * this.width;
        return area;
    }

}

const square1 = new Square(100);
const square2 = new Square(200);
const rectangle1 = new Rectangle(11, 11);
const rectangle2 = new Rectangle(12, 12);

const shapes : Shape[] = [square1, square2, rectangle1, rectangle2];

shapes.forEach(element => {
    console.log(element.calc());
});
