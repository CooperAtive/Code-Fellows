//As a user, I want to recive a card from the deck
//--the card I am dealt exists/is an object
//--number of cards in my hand increases by 1
//--suit/rank of the card matches the one dealt to me
//--that card is no loger in the deck
//As a dealer, I want to know how many cards have been dealt from the deck
//--the deck exists
//--the deck has 52 unique cards that represent all the suit/rank possibilities
//--when I deal a card, the amount of cards in the deck decreases by 1
//--After I deal a card it no longer exists in the deck
//--I know how many cards have been dealt(are in play)
//I know how many cards are still in the deck
//
//User
//-Hand
//
//Deck
//-inPlay
//-Deck
(function () {
  'use strict';
}());

var Card = require('../lib/User.js').User,
    expect = require('chai').expect;

describe('User object test:', function() {
    beforeEach( function() {
        var User = new Card();
    });
        it('can\'t change the card\'s rank', function() {
            card.rank = "Colonel";
            expect(card.getSuit()).to.not.equal("Colonel");
        });
    });
});
