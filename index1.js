//parents
var how2Play = document.getElementById(
    "how2Play");
    var point =
    document.getElementById("points");
    var clickers = document.getElementById(
    "clickers");
    var scores =
    document.getElementById("scores");
    //children
    var rules =
    document.getElementById("rules");
    var rule =
    document.getElementById("rule");
    var hitb =
    document.getElementById("hit");
    var stayb =
    document.getElementById("stay");
    var playAgain =
    document.getElementById("playAgain");
    //updates
    clickers.removeChild(playAgain);
    var p =
    document.getElementById("p");
    var tp =
    document.getElementById("tp");
    var cp =
    document.getElementById("cp");
    var wins =
    document.getElementById("wins");
    var loss =
    document.getElementById("loss");
    var winner =
    document.getElementById("winner");
    //variables
    var points = 0;
    var totalPoints = 0;
    var computerPoints = [14, 15, 16, 17,
    18, 19,
    20, 21
    ];
    var w = 0;
    var l = 0;
    var remove = true;
    //function to remove rules
    function RemoveRules() {
    if (remove) {
      how2Play.removeChild(rules);
      how2Play.removeChild(rule);
    }
    remove = false;
    }
    //reset function
    function reset() {
    points = rNum();
    p.innerHTML = "Points: " + points;
    totalPoints = 0;
    totalPoints += points;
    tp.innerHTML = "Total Points: " +
      totalPoints;
    clickers.removeChild(playAgain);
    clickers.appendChild(hitb);
    clickers.appendChild(stayb);
    winner.innerHTML = "";
    cp.innerHTML = "Computer: ?";
    }
    //random number function
    function rNum() {
    var x = Math.floor(Math.random() * 9 +
      2);
    return x;
    }
    //win function
    function won() {
    w++;
    winner.innerHTML = "You have won!";
    wins.innerHTML = "Wins: " + w;
    }
    //loss function
    function lost() {
    l++;
    loss.innerHTML = "Loss: " + l;
    }
    //hit function
    function hit() {
    RemoveRules();
    points = rNum();
    p.innerHTML = "Points: " + points;
    totalPoints += points;
    tp.innerHTML = "Total Points: " +
      totalPoints;
    if (totalPoints === 21) {
      won();
      clickers.removeChild(hitb);
      clickers.removeChild(stayb);
      clickers.appendChild(playAgain);
    } else if (totalPoints > 21) {
      lost();
      winner.innerHTML = "You Busted!";
      clickers.removeChild(hitb);
      clickers.removeChild(stayb);
      clickers.appendChild(playAgain);
    }
    }
    //stay function
    function stay() {
    RemoveRules();
    var computer = computerPoints[Math
      .floor(
       Math.random() * computerPoints
       .length)];
    cp.innerHTML = "Computer: " +
    computer;
    if (computer < totalPoints) {
      won();
      clickers.removeChild(hitb);
      clickers.removeChild(stayb);
      clickers.appendChild(playAgain);
    } else {
      lost();
      winner.innerHTML =
       "The computer has won!";
      clickers.removeChild(hitb);
      clickers.removeChild(stayb);
      clickers.appendChild(playAgain);
    }
    }
    