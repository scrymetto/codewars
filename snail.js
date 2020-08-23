function goRight (array, result){
  if (array.length===0) return result;
  const newResult = [...result, ...array[0]];
  const newArray = array.slice(1);

  return goDown(newArray, newResult)
}

function goDown (array, result){
  if (array.length===0) return result;
  const newResult = [...result];
  const newArray = [];
  array.forEach((subArray, index) => {
    newResult.push(subArray[subArray.length-1]);
    newArray[index] = subArray.slice(0, -1);
  })

  return goLeft(newArray, newResult)
}

function goLeft (array, result) {
  if (array.length===0) return result;
  const newResult = [...result, ...array[array.length-1].reverse()];
  const newArray = array.slice(0, -1);

  return goUp(newArray, newResult)
}

function goUp (array, result) {
  if (array.length===0) return result;
  const newResult = [...result];
  const newArray = [];
  array.reverse().forEach((subArray, index)=> {
    newResult.push(subArray[0]);
    newArray[index] = subArray.slice(1)
  })

  return goRight(newArray.reverse(), newResult)
}

function snail (array) {
  const result = [];
  if (array.length === 0 || array[0].length === 0) return result;
  if (array[0].length === 1) {
    result.push(array[0][0]);
    return result
  }

  return goRight(array, result)
}
console.log(snail([[]]));
console.log(snail([[2]]));
console.log(snail([[1,2,3], [4,5,6], [7,8,9]]));
console.log(snail([[1,2,3,4], [4,5,6,7], [7,8,9,0], [1,2,3,4]]));