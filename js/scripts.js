function init(){
  var txtBox = document.getElementById("storyText");
  txtBox.value = "You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer.  (ENTER the elevator or TALK to the Security Guard.)";
}
var inventory = [];
var idCard = inventory[0]

function hasId(item){
  if(inventory[0] === "IDCARD"){
    return true;
  }
  else{
    return false;
  }
}


//

// function gameOver(){
//   var newGame = init();
//   if (command === newGame) {
//     alert("new game");
//     window.location.href = "index.html";
//   }
// }





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

function updateInventory(command){
  if (command === "take") {
    inventory.push("ID CARD");
  } else {
  }
  console.log(inventory);
}

// function enterAnswer(){
//   var inputted = $("input#commandBox").val();
//   var answerCmd = document.getElementById("storyText");
// }
  function enterCommand(){
    var inputted = $("input#commandBox").val();
    var inputCmd = document.getElementById("storyText");
    // alert(inputted);
    if (inputted === "talk") {
      inputCmd.value = "The security guard eyes you suspiciously. If you think you're so smart, what is the shortcut for clearing the console?"
    }
    else if (inputted === "alt k") {
      inputCmd.value = "Here You go *hands id card*" && updateInventory();
      console.log(inputted);
    }

    else if (inputted === "enter" && inventory["IDCARD"]) {
      inputCmd.value = "The elevator hums silently as you fidgit trying to act like you belong. Ding! the doors open and you walk into the elevator.(press UP or DOWN depending on which direction you would like to go.";
    }

    else if (inputted === "enter") {
      inputCmd.value = "The elevator hums ominously at you. It is obviously waiting for something.";
    }

    else if (inputted === "take") {
      inputCmd.value = "You are now holding a dull plastic epicodus keycard in your hand. Now you can ENTER the elevator, and it will work.";
    }
    else if (inputted === "newgame") {
      inputCmd.value = "this is the wrong way to do this"
      window.location.href = "index.html";

    }
    else {
      inputCmd.value = "not a valid command."
    }
  }

$(document).ready(function(){
  init();

  var currentLocation = "Home";


  function updateLocation(location){
      currentLocation = location;
  }

  function updateDisplay(message){
      var msg = message;
      var txtBox = document.getElementById("storyText");
      txtBox.value = msg + "\n\n" + txtBox.value;
  }

  function listCommands(){
    var setMsg = "valid commands are: 'enter' 'talk' ";
    updateDisplay(setMsg);
  }

  $("#inputCommands").submit(function(event) {
    event.preventDefault();
    enterCommand();
  });

    //clear out the command box
    document.getElementById("commandBox").value = "";
})
