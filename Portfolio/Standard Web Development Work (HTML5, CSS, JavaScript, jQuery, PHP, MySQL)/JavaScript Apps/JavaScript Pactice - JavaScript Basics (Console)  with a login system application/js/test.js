let testList = ["one", "two", "three"];
let testIndex = -1; 

let start = () => {
    testList[testIndex];
    if (testIndex < testList.length - 1) {
        testIndex++; 
    } else {
        testIndex = 0;
    }
   
    console.log(testList[testIndex]); 
}


//setInterval(start, 100); 
