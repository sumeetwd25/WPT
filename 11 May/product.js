export default class Product{
    constructor(pname, pcost, brand){
        this.productName = pname
        this.productCost = pcost
        this.brandName = brand
    }

    show(){
        console.log("The product info is :", this.productName, this.productCost, this.brandName)
    }
}