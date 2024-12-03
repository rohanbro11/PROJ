let cart=[
{
    price: 200,
    qty: 3,

},
{
    price: 300,
    qty: 3,
    
},
{
    price: 300,
    qty: 3,
    
},
{
    price: 300,
    qty: 3,
    
},
{
    price: 300,
    qty: 3,
    
}

]
const total2 =cart.slice(0,4).reduce((acc , curr)=> acc + curr.price *curr.qty,0)
console.log("the total is:", total2);
let item=cart.slice(0,4)
console.log(item);
 let course=[
    { 
        class:"mern",
        completestatus:true

    },
    { 
        class:"python",
        completestatus:false

    },
    { 
        class:"ui/ux",
        completestatus:true

    },
    { 
        class:"PHP",
        completestatus:false

    }
 ]
  let completed=[]
  let incomplet=[]
   for (let index = 0; index < course.length; index++) {
    const element = course[index];
    if (element.completestatus==false) {
        completed.push(element)
    } else {
        incomplet.push(element)
        
    }
}
    console.log(completed);
    console.log(incomplet);
    
    let number=[1,2,3,4,5,6,7,8]
    const filteredNumber=number.filter(function(num){
        return num>4

    }

)
console.log(filteredNumber);



    
    let number1=[1,2,3,4,5,6,7]
    const fountdNumber=number1.find(function(num){
        return num>1

    }

)
console.log(fountdNumber);


let countries=[
    {
        name: "nepal",
        code: "np"
    },
    {
        name: "india",
        code: "in"
    },
    {
        name: "australia",
        code: "au"
    },
    {
        name: "Japan",
        code: "jp"
    }
]


 printCountryCode=(name)=>
     {
        let country= countries.find(e => e.name===name.trim())
        return country ? country.code: "country not match"
}
let x= printCountryCode("nepal ")
console.log(x);

let  sentence="he is a good boy"
let wordsep= sentence.split(" ")
console.log(wordsep);
console.log(wordsep.length);

let num=[1,2,3,4]
let newnum= num.push(5)
console.log(newnum);
console.log(num);
let removeno=num.pop(2)
console.log(num);
// shift and unshift methpd of array assignment
//spread opertor
let num1=[1,2,3]
let num2=[...num1,5,6,7,8]
console.log(num2);
//includes  assignment,charAt()


let jop=["aashutosh","rohan","aman","prasiddha"]
jop.unshift("boy","cup")
console.log(jop);

let jop2=["aashutosh","rohan","aman","prasiddha"]
jop2.shift()
console.log(jop2);


let hop="character"
let x1= hop.charAt(0)
console.log(x1);

//parse and stringfy
const jsonString='{"name":"sam","age":20}'
const jsonobject=JSON.parse(jsonString)
console.log(jsonobject.name);


const jsonboj1={name:"sam",age:20}
const json3=JSON.stringify(jsonboj1)
console.log(json3);



let numbers=[1,2,3,4]
let double=numbers.map((num)=>{
    return num+2
}
)
console.log(double);











