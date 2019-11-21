$("#shoot").click(function () {
  var choice = Math.random();

    let userAnswer = $("#input").val();
    let computerAnswer = "";
    $("#userChoice").html(userAnswer);
    

  if (choice > .60) {
    $("#computerChoice").html("rock");
    computerAnswer="Rock";
  } else if (choice < .60 & choice > .30) {
    $("#computerChoice").html("paper");
    computerAnswer="Paper";
  } else {
    $("#computerChoice").html("scissors");
    computerAnswer="Scissors";
  }
  
 if (userAnswer === computerAnswer) {
      $("#result").html("Tie!"); 
  } else if (userAnswer === "rock" && computerAnswer === "Paper") {
      $("#result").html("Paper Wins!");
  } else if (userAnswer === "rock" && computerAnswer === "Scissors") {
      $("#result").html("Rock Wins!");
  } else if (userAnswer === "paper" && computerAnswer === "Rock") {
      $("#result").html("Paper Wins!"); 
  } 


 
});

