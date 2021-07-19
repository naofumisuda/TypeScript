type inputDataType = number | string;

function strCount<T extends inputDataType>(inputData: T[]) {
    let strCount : number = 0;
    inputData.forEach(element => {
        if(typeof(element) == "string") {
            strCount++;
        }
    });
    return strCount;
}

let inputData1 = [1, "h",2, "k", "hello"];
let strCount1 : inputDataType = strCount(inputData1);
console.log(strCount1);

let inputData2 = [1, 5, 4, 2];
let strCount2 : inputDataType = strCount(inputData2);
console.log(strCount2);

let inputData3 =  ["2", "hello", "b", "c"];
let strCount3 : inputDataType = strCount(inputData3);
console.log(strCount3);