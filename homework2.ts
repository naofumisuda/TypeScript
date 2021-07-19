class Square {
    width: number;

    constructor(width: number) {
        this.width = width;
    }

    calc() {
        var area = this.width * this.width;
        return area;
    }

}

class Rectangle {
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

const square = new Square(100);
const rectangle = new Rectangle(11, 11);

const areas: number[] = [square.calc(), rectangle.calc()];

console.log(areas);
