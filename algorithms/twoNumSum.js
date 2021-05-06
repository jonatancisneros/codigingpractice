//Two number sum
//Receive an array and target sum
//return the two items that fit the sum

let inputArray = [1,2,3,4,8];
let targetSum = [12];

function getTargetSum(inputArray, target)
{
    // O(N) Time = O(n2) O(N) Space = O(N2) 
    for(let i=0; i<= inputArray.length -1 ; i++)
    {
        let currentValue =target - inputArray[i];
        
       for(let j=0; j<= inputArray.length-1; j++ )
       {
            if(inputArray[j]=== currentValue)
                return [inputArray[i], inputArray[j]];
       }
      
    }
 
}
let val= getTargetSum(inputArray, targetSum);
console.log(val);
