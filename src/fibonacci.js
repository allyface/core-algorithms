export default function fibonacci(number, arr=[0]) {
  if ( arr.length >= number ) return arr

  arr.push( arr.length === 1 ? 1 : arr[arr.length - 1] + arr[arr.length - 2] )

  return fibonacci(number, arr)
}
