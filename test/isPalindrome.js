import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('return true if given string is a palindrome', function(){
    const checkPalindrome = isPalindrome('radar')

    expect(checkPalindrome).to.be.true

  })

  it('returns false if given string is not a palindrome', function(){
    const checkPalindrome = isPalindrome('banana')

    expect(checkPalindrome).to.be.false
  })

  it('ignores punctuation, spacing, and case sensitivity', function(){
    const checkPalindrome = isPalindrome('A man, a plan, a canal: Panama')

    expect(checkPalindrome).to.be.true
  })

  it('returns true if input is a palindrome of numbers', function() {
    expect(isPalindrome(12321)).to.be.true
  })
})