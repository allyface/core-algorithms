 export default function fizzBuzz() {
	let set = []

	for (let i = 1; i <= 100; i++) {
		if ( i % 3 === 0 ) {
			set.push( i % 5 === 0 ? 'FizzBuzz' : 'Fizz' )
		} else {
			set.push( i % 5 === 0 ? 'Buzz' : i )
		}
	}

	return set
}
