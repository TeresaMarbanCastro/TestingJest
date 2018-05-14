
// function fizzbuzz(number){
//   if(number%3 === 0 && number%5 === 0){
//     return 'fizzbuzz';
//   } if(number%3 === 0 || filterNumber(number) == 'fizz'){
//     return 'fizz';
//   } else if(number%5 === 0 || filterNumber(number) == 'buzz'){
//     return 'buzz';
//   } else return number;
// };
// function filterNumber(number){
//   numberToString = number.toString();
//   if (result = numberToString.includes('3')){
//     return 'fizz';
//   }else if(result = numberToString.includes('5')){
//     return 'buzz';
//   }else return number;
// }
// module.exports = fizzbuzz;


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
module.exports = paddingLeft;
