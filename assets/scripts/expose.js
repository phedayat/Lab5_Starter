// expose.js
window.addEventListener('DOMContentLoaded', init);
const confetti = new JSConfetti(); // Confetti!

function init() {
  let onpage_images = document.getElementsByTagName("img"); // Get the image element

  let horn_select = document.getElementById("horn-select"); // Get the select for choosing the horn

  let horn_volume_level = document.getElementById("volume"); // Get the volume level
  let play_sound_btn = document.getElementsByTagName("button")[0]; // Get play button
  let play_sound_audio = document.getElementsByClassName("hidden")[0]; // Get audio
  
  // Add an event listener to change the horn
  horn_select.addEventListener('change', () => {
    let horn_option = horn_select.options[horn_select.selectedIndex].value; // Get the currently selected option
    let horn_img = onpage_images[0];
    
    play_sound_audio.src = "assets/audio/" + horn_option + ".mp3";
    horn_img.src = "assets/images/" + horn_option + ".svg"; // Change the image being shown
  });

  // Change volume image depending on the level
  horn_volume_level.addEventListener('change', () => {
    let currentVolume = horn_volume_level.value;
    let volume_img = onpage_images[1];
    if(currentVolume == 0){
      volume_img.src = "assets/icons/volume-level-0.svg";
    }else if(currentVolume > 0 && currentVolume < 33){
      volume_img.src = "assets/icons/volume-level-1.svg";
    }else if(currentVolume > 32 && currentVolume < 67){
      volume_img.src = "assets/icons/volume-level-2.svg";
    }else{
      volume_img.src = "assets/icons/volume-level-3.svg";
    }
    play_sound_audio.volume = currentVolume / 100;
  });

  // "Play Sound" button listener
  play_sound_btn.addEventListener('click', () => {
    // Get the currently selected option
    let horn_option = horn_select.options[horn_select.selectedIndex].value;
    play_sound_audio.play();
    if(horn_option == "party-horn"){
      confetti.addConfetti({
        confettiNumber: 1000,
        confettiRadius: 10
      });
    }
  });
}