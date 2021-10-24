// explore.js

window.addEventListener('DOMContentLoaded', init);

// Get the voice object from the list of voices
function getVoiceObject(voices, name){
  for(let i = 0; i < voices.length; i++){
    if(voices[i].name === name){
      return voices[i];
    }
  }
}

// Timeout if the SpeechSynthesis object is "speaking"
function checkIfSpeaking(ss, faceImg){
  setTimeout(() => {
    if(ss.speaking){
      faceImg.src = "assets/images/smiling-open.png";
      checkIfSpeaking(ss, faceImg);
    }else{
      faceImg.src = "assets/images/smiling.png";
    }
  }, 150);
}

function init() {
  // Get relevant HTML elements
  let pressToTalkBtn = document.getElementsByTagName("button")[0];
  let voiceSelect = document.getElementById("voice-select");
  let faceImg = document.getElementsByTagName("img")[0];
  
  // Setup utterance
  var utterance = new SpeechSynthesisUtterance();
  var voices = [];
  var ss = window.speechSynthesis;

  // Get and set the possible voices
  ss.addEventListener('voiceschanged', () => {
    voices = ss.getVoices();
    for(let i = 0; i < voices.length; i++){
      let voice = document.createElement("option");
      voice.textContent = voices[i].name;
      voiceSelect.appendChild(voice);
    }
  });

  // Set the voice when one is chosen from the list
  voiceSelect.addEventListener('change', () => {
    let voiceOption = voiceSelect.options[voiceSelect.selectedIndex].value;
    utterance.voice = getVoiceObject(voices, voiceOption);
  });

  // Start speaking when the PTT button is pressed and smile
  pressToTalkBtn.addEventListener('click', () => {
    utterance.text = document.getElementById("text-to-speak").value;
    ss.speak(utterance);
    checkIfSpeaking(ss, faceImg);   
  });
}