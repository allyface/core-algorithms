import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe.only('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  it('should return an array', function(){
    expect(collatzConjecture(1)).to.deep.equal([1])
  })

  it('returns 1 if given number is 1', function(){
    expect(collatzConjecture(1)).to.deep.equal([1])
  })

  it('should push n/2 if number is even and 3n+1 otherwise', function(){
    expect(collatzConjecture(7)).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
  })

  // it('throws an error for an invalid input', function() {
  //   expect( function () {
  //     collatzConjecture('a')
  //   }).to.throw(new Error('Value is not a number'))
  // })
})