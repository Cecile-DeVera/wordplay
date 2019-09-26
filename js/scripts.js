$(document).ready(function() {
  $("#userInput form").submit(function(event) {
    $("#threeLetterWordOuput p").empty();
    var userSentenceValue = $("#userSentence").val();
    var userWords = userSentenceValue.split(' ');
    var threeLetterWords = userWords.map(function(threeLetterWord) {
      if (threeLetterWord.length >= 3) {
        return threeLetterWord;
      } else {
        return "";
      }
    });
    threeLetterWords.reverse();
    threeLetterWords.forEach(function(threeLetterWordB) {
      if (threeLetterWordB === "") {

      } else {
        $("#threeLetterWordOuput p").append(threeLetterWordB + " ");
      }
    });
    event.preventDefault();
  });
});
