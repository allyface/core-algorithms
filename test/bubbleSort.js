import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })

  it('returns an array', function(){
    expect(bubbleSort([2, 1])).to.deep.equal([1, 2])
  })

  it('returns sorted array', function(){
    expect(bubbleSort([4, 1, 2, 3])).to.deep.equal([1, 2, 3, 4])
  })

  it('throws an error if argument is not an array', () => {
    expect(() => bubbleSort('g') ).to.throw(
       Error, 'Argument must be an array'
    )
  })
})