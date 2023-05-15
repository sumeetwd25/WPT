let interval_id=setInterval(()=>{
    console.log("hello")
},1000)

setTimeout(()=>{clearInterval(interval_id)},6000)
