export default function setComplement(arr1, arr2) {
	return arr2.filter(function(number) {
		if (!arr1.includes(number)) return number
	}).sort()
}
