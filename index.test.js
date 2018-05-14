// //EXERCISE 1
// const fizzbuzz = require('./index');

// describe('Fizzbuzz', function(){

//   test('returns a number', function(){
//    expect(fizzbuzz(7)).toBe(7);
//   });
//   test('returns fizz if number is multiple of 3', function(){
//     expect(fizzbuzz(3)).toBe('fizz');
//     expect(fizzbuzz(9)).toBe('fizz');
//     expect(fizzbuzz(207)).toBe('fizz');
//    });
//   test('returns buzz if number is multiple of 5', function(){
//     expect(fizzbuzz(5)).toBe('buzz');
//     expect(fizzbuzz(50)).toBe('buzz');
//     expect(fizzbuzz(2076545)).toBe('buzz');
//   });
//   test('returns fizzbuzz if number is multiple of both 3 and 5', function(){
//     expect(fizzbuzz(15)).toBe('fizzbuzz');
//     expect(fizzbuzz(90)).toBe('fizzbuzz');
//     expect(fizzbuzz(1035)).toBe('fizzbuzz');
//   });
//   test('returns fizz if number contains 3', function(){
//     expect(fizzbuzz(143)).toBe('fizz');
//     expect(fizzbuzz(100000223)).toBe('fizz');
//   });
//   test('returns buzz if number contains 5', function(){
//     expect(fizzbuzz(151)).toBe('buzz');
//     expect(fizzbuzz(52)).toBe('buzz');
//   });
//   test('returns number if not multiple of 3, 5 or doesnt contain 3', function(){
//     expect(fizzbuzz(14)).toBe(14);
//     expect(fizzbuzz(1)).toBe(1);
//   });
//   test('returns fizz if number contains 3', function(){
//     var number;
//     var result;
//     function returnNumber(number){
//       num = number.toString();
//       if (result = num.includes('3')){
//       return 'fizz';
//       }else if(result = num.includes('5')){
//        return 'buzz';
//       }else return number;
//     }
//     expect(returnNumber(3)).toBe('fizz');
//     expect(returnNumber(6551)).toBe('buzz');
//     expect(returnNumber(8)).toBe(8);
//   });
// });

//EXERCISE 2
const paddingLeft = require('./index');
describe('Padding-left', function(){
  test('returns original stirng', function(){
    expect(paddingLeft('hello')).toBe('hello');
  });
  test('adds 1 character to the left', function(){
    expect(paddingLeft('hello', 6, 'x')).toBe('xhello');
  });
  test('adds 2 characters to the left', function(){
    expect(paddingLeft('hello', 7, 'x')).toBe('xxhello');
  });
  test('adds 3 characters to the left', function(){
    expect(paddingLeft('hello', 8, 'x')).toBe('xxxhello');
    expect(paddingLeft('María', 8, 'o')).toBe('oooMaría');
  });
  test('adds 3 spaces to the left if not given a character', function(){
    function paddingLeft(string, finalSize, character){
      let charactersToAdd = finalSize - string.length;
      if (finalSize <= charactersToAdd){
        return string;
      }else{
        let characters = '';
        for (i = 0; i < charactersToAdd; i++){
          if (!character){
            character = ' ';
          }
          characters += character;
        }
        return characters + string;
      }
    };
    expect(paddingLeft('hola', 5)).toBe(' hola');
    expect(paddingLeft('brujas', 10)).toBe('    brujas');

  });
});

