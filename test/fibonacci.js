import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe.only('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('returns [0] if number passed in is zero', function(){
    expect(fibonacci(0)).to.deep.equal([0])
  })
  
  it('returns an array of numbers', function(){
    expect(fibonacci(2)).to.deep.equal([0, 1])
  })

  it('returns array with nth numbers', function(){
    expect(fibonacci(4)).to.deep.equal([0, 1, 1, 2])
  })

  it('returns a fibonacci array with nth items', function(){
    expect(fibonacci(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
})