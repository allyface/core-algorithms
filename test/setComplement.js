import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', function(){

  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })

  it('returns an array', function(){
    expect(setComplement([1], [1, 2])).to.deep.equal([2])
  })

  it('returns complement values of arrays passed', function(){
    expect(setComplement([1], [1, 2, 3])).to.deep.equal([2, 3])
  })

  it('throws an error if arguments are not arrays', () => {
    expect(() => setComplement('g', ['h']) ).to.throw(
       Error, 'Both arguments must be arrays'
    )
  })
})