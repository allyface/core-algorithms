import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('pushes Fizz if the current number is divisible by 3', function(){
    const results = fizzBuzz()

    expect(results[2]).to.deep.equal('Fizz')

  })

  it('pushes Buzz if the current number is divisible by 5', function(){
    const results = fizzBuzz()

    expect(results[4]).to.deep.equal('Buzz')
  })

  it('pushes FizzBuzz if the current number is divisible by 3 and 5', function(){
    const results = fizzBuzz()

    expect(results[14]).to.deep.equal('FizzBuzz')
  })

  it('pushes the number if it\'s not divisible by 3 or 5', function(){
    const results = fizzBuzz()

    expect(results[0]).to.deep.equal(1)
    expect(results[97]).to.deep.equal(98)
  })
})