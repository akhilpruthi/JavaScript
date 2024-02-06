
function Swap(a,b){
    let c;

    c = a;
    a = b;
    b = c;
    return {a,b};
}

// let x = Swap(a,b);
console.log(Swap(4,5));