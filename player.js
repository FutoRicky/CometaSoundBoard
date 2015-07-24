// play selected sound clip function
function PlaySound(soundClip) {
  var sound = document.getElementById(soundClip);
  sound.play();
}

$(document).ready(function(){
  
  $('input').click(function(){
    PlaySound(this.id);
  });
});
