export default function factorial(number) {
	if (isNaN(number)) throw new Error('Not a number')
	if (number === 0) return 1

	return number * factorial(number - 1)
}