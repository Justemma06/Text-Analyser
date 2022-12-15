// Business Logic

let offensiveWords = ["zoinks","muppeteer","biffaroni","loopdaloop"]

function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function(element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }

  function numberOfOccurrencesInText(word, text) {
    if ((text.trim().length === 0) || (word.trim().length === 0)) {
        return 0;
      }
      const wordArray = text.split(" ");
      let wordCount = 0;
      wordArray.forEach(function(element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
          wordCount++;
        }
      });
      return wordCount;
  }

  function offensiveWordFilter(offensiveWords, text){
    const array = text.split(" ");
    let emptyArray= [];
    array.forEach(function(element){
      if( offensiveWords.includes( punctuationRemover(element))){
         emptyArray.push("****")
      }else{
         emptyArray.push(element)
      }
    });
    return emptyArray.join(" ")
  }

  function punctuationRemover(word){
    let punctuations = [".",",",";","!","-","?",":"]
    punctuations.forEach(function(element){
       word = word.replace(element, "")
    })
    return word;
  }

  function boldPassage(word, text) {
    if (word === text) {
      return "<p><b>" + text + "</b></p>"
    }
  }

  function boldPassage(word, text) {
    text = offensiveWordFilter(offensiveWords, text);
      let htmlString = "<p>";
      let textArray = text.split(" ");
      textArray.forEach(function(element){
          if(word === element) {
              htmlString = htmlString.concat("<b>" + element + "</b>");
          }else {
              htmlString = htmlString.concat(element);
          }
          htmlString = htmlString.concat(" ");
      });
      return htmlString + "</p>"
  }



// UI Logic