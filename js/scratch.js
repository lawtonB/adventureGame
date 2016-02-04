
var lobby = new Location ('You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer. (ENTER the elevator or TALK to the Security Guard.)');
var secrityGuard = new Location ('The security guard eyes you suspiciously, are you an Epicodus student? Do you have an ID to make the elevator work? Here, you will need one of these if you are ever going to go any where in this building. He holds out an ID for you to TAKE')
var epicodusId = new item ("You are holding a dull plastic epicodus keycard in your hand.");

var elevator = new Location ('You have entered the elevator, now select (UP or DOWN depending on which direction you would like to go.)');

var basement = new Location ('basement', 'You have now entered into the basement of the SW 400 building on sixth street. Here an evil dragon, "Giggles" lives. The only way to defeat Giggles is with a bike to hide behind and a lock to throw at him. (RETURN to the elevator, or attempt to FIGHT Giggles.)');
var fightGiggles = new Location ('fightGiggles', 'YOU FOOL!, you never stood a chance against Giggles, what were you thinking? All of your clothes and hair have been burnt to a crisp. it is time for a NEW GAME');
var newGame = new Location ('You choose poorly, start NEW GAME')

var secondFloor = new Location ('secondFloor', 'You have now entered the second floor of the SW 400 building on sixth street. The Floor is labeled D+H but nobody really knows what that stands for. (EXPLORE the Floor, or RETURN to elevator)');
var secondFloorExplore = new Location ('secondFloorExplore', 'You wander deeper into the dimly lit D+H headquarters, you enter the main office and there he is. Dracula and his henchmen...You have become a meal. You lose. lol, RETURN to elevator');

var thirdFloor = new Location ('thirdFloor', 'You have now entered the third floor of the SW 400 building on sixth street, home of the Portland Clowning bootcamp. (EXPLORE the Floor, or RETURN to elevator)');
var thirdFloorExplore = new Location ('thirdFloorExplore', 'Large empty shoes and wigs are strewn about the floor. The seal that was waiting in the elevator with the ball bouncing on its nose slides past you and dissapears around a corner. Clowns come arond the corner....You have become a meal. RETURN to elevator');

var fourthFloor = new Location ('fourthFloor', 'You have now entered the fourth floor of the SW 400 building on sixth street. Portlands new legal marijana grow operation. (EXPLORE the Floor, or RETURN to elevator)');
var fourthFloorExplore = new Location ('fourthFloorExplore', 'The hall has a strong oder that reminds you of that class fieldtrip to the Phish concert that your band teacher got fired for taking you to. Two large guard dogs start to walk towards you and unspeakable horrors are acted out, RETURN to elevator');

var fifthFloor = new Location ('fifthFloor', 'You have now entered the fifth floor of the SW 400 building on sixth street. No label is seen from the elevator, but you notice a small door behind a file cabnet. (EXPLORE the Floor, or RETURN to elevator)');
var fifthFloorExplore = new Location ('fifthFloorExplore', 'As you approach the door you notice that the room is gitting smaller and smaller. You open up the door and slide down a long dark tunnel. A dim lite at the end of the tunnel shows a sign for D+H headquarters. You enter the main office and there he is. Dracula and his henchmen...You have become a meal. You lose. RETURN to elevator');

var sixthFloor = new Location ('sixthFloor', 'You have now entered the sixth floor of the SW 400 building on sixth street. This is the western branch of Slobproof.(EXPLORE the Floor, or RETURN to elevator)');
var sixthFloorExplore = new Location ('sixthFloorExplore', 'Slobproof builds custom chairs, sofas and ottomans with specially engineered fabric that withstands spills and other messes without staining. These designs marries the "common sense of a Jawish mother with the muscle of a professional wrestler" RETURN to elevator');

var seventhFloor = new Location ('seventhFloor', 'You have now entered the seventh floor of the SW 400 building on sixth street, this is the former headquarters of Camera World.(EXPLORE the Floor, or RETURN to elevator)');
var seventhFloorExplore = new Location('seventhFloorExplore', 'Old sun faded picture, line the hall. A dull hum of the overhead lights is the only thing that can be heard. The smartphone has killed the camera industry(RETURN to elevator)');

var eighthFloor = new Location ('eighthFloor', 'You have now entered the eighth floor of the SW 400 building on sixth street. No sign marks this floor, large wood panneling with hidden lights ligns the walls opposite you. (EXPLORE the Floor, or RETURN to elevator)');
var eighthFloorExplore = new Location ('eighthFloorExplore', 'Two large glass doors are at the end of the hallway, through the glass you see a few people sitting on couches with laptops who look to relaxed to be getting paid. (ENTER office or RETURN to elevator)');
var office = new Location ('office', 'A huge room full of epicodus students working hard on their various projects (SIT down at a computer, or CHOOSE a partner for the day.)');

var ninthFloor = new Location ('ninthFloor', 'You have now entered the ninth floor of the SW 400 building on sixth street. A man with a bright red mohawk walks by with a laptop.(EXPLORE the Floor, or RETURN to elevator)');
var ninthFloorExplore = new Location ('ninthFloorExplore', 'This might be the home of Impact Dialing, you will never know because as soon as you step off the elevator you are sucked into a coding loop that never ends, RETURN to elevator');

var tenthFloor = new Location ('tenthFloor', 'You have now entered the tenth floor of the SW 400 building on sixth street. This is the reginal office for Throx.(EXPLORE the Floor, or RETURN to elevator)');
var tenthFloorExplore = new Location ('tenthFloorExplore', 'Throx helps customers fight the infamous sock monster by selling socks in threes, not pairs. That way, when you lose one, you still got a backup sock to keep the other company, so you can keep wearing your favorite pair and doing your laundry worry free. Unfortunatly socks are always made in pairs so all of the extra socks have turned into a giant ball that roams the halls, you are knocked silly by the sock moster, RETURN to elevator');

var elevenththFloor = new Location ('elevenththFloor', 'You have now entered the top floor of the SW 400 building on sixth street, the home of Suzanne Casmentos "Fantasy Dating Game" (EXPLORE the Floor, or RETURN to elevator)');
var eleventhFloorExplore = new Location ('eleventhFloorExplore', 'Fantasy Dating Game is like a grown-up version of "Truth or Dare," and it might be more interesting than fantasy football league. If your sick and tired of your  lackluster love life this could be the place for you. Much like fantasy sports leagues, the Fantasy Dating Game allows single women to earn points by flirting with guys at Starbucks, slipping their numbers to cute bartenders and going on actual dates. You get a crippling VD and can not continue, RETURN to elevator.');


if (inputted === "basement"){
  inputCmd.value = basement.name + ": " + basement.description;
  $("input#commandBox").val("");
}
if (inputted === "fightGiggles"){
  inputCmd.value = fightGiggles.name + ": " + fightGiggles.description;
  $("input#commandBox").val("");
}
if (inputted === "secondFloor"){
  inputCmd.value = secondFloor.name + ": " + secondFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "secondFloorExplore"){
  inputCmd.value = secondFloorExplore.name + ": " + secondFloorExplore.description;
  $("input#commandBox").val("");
}
if (inputted === "thirdFloor"){
  inputCmd.value = thirdFloor.name + ": " + thirdFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "thirdFloorExplore"){
  inputCmd.value = thirdFloorExplore.name + ": " + thirdFloorExplore.description;
  $("input#commandBox").val("");
}
if (inputted === "fourthFloor"){
  inputCmd.value = fourthFloor.name + ": " + fourthFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "fourthFloorExplore"){
  inputCmd.value = fourthFloorExplore.name + ": " + fourthFloorExplore.description;
  $("input#commandBox").val("");
}
if (inputted === "fifthFloor"){
  inputCmd.value = fifthFloor.name + ": " + fifthFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "fifthFloorExplore"){
  inputCmd.value = fifthFloorExplore.name + ": " + fifthFloorExplore.description;
  $("input#commandBox").val("");
}
if (inputted === "sixthFloor"){
  inputCmd.value = sixthFloor.name + ": " + sixthFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "sixthFloorExplore"){
  inputCmd.value = sixthFloorExplore.name + ": " + sixthFloorExplore.description;
  $("input#commandBox").val("");
}
if (inputted === "seventhFloor"){
  inputCmd.value = seventhFloor.name + ": " + seventhFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "seventhFloorExplore"){
  inputCmd.value = seventhFloorExplore.name + ": " + seventhFloorExplore.description;
  $("input#commandBox").val("");
}
if (inputted === "eighthFloor"){
  inputCmd.value = eighthFloor.name + ": " + eighthFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "eighthFloorExplore"){
  inputCmd.value = eighthFloorExplore.name + ": " + eighthFloorExplore.description;
  $("input#commandBox").val("");
}
if (inputted === "office"){
  inputCmd.value = office.name + ": " + office.description;
  $("input#commandBox").val("");
}
if (inputted === "ninthFloor"){
  inputCmd.value = ninthFloor.name + ": " + ninthFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "ninthFloorExplore"){
  inputCmd.value = ninthFloorExplore.name + ": " + ninthFloorExplore.description;
  $("input#commandBox").val("");
}
if (inputted === "tenthFloor"){
  inputCmd.value = tenthFloor.name + ": " + tenthFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "tenthFloorExplore"){
  inputCmd.value = tenthFloorExplore.name + ": " + tenthFloorExplore.description;
  $("input#commandBox").val("");
}
if (inputted === "elevenththFloor"){
  inputCmd.value = elevenththFloor.name + ": " + elevenththFloor.description;
  $("input#commandBox").val("");
}
if (inputted === "eleventhFloorExplore"){
  inputCmd.value = eleventhFloorExplore.name + ": " + eleventhFloorExplore.description;
  $("input#commandBox").val("");
}




var clown = new Location('clown', "The tall Filipino woman dressed as a clown says'You can have my space pen, yes it rights even when it is upside down, if you can tell me how to minimize the front window to the doc using this keyboard.'")
var clownAnser = new PussleMessage("the clown is very impressed and hands you the pen, turns and saunters off in true Charlie Chaplin style.")

if (inputted === "talk") {
  inputCmd.value = clown.name + ": " + clown.description;
  $("input#commandBox").val("");

  $("#inputCommands").submit(function(event) {
    event.preventDefault();
    var inputted3 = $("input#commandBox").val();
    if (inputted3 === "alt m") {
      $("input#commandBox").val("");
      console.log("pen");
      player.inventory.push("pen");
      inputCmd.value = clownAnswer.message;
    }
  });
}


var farmer = new Location('farmer', "the urban marijana farmer looks at you through his cataract glasses.'If you answer my question correctly I will give you one of my many extra bike locks that I use to lock up my farm at night. What is the command to switch apps?'")
var farmerAnswer = new PussleMessage("the farmer chuckles and says why are you telling me command functions and hands you the bike lock.")

if (inputted === "talk") {
  inputCmd.value = farmer.name + ": " + farmer.description;
  $("input#commandBox").val("");

  $("#inputCommands").submit(function(event) {
    event.preventDefault();
    var inputted4 = $("input#commandBox").val();
    if (inputted4 === "alt tab") {
      $("input#commandBox").val("");
      console.log("pen");
      player.inventory.push("bike lock");
      inputCmd.value = farmer.message;
    }
  });
}

var manager = new Location('manager', "the manager of Throx sits next to a pile of notebooks. 'These notebooks are for my short stories about missing socks and all the adventures they go on, it seems that I am currently out of ideas and I need to search my computer and the internet all at once to find new ideas. If you can tell me a the quick command to go to Spotlight Search, you can have one of my empty notebooks.'")
var managerAnswer = new PussleMessage("Wow, now I can write about missing socks till I die, die happy, here is an empty notebook, I hope it helps you on your coding journey.")

if (inputted === "talk") {
  inputCmd.value = manager.name + ": " + manager.description;
  $("input#commandBox").val("");

  $("#inputCommands").submit(function(event) {
    event.preventDefault();
    var inputted5 = $("input#commandBox").val();
    if (inputted5 === "alt space bar") {
      $("input#commandBox").val("");
      console.log("notebook");
      player.inventory.push("notebook");
      inputCmd.value = manager.message;
    }
  });
}


var suzanne = new Location('suzanne', "the creator of the fantasy dating game pounds on her computer in frustration, she needs to send the information on her computer to her phone and her tablet, her email provider is currently down can you think of the command that will open the air drop folder?")
var SuzanneAnswer = new PussleMessage("Thank you, now I can roam the streets hunting my next fantasy date, take this bike, and create a fantasy date of your own.")

if (inputted === "talk") {
  inputCmd.value = suzanne.name + ": " + suzanne.description;
  $("input#commandBox").val("");

  $("#inputCommands").submit(function(event) {
    event.preventDefault();
    var inputted6 = $("input#commandBox").val();
    if (inputted6 === "alt shift r") {
      $("input#commandBox").val("");
      console.log("bike");
      player.inventory.push("bike");
      inputCmd.value = suzanne.message;
    }
  });
}

// var fightGiggles = new Location ('fightGiggles', 'YOU FOOL!, you never stood a chance against Giggles, what were you thinking? All of your clothes and hair have been burnt to a crisp. it is time for a NEW GAME');
//
// if (inputted === "fight") {
//   inputCmd.value = suzanne.name + ": " + suzanne.description;
//   $("input#commandBox").val("");
//
//   $("#inputCommands").submit(function(event) {
//     event.preventDefault();
//     var inputted6 = $("input#commandBox").val();
//     if (inputted6 === "alt shift r") {
//       $("input#commandBox").val("");
//       console.log("bike");
//       player.inventory.push("bike");
//       inputCmd.value = suzanne.message;
//     }
//   });
// }
