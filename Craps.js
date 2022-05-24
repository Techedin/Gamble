
function RollDice() {
  //Makes some random numbers between 1 and 6 to signify dice
  var x = Math.floor(Math.random() * 6) + 1;
  var y = Math.floor(Math.random() * 6) + 1;
  //add em
  var sum = x + y;
  //display em
  document.getElementById("Die 1").innerHTML = "Die 1 = " + x;
  document.getElementById("Die 2").innerHTML = "Die 2 = " + y;

  document.getElementById("Sum").innerHTML = "Sum is = " + sum;
// Win or Lose logic pulled from the lessons
  if (sum == 7 || sum == 11) {
    document.getElementById("StateText").innerHTML = "You lose";
  } else if ((x == y) & (x % y == 00)) {
    document.getElementById("StateText").innerHTML = "You win";
  }
}