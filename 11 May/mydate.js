class MyDate{
    #month
    
    constructor(){
        this.#month=1
    }

    get month(){
        console.log("getter for month is called")
        return this.#month
    }

    set month(m){
        console.log("setter for month is called")
        if(m>=1 && m<=12){
            this.#month=m
        }
        else{
            console.log("the setter did not set the wrong month")
        }
    }
}

let d = new MyDate()
d.month = 11                        //setter gets called
console.log("month =",d.month)      //getter gets called