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

var lobby = new Location('lobby', "You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer. ENTER the elevator, TALK TO the Security GUARD, or go OUTSIDE the building(Enter all commands in lower case with correct spacing).");

var securityGuard = new Location('security guard', "The security guard eyes you suspiciously. If you think you're so smart, what is the shortcut for clearing the console? (Remember to spell it out)");
var guardAnswer = new PuzzleMessage("the guard looks at you with meagre respect in his eyes and slips an IDCARD into your wallet. 'Good job kid, you passed the first test, now you can ENTER the elevator or go OUTSIDE the building.'")

 var elevator = new Location('elevator', "The elevator hums ominously at you. It is obviously waiting for something, maybe you need an IdCard to make it work. TALK TO the GUARD or go OUTSIDE.");
 var elevatorWithID = new Location('elevator', "You wait around for a moment. DING! Your keycard flashes and the elevator starts to move. Which FLOOR?");

 var outside = new Location('outside', "Outside a homeless man starts yelling at you to take a shower. Humiliated, you slink home. Unfortunately you now have to start a NEW GAME");

 var epicodus = new Location ('epicodus', 'A huge room full of epicodus students working hard on their various projects (SIT down at a computer, or CHOOSE a partner for the day.)');

 var wrongfloor = new Location('wrongfloor', "You wander for hours around the huge building unable to find the epicodus office. After three days they find you in the bottom of the elevator shaft.")

 var computer = new Location('computer', "The computer screen swims in front of you dizzily. You are much too tired to work right now.")
 var basement = new Location ('basement', 'You have now entered into the basement of the SW 400 building on sixth street. Here an evil dragon, "Giggles" lives. The only way to defeat Giggles is with a bike to hide behind and a lock to throw at him. (ENTER the elevator, or attempt to FIGHT Giggles.)');
 var fightGiggles = new Location ('fightGiggles', 'YOU FOOL!, you never stood a chance against Giggles, what were you thinking? All of your clothes and hair have been burnt to a crisp. it is time for a NEW GAME');
 var newGame = new Location ('You choose poorly, start NEW GAME')

 var secondFloor = new Location ('secondFloor', 'You have now entered the second floor of the SW 400 building on sixth street. The Floor is labeled D+H but nobody really knows what that stands for. (EXPLORE FLOOR 2, or ENTER the elevator)');
 var secondFloorExplore = new Location ('secondFloorExplore', 'You wander deeper into the dimly lit D+H headquarters, you enter the main office and there he is. Dracula and his henchmen...You have become a meal. You lose. lol, start a NEW GAME');

 var thirdFloor = new Location ('thirdFloor', 'You have now entered the third floor of the SW 400 building on sixth street, home of the Portland Clowning bootcamp. (EXPLORE FLOOR 3, or ENTER the elevator)');
 var thirdFloorExplore = new Location ('thirdFloorExplore', 'Large empty shoes and wigs are strewn about the floor. The seal that was waiting in the elevator with the ball bouncing on its nose slides past you and dissapears around a corner. Clowns come arond the corner...TALK TO the CLOWN or ENTER the elevator');
 var clown = new Location('clown', "The tall Filipino woman dressed as a clown says'You can have my space pen, yes it rights even when it is upside down, if you can tell me how to minimize the front window to the doc using this keyboard.(Remember to spell it out)'")
 var clownAnswer = new PuzzleMessage("the clown is very impressed and hands you the pen, turns and saunters off in true Charlie Chaplin style, ENTER the elevator")

 var fourthFloor = new Location ('fourthFloor', 'You have now entered the fourth floor of the SW 400 building on sixth street. Portlands new legal marijana grow operation. (EXPLORE FLOOR 4, or ENTER the elevator)');
 var fourthFloorExplore = new Location ('fourthFloorExplore', 'The hall has a strong oder that reminds you of that class fieldtrip to the Phish concert that your band teacher got fired for taking you to. Two large guard dogs start to walk towards you, they are held back by an older urban farmer. TALK TO FARMER or ENTER to elevator');
 var farmer = new Location('farmer', "the urban marijana farmer looks at you through his cataract glasses.'If you answer my question correctly I will give you one of my many extra bike locks that I use to lock up my farm at night. What is the command to switch apps?(Remember to spell it out)'")
 var farmerAnswer = new PuzzleMessage("the farmer chuckles and says, Why are you telling me command functions? and hands you the bike lock. ENTER the elevator")

 var fifthFloor = new Location ('fifthFloor', 'You have now entered the fifth floor of the SW 400 building on sixth street. No label is seen from the elevator, but you notice a small door behind a file cabnet. (EXPLORE FLOOR 5, or ENTER the elevator)');
 var fifthFloorExplore = new Location ('fifthFloorExplore', 'As you approach the door you notice that the room is gitting smaller and smaller. You open up the door and slide down a long dark tunnel. A dim lite at the end of the tunnel shows a sign for D+H headquarters. You enter the main office and there he is. Dracula and his henchmen...You have become a meal. You lose. ENTER the elevator');

 var sixthFloor = new Location ('sixthFloor', 'You have now entered the sixth floor of the SW 400 building on sixth street. This is the western branch of Slobproof.(EXPLORE FLOOR 6, or ENTER the elevator)');
 var sixthFloorExplore = new Location ('sixthFloorExplore', 'Slobproof builds custom chairs, sofas and ottomans with specially engineered fabric that withstands spills and other messes without staining. These designs marries the "common sense of a Jawish mother with the muscle of a professional wrestler" ENTER the elevator');

 var seventhFloor = new Location ('seventhFloor', 'You have now entered the seventh floor of the SW 400 building on sixth street, this is the former headquarters of Camera World.(EXPLORE FLOOR 7, or ENTER the elevator)');
 var seventhFloorExplore = new Location('seventhFloorExplore', 'Old sun faded picture, line the hall. A dull hum of the overhead lights is the only thing that can be heard. The smartphone has killed the camera industry(ENTER the elevator)');

 var eighthFloor = new Location ('eighthFloor', 'You have now entered the eighth floor of the SW 400 building on sixth street. No sign marks this floor, large wood panneling with hidden lights ligns the walls opposite you. (EXPLORE FLOOR 8, or ENTER the elevator)');
 var eighthFloorExplore = new Location ('eighthFloorExplore', 'Two large glass doors are at the end of the hallway, through the glass you see a few people sitting on couches with laptops who look to relaxed to be getting paid. (go to OFFICE or ENTER the elevator)');
 var office = new Location ('office', 'A huge room full of epicodus students working hard on their various projects (SIT down at a computer, or CHOOSE a partner for the day.)');
 var sit = new Location ('sit', 'You sit down and start up a computer. Cool coding kid after cool coding kid walks by talking with a partner. You missed your chance to have a partner, you group has an odd number today and now you are going to code for the next eight hours wich burns out your brain and you fail the code review at the end of the week. You choose poorly start a NEW GA');
 var partner = new Location ('partner', 'Your eyes dart around the room, you are trying not to look like the loneliest person on the planet. Just before you give up to go find a computer you hear, "Do you have a partner yet?" The two of you find a computer, you talk about what your plan is for the day, and you both have the best day coding ever. Now if you can find a pen and a notebook you will be sure to pass this weeks code review.');

 var ninthFloor = new Location ('ninthFloor', 'You have now entered the ninth floor of the SW 400 building on sixth street. A man with a bright red mohawk walks by with a laptop.(EXPLORE FLOOR 9, or ENTER the elevator)');
 var ninthFloorExplore = new Location ('ninthFloorExplore', 'This might be the home of Impact Dialing, you will never know because as soon as you step off the elevator you are sucked into a coding loop that never ends, start a NEW GAME');

 var tenthFloor = new Location ('tenthFloor', 'You have now entered the tenth floor of the SW 400 building on sixth street. This is the reginal office for Throx.(EXPLORE FLOOR 10, or ENTER the elevator)');
 var tenthFloorExplore = new Location ('tenthFloorExplore', 'Throx helps customers fight the infamous sock monster by selling socks in threes, not pairs. That way, when you lose one, you still got a backup sock to keep the other company, so you can keep wearing your favorite pair and doing your laundry worry free. Unfortunatly socks are always made in pairs so all of the extra socks have turned into a giant ball that roams the halls, so do not waste time on this floor. You notice a man in back corner office waving to get your attention. As you approach you see manager on the door. TALK TO the MANAGER or ENTER the elevator');
 var manager = new Location('manager', "the manager of Throx sits next to a pile of notebooks. 'These notebooks are for my short stories about missing socks and all the adventures they go on, it seems that I am currently out of ideas and I need to search my computer and the internet all at once to find new ideas. If you can tell me a the quick command to go to Spotlight Search,(Remember to spell it out) you can have one of my empty notebooks.'")
 var managerAnswer = new PuzzleMessage("Wow, now I can write about missing socks till I die, die happy that is, here is an empty notebook, I hope it helps you on your coding journey. Now you can go back and ENTER the elevator.")

 var elevenththFloor = new Location ('elevenththFloor', 'You have now entered the top floor of the SW 400 building on sixth street, the home of Suzanne Casmentos "Fantasy Dating Game" (EXPLORE FLOOR 11, or ENTER the elevator)');
 var eleventhFloorExplore = new Location ('eleventhFloorExplore', 'Fantasy Dating Game is like a grown-up version of "Truth or Dare," and it might be more interesting than a fantasy football league. If your sick and tired of your  lackluster love life this could be the place for you. Much like fantasy sports leagues, the Fantasy Dating Game allows single women to earn points by flirting with guys at Starbucks, slipping their numbers to cute bartenders and going on actual dates. You might get a crippling VD just touching the wrong thing. SUZANNE is pounding on her keyboard with both hands, "Will someone please help me?" Do you  TALK TO her or ENTER the elevator.');
 var suzanne = new Location('suzanne', "the creator of the fantasy dating game pounds on her computer in frustration, she needs to send the information on her computer to her phone and her tablet, but her email provider is currently down can you think of the command that will open the air drop folder? (Remember to spell it out)")
 var suzanneAnswer = new PuzzleMessage("Thank you, now I can roam the streets hunting my next fantasy date, take this bike, and create a fantasy date of your own. ENTER the elevator.")

 function addIdCard(input) {
   var inputCmd = document.getElementById("storyText");
   if (input === "alt k") {
     console.log("idCard");
     player.inventory.push("idCard");
     $("#inventory").append("IdCard,");
     inputCmd.value = guardAnswer.message;
     $("input#commandBox").val("");
   } else {
     inputCmd.value = "wrong answer kid";
   }
 }
 function addPen(input) {
   var inputCmd = document.getElementById("storyText");
   if (input === "alt m") {
     console.log("pen");
     player.inventory.push("Pen");
     $("#inventory").append(" Pen,");
     inputCmd.value = clownAnswer.message;
     $("input#commandBox").val("");
   } else {
     inputCmd.value = "wrong answer kid";
   }
 }
 function addBikeLock(input) {
   var inputCmd = document.getElementById("storyText");
   if (input === "alt tab") {
     console.log("bike lock");
     player.inventory.push("Bike Lock");
     $("#inventory").append(" Bike Lock,");
     inputCmd.value = farmerAnswer.message;
     $("input#commandBox").val("");
   } else {}
 }
 function addNotebook(input) {
   var inputCmd = document.getElementById("storyText");
   if (input === "alt spacebar") {
     console.log("notebook");
     player.inventory.push("Notebook");
     $("#inventory").append(" Notebook,");
     inputCmd.value = managerAnswer.message;
     $("input#commandBox").val("");
   } else {}
 }
 function addBike(input) {
   var inputCmd = document.getElementById("storyText");
   if (input === "alt shift r") {
     console.log("bike");
     player.inventory.push("Bike");
     $("#inventory").append(" Bike,");
     inputCmd.value = suzanneAnswer.message;
     $("input#commandBox").val("");
   } else {}
 }

  function enterCommand(){
    var input = $("input#commandBox").val();
    input = input.toLowerCase();
    var inputCmd = document.getElementById("storyText");

    if (input === "talk to guard") {
      inputCmd.value = securityGuard.name + ": " + securityGuard.description;
      $("input#commandBox").val("");
    } else if (input === "enter" && player.inventory[0] === "idCard") {
      inputCmd.value = elevatorWithID.name + ": " + elevatorWithID.description;
      $("input#commandBox").val("");
      return secondLevel()
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
    } else{}
  }
  function secondLevel() {
    var input = $("input#commandBox").val();
    input = input.toLowerCase();
    var inputCmd = document.getElementById("storyText");
  if (input === "floor 8" && player.inventory[0] === "idCard"){
      inputCmd.value = eighthFloor.name + ": " + eighthFloor.description;
      $("input#commandBox").val("");
    } else if (input === "floor 2" && player.inventory[0] === "idCard"){
        inputCmd.value = secondFloor.name + ": " + secondFloor.description;
        $("input#commandBox").val("");
    } else if (input === "floor 3" && player.inventory[0] === "idCard"){
          inputCmd.value = thirdFloor.name + ": " + thirdFloor.description;
          $("input#commandBox").val("");
    } else if (input === "floor 4" && player.inventory[0] === "idCard"){
          inputCmd.value = fourthFloor.name + ": " + fourthFloor.description;
          $("input#commandBox").val("");
    } else if (input === "floor 5" && player.inventory[0] === "idCard"){
          inputCmd.value = fifthFloor.name + ": " + fifthFloor.description;
          $("input#commandBox").val("");
    } else if (input === "floor 6" && player.inventory[0] === "idCard"){
          inputCmd.value = sixthFloor.name + ": " + sixthFloor.description;
          $("input#commandBox").val("");
    } else if (input === "floor 7" && player.inventory[0] === "idCard"){
          inputCmd.value = seventhFloor.name + ": " + seventhFloor.description;
          $("input#commandBox").val("");
    } else if (input === "floor 9" && player.inventory[0] === "idCard"){
          inputCmd.value = ninthFloor.name + ": " + ninthFloor.description;
          $("input#commandBox").val("");
    } else if (input === "floor 10" && player.inventory[0] === "idCard"){
          inputCmd.value = tenthFloor.name + ": " + tenthFloor.description;
          $("input#commandBox").val("");
    } else if (input === "floor 11" && player.inventory[0] === "idCard"){
          inputCmd.value = elevenththFloor.name + ": " + elevenththFloor.description;
          $("input#commandBox").val("");
    } else if (input === "basement" && player.inventory[0] === "idCard"){
          inputCmd.value = basement.name + ": " + basement.description;
          $("input#commandBox").val("");
    } else {}
  }

  function thirdLevel() {
    var input = $("input#commandBox").val();
    input = input.toLowerCase();
    var inputCmd = document.getElementById("storyText");

  if (input === "explore floor 8" && player.inventory[0] === "idCard"){
      inputCmd.value = eighthFloorExplore.name + ": " + eighthFloorExplore.description;
      $("input#commandBox").val("");
    } else if (input === "explore floor 2" && player.inventory[0] === "idCard"){
        inputCmd.value = secondFloorExplore.name + ": " + secondFloorExplore.description;
        $("input#commandBox").val("");
    } else if (input === "explore floor 3" && player.inventory[0] === "idCard"){
          inputCmd.value = thirdFloorExplore.name + ": " + thirdFloorExplore.description;
          $("input#commandBox").val("");
    } else if (input === "talk to clown") {
          inputCmd.value = clown.name + ": " + clown.description;
          $("input#commandBox").val("");
    } else if (input === "alt m") {
            addPen(input);
            $("input#commandBox").val("");
    } else if (input === "explore floor 4" && player.inventory[0] === "idCard"){
          inputCmd.value = fourthFloorExplore.name + ": " + fourthFloorExplore.description;
          $("input#commandBox").val("");
    } else if (input === "talk to farmer") {
          inputCmd.value = farmer.name + ": " + farmer.description;
          $("input#commandBox").val("");
    } else if (input === "alt tab") {
          addBikeLock(input);
          $("input#commandBox").val("");
    } else if (input === "explore floor 5" && player.inventory[0] === "idCard"){
          inputCmd.value = fifthFloorExplore.name + ": " + fifthFloorExplore.description;
          $("input#commandBox").val("");
    } else if (input === "explore floor 6" && player.inventory[0] === "idCard"){
          inputCmd.value = sixthFloorExplore.name + ": " + sixthFloorExplore.description;
          $("input#commandBox").val("");
    } else if (input === "explore floor 7" && player.inventory[0] === "idCard"){
          inputCmd.value = seventhFloorExplore.name + ": " + seventhFloorExplore.description;
          $("input#commandBox").val("");
    } else if (input === "explore floor 9" && player.inventory[0] === "idCard"){
          inputCmd.value = ninthFloorExplore.name + ": " + ninthFloorExplore.description;
          $("input#commandBox").val("");
    } else if (input === "explore floor 10" && player.inventory[0] === "idCard"){
          inputCmd.value = tenthFloorExplore.name + ": " + tenthFloorExplore.description;
          $("input#commandBox").val("");
    } else if (input === "talk to manager") {
          inputCmd.value = manager.name + ": " + manager.description;
          $("input#commandBox").val("");
    } else if (input === "alt spacebar") {
          addNotebook(input);
          $("input#commandBox").val("");
    } else if (input === "explore floor 11" && player.inventory[0] === "idCard"){
          inputCmd.value = eleventhFloorExplore.name + ": " + eleventhFloorExplore.description;
          $("input#commandBox").val("");
    } else if (input === "talk to suzanne") {
          inputCmd.value = suzanne.name + ": " + suzanne.description;
          $("input#commandBox").val("");
    } else if (input === "alt shift r") {
          addBike(input);
          $("input#commandBox").val("");
    } else if (input === "explore basement" && player.inventory[0] === "idCard"){
          inputCmd.value = fightGiggles.name + ": " + fightGiggles.description;
          $("input#commandBox").val("");
    } else {}
  }
  function fourthLevel() {
    var input = $("input#commandBox").val();
    input = input.toLowerCase();
    var inputCmd = document.getElementById("storyText");
  if (input === "office" && player.inventory[0] === "idCard"){
      inputCmd.value = office.name + ": " + office.description;
      $("input#commandBox").val("");
    } else if (input === "sit" && player.inventory[0] === "idCard"){
        inputCmd.value = sit.name + ": " + sit.description;
        $("input#commandBox").val("");
    } else if (input === "choose" && player.inventory[0] === "idCard"){
        inputCmd.value = partner.name + ": " + partner.description;
        $("input#commandBox").val("");
    } else {}
  }
  function fifthLevel() {
    var input = $("input#commandBox").val();
    var inputCmd = document.getElementById("storyText");
    // use this code to fight dragon or start coding.
    // if (player.inventory.indexOf("bike lock") != -1 && ...) {
    //
    // }
  }
$(document).ready(function(){
  init();

  $("#inputCommands").submit(function(event) {
    event.preventDefault();
    enterCommand();
    secondLevel();
    thirdLevel();
    fourthLevel();
  });
});
