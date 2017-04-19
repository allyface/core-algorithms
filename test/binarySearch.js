import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', function(){

  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })

  it('returns not found if value passed does not exist', function(){
    expect(binarySearch([1, 2, 3], 4)).to.equal('not found')
  })

  it('returns the index of value in array passed in', function(){
    expect(binarySearch([1, 2, 3], 3)).to.equal(2)
    expect(binarySearch([1, 2, 3], 1)).to.equal(0)
  })

  it('throws an error if argument is not an array', () => {
    expect(() => binarySearch('a', 'g') ).to.throw(
       Error, 'Arguments must be an array and a number to search for'
    )
  })
})