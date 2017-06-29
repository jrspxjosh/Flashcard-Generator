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
var firstPresidentCloze = new ClozeCard( "George Washington was the first president of the United States.", "George Washington");
// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.fullText);
console.log(firstPresidentCloze.partial());


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
var loopsCloze = new ClozeCard( "What are the two different types of loops.", "For && While");
// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.fullText);
console.log(loopsCloze.partial());
