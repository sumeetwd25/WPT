let obj={p1:10, p2:20, p3:30, show:()=>{console.log(p1,p2,p3)}}

//object destructing syntax
let x=obj.p1
let y=obj.p2

//let{p1,p2}=obj          //extract the values of p1 & p2 properties to p1 & p2  local variables
//console.log(p1,p2)

let {p3}=obj            //extract the value of p3 in local variable p3
console.log(p3)

let {p3:z}=obj          //extract the value of p3 in local variable z
console.log(z)

let {p1,p2,show}=obj
show()