export default function setIntersection(arr1, arr2) {
  return [...new Set(arr1.filter(function(number) {
    return arr2.indexOf(number) != -1
  }))].sort()
}
