export default function collatzConjecture(number, arr=[number]) {
	if (isNaN(number)) throw new Error('Not a number')

	if (arr[arr.length - 1] === 1) return arr

	arr.push( number % 2 === 0 ? number / 2 : number * 3 + 1 )
		
	number = arr[arr.length - 1]

	return collatzConjecture(number, arr)
}
