import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns 1 if given number is 0', function(){
    expect(factorial(0)).to.equal(1)
  })

  it('returns 120 if given number is 5', function(){
    expect(factorial(5)).to.equal(120)
  })

  it('return 40320 if given number is 8', function(){
    expect(factorial(8)).to.equal(40320)
  })
})