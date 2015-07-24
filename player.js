function EvalSound(soundClip) {
  var sound = document.getElementById(soundClip);
  sound.play();
}

$(document).ready(function(){
  
  $('input').click(function(){
    console.log('button click happened');
    EvalSound(this.id);
  });
});
