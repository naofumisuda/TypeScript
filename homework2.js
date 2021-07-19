"use strict";
class Square {
    constructor(width) {
        this.width = width;
    }
    calc() {
        var area = this.width * this.width;
        return area;
    }
}
class Rectangle {
    constructor(height, width) {
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
const areas = [square.calc(), rectangle.calc()];
console.log(areas);
