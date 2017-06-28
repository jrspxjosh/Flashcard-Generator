// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");
// // "George Washington"
// console.log(firstPresidentCloze.cloze);
// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "
// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "
// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");



var ClozeCard = function(text, cloze){
  this.cloze = cloze;
  this.fullText = text;
  this.partial  =  function() {
    if(text.includes (cloze)){
      return text.replace(cloze,"...");
    }
    else {
      return "error";
    }
  }
}
var firstPresidentCloze = new ClozeCard( "George Washington was the first president of the United States.", "green eggs and ham");
// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.fullText);
console.log(firstPresidentCloze.partial());
