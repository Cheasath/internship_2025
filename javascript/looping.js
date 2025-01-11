/*
two types of looping
1.typical loop
->for loop,while loop,do...while
2.advanced looping
->for in,for of,foreach
*/
var a=[10,20,30]
var b={"count":70,"abs":1}
for(let i in a){
    console.log(a[i])
}
for(let i in b){
    console.log(i,b[i])
}
//Set 
set=new Set(["hello",1,2,3,"Sece","44",2,"hello",15])
console.log(set)
let person = { name: "Alice", age: 30, isActive: true };
let colors = ["red", "green", "blue"];
let sets = [
  { id: 1, items: [10, 20, 30] },
  { id: 2, items: [40, 50, 60] },
  { id: 3, items: [70, 80, 90] }
];

console.log("Nested Loops with Different Variable Types:");

for (let i = 0; i < 3; i++) {
  console.log("Set " + (i + 1) + ":");
  for (let j = 0; j < sets[i].items.length; j++) {
    console.log("  Item " + sets[i].items[j]);
  }
}

console.log("\nFor...in Loop (Object):");
for (let key in person) {
  console.log(key + ": " + person[key]);
}

console.log("\nFor...of Loop (Array):");
for (let color of colors) {
  console.log(color);
}

console.log("\nNested Loop Example (Array and Object Access):");
for (let i = 0; i < sets.length; i++) {
  for (let j = 0; j < sets[i].items.length; j++) {
    console.log("Set ID: " + sets[i].id + ", Item: " + sets[i].items[j]);
  }
}

console.log("\nBreak Example:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("\nContinue Example:");
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
/*
two kinds of loops: 
normal:
  for while do...while
advanced:
    for...in for...of forEach 
*/

// for loop
var a=[10,20,30]
var b={"count":70,"abs":1}
/*for(let i in a){
    console.log(i)
}
for(let i in b){
    console.log(i,b[i])
}*/

/*set=new Set(["hello",1,2,"SECE",44])
for(let i of set){
    console.log(i)
}

for(const key in set){
    if(Object.hasOwnProperty.call(set,key)){
        const element = set[key];
        console.log(element)
    }
}*/

//o/p:it will not print anything in my set.

//for of loop
for(let [i,j] of Object.keys(b) ){
    console.log(i,j)
}

