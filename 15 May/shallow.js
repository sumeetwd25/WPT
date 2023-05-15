let obj={
    fname:"XXX",
    age:20,
    dob:{
        dob:1,
        month:1,
        year:2003
    }    
}

let obj2=obj    //only reference is copied
obj2.age=23

console.log("obj age",obj.age)
console.log("obj2 age",obj2.age)

let obj3={...obj,dob:{...obj.dob}}   //creating copy of the object
obj3.age=30
console.log("obj3 age", obj3.age)

obj3.dob.year=1999
console.log("obj year",obj.dob.year)
console.log("obj3 year",obj3.dob.year)
