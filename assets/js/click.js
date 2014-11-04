// list of memes in our scene
var memes = [
  'awesome',
  'bens-castle-2',
  'bens-castle',
  'brock-claps',
  'brock-throwmoney',
  'chef-yumyum',
  'deja-micah',
  'eatoncon',
  'eric-duran',
  'erics-jacket',
  'fucking-rustic',
  'geek-fashion',
  'joes-hugs',
  'juampy-didntread',
  'kyle-day',
  'sally-baby',
  'strap-rocket'
],
  mlength = memes.length,
  cmlength = 0,
  clicked_memes = [],
  global_time_passed = 0;

room.buttonClick = function (id) {
  room.objects['console1'].text = typeof id;

  // see if this was clicked already
  if (typeof clicked_memes[id] == 'undefined') {
    // record the id of what was clicked
    // .push() returns the new length of the array
    cmlength = clicked_memes.push(id);
    clicked_memes[id]++;
    // room.objects[id].pos = translate(player.pos, Vector(-clicked_memes[id]))
  }

  // room.objects['console'].text = cmlength + " " + clicked_memes;

  // compare the clicked_memes with the list of memes
  if (memes.length === clicked_memes.length) {
    room.objects['console'].text = "Congrats! You found all " + memes.length + "memes!";

    // todo: reposition all images & makes them swirl around the 'player'
  }

}

room.update = function (dt) {
  // setting an elements .pos to this will keep in in the user's view
  var console_pos = translate(player.pos, Vector(1));

  // Rudimentary HUD, follows the player and faces the player.
  room.objects['console'].text = "You have found " + cmlength + " of " + mlength + " memes. room:" + window.location;

   // I need to create a function that handles this.
  var offsetPosition = translate(player.pos, player.view_dir);
  var faceUserFWD = scalarMultiply(player.view_dir, -1);

  room.objects["console"].pos = translate(offsetPosition, Vector(0, 1.40, 0));
  room.objects["console"].fwd = faceUserFWD;
}

room.botClick = function () {
  room.objects['233'].pos.y = room.objects['233'].pos.y + 1;
}

// helper functions

// I got tired of seeing the long vector numbers in front of me.
function cleanUpVectorValues (vector, precision) {
    return "[X : " + cleanUpFloat(vector.x, precision) + "]"
         + "[Y : " + cleanUpFloat(vector.y, precision) + "]"
         + "[Z : " + cleanUpFloat(vector.z, precision) + "]";
}

// Changing values makes for a weird effect where the text will scale up as there are fewer numbers,
// and scale down as there are more. after some research, its floating point numbers in JS,
// just the nature of the beast.
function cleanUpFloat(value, precision) {
  return Math.round(value * precision) / precision;
}