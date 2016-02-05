var player = new Player();

function init(){
  var txtBox = document.getElementById("storyText");
  txtBox.value = lobby.name + ": " + lobby.description;
}

function Location(name, description){
  this.name = name;
  this.description = description;
};

function Player(){
  this.location = lobby;
  this.inventory = [];
};

function PuzzleMessage(message){
  this.message = message;
};

function commandMessage(message){
  this.message = message;
};



function item(){
    for(var i=0; i < player.inventory.length ; i++)
    if (player.inventory.indexOf("IdCard") >= 0){
        return true;
    }
};


var guardAnswer = new PuzzleMessage("the guard looks at you with meagre respect in his eyes and slips an IDCARD into your wallet. 'Good job kid, you passed the first test, now you can ENTER the elevator.'")

 var lobby = new Location('lobby', "You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer. ENTER the elevator, TALK to the Security Guard, or go OUTSIDE the building.");

 var securityGuard = new Location('security guard', "The security guard eyes you suspiciously. If you think you're so smart, what is the shortcut for clearing the console?");

 var elevator = new Location('elevator', "The elevator hums ominously at you. It is obviously waiting for something.");

 var elevatorWithID = new Location('elevator', "You wait around for a moment. DING! Your keycard flashes and the elevator starts to move. Which FLOOR?");

 var outside = new Location('outside', "Outside a homeless man starts yelling at you to take a shower. Humiliated, you slink home. Unfortunately you now have to start a NEW GAME");

 var epicodus = new Location ('epicodus', 'A huge room full of epicodus students working hard on their various projects (SIT down at a computer, or CHOOSE a partner for the day.)');

 var wrongfloor = new Location('wrongfloor', "You wander for hours around the huge building unable to find the epicodus office. After three days they find you in the bottom of the elevator shaft.")

 var computer = new Location('computer', "The computer screen swims in front of you dizzily. You are much too tired to work right now.")

 function addIdCard(input) {
  //  debugger;
   var inputCmd = document.getElementById("storyText");
   if (input === "alt k") {
     console.log("idCard");
     player.inventory.push("idCard");
     $("#inventory").append("IdCard");
     inputCmd.value = guardAnswer.message;
     $("input#commandBox").val("");
   }
   else {
     inputCmd.value = "wrong answer kid";
   }
 }

  function enterCommand(){
    // debugger;
    var input = $("input#commandBox").val();
    var inputCmd = document.getElementById("storyText");
    // debugger;
    if (input === "talk") {
      inputCmd.value = securityGuard.name + ": " + securityGuard.description;
      $("input#commandBox").val("");
    } else if (input === "enter" && player.inventory[0] === "idCard") {
      inputCmd.value = elevatorWithID.name + ": " + elevatorWithID.description;
      return secondLevel()
      // elevator === true than run function floor choice

      $("input#commandBox").val("");
    } else if (input === "enter") {
      inputCmd.value = elevator.name + ": " + elevator.description;
      $("input#commandBox").val("");
    } else if (input === "alt k") {
      addIdCard(input);
      $("input#commandBox").val("");
    } else if (input === "outside"){
        inputCmd.value = outside.name + ": " + outside.description;
        $("input#commandBox").val("");
    } else if (input === "new game") {
          window.location.href = "index.html";
          $("input#commandBox").val("");
    } else{
      console.log("fail");
    }
  }
    function secondLevel() {
      var input = $("input#commandBox").val();
      var inputCmd = document.getElementById("storyText");
    if (input === "floor 8"){
        inputCmd.value = epicodus.name + ": " + epicodus.description;
        $("input#commandBox").val("");
      }

      // else if (input !== "floor 8"){
      //   inputCmd.value = wrongfloor.name + ": " + wrongfloor.description;
      // }
    }


  //clear commandBox
  //user enters response
  //gather the users response and save var
  //if else statement to test resposne

$(document).ready(function(){
  init();

  $("#inputCommands").submit(function(event) {
    event.preventDefault();
    enterCommand();
    secondLevel();
  });
});

// var firstChoice =  enterCommand();
//   var secondChoice  = floorChoice(firstChoice);
//   var thirdChoice = thirdFloor(seconChoice);
//   var finalChoice =
