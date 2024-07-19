let arr = [1, 2, 3, 4, 5]
console.log(arr[0]);
console.log(arr[arr.length - 1]);

arr.push(8)
console.log(arr);

arr.pop(8)
console.log(arr);

arr.unshift(8)
console.log(arr);

arr.shift(8)
console.log(arr);

let arr2 = arr.map((i) => {
    return i*2
})
console.log(arr2);

let even = arr.filter((i) => i % 2 == 0)
console.log(even);

let sum = arr.reduce((acc, i) => acc + i, 0)
console.log(sum);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach((i) => {
//     console.log(i);
// })

let arr2d = [[1, 2], [3, 4]]

arr2d.forEach((i) => {
    i.forEach((j) => {
        console.log(j);
    })
})

console.log(arr2d[0][1]);