function largestNumber(num1,num2,num3){
    let compare = num1;

    if(compare > num2){
        if(compare > num3){
            return num1;
        } else{
            return num3;
        }
    } else{
        d = num2;
        if(d > num3){
            return num2;
        } else {
            return num3;
        }
    }
}

let x = largestNumber(2,3,4);

console.log("The largest number is: " +x)  // The output will be