var lobby = new Location ('You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer. (ENTER the elevator or TALK to the Security Guard.)');
var secrityGuard = new Location ('the security guard eyes you suspiciously.(Would you like to talk to him, YES or NO?)')
var epicodusId = new item ("You are holding a dull plastic epicodus keycard in your hand.");

var elevator = new Location ('You have entered the elevator, now select (UP or DOWN depending on which direction you would like to go.)');

var basement = new Location ('You have now entered into the basement of the SW 400 building on sixth street. Here an evil dragon, "Giggles" lives. The only way to defeat Giggles is with a bike to hide behind and a lock to throw at him, you have neither. (RETURN to the elevator, or attempt to FIGHT Giggles.)');
var fightGiggles = new Location ('YOU FOOL!, you never stood a chance against Giggles, what were you thinking? RETURN to elevator');

var secondFloor = new Location ('You have now entered the second floor of the SW 400 building on sixth street. The Floor is labeled D+H but nobody really knows what that stands for. (EXPLORE the Floor, or RETURN to elevator)');
var secondFloorExplore = new Location ('You wander deeper into the dimly lit D+H headquarters, you enter the main office and there he is. Dracula and his henchmen...You have become a meal. You lose. lol, RETURN to elevator');

var thirdFloor = new Location ('You have now entered the third floor of the SW 400 building on sixth street, home of the Portland Clowning bootcamp. (EXPLORE the Floor, or RETURN to elevator)');
var thirdFloorExplore = new Location ('Large empty shoes and wigs are strewn about the floor. The seal that was waiting in the elevator with the ball bouncing on its nose slides past you and dissapears around a corner. Clowns come arond the corner....You have become a meal. RETURN to elevator');

var fourthFloor = new Location ('You have now entered the fourth floor of the SW 400 building on sixth street. Portlands new legal marijana grow operation. (EXPLORE the Floor, or RETURN to elevator)');
var fourthFloorExplore = new Location ('The hall has a strong oder that reminds you of that class fieldtrip to the Phish concert that your band teacher got fired for taking you to. Two large guard dogs start to walk towards you and unspeakable horrors are acted out, RETURN to elevator');

var fithFloor = new Location ('You have now entered the fith floor of the SW 400 building on sixth street. No label is seen from the elevator, but you notice a small door behind a file cabnet. (EXPLORE the Floor, or RETURN to elevator)');
var fithFloorExplore = new Location ('As you approach the door you notice that the room is gitting smaller and smaller. You open up the door and slide down a long dark tunnel. A dim lite at the end of the tunnel shows a sign for D+H headquarters. You enter the main office and there he is. Dracula and his henchmen...You have become a meal. You lose. RETURN to elevator');

var sixthFloor = new Location ('You have now entered the sixth floor of the SW 400 building on sixth street. This is the western branch of Slobproof.(EXPLORE the Floor, or RETURN to elevator)');
var sixthFloorExplore = new Location ('Slobproof builds custom chairs, sofas and ottomans with specially engineered fabric that withstands spills and other messes without staining. These designs marries the "common sense of a Jawish mother with the muscle of a professional wrestler" RETURN to elevator');

var seventhFloor = new Location ('You have now entered the seventh floor of the SW 400 building on sixth street, this is the former headquarters of Camera World.(EXPLORE the Floor, or RETURN to elevator)');
var seventhFloorExplore = new Location('Old sun faded picture, line the hall. A dull hum of the overhead lights is the only thing that can be heard. The smartphone has killed the camera industry(Return to elevator)');

var eighthFloor = new Location ('You have now entered the eighth floor of the SW 400 building on sixth street. No sign marks this floor, large wood panneling with hidden lights ligns the walls opposite you. (EXPLORE the Floor, or RETURN to elevator)');
var eighthFloorExplore = new Location ('Two large glass doors are at the end of the hallway, through the glass you see a few people sitting on couches with laptops who look to relaxed to be getting paid. (ENTER office or RETURN to elevator)');
var office = new Location ('A huge room full of epicodus students working hard on their various projects (SIT down at a computer, or CHOOSE a partner for the day.)');

var ninthFloor = new Location ('You have now entered the ninth floor of the SW 400 building on sixth street. A man with a bright red mohawk walks by with a laptop.(EXPLORE the Floor, or RETURN to elevator)');
var ninthFloorExplore = new Location ('This might be the home of Impact Dialing, you will never know because as soon as you step off the elevator you are sucked into a coding loop that never ends, RETURN to elevator');

var tenthFloor = new Location ('You have now entered the tenth floor of the SW 400 building on sixth street. This is the reginal office for Throx.(EXPLORE the Floor, or RETURN to elevator)');
var tenthFloorExplore = new Location ('Throx helps customers fight the infamous sock monster by selling socks in threes, not pairs. That way, when you lose one, you still got a backup sock to keep the other company, so you can keep wearing your favorite pair and doing your laundry worry free. Unfortunatly socks are always made in pairs so all of the extra socks have turned into a giant ball that roams the halls, you are knocked silly by the sock moster, RETURN to elevator');

var elevenththFloor = new Location ('You have now entered the top floor of the SW 400 building on sixth street, the home of Suzanne Casmentos "Fantasy Dating Game" (EXPLORE the Floor, or RETURN to elevator)');
var eleventhFloorExplore = new Location ('Fantasy Dating Game is like a grown-up version of "Truth or Dare," and it might be more interesting than fantasy football league. If your sick and tired of your  lackluster love life this could be the place for you. Much like fantasy sports leagues, the Fantasy Dating Game allows single women to earn points by flirting with guys at Starbucks, slipping their numbers to cute bartenders and going on actual dates. You get a crippling VD and can not continue, RETURN to elevator.');



//location prototype. This creates an extensible class/closure for locations that can be reused an infinite amount of times.
function playerLocation(_name, _description) {

    this.name = _name; //name (as string) of the location
    this.description = _description; // description text that is sent to the text box for the player to read

    this.toString = function () {
        var returnVariable = "";

        returnVariable = this.description; //the return variable will just be the description because it's the only thing that needs to be a string
        return returnVariable;

    }
};



var globalLocations = new Array();
globalLocations[0] = new playerLocation(1, 'home', "You are on plush carpet in a sparsely decorated room. You don't recognize where you are and feel uneased by how quiet it is. Looking around, you see 4 different ways out of this room. Perhaps someone else is here...", 5);

globalLocations[1] = new playerLocation(2, 'libraryMain', "You enter a room lined with books and a small fireplace sits inside the opposite wall. A fine Persian carpet fills the floor and the air is musky. It seems like no one has been in this room for a while.", 15);

globalLocations[2] = new playerLocation(3, 'northendLibrary', "You walk towards a bookcase opposite the door. Most of these books seem fairly old and have accumulated years of dust. However, one book seems to have been recently added to this library. It is titled 'Escaping' by Randy Butternubs.", 10);

globalLocations[3] = new playerLocation(4, 'artHall', "There is a double door at the end of the hallway. Several abstract paintings line the hallway. One of these paintings is crooked.", 5);

globalLocations[4] = new playerLocation(5, 'windowWall', "You face a small window with cast iron bars welded to the outside. There is a piece of paper taped to the window.", 5);

globalLocations[5] = new playerLocation(6, 'kitchen', "You enter an immaculate kitchen with white walls and a linoleum floor. There is a small cellar door next to the counter. \n\n **HINT: The next step requires textbox input!**", 10);

globalLocations[6] = new playerLocation(7, 'painting', "You turn and look at the crooked painting. It's a family portrait, but none of these people have faces. The exposed wall where the painting is tilted away from seems a lot cleaner than the rest of the wall...", 5);

globalLocations[7] = new playerLocation(8, 'tunnel', "This tunnel seems well excavated. There are even lamps on the walls! The lights turn on and you notice that there's a key in front of you. Take the key now, it seems like you won't be able to come back here.", 5);

globalLocations[8] = new playerLocation(9, 'southArtHallway', "You approach the double door at the end of the hall. It's ornately decorated with gold leaf inlays and the door handles are antique gold. The door's locked, so you need a key.", 5);

globalLocations[9] = new playerLocation(10, 'cellar', "You open the door and descend the stairs to the cellar. The cellar has a dirt floor and rotten wooden posts supporting the ceiling. Suddenly, a growling dog approaches you. He doesn't seem friendly!", 5);

globalLocations[10] = new playerLocation(11, 'holeInWall', " ", 5);
globalLocations[11] = new playerLocation(12, 'unlockedDoor', " ", 5);
globalLocations[12] = new playerLocation(13, 'lockedHallway', "Another hallway stands before you. There's an empty picture hook to your east with a door, again, at the end of the hallway. Maybe these two are related?", 10);
globalLocations[13] = new playerLocation(14, 'emptyPainting', "You face the empty hook. You seem convinced that it should be hanging something.", 5);
globalLocations[14] = new playerLocation(15, 'hungPainting', "", 0);
globalLocations[15] = new playerLocation(16, 'finalDoor', "You approach the door at the end of the hallway and jiggle the doorknob. Thank the lord, this door doesn't require a key! You push through and exit the house. You're free!! \n\n ***YOU WON!!!***\n Press F5 to restart.", 55);



//this function was made with the help of some outside consultation on SomethingAwful forums... I understood that I needed to have 2 nested loops for my object, but I was having trouble wrapping my head around the concept.
//it looks pretty bad, but it works.
    function checkNavButtons(checkLocation) {

        jQuery(function () {

            for (var my_property in locationMatrix) { //for every [currentlocation] property in locationMatrix
                if (locationMatrix.hasOwnProperty(my_property) && my_property === checkLocation) { //make sure it just checks locationMatrix for properties, see if has location that = checkLocation parameter
                    var loc = locationMatrix[my_property]; //set to checkLocation parameter
                    for (var dir in loc) { //for every direction in the checkLocation (i.e. north, south, east, west)
                        if (loc.hasOwnProperty(dir)) {
                            if (loc[dir] != -1) { //if the value of [currentLocation][direction] does not = -1
                                enableDirection(dir); //enable that direction button
                            } else if (loc[dir] === -1) {
                                disableDirection(dir); //else disable the directions that return -1
                            }
                        }
                    }
                }
            }
        });

    }


    //NOTE: THE PLAYER CANNOT ENTER THIS VIA DIRECTIONAL COMMANDS. THEREFORE THE MATRIX NAVIGATION DOES NOT APPLY.
    //enter cellar if and ONLY IF they are in the kitchen. If they are not coming from the kitchen, throw invalid command error
    function enterCellar() {
        var setMsg = "You open the door and descend the stairs to the cellar. The cellar has a dirt floor and rotten wooden posts supporting the ceiling. Suddenly, a growling dog approaches you. He doesn't seem friendly!";
        if (hasVisited("cellar") === false && currentLocation === "kitchen") {
            enableAllDirections();
            updateScore(10);
            addVisited("cellar");
            updateDisplay(setMsg);
            updateLocation("cellar");

            //deals with enable/disabling direction buttons
            disableDirection("north");
            disableDirection("south");
            disableDirection("west");
            disableDirection("east");

        } else if (currentLocation === "kitchen" && hasVisited("cellar") === true) {
            currentLocation = "cellar";
            enableAllDirections();
            updateDisplay(setMsg);
            updateLocation("cellar");

            //deals with enable/disabling direction buttons
            disableDirection("north");
            disableDirection("south");
            disableDirection("west");
            disableDirection("east");
        } else if (currentLocation !== "kitchen") {
            setMsg = "Invalid command. Please try another command.";
            updateDisplay(setMsg);
        }

    }

    function exitCellar() {
        if (currentLocation === "cellar") {
            updateDisplay(globalLocations[5]);
            currentLocation = globalLocations[5].name; //this successfully changes the current location to what "name" is set as in the playerLocation prototype.
            checkNavButtons(currentLocation);
        } else {
            setMsg = "You can't do that yet! Please try another command.";
            updateDisplay(setMsg);
        }
    }
