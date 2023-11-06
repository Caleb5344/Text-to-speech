const texInput =
document.getElementById('text-input')

const speakButton =
document.getElementById('speak-button')
const stopButton =
document.getElementById('stop-button')

const synth =
window.speechSynthesis;
let speaking = false;

speakButton.addEventListener('click', () => {
    if(speaking) {
        return;
    }

    const text = texInput.value;
    if (text) {
        const utterance = new 
        SpeechSynthesisUtterance(text);
        synth.speak(utterance);
        speaking = true;

        utterance.onend = () => {
            speaking = false
            stopButton.disabled = true;
            speakButton.disabled = false;
        };

        stopButton.disabled = false;
        speakButton.disabled = true;
    }
});
stopButton.addEventListener('click', () => {
    if (speaking) {
        synth.cancel();
        speaking = false;
        stopButton.disabled = true;
        speakButton.disabled = false;
    }
});