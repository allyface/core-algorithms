export default function mergeSort(arr) {
	let midPoint = Math.floor(arr.length / 2)

	let left = arr.slice(0, midPoint)
	let right = arr.slice(midPoint)
	
	let index = 0

	while (left.length != 0 && right.length != 0) {
		if ( left[0] < right[0] ) {
			arr[index] = left.shift()
		} else {
			arr[index] = right.shift()
		}
		
		index++
	}
	
	while (left.length != 0 || right.length != 0) {
		if ( left.length === 0 ) {
			arr[index] = right.shift()
		}

		if ( right.length === 0 ) {
			arr[index] = left.shift()
		}

		index++
	}

	return arr
}
