import multiply, { divide, doUpper, sayHi } from "./mylib.js";
import Product from "./product.js";
import item from "./product.js"                 //if class name imported does not exist, it becomes alias name of the topmost class
import { sayHi as welcome } from "./mylib.js";

let obj = new Product("pendrive", 240, "sandisk")
obj.show()

sayHi("sumeet")

doUpper("sumeet")

multiply(12,13)

divide(20,5)

let p = new item("chocolate", 50, "cadbury")
p.show()

welcome("john")