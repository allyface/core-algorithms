export default function bubbleSort(arr) {
	if (typeof arr !== 'object') throw new Error('Argument must be an array')

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