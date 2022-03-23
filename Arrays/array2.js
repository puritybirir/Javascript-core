// Manipulating and sorting arrays in Javascript
/***
 * 0 - Luke
 * 1 - Leia
 * 2 - Han
 * 3 - Chewie
 */
var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
console.log(characters);

characters.splice(0, 1, 'Rey');
characters;

characters.splice(1, 2, 'Kylo');
characters;

characters.splice(1, 1, 'C3P0', 'R2D2');
characters;

//to remain with just Rey and Chewie
characters.splice(1, 2);
characters;

// Add BB8 and Obiwan
characters.push('BB8');
characters.push('Obiwan');
characters;

// Sorting
characters.reverse();
characters;

characters.sort();
characters;


// IndexOf and LastIndexOf
// IndexOf finding an item in an array


//position 1
var position = characters.indexOf('Chewie');
position;

//position -1
var position = characters.indexOf('Jake');
position;

//lastIndexOf starts looking from the back
characters.push('Chewie')

//Returns index 1
var pos = characters.indexOf('Chewie');
pos;

var pos = characters.lastIndexOf('Chewie');
pos;


