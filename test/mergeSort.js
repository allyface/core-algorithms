import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('returns an array', function(){
    expect(mergeSort([1], [1, 2])).to.deep.equal([2])
  })

  it('returns the difference of arrays passed', function(){
    expect(mergeSort([1], [1, 2, 3])).to.deep.equal([2, 3])
  })

  // it('throws an error if array contains non-integer', function(){
  //   expect(mergeSort([1, 2], [1, '2'])).to.deep.equal()
  // })
})