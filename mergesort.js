function split(arr) {
  const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  const secondHalf = arr.slice(Math.floor(arr.length / 2), arr.length);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergeArr = [];
  let combinedLen = arr1.length + arr2.length;

  while (mergeArr.length < combinedLen) {
    if (arr1[0] > arr2[0] || arr1[0] === undefined) {
      mergeArr.push(arr2.shift());
    } else {
      mergeArr.push(arr1.shift());
    }
  }

  return mergeArr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const splitArr = split(arr);
    const left = splitArr[0];
    const right = splitArr[1];
    return merge(mergeSort(left), mergeSort(right));
  }
}
