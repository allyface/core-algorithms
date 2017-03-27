import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('returns an array', function(){
    expect(mergeSort([2, 1])).to.deep.equal([1, 2])
  })

  it('returns sorted array', function(){
    expect(mergeSort([4, 1, 2, 3])).to.deep.equal([1, 2, 3, 4])
  })

  it('throws an error if argument is not an array', () => {
    expect(() => mergeSort('g') ).to.throw(
       Error, 'Argument must be an array'
    )
  })
})