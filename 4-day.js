for (let i = 1; i <= 10; i++) {
    console.log(i); 
}


for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${i*5}`); 
}
let sum = 0
let i = 1;
while (i <= 10) {
    console.log(sum += i);
    i++;
}

let j = 10;
while(j>=1) {
    console.log(j);
    j--;
}

let k = 1
do {
    console.log(k);
    k++;
} while (k <= 10)
    
let num = 5
let fact = 1
do {
    fact *= num
    num--;
    
} while (num > 0)
console.log(fact);

let str
for (let i = 0; i < 6; i++){
str=""
    for (let j = 0 ; j < i ; j++){
     str+="*" 
    }
    console.log(str);
    str=""
}