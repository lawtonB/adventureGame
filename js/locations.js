function playerLocation(_id, _name, _description) {

    this.id = _id; //id of the location, not really important, just for debugging
    this.name = _name; //name (as string) of the location
    this.description = _description; // description text that is sent to the text box for the player to read

    this.toString = function () {
        var returnVariable = "";

        returnVariable = this.description; //the return variable will just be the description because it's the only thing that needs to be a string
        return returnVariable;
    }
};

var globalLocations = new Array();
globalLocations[0] = new playerLocation(1, 'home', "You are in the lobby of the epicodus building. There is an elevator and a bored security guard playing solitaire on his computer.  (ENTER the elevator or TALK to the Security Guard.)");
globalLocations[1] = new playerLocation(2, 'office', "A huge room full of epicodus students working hard on their various projects", 15);

//locationMatrix is a 2D object used for navigation. If the direction the player wants to go from his/her current location, then the value is from globalLocations[]. Otherwise it will be -1 for invalid.
//the matrix is expandable for an unlimited number of locations. Just make sure that the currentlocation value (locationMatrix[currentLocation]) matches the one in globalLocations.
// var locationMatrix = {};
// var locationMatrix = {
//     home: {
//         home: globalLocations[0],
//     },
//     windowWall: {
//         north: -1,
//         south: -1,
//         east: -1,
//         west: globalLocations[0]
//     },
