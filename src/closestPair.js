export default function closestPair(arr) {
	let result = { pair: [], distance: Infinity }

	for ( let i = 0; i < arr.length - 2; i++ ) {

		for ( let x = i + 1; x < arr.length - 1; x++ ) {
			let a = Math.abs(arr[i][0] - arr[x][0])
			let b = Math.abs(arr[i][1] - arr[x][1])
			let c = Math.sqrt(a**2 + b**2)

			if ( c < result['distance'] ) {
				result['distance'] = c
				result['pair'] = [ arr[i], arr[x] ]
			}
		}

	}

	return result
}
