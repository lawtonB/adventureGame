function init(){
  var txtBox = document.getElementById("storyText");
  txtBox.value = "You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer.  (ENTER the elevator or TALK to the Security Guard.)";
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

  function enterCommand(){
    var validCommands = ["talk", "enter"];
    var inputCmd = document.getElementById("commandBox").value;
    if (inputCmd === "talk"){
      txtbox.value = "The security guard eyes you suspiciously."
    }
    else if (inputCmd === "enter"){
      txtbox.value = "the elevator hums silently."
    }
    else {
      txtbox.value = "not a valid command."
    }
  }
    //clear out the command box
    document.getElementById("commandBox").value = "";
})
