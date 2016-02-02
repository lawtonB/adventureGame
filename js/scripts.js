https://github.com/verkaufer/TextAdventureGame

$(document).ready(function(){
// business logic
// var inventory = [];

function enterCommand(){
var commands = ["talk", "use", "enter"];
var inputCmd = document.getElementById("lobby").value
switch(inputCmd){
  case "talk":
  securityGuard();
  break;
  default:
  alert("not a valid command");
  break;
  }
}

function updateDisplay(message){ //function to add new text
    var msg = message;
    var txtBox = document.getElementById("#lobby"); //set txtBox to contents of textbox
    txtBox.value = msg + "\n\n" + txtBox.value; //append new message to textbox
}

// var currentLocation = lobby;


function Location(description) {
      this.description = description;
  };

   var lobby = new Location ('You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer.  (ENTER the elevator or TALK to the Security Guard.)');

    var office = new Location ('A huge room full of epicodus students working hard on their various projects');

    var securityGuard = new Location ("the security guard eyes you suspiciously.")

    // function securityGuard() {
    //   if (currentLocation === "securityGuard" ("the security guard eyes you suspiciously.")
    // }

    // if (currentLocation ===  securityGuard && prompt === "yes") {inventory.push(epicodusId + "the guard sighs and points behind you. 'Here is an id card. Take the elevator over there'")
    // } else if (prompt === "no") {
    //     return securityGuard
    // }

    // user interface logic
    event.preventDefault();
    $("#lobby").text(lobby.description);

})

    // $("form#input").submit(function(event) {
    //   if (input === commands[0]) {
    //     $("#securityGuard").text(securityGuard.description);
    //   }else {
    //     $("#lobby").text(lobby.description);
    //   }



// //
// //
