var list = require('./bins/bins.json');

exports.checkBin = function (bin) {
    bin = bin.replace(/ /g, '');
    if (bin.length > 6) {
        bin = bin.substring(0, 6);
    }
    return list[bin];
}

exports.validateBin = function (card) {
    
}