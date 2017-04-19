import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe('closestPair()', function(){

  it('should be a function', function(){
    expect(closestPair).to.be.a('function')
  })

  it('returns an object with properties: pair and distance', function(){
    let result = closestPair([ [1, 2], [1, 3] ])

    expect(result).to.be.an('object')
    expect(result).to.have.keys('pair', 'distance')
  })

  it('returns the pair with the closest distance and its distance', function(){
    expect(closestPair([
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
])).to.deep.equal({ pair: [ [-1, 0], [-2, 0] ], distance: 1 })
  })

  it('throws an error if argument is not an array', () => {
    expect(() => closestPair('a') ).to.throw(
       Error, 'Argument must be an array'
    )
  })

})