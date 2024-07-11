let a: number = 1;
let b: string = "dsa";
let c: boolean = true;

function add(x:number, y:number):number{
    return x+y;
}

const d = add(1,2)
console.log(d)

const add2 = (x:number, y:number):number => {
    return x+y;
}


interface user{
    name: string;
    age?: number;

}

const person: user = {
    name: "DD",
    age: 40,
};

