import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('returns an array', function(){
    expect(setIntersection([1], [1, 2])).to.deep.equal([1])
  })

  it('return duplicates from arrays passed', function(){
    expect(setIntersection([2, 1], [1, 2, 3])).to.deep.equal([1, 2])
  })

  // it('throws an error if array contains non-integer', function(){
  //   expect(setIntersection([1, 2], [1, '2'])).to.deep.equal()
  // })
})