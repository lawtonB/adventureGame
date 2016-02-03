var lobby = new Location ('You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer. (ENTER the elevator or TALK to the Security Guard.)');
var secrityGuard = new Location ('The security guard eyes you suspiciously, are you an Epicodus student? Do you have an ID to make the elevator work? Here, you will need one of these if you are ever going to go any where in this building. He holds out an ID for you to TAKE')
var epicodusId = new item ("You are holding a dull plastic epicodus keycard in your hand.");

var elevator = new Location ('You have entered the elevator, now select (UP or DOWN depending on which direction you would like to go.)');

<<<<<<< HEAD
var basement = new Location ('You have now entered into the basement of the SW 400 building on sixth street. Here an evil dragon, "Giggles" lives. The only way to defeat Giggles is with a bike to hide behind and a lock to throw at him, you have neither. (RETURN to the elevator, or attempt to FIGHT Giggles.)');
var fightGiggles = new Location ('YOU FOOL!, you never stood a chance against Giggles, what were you thinking? All of your clothes and hair have been burnt to a crisp. RETURN to elevator');
=======
var basement = new Location ('You have now entered into the basement of the SW 400 building on sixth street. Here an evil dragon, "Giggles" lives. The only way to defeat Giggles is with a bike to hide behind and a lock to throw at him. (RETURN to the elevator, or attempt to FIGHT Giggles.)');
var fightGiggles = new Location ('YOU FOOL!, you never stood a chance against Giggles, what were you thinking? All of your clothes and hair have been burnt to a crisp. it is time for a NEW GAME');
var newGame = new Location ('You choose poorly, start NEW GAME')
>>>>>>> 06ba9f6b646b680f8471c36843ae257a8a92f48b

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
