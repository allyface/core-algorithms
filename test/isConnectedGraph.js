import { expect } from 'chai'
import isConnectedGraph from '../src/isConnectedGraph'

describe.only('isConnectedGraph()', function(){

  it('should be a function', function(){
    expect(isConnectedGraph).to.be.a('function')
  })

  it('returns false if graphs are not connected', function(){
    expect(isConnectedGraph({'a': ['b'], 'b': ['a'], 'c': ['d'], 'd': ['c']})).to.be.false
  })

  it('returns true if graphs are connected', function(){
    expect(isConnectedGraph({'a': ['b', 'c'], 'b': ['a', 'd'], 'c': ['a', 'd'], 'd': ['b', 'c']})).to.be.true
  })

})