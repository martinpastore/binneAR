# BinneAR

BinneAR is a simple but efective bin validator for all banks in Argentina

## Installing

To start, you must run the following command:

```
npm i binnear
```

or

```
npm install binnear
```

## Getting started

```javascript
var binnear = require('binnear');
```

## Methods

### Check BIN

```javascript
checkBin(bin)
```

*bin -> string (The method is prepare to receive 6 or more chars, but no less.)*

### Validate Card

```javascript
validateBin(card)
```

*card -> string (The method is prepare to receive 13 to 18 chars, no more, no less.)*


## Authors

* **Martín Pastore** - *JS Developer* - [martinpastore](https://github.com/martinpastore)

## Contributions

Please, feel free to contribute and increase bins list.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
