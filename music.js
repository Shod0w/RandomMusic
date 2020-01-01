const NOTES = ['C4','D4','Eb4','F4','G4','Ab4','Bb4'];
function randomSelectTwo () {
    const rando = getRndInteger(1,10);
    return rando > 5 ? "8n" : "4n";
  }
  
function getRandom () {
    const rando = getRndInteger(0, NOTES.length);
    return NOTES[rando];
  }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

document.querySelector('.setup').addEventListener('click', setupSynth);


function setupSynth() {
  window.synth = new Tone.Synth().toMaster();
}

function boop() {
  if (!window.synth) {
    setupSynth();
  }
  for(var i=0;i < 200;i++){
    var note = getRandom();
    console.log(note);
    window.synth.triggerAttackRelease(note, randomSelectTwo());
    sleep(250);
}

}
document.querySelector('.boop').addEventListener('click', boop);