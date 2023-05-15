let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("the asynchronous operation is complete")
        resolve("success")
    },6000)
})

console.log("the promise",p)

p.then((res)=>{console.log(res,"Hurray!")})