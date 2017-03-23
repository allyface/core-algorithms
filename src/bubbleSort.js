export default function bubbleSort(arr) {
	let index = arr.length

	while (index > 0) {
		for (var i = 0; i < arr.length - 1; i++) {
			let firstNumber = arr[i]
			let secondNumber = arr[i + 1]

			if (firstNumber > secondNumber) {
				arr[i] = secondNumber
				arr[i + 1] = firstNumber
			}
		}

		index--
	}

	return arr
}

function bubble(arr, index=arr.length) {
	if (index < 0) return arr

	for (let i = 0; i < arr.length - 1; i++) {
		let leftNumber = arr[i]
		let rightNumber = arr[i + 1]

		if (leftNumber > rightNumber) {
			arr[i] = rightNumber
			arr[i + 1] = leftNumber
		}
	}

	return bubble(arr, index - 1)
}

console.log(bubble([2, 11, 4, 6, 1, 8, 9, 3]))
