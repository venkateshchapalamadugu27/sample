// // var name="Bharath";
// // var age=20;
// // if(age>10){
// // var name="L.Bharath"
// // console.log(name);

// // }
// // console.log(name);
// // Objects
// // let employee={
// //     name:"Neon",
// //     designation:"Manager",
// //     salary:"$100k",
// //     phno:5343675678

// // }
// // console.log(employee)
// // Array
// let employees={ sam,singh,roy}
// console.log(employees)
// Alerts
//alert("Are you sure")
 //prompt:
 //let number1=prompt("enter input")
 //console.log(number1)
 //confirm("are you sure exit")
 // console elements
//  console.log("welcome")
//  console.info("telecom")
//  console.warn("check once")
//  console.error("array out of bonds")
// spread operator
// let i_marks=[23,45,67,89,34,33]
// let e_marks=[5783,8576,98765]
// let results=[23,45,e_marks]
// let final=[...i_marks,...e_marks]
// console.log(final)
// console.log(results)
// Rest parameter
//  function addition(x,y,...remaindata){
//      console.log(x);
//      console.log(y);
//      console.log(remaindata);
//      console.log(typeof(remaindata))
//     }
//     console.log(addition(1,34,5566,6,6,5,44,44,3,))
// Destructuring of array
//let employee=["poorna","ganesh","bharath"]
// let name1=employee[0];
// let name2=employee[1];
// console.log(name1)
// console.log(name2)

//  Destructuring of array

let employee={
         uname:"Neon",
       designation:"Manager",
       salary:"$100k",
      phno:5343675678 }
      
let {uname,designation,...remainList}=employee;
console.log(uname);
console.log(designation);
console.log(remainList);