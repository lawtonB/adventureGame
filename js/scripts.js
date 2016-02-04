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

var guardAnswer = new PuzzleMessage("the guard looks at you with meagre respect in his eyes and slips an IDCARD into your wallet. 'Good job kid, you passed the first test.'")

 var lobby = new Location('lobby', "You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer. ENTER the elevator, TALK to the Security Guard, or OUTSIDE the building.");

 var securityGuard = new Location('security guard', "The security guard eyes you suspiciously. If you think you're so smart, what is the shortcut for clearing the console?");

 var elevator = new Location('elevator', "The elevator hums ominously at you. It is obviously waiting for something.");

 var elevatorWithID = new Location('elevator', "You wait around for a moment. DING! Your keycard flashes and the elevator starts to move. Which FLOOR?");

 var outside = new Location('outside', "Outside a homeless man starts yelling at you to take a shower. Humiliated, you slink home. Unfortunately you now have to start a NEW GAME");

  function enterCommand(){
    var inputted = $("input#commandBox").val();
    // var inputtedResponse = $("input#responseBox").val();
    // var questionAnswer = $("form#modalInput").val();
    var inputCmd = document.getElementById("storyText");
    // alert(inputted);
    if (inputted === "talk") {
      inputCmd.value = securityGuard.name + ": " + securityGuard.description;
      $("input#commandBox").val("");

      $("#inputCommands").submit(function(event) {
        event.preventDefault();
        var inputted2 = $("input#commandBox").val();
        if (inputted2 === "alt k") {
          $("input#commandBox").val("");
          console.log("idCard");
          player.inventory.push("idCard");
          inputCmd.value = guardAnswer.message;
        }
      });
    }
    if (inputted === "enter") {
      //player.inventory.contain("idCard"
      console.log("enter");
      inputCmd.value = elevatorWithID.name + ": " + elevatorWithID.description;
    }
    if (inputted === "enter") {
      inputCmd.value = elevator.name + ": " + elevator.description;
    }
    if (inputted === "new game") {
      window.location.href = "index.html";
    }
    if (inputted === "outside"){
      inputCmd.value = outside.name + ": " + outside.description;
    }
    // else {
    //   inputCmd.value = "not a valid command."
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
  });

    //clear out the command box
    document.getElementById("commandBox").value = "";


  $("form#answerSubmit").submit(function(event) {

    debugger;
    var inputted = $("input#commandBox").val();
    // var inputtedResponse = $("input")
    // var questionAnswer = $("input#modalInput").val();
    console.log("test");
    event.preventDefault();
    enterCommand();
  });
});

// function updateInventoryDisplay(newItem, command){
//   if(command === "take" && newItem === "id"){
//     $("p #inventory").append("<span p id="'newItem'" class='item'>"+newItem+"</span>");
//   }
// }

// // his code_>>
//
//             //taken and modified from StackOverflow.com
//             //this loop search through the array inventory looking for the value of "item". When found, it deletes the item.
//             for(var i in inventory){
//                 if(inventory[i] === item){
//                 array.splice(i,1);
//                 break;
//                 }
//             }
//             break;
//
//         default:
//             setMsg = "Error encountered. Please try again.";
//             updateDisplay(setMsg);
//             break;
//     }
//
// }
//
// //updates #invBox div with new item
// function updateInventoryDisplay(newItem, action){
//
//     if(action === "add" && newItem === "map"){
//         $("#invBox").append("<span id='"+newItem+"' class='item' onClick='popupMap()'>"+newItem+"</span>");
//     }
//     else if(action === "add"){
//          $("#invBox").append("<span id='"+newItem+"' class='item'>"+newItem+"</span>");
//     }
//     else{ //delete the item
//         $("#"+newItem+"").remove();
//     }
//
//
// }
