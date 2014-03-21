exports.Counter = function() {
    var count;
    var constructor = function() { count = 0; };
    constructor.prototype.increment = function() { count++; };
    constructor.prototype.getValue = function() { return count; };
    return new constructor();
}
