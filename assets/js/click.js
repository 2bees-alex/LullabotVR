
room.buttonClick = function() {
  log('test');
}

function log (value) {
  room.createObject("Text", {
    js_id : 'console'
  });
  room.objects['console'].pos = Vector(-1, 0, -.1);
  room.objects['console'].fwd = Vector(-1, 0, 0);
  room.objects['console'].scale = Vector(5, 5, 5);
  room.objects['console'].col = Vector(.5, 1, .5);
  //xdir="-0.725 -0.004 -0.688" ydir="-0.688 0.004 0.725" zdir="0.000 1.000 -0.006"
  room.objects['console'].text = "This is new text with js_id: " + room.objects['console'].js_id;
}