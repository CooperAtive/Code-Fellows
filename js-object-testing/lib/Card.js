exports.Card = function(suit, rank) {
    function contructor() {};
    constructor.prototype.getRank = function() { return rank; };
    constructor.prototype.getSuit = function() { return suit; };
    return new constructor();
};
