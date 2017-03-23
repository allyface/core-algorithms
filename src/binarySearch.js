export default function binarySearch(arr, val) {
	if (isNaN(val)) return 'value must be a number'
		
	let leftIndex = 0
	let rightIndex = arr.length - 1
	
	while( leftIndex <= rightIndex ) {
		let midPoint = Math.floor((leftIndex + rightIndex) / 2)

		if (arr[midPoint] === val) return midPoint

		arr[midPoint] < val ? leftIndex = midPoint + 1 : rightIndex = midPoint - 1
	}

	return 'not found'
}