const arr = [
    {
        age:23,
        name: "kunal",
        sub: "math",
        amount:60,
        id : 1,
        status: "pen",
        city:"usa"
},
 {
        age:25,
        name: "chunu",
        sub: "english",
         amount:10,
         id : 2,
         status: "com",
         city:"uae"
},
{
        age:26,
        name: "kaliya",
        sub: "hindi",
        amount:40,
        id : 3,
        status: "com",
        city:"india"
},
{
        age:13,
        name: "bheem",
        sub: "sst",
        amount:80,
        id : 4,
        status: "pen",
        city:"uk"
},
{
        age:27,
        name: "damru",
        sub: "science",
        amount:40,
        id : 5,
        status: "com",
        city:"usa"
},
{
        age:12,
        name: "mali",
        sub: "computer",
        amount:70,
        id : 6,
        status: "pen",
        city: "india"
}
]

console.log(arr.filter(ele => ele.city==="usa" && ele.amount > 50));

    
