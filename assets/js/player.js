$(document).ready(function(){
  $('input').click(function(){
    var sound = document.getElementById(this.id);
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  });
});
