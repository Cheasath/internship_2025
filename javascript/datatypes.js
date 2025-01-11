
let age = 25;
console.log(age);  

let name = "John";
console.log(name);  
let isActive = true;
console.log(isActive);  


let colors = ["red", "green", "blue"];
console.log(colors);  
console.log(colors[0]);  


let person = {
  name: "Alice",
  age: 30,
  isActive: true
};
console.log(person);  
console.log(person.name); 
console.log(person["age"]); 

let emptyValue = null;
console.log(emptyValue); 

let uninitialized;
console.log(uninitialized);  

let uniqueID = Symbol("id");
console.log(uniqueID);  
console.log(uniqueID.toString()); 

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);  

//Primitive datatypes
//a = "SECE"
//console.log(a)
//b = true
//console.log(b)

//Checking the type of variable
//console.log(typeof(a))

//Secondary datatypes
//array = ['a', 10 , true, [20,30], "Sri Eshwar"]
//console.log(array)
//console.log.apply(typeof(array))

//Object 
//
//obj = {
//    firstname:"Sri",
//    lastname:"Eshwar"
//}
//console.log(obj.firstname)
//console.log(obj["lastname"])

//obj1 = {}
//console.log(obj1)

//obj1["dept"] = "CSE"
//obj1["sec"] = "A"
//console.log(obj1)
//

//obj2 = new Object();
//console.log(obj2);
//obj2.count=70;
//obj2.abs=1;
//totalPresentCount=obj2.count - obj2.abs;
//console.log("presentCount: " + totalPresentCount)
//console.log(obj2);

//Set
set = new Set("hello", 1,2);
console.log(set);
console.log(typeof(set));