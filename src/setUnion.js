export default function setUnion(arr1, arr2) {
	if (typeof arr1 !== 'object' || typeof arr2 !== 'object') throw new Error('Both arguments must be arrays')

	return [...new Set(arr1.concat(arr2).sort())]
}
