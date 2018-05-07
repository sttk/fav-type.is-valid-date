# [@fav/type.is-valid-date][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Checks whether a value is a valid date object or not.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/type.is-valid-date
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/type.is-valid-date/` directory manually.*


## Usage

For Node.js:

```js
var isValidDate = require('@fav/type.is-valid-date');
isValidDate(new Date(2017, 8, 30)); // => true
isValidDate(new Date(9999999999, 1, 1)); // => false

isValidDate.not(new Date(2017, 8, 30)); // => false
isValidDate.not(new Date(9999999999, 1, 1)); // => true
```

Or when installing `fav-type.is-valid-date` from github:

```js
var isValidDate = require('fav-type.is-valid-date');
isValidDate(new Date(2017, 8, 30)); // => true
isValidDate.not(new Date(2017, 8, 30)); // => false
```

For Web browsers:

```html
<script src="fav.type.is-valid-date.min.js"></script>
<script>
var isValidDate = fav.type.isValidDate;
isValidDate(new Date(2017, 8, 30)); // => true
isValidDate.not(new Date(2017, 8, 30)); // => false
</script>
```


## API

### <u>isValidDate(value) : boolean</u>

Checks if *value* is a valid date object.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is a valid date.

**Type:** boolean


### <u>isValidDate.not(value) : boolean</u>

Checks if *value* is not a valid date object.

This function always returns a negative boolean of `isValidDate(value)`.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is not a valid date.

**Type:** boolean


## Checked                                                                      

### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017-2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.


[repo-url]: https://github.com/sttk/fav-type.is-valid-date/
[npm-img]: https://img.shields.io/badge/npm-v1.0.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.is-valid-date
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-type.is-valid-date.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-type.is-valid-date
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-type.is-valid-date?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-type-is-valid-date
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-type.is-valid-date/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-type.is-valid-date?branch=master
