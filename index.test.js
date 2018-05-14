const fizzbuzz = require('./index');

describe('Fizzbuzz', function(){
  test('returns a number', function(){
   expect(fizzbuzz(7)).toBe(7);
  });
  test('returns fizz if number is multiple of 3; 9', function(){
    expect(fizzbuzz(9)).toBe('fizz');
   });
  test('returns buzz if number is multiple of 5; 50', function(){
    expect(fizzbuzz(50)).toBe('buzz');
  });
  test('returns fizzbuzz if number is multiple of both 3 and 5; 15', function(){
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });
});

// const paddingLeft = require('./index');
// describe('Padding-left', function(){
//   test('adds 1 character to the left', function(){
//     expect(paddingLeft('hello', 6, 'x')).toBe('xhello');
//   });
//   test('adds 2 characters to the left', function(){
//     expect(paddingLeft('hello', 7, 'x')).toBe('xxhello');
//   });
//   test('adds 3 characters to the left', function(){
//     expect(paddingLeft('hello', 8, 'x')).toBe('xxxhello');
//   });
//   test('adds 8 characters to the left', function(){
//     expect(paddingLeft('María', 8, 'o')).toBe('oooMaría');
//   });
// });