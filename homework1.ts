function strCount<T>(inputData: T[]) {
    var strCount : number = 0;
    inputData.forEach(element => {
        if(typeof(element) == "string") {
            strCount++;
        }
    });
    console.log(strCount);
}

var inputData: (number|string)[] = [1, "h",2, "k", "hello"];
strCount<number | string>(inputData);

var inputData: (number|string)[] = [1, 5, 4, 2];
strCount<number | string>(inputData);

var inputData: (number|string)[] =  ["2", "hello", "b", "c"];
strCount<number | string>(inputData);