let p = new Promise((rej,res)=>{
    rej("something went wrong!")
})

console.log("the promise",p)

p.catch((rej)=>{console.log(rej)})