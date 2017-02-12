var questions = [
  [1, 'What is 3 + 2?', 5],
  [2, 'What is 100 - 20?', 80],
  [3, 'What is 40 * 2?', 80],
]

var question;
var answer;
var score = 0;
var userResponse;
var correctQuestions = [];
var incorrectQuestions = [];
var html = " ";

function print (message) {
  document.getElementById("js").innerHTML = html;
}

function playGame () {
  for ( var i = 0; i < questions.length; i++ ) {
    question = questions[i][1];
    answer = questions[i][2];
    userResponse = prompt(question);
    userResponse = parseInt(userResponse);
    if ( userResponse === answer ) {
      print('Congrats, ' + userResponse + ' is the correct answer');
      score += 1;
      correctQuestions.push(question)
    } else {
      print('Unlukcy, we were looking for ' + answer);
      incorrectQuestions.push(question)
    }
  }

  html += '<h4>You scored ' + score + ' out of ' + questions.length + '</h4>';

  html += '<p>You answered the following questions correctly: ' + correctQuestions + '</p>';

  html += '<p>You got the following questions wrong: ' + incorrectQuestions + '</p>';

  print(html);
}
