'use strict';

function isValidDate(value) {
  if (!(value instanceof Date)) {
    return false;
  }

  var time = value.getTime();
  return time === time;
}

function isNotValidDate(value) {
  return !isValidDate(value);
}

Object.defineProperty(isValidDate, 'not', {
  enumerable: true,
  value: isNotValidDate,
});

module.exports = isValidDate;
