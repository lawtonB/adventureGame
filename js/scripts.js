function init(){
  var txtBox = document.getElementById("storyText");
  txtBox.value = "You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer.  (ENTER the elevator or TALK to the Security Guard.)";
}

  function enterCommand(){ debugger;
    var validCommands = ["talk", "enter"];
    var inputted = $("input#commandBox").val();
    var inputCmd = document.getElementById("storyText");
    if (inputted === "talk") {
      inputCmd.value = "The security guard eyes you suspiciously."
    }
    else if (inputted === "enter") {
      inputCmd.value = "the elevator hums silently. It is obviously waiting for something."
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
