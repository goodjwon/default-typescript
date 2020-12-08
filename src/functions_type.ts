
let add3 = function (x: number, y: number): number {return x + y}

console.log(add3(2, 3))


function multiply (a: number, b: number, c?: number){
    if(typeof c !== "undefined"){
        return a*b*c;
    }
    return a*b;
}

console.log(multiply(3, 4, 14));
