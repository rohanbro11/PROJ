// console.log("hello from top");
// //function ab(name){
//     //return(`hello,${name} !`)
// //}
// //const x=ab("ram")
// //console.log(x);

// //function mul(x,y){
//    // return x*y
// //}
// //const k= mul(2,3)
// //console.log(k);
// //setTimeout(()=>{
//     console.log("hello from middle");
    
// //},2000);


// function sum(...numbers){
//     let total=0
//     for (let num of numbers){
//         total += num
        
//     }
//     return total
// }
// console.log(sum(1,2,3,4));
// console.log("hello from buttom");

// try {
//     let firstName="Ronish"
//     let lastName="paudel"
//     let fullName= firstName+ lastName
//     console.log("this is full name",fullName);
    
// } catch (error) {
//     console.log("not defined",error.message);
    
// }
// //traditional function
// function add(x,y){
//     return x+y
// }
//  let total=add(2,1)
//  console.log(total);

//  const add1=(x,y)=>{
//     return x+y
//  }
//  let arrowtotal=add1(2,3)
//  console.log(arrowtotal);

// function hello(){
//     let message="hello,world"
//     setTimeout(() => {
//         console.log(message);
        
//     }, 2000);
// }
// hello()

// const showAlert=(type,message)=>{
//     console.log(`${type}:${message}`);
// }
// showAlert("warning","you are not a user")

// //array of name -list 5 names
// //if the name is listed authorized if not similar


// let name1=["shyam","hari","sita","gita","ramesh"]
// function authorised(inputName) {
//     if (name1.includes(inputName)) {
//         return `${inputName} is authorized.`;
//     } else {
//         return `${inputName} is not authorized.`;
//     }
// }
// const inputName="shyam"
// const result=authorised(inputName)
// console.log(result);
// const inputName1="rohan"
// const result1=authorised(inputName1)
// console.log(result1);

// const authorized1=["alice","bob","charlie"]
// const checkuser=()=>{
//     const enteredname=prompt("enter your name");
//     if(authorized1.includes(enteredname))
//     {
//         alert("authorised")

//     }
//     else{
//         alert("unauthorised user")
//     }

//     }
//     checkuser()







// //asynchronous
// // promise,callbacks

// function fetchdata(callbacks){
//     console.log("api is listining");
//     setTimeout(() => {
//        callbacks("api succesfully fetched")
//     }, 3000);
    
// }
// fetchdata(function(message){
//     console.log(message);
    
// })

//  fetchdata=callbacks=>{
//     console.log("api is listining");
//     setTimeout(() => {
//        callbacks("api succesfully fetched")
//     }, 3000);
    
// }
// fetchdata=((message)=>{
//     console.log(message);
    
// })



let promise =new Promise((resolve, reject) => {
  setTimeout(() => {
    
    reject("internal servor error")

    resolve({
        data:{
            name: "rohan",
            email: "rohan@gmail.com"

        }
    })
  }, 3000);
})
promise.then((res)=>{
    console.log("response", res);
    
})
.catch((err)=>{
    console.log("this is error",err);
    
})
console.log(promise);




