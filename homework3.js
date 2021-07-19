"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function required(msg) {
    return (target, variableName) => {
        let name;
        const getter = function () {
            return name;
        };
        const setter = function (newName) {
            if (newName) {
                name = newName;
            }
            else {
                console.log(msg);
            }
        };
        Object.defineProperty(target, variableName, {
            get: getter,
            set: setter
        });
    };
}
class Person {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}
__decorate([
    required("Name is required")
], Person.prototype, "name", void 0);
const firstPerson = new Person("John");
firstPerson.show();
const secondPerson = new Person("");
secondPerson.show();
