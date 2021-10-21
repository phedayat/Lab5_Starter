// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let onpage_images = document.getElementsByTagName("img"); // Get the image element
  let horn_img = onpage_images[0];
  let horn_select = document.getElementById("horn-select"); // Get the select for choosing the horn
  let volume_img = onpage_images[1];
  let horn_volume_level = document.getElementById("volume"); // Get the volume level

  // Add an event listener to change the horn
  horn_select.addEventListener('change', () => {
    let horn_option = horn_select.options[horn_select.selectedIndex].value; // Get the currently selected option
    horn_img.src = "assets/images/" + horn_option + ".svg"; // Change the image being shown
    if(horn_option == "party-horn"){
      const confetti = new JSConfetti(); // Confetti should be bound to "Play Sound" button
      confetti.addConfetti();
    }
  });

  // Change volume image depending on the 
  // TODO: Still need to set <audio> volume
  horn_volume_level.addEventListener('change', () => {
    let currentVolume = horn_volume_level.value;
    if(currentVolume == 0){
      volume_img.src = "assets/icons/volume-level-0.svg";
    }else if(currentVolume > 0 && currentVolume < 33){
      volume_img.src = "assets/icons/volume-level-1.svg";
    }else if(currentVolume > 32 && currentVolume < 67){
      volume_img.src = "assets/icons/volume-level-2.svg";
    }else{
      volume_img.src = "assets/icons/volume-level-3.svg";
    }
  });
}