const s = { hello: "test" };

const intToArray = (int) => {
    return String(int).match(/-?\d/g).map(Number)
  }
  
  console.log(intToArray(312)) // [3, 1, 2]
  console.log(intToArray(-312)) // [-3, 1, 2]

export function noBoringZeros(n) {
    const numAsArray = intToArray(n)
    let computedArray = [];
    let hasBoringZero = true;
    
    for (let i = numAsArray.length; i >= 0; i--) {
      console.log("i", numAsArray[i]);
      if(numAsArray[i] > 0){
          hasBoringZero = false;
      } 
      if (!hasBoringZero){
          computedArray = [ numAsArray[i] ,...computedArray]
      }
      console.log('computedArray: ', computedArray)
    }
    return +computedArray.reduce( (acc, val) => acc+""+val);
}

// console.log('hello 2', s)
console.log("no boring zeros", noBoringZeros(20));
