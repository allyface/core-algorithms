import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('returns an array', function(){
    expect(setUnion([1], [1, 2])).to.deep.equal([1, 2])
  })

  it('removes duplicates from arrays passed', function(){
    expect(setUnion([2, 1], [1, 2, 3])).to.deep.equal([1, 2, 3])
  })

  it('throws an error if arguments are not arrays', () => {
    expect(() => setUnion('g', ['h']) ).to.throw(
       Error, 'Both arguments must be arrays'
    )
  })
})