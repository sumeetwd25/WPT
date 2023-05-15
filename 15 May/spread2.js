let arr=[10,20,30]
let arr2=[40,50,...arr]         //[40,40,10,20,30]

console.log("length of arr",arr.length)
console.log("length of arr2",arr2.length)

let arr3=[60,70,arr]            //[60,70,[10,20,30]]
console.log("length of arr3",arr3.length)

//I want to access 10 using arr2
console.log(arr2[2])

//I want to access 10 using arr3
console.log(arr3[2][0])