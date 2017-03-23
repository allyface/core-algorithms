export default function setSymmetricDifference(arr1, arr2) {
	let array = arr1.concat(arr2)
	
	return array.filter(function(number) {
		if ( array.indexOf(number) === array.lastIndexOf(number) ) return number
	}).sort()
}
