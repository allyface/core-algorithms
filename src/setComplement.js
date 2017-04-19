export default function setComplement(arr1, arr2) {
	if (typeof arr1 !== 'object' || typeof arr2 !== 'object') throw new Error('Both arguments must be arrays')
	
	return arr2.filter(function(number) {
		if (!arr1.includes(number)) return number
	}).sort()
}
