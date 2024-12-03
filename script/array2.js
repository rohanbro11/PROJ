let students=[
    {name:"ramesh",hasPaidStatus:false,hasScolorship:true},
    {name:"ram",hasPaidStatus:false,hasScolorship:true},
    {name:"john",hasPaidStatus:false,hasScolorship:true}

]
students.forEach(student=>{
    if(student.hasPaidStatus && student.hasScolorship)
    {
        console.log(`${student.name} cannot give exam`);
    } else{
console.log(`${student.name} cannot give exam`)
    }
}
)
let cartItem=[
    {
        name: "rohan",
        products:[
            {title:"laptop",price:20},
            {title:"mobile",price:10},
            {title:"tab",price:15},
        ]
    },
    {
        name: "anish",
        products:[
            {title:"clothes",price:30},
            {title:"bag",price:25},
            {title:"shoes",price:28},
        ]
    }

    
]
cartItem.map((prod)=>{
    let total=prod.products.reduce((sum,product)=> sum+ product.price,0)
    console.log(`${prod.name} spends ${total} ` ); 
})
let fruits=[
{
    name: "orange",
    scientificName:"xyz",
    prices: [
        {country :"Nepal",
            price:20

        },
        {country : "India",
            price:30

        },
        {country : "Australia",
            price:2

        },
        {country : "Usa",
            price:1

        },

    ]
}

]
fruits.map((fruit) => {
     {
        console.log(`Prices for ${fruit.name} in different countries:`);
        
         fruit.prices.map(price1 => {
            console.log(`${price1.country}: ${price1.price}$`);
        });
    }
});








