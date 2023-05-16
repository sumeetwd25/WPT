let obj={
    fname:"AAA",
    show:function(){
        console.log(this.fname)
    }
}
// obj.show()              //If I call function using object, then this=obj (implicit)

let f1=obj.show            //If the function is called without the object, then this=undefined
// f1()

f1=f1.bind(obj)             //Explicitly binding "this" with object
f1()