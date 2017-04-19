export default function isPalindrome(string) {
	string = string.toString()

	string = string.replace(/[^0-9a-z]/gi, '').toLowerCase()

	return string === string.split('').reverse().join('') ? true : false
}