//As a user, I want to recive a card from the deck
//--the card I am dealt exists/is an object
//--number of cards in my hand increases by 1
//--suit/rank of the card matches the one dealt to me
//--that card is no loger in the deck
//As a dealer, I want to know how many cards have been dealt from the deck
//--the deck exists
//--the deck has 52 unique cards that represent all the suit/rank possibilities
//--when I deal a card, the amount of cards in the deck decreases by 1
//--I know how many cards have been dealt(are in play)
//I know how many cards are still in the deck
//
//User
//-inHand
//
//Deck
//-inPlay
//-inDeck
(function () {
  'use strict';
}());

var Deck = require('../lib/Card.js').Deck,
    expect = require('chai').expect;

describe('Deck object test:', function() {
    beforeDeck( function() {
        var deck = new Deck();
    });
        it('the deck exists', function() {
            expect(deck).to.be.an.object();
        });
        it('the deck has 52 unique cards that represent all the suit/rank possibilities',
            function(){
                expect(deck.inDeck.length).to.equal(52);
                //check for 52 unique cards
        });
        it('when I deal a card, the number of cards in the deck decreases by 1',
            function(){
                var currentDeckCount = deck.inDeck.length;
                deck.dealCard();
                expect(deck.inDeck.length).to.equal(currentDeckCount-1);
        });
        it('I know how many cards have been dealt', function() {
            expect(deck.inPlay.length).to.be.above(-1);
            expect(deck.inPlay.length).to.be.below(53);
        });
        it('I know how many cards are in the deck', function() {
            expect(deck.inDeck.length).to.be.below(53);
            expect(deck.inDeck.length).to.be.above(-1);
        });
    });
});
