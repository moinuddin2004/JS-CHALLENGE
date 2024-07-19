let num = 9
if (num == 0) {
    console.log("number is zero");
}
else if (num < 0) {
    console.log("number is negative");
}
else {
    console.log("number is positive");
}


let age = 18
if(age>=18){
    console.log("Eligible for voting");
}
else{
    console.log("Not eligible for voting");
}

let a = 2
let b = 3
let c = 9
if (a > b) {
  if (a > c) {
    console.log("a is largest");
  }
} else if (b > c) {
  console.log("b is largest");
} else {
  console.log("c is largest");
}



let day = 5

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


let num2 = 6
let res = num % 2 == 0 ? 'even' : 'odd';
console.log(res);

let year = 2024
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true
        }
        else {
            return false
        }
    }
    return true
}