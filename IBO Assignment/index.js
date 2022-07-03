/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

function getUniqueProductCount (listOfProducts)
{
   let unique = {}
   
   for(let i=0; i<listOfProducts.length; i++)
   {
     if(unique[listOfProducts[i].productName] === undefined)
     {
       unique[listOfProducts[i].productName] = 1;
     }
     else{
     unique[listOfProducts[i].productName]++;
     }
   }
   
   return unique;
}

function getUniquePrducts(listOfProducts)
{
    let groupProducts = []

    for(let i=0; i<listOfProducts.length; i++)
    {
        let obj = listOfProducts[i]

        if(groupProducts.length == 0)
        {
            groupProducts.push(obj)
        }
        else{
            let flag = false
            for(let j=0; j<groupProducts.length; j++)
            {
                let temp = groupProducts[j]

                if(temp.productName === listOfProducts[i].productName)
                {
                    groupProducts[j].quantity = groupProducts[j].quantity+listOfProducts[i].quantity
                    flag = true;
                }
            }
            if(flag === false)
            {
                groupProducts.push(listOfProducts[i])
            }
        }
    }

    return groupProducts;
}

console.log(getUniqueProductCount (listOfProducts))
console.log(getUniquePrducts(listOfProducts))
