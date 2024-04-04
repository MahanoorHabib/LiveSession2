//let name1 = "variable by let"; 
//console.log(name1)
// let name1 = "mano"
//console.log(name2)

// name1 = "Variable by var";
//name1 = "mano"
//console.log(name1)

//const name1 = "Variable by const";
//name1 = "mano"
//console.log(name1)


let name1 = "mano" //infering typ//
let name2:string = "mano"  //strongly typ// 
// name2 = 1000    errors
let num1 = 1000  //infering typ//
let num2:number = 1000  //strongly typ//
let news = false  //infering typ//
let news1:boolean = true  //strongly typ// 
let anyData:any = 1000  //not recommended//
console.log(anyData);

anyData = "HEllo"
anyData =  true 
console.log(anyData);