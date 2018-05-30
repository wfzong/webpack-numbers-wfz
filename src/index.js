import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}

// var arr = [1, 2, 3, 4, 5, 6];
// arr.reduce((end, item) => {
//   console.log('ITEM:', item);
//   return end + (item % 2 === 0 ? item : 0);
// }, 0);
// ITEM: 1
// ITEM: 2
// ITEM: 3
// ITEM: 4
// ITEM: 5
// ITEM: 6
// 12
