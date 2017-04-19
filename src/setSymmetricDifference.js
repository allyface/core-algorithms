export default function setSymmetricDifference(arr1, arr2) {
	if (typeof arr1 !== 'object' || typeof arr2 !== 'object') throw new Error('Both arguments must be arrays')
	
	let array = arr1.concat(arr2)
	
	return array.filter(function(number) {
		if ( array.indexOf(number) === array.lastIndexOf(number) ) return number
	}).sort()
}
