var list = require('./bins/bins.json');

exports.checkBin = function (bin) {
    
    if ((bin.length) < 6) throw new Error('Bin length must be larger than 5');

    bin = bin.replace(/ /g, '');
    if (bin.length > 6) {
        bin = bin.substring(0, 6);
    }
    return list[bin];
}

exports.validateBin = function (card) {
    if (card.length < 13) throw new Error('Card length must be larger than 13');

    card = card.replace(/ /g, '');
    var nCheck = 0, nDigit = 0, bEven = false;
    card = card.replace(/\D/g, "");

    for (var n = card.length - 1; n >= 0; n--) {
        var cDigit = card.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}