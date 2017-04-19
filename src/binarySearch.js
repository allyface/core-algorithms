export default function binarySearch(arr, val) {
	if (typeof arr !== 'object' || typeof val !== 'number') throw new Error('Arguments must be an array and a number to search for')
		
	let leftIndex = 0
	let rightIndex = arr.length - 1
	
	while( leftIndex <= rightIndex ) {
		let midPoint = Math.floor((leftIndex + rightIndex) / 2)

		if (arr[midPoint] === val) return midPoint

		arr[midPoint] < val ? leftIndex = midPoint + 1 : rightIndex = midPoint - 1
	}

	return 'not found'
}