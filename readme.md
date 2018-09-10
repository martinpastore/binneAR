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

```
checkBin(bin)
```

*bin -> string (The method is prepare to receive 6 or more chars, but not less.)*

### Validate Card

```
validateBin(card)
```

*string -> string (The method is prepare to receive 16 or more chars, but not less.)*


## Authors

* **Martín Pastore** - *JS Developer* - [martinpastore](https://github.com/martinpastore)

## Contributions

Please, feel free to contribute and increase bins in the list.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
