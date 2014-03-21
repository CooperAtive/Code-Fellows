exports.Television = function(brand, screen_size) {
    var is_on = false;
    var current_channel = 2;
    function constructor() {};
    constructor.prototype.getBrand = function () { return brand; };
    constructor.prototype.getSize = function () { return screen_size; };
    constructor.prototype.getChannel = function () { return current_channel; };
    constructor.prototype.isOn = function () { return is_on; };
    constructor.prototype.channelUp = function () { 
        if (current_channel < 100) {
            current_channel++;
        }
        else current_channel = 1;
    };
    constructor.prototype.channelDown = function () { 
        if (current_channel > 1) {
            current_channel--;
        }
        else current_channel = 100;
    };
    constructor.prototype.onOff = function () {
        if (is_on) {
            is_on = false;
        }
        else {
            is_on = true;
        }
    };
    return new constructor();
};
