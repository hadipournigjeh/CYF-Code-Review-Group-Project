// challenge name: Deep-Flat

//---Write a function that flattens nested arrays 
//into a single array with no nesting

//exemple
// we have nested array const data =[[1,2],3,4,[5,6,7]] 
//we need to turn it into a single array const newdArr =[1,2,3,4,5,6,7]

//## Strategy

//#1---here we are going to use method The Array.isArray() 
//static method determines whether the passed value is an Array.
//The concat() method is used to merge two or more arrays. 
//This method does not change the existing arrays, but instead returns a new array.

const data = [[1, 2], 3, 4, [5, 6, 7]];
function flatten (arr){
    let flatArray = [];

    //do some staff
    arr.forEach(element => {//for each element we want to check is element an array and if it is 
        //we want to call this function
        if (Array.isArray(element)){//The Array.isArray()
            flatArray = flatArray.concat(flatten(element));
            }
    else {
        flatArray.push(element);
        }
    });
return flatArray;
}
const newArray = flatten(data);
console.log(newArray);

//#2 we are going to use The flat(Infinity) method creates a new array with 
//all sub - array elements concatenated into it recursively up to the specified depth.
//infinity means Flatten all levels
const array = [[1, 2], 3, 4, [5, 6, 7]];
function flattenArr(array){
    console.log(array.flat(Infinity));
}
console.log(array); // method .flat does not change initial array


//## Implementation

//---

//## Use Cases

//---

//## Inspiration
//https://www.youtube.com/watch?v=d3TJbWvfSgw

//<!--
  //was there any code, blog post, video, ... that inspired your solution?
  //there's nothing wrong with adapting other people's code, just give them credit!
  //and say how it inspired your solution.
//-->
