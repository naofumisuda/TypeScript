function required(msg: string) {
    return (target: object, variableName: PropertyKey) => {
        let name: any;
        const getter = function() {
            return name;
        };

        const setter = function(newName: string) {
            if(newName) {
                name = newName;
            } else {
                console.log(msg);
            }
        };

        Object.defineProperty(target, variableName, {
           get: getter,
           set: setter
        });
  }
}

class Person {

    @required("Name is required")
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    show() {
      console.log(this.name)
    }
}

const firstPerson = new Person("John");
firstPerson.show();
// Output: "John" 

const secondPerson = new Person("");
secondPerson.show();
/* Output: 
"Name is required" 
"" 
*/