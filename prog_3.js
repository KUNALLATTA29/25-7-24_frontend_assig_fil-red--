const arr = [
    {
        age:23,
        name: "kunal",
        sub: "math",
        amount:50
},
 {
        age:25,
        name: "chunu",
        sub: "english",
         amount:10
},
{
        age:26,
        name: "kaliya",
        sub: "hindi",
        amount:40
},
{
        age:13,
        name: "bheem",
        sub: "sst",
        amount:80
},
{
        age:27,
        name: "damru",
        sub: "science",
        amount:40
},
{
        age:12,
        name: "mali",
        sub: "computer",
        amount:70
}
]

console.log(arr.filter(ele => ele.amount >50));
    
