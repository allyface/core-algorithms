export default function mergeSort(arr) {
  if (typeof arr !== 'object') throw new Error('Argument must be an array')
  var arrLength = arr.length

  if (arrLength <= 1) {
    return arr
  }

  var mid = Math.floor(arrLength / 2)
  var leftArr = arr.slice(0, mid)
  var rightArr = arr.slice (mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr), arr)

}

function merge(leftArr, rightArr, arr) {
  var leftLength = leftArr.length;
  var rightLength = rightArr.length;
  var i = 0;
  var j = 0;
  var k = 0;


  while (i < leftLength && j < rightLength) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i]
      i++
    } else {
      arr[k] = rightArr[j]
      j++
    }
    k++
  }

  while (i < leftLength) {
    arr[k] = leftArr[i]
    i++
    k++
  }

  while (j < rightLength) {
    arr[k] = rightArr[j]
    j++
    k++
  }

  return arr
}
