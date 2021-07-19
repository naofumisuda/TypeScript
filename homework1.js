"use strict";
function strCount(inputData) {
    var strCount = 0;
    inputData.forEach(element => {
        if (typeof (element) == "string") {
            strCount++;
        }
    });
    console.log(strCount);
}
var inputData = [1, "h", 2, "k", "hello"];
strCount(inputData);
var inputData = [1, 5, 4, 2];
strCount(inputData);
var inputData = ["2", "hello", "b", "c"];
strCount(inputData);
