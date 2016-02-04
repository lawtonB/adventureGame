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


var guardAnswer = new PuzzleMessage("the guard looks at you with meagre respect in his eyes and slips an IDCARD into your wallet. 'Good job kid, you passed the first test.'")

 var lobby = new Location('lobby', "You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer. ENTER the elevator, TALK to the Security Guard, or OUTSIDE the building.");

 var securityGuard = new Location('security guard', "The security guard eyes you suspiciously. If you think you're so smart, what is the shortcut for clearing the console?");

 var elevator = new Location('elevator', "The elevator hums ominously at you. It is obviously waiting for something.");

 var elevatorWithID = new Location('elevator', "You wait around for a moment. DING! Your keycard flashes and the elevator starts to move. Which FLOOR?");

 var outside = new Location('outside', "Outside a homeless man starts yelling at you to take a shower. Humiliated, you slink home. Unfortunately you now have to start a NEW GAME");

 function addIdCard(input) {
   debugger;
   var inputCmd = document.getElementById("storyText");
   if (input === "alt k") {
     console.log("idCard");
     player.inventory.push("idCard");
     inputCmd.value = guardAnswer.message;
     $("input#commandBox").val("");
   }
   else {
     inputCmd.value = "wrong answer kid";
   }
 }



  function enterCommand(){
    debugger;
    var input = $("input#commandBox").val();
    var inputCmd = document.getElementById("storyText");
    if (input === "talk") {
      inputCmd.value = securityGuard.name + ": " + securityGuard.description;
      $("input#commandBox").val("");
    } else if (input === "enter") {
      inputCmd.value = elevator.name + ": " + elevator.description;
      $("input#commandBox").val("");
    }
    else if (input === "alt k") {
      addIdCard(input);
      $("input#commandBox").val("");
    }
    function
    else if (input === "outside"){
      inputCmd.value = outside.name + ": " + outside.description;
      $("input#commandBox").val("");
    } else if (input === "enter" && item("Idcard") === true){
      inputCmd.value = elevatorWithID.name + ": " + elevatorWithID.description;
      $("input#commandBox").val("");
    } else if (input === "new game") {
      window.location.href = "index.html";
      $("input#commandBox").val("");
    }
    else {
      console.log("something broke");
    }

  }
    //
    //   $("#inputCommands").submit(function(event) {
    //     event.preventDefault();
    //     var input3 = $("input#commandBox").val();
    //   if
    //   } else if (input === "enter") {
    //     inputCmd.value = elevator.name + ": " + elevator.description;
    //   }
    // })

    //



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

  // $("form#answerSubmit").submit(function(event) {
  //   debugger;
  //   var input = $("input#commandBox").val();
  //   // var inputResponse = $("input")
  //   // var questionAnswer = $("input#modalInput").val();
  //   console.log("test");
  //   event.preventDefault();
  //   enterCommand();
  // });
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
