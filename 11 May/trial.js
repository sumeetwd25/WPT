class Trial{
    static data = 0
    data2 =12

    show(){                                      //non static function
        console.log(this.data2, Trial.data)      //can access static data through classname
    }

    static show2(){                             //static function
        console.log(this.data2, Trial.data)     //cannot access non static data (does not recognize this.)
    }
}


let obj = new Trial()       //non static function requires object            
obj.show()

Trial.show2()               //static function does not require object

let obj2 = new Trial()
obj2.data2 = 100

let obj3 = new Trial()
obj3.data2 = 200

console.log(obj.data2, obj2.data2, obj3.data2)

obj2.show()

