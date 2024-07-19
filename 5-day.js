function check(num) {
    if(num%2==0){
        return "even"
    }else{
        return "odd"
    }
}
function square(num) {
    return num*num
}

function max(num1, num2) {
    if(num1>num2){
        return num1
    }else{
        return num2
    }
}

function concate(str1, str2) {
    return str1 + str2;
}

let add = (num1,num2) => {
    return num1+num2
}

let check1 = (str) => {
    return str.includes("a")?"true":"false"
}
console.log(check1("hellao"));

let prod = (num1,num2=9) => {
    return num1*num2
}


function greeting(name, age=18) {
    return `Hello ${name}, you are ${age} years old`
}

function repeat(func, num) {
    return () => {
        for(let i=0; i<num; i++){
            func()
        }
    }
}
let hi = () => {
    console.log("hii")
}
   let h= repeat(hi, 7);
h();


