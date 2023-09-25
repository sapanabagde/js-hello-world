function makeLine(size) {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += '#';
  }
  return line;                         
}
//console.log(makeLine(5));                  //that returns a line with exactly size hashes.
//console.log(makeLine(5));
//console.log(makeLine(5));
//console.log(makeLine(5));
 //console.log(makeLine(5));


function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle.slice(0, -1);
}
//console.log(makeRectangle(5, 3));      //that returns a rectangle with the given width and height, use the makeline function to do this



function makeDownwardStairs(height) {
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i+1) + '\n');
  }
  return stairs.slice(0, -1);
}
//console.log(makeDownwardStairs(5));  //that prints the staircase pattern


// add spaces
function makeSpaceLine(numSpaces, numChars){
    let line = '';
    for ( let i= 0; i < numSpaces; i++){
    line += ' ';
    }

    //add characters
  
for ( let j= 0; j < numChars; j++) {
    line += '#';
    }
return line;
}
//console.log(makeSpaceLine(3, 5));


function makeIsoscelesTriangle(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(5));






















