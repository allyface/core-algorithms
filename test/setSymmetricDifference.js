import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('returns an array', function(){
    expect(setSymmetricDifference([1], [1, 2])).to.deep.equal([2])
  })

  it('returns the difference of arrays passed', function(){
    expect(setSymmetricDifference([1], [1, 2, 3])).to.deep.equal([2, 3])
  })

  it('throws an error if arguments are not arrays', () => {
    expect(() => setSymmetricDifference('g', ['h']) ).to.throw(
       Error, 'Both arguments must be arrays'
    )
  })
})