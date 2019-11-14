$("#shoot").click(function () {
  var choice = Math.random();

    let answer = $("#input").val()
    $("#userChoice").html(answer)

  if (choice > .60) {
    $("#computerChoice").html("Rock");
  } else if (choice < .60 & choice > .30) {
    $("#computerChoice").html("Paper");
  } else {
    $("#computerChoice").html("Scissors");
  }
});

