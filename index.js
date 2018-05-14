
function fizzbuzz(number){
  if( number%3 === 0 && number%5 === 0){
    return 'fizzbuzz';
  } if (number%3 === 0 || number.filter(item => item.includes('3'))){
    return 'fizz';
  }else if(number%5 === 0){
    return 'buzz';
  } else return number;
};
module.exports = fizzbuzz;
// function paddingLeft(string, finalSize, character){
//   let charactersToAdd = finalSize - string.length;
//   if (finalSize <= charactersToAdd){
//     return string;
//   }else{
// 	let characters = '';
//     for (i = 0; i < charactersToAdd; i++){
// 		characters += character;
//     }
// return characters + string;
//   }
// };
// module.exports = paddingLeft;

// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// var number = 23
// const result = number.filter(figure => figure.includes()(3))
// const attendees = this.state.characters.filter(item => item.name.toLowerCase().includes(this.state.search));
// es