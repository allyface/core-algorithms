export default function isConnectedGraph(obj) {
	if (typeof obj !== 'object') throw new Error('Argument must be an object')

	let allKeys = Object.keys(obj)

	for (let key in obj) {
		let connections = [obj[key]]
		
		obj[key].forEach(function(val) {
			connections.push(obj[val])
		})

		connections = connections.reduce((arr, subArr) => arr.concat(subArr), []).sort()

		if ( !identical( allKeys, [...new Set(connections)] ) ) return false
	}
		
	return true
}

function identical(arr1, arr2) {
  for (let i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true;
}
