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
  if (memes.length = clicked_memes.length) {
    room.objects['console'].text = "Congrats! You found all " + memes.length + "memes!";
    // todo: reposition all images & makes them swirl around the 'player'
  }

}

room.update = function (dt) {
  // setting an elements .pos to this will keep in in the user's view
  var console_pos = translate(player.pos, Vector(1));

  // set the console to follow the player
  room.objects['console'].pos = translate(player.pos, Vector(1));
  room.objects['console'].text = "You have found " + cmlength + " of " + mlength + " memes.";

  // room.objects['console'].fwd = player.view_dir;
}
