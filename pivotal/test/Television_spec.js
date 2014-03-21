/*jshint expr: true*/
(function () {
    'use strict';
}());

var Television = require('../lib/Television.js').Television,
    expect = require('chai').expect;

describe('Television object test:', function() {
    var tv;
    beforeEach( function() { 
        tv = new Television('Samsung', 65);
    });

    describe('constructor', function() {
        it('Television should be truthy (exists)', function() {
            expect(tv).to.be.ok;
        });
        it('getBrand equals the brand of the tv', function() {
            expect(tv.getBrand()).to.equal('Samsung');
        });
        it('getSize equals the size of the tv', function() {
            expect(tv.getSize()).to.equal(65);
        });
        it('getChannel equals the current channel', function() {
            expect(tv.getChannel()).to.equal(2);
        });
        it('isOn returns the state of the TV', function() {
            expect(tv.isOn()).to.equal(false);
        });
        it('channelUp increases current_channel by 1, or from 100 to 1', function () {
            tv.channelUp();
            expect(tv.getChannel()).to.equal(3);
            var i;
            for (i = 0; i < 100; i++) {
                if(tv.getChannel() == 100) {
                    tv.channelUp();
                    expect(tv.getChannel()).to.equal(1);
                }
                tv.channelUp();
            }
        });
        it('channelDown decreases current_channel by 1, or from 1 to 100', function () {
            tv.channelDown();
            expect(tv.getChannel()).to.equal(1);
            var i;
            for (i = 0; i < 100; i++) {
                if(tv.getChannel() == 1) {
                    tv.channelDown();
                    expect(tv.getChannel()).to.equal(100);
                }
                tv.channelDown();
            }
        });
    });
});
