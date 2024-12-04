// code your solution 

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(record){
    let x = record.find((game)=> game.result==="W")
    if(x){
        return x.year
    }else{
        return undefined;
    }
    

   
}

console.log(superbowlWin(record));