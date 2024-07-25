const arr = [
    {
        age:23,
        name: "kunal",
        sub: "math",
        amount:50,
        id : 1,
        status: "pen"
},
 {
        age:25,
        name: "chunu",
        sub: "english",
         amount:10,
         id : 2,
         status: "com"
},
{
        age:26,
        name: "kaliya",
        sub: "hindi",
        amount:40,
        id : 3,
        status: "com"
},
{
        age:13,
        name: "bheem",
        sub: "sst",
        amount:80,
        id : 4,
        status: "pen"
},
{
        age:27,
        name: "damru",
        sub: "science",
        amount:40,
        id : 5,
        status: "com"
},
{
        age:12,
        name: "mali",
        sub: "computer",
        amount:70,
        id : 6,
        status: "pen"
}
]

console.log(arr.filter(ele => ele.amount >30 && ele.amount <70));

    
