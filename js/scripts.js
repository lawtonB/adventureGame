var inventory = [];

var currentLocation = lobby;

function Location(description) {
      this.description = description;
  };

   var lobby = new Location ('You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer.  (ENTER the elevator or TALK to the Security Guard.)');

    var office = new Location ('A huge room full of epicodus students working hard on their various projects');

    var securityGuard = new Location ("the security guard eyes you suspiciously.");

    function item(description){
      this.description = description;
    };

    var epicodusId = new item ("You are holding a dull plastic epicodus keycard in your hand.");

    // if (currentLocation ===  securityGuard && prompt === "yes") {inventory.push(epicodusId + "the guard sighs and points behind you. 'Here is an id card. Take the elevator over there'")
    // } else if (prompt === "no") {
    //     return securityGuard
    // }

$(document).ready(function(){
    $("#startingRoom").text(lobby.description);

    event.preventDefault();
  });

// //
// //
// //
// // function command_split(str){
// // 	var parts = str.split(/\s+/); // splits string into an array of words, taking out all whitespace
// // 	var command = parts.shift(); // command is the first word in the array, which is removed from the array
// // 	var object = parts.join(' '); // the rest of the words joined together.  If there are no other words, this will be an empty string
// // 	return [command, object];
// // }
// //
// // var room, command, verb, obj;
// //
// // function remove(array, item){
// // 	var idx = array.indexOf(item);
// // 	if (idx > -1){
// // 		array.splice(idx,1);
// // 	}
// // }
// //
// // function tryToMove(room, direction){
// //     if(room.exits[direction]){
// //         character.location = room.exits[direction];
// //         room = dungeon[character.location];
// // 		describe(room);
// //     }else{
// //         print('You cannot go that way');
// // 	}
// // }
// //
// // function printInventory(){
// //     print('You are carrying:');
// //     character['inventory'].forEach(function(item){
// //         print('&nbsp;&nbsp;&nbsp;&nbsp;', item);
// // 	});
// // }
// //
// // function describe(room){
// // 	if(!room.visited){
// // 		print ('you are in ' + room.long_description);
// // 	}else{
// // 		room.visited = true;
// // 		print (room.short_description);
// // 	}
// // 	var exits = Object.keys(room.exits);
// // 	if (exits.length > 1){
// // 		var last_exit = exits.pop();
// // 		print('there are exits to the ' + exits.join(', ') + ' and ' + last_exit);
// // 	}else{
// // 		print('there is an exit to the ' + exits[0]);
// // 	}
// //     room['contents'].forEach(function(item){
// //         print('There is a ' + item + ' here');
// // 	});
// // }
// //
// // describe(dungeon[character.location]);
// //
// // function getOneCommand(){
// //     room = dungeon[character['location']];
// //     command = command_split(prompt(room['short_description'] + ' > '));
// //     verb = command[0];
// //     obj = command[1];
// //     console.log('verb: ' + verb + ', object: ' + obj);
// //     if (['east', 'west', 'north', 'south', 'up', 'down', 'in', 'out	'].indexOf(verb) > -1){
// // 		tryToMove(room, verb);
// //     }else if (verb === 'inventory'){
// // 		printInventory();
// // 	}else if (verb === 'quit'){
// //         print('Goodbye');
// //         return;
// // 	}else if (verb === 'take'){
// //         if (obj === 'all'){
// //             if (room['contents']){
// //                 room.contents.slice().forEach(function(item){ // .slice() makes a copy of the list so removing items works
// //                     print('You pick up the ' + item);
// //                     character['inventory'].push(item);
// // 					remove(room['contents'], item);
// // 				});
// //             }else{
// //                 print('There is nothing to take!');
// // 			}
// //         }else{
// //             room['contents'].slice().forEach(function(item){
// //                 if (item.indexOf(obj) > -1){ // does the word in obj match any part of the text of item?
// //                     print('You pick up the ' + item)
// //                     character['inventory'].push(item);
// // 					remove(room['contents'], item);
// // 				}
// // 			});
// // 		}
// // 	}
// // 	setTimeout(getOneCommand, 0);
// // }
// // getOneCommand();
