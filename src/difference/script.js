let difference = [[2, 1], [2, 3]];
let newarr = difference.flat()


function removeArray (arr, looking) {
   const test = arr.filter(item => item !== looking)
    return test
    
}

function removeArrayinarray (arr, looking) {
   const first = arr.map(item => (
      item.filter((pop) => pop !== looking)
   )
   )
    return first   
}


console.log(removeArray(newarr,1)); 
console.log(removeArrayinarray(difference,1)); 
