(function () {
  'use strict';
}());

var Counter  = require('../lib/Counter.js').Counter,
    expect = require('chai').expect;

describe('counter object test:', function() {
    var counter;
    beforeEach( function() {
        counter = new Counter();
    });

    describe('constructor', function() {
        it('Counter should be truthy (exists)', function() {
            expect(counter).to.be.ok;
        });
        it('counter vaue will be zero after it is created', function() {
            expect(counter.getValue()).to.equal(0);
        });
        it('increment() will add one to Counter.count', function() {
            var count = counter.getValue();
            counter.increment();
            expect(counter.getValue()).to.equal(count+1);
        });
    });
});
