const firstname = "bhargavi";
const secondname = "anandh";
const newstring = firstname + secondname;
let count = 0;
let index = 0;
const letterToCount = "a";
while(index <= newstring.length){ 
  if( newstring[index] === letterToCount){
    count++;
  }
  index++;
}
console.log(letterToCount,"=",count);
