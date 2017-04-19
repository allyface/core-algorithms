export default function setIntersection(arr1, arr2) {
	if (typeof arr1 !== 'object' || typeof arr2 !== 'object') throw new Error('Both arguments must be arrays')
		
  return [...new Set(arr1.filter(function(number) {
    return arr2.indexOf(number) != -1
  }))].sort()
}
