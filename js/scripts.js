function init(){
  var txtBox = document.getElementById("storyText");
  txtBox.value = "You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer.  (ENTER the elevator or TALK to the Security Guard.)";
}
var inventory = [];
var command = $("input#commandBox").val();
function updateInventory(command, item){
  if (command === take) {
    inventory.push("ID CARD");
  } else {
    return "you need an item, first."
  }
}

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
//
//
//
//
//
//
//
//
//
//
//
//
  function enterCommand(){ debugger;
    var inputted = $("input#commandBox").val();
    var inputCmd = document.getElementById("storyText");
    if (inputted === "talk") {
      inputCmd.value = "The security guard eyes you suspiciously, are you an Epicodus student? Do you have an ID to make the elevator work? Here, you will need one of these if you are ever going to go any where in this building. He holds out an ID for you to TAKE"
    }
    else if (inputted === "enter") {
      inputCmd.value = "The elevator hums silently as you fidgit trying to act like you belong. Ding! the doors open and you walk into the elevator.(press UP or DOWN depending on which direction you would like to go.)"
    }
    else if (inputted === "take") {
      inputCmd.value = "You are now holding a dull plastic epicodus keycard in your hand. Now you can ENTER the elevator, and it will work.)"
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


    //clear out the command box
    document.getElementById("commandBox").value = "";
})
