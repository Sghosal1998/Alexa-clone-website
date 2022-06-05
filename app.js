const content = document.querySelector(".content")
content.style.color = "white"

const content2 = document.querySelector(".content2")
content2.style.color = "whitesmoke"

const heading = document.querySelector(".heading")
heading.style.color = "white"

const talk = document.querySelector(".talk")

const speechRecognition = window.speechRecognition||window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = function(){
    console.log("Voice Activated")
}

recognition.onresult = function(event){
  content.innerText = event.results[event.resultIndex][0].transcript;
  var x = content.innerText
  say(x)
}

talk.addEventListener("click",()=> {
    recognition.start();
})

function say(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;

    if (message.includes('who are you')) {
        speech.text = 'i am alexa';
        content2.innerText = speech.text
    }

    if (message.includes('what is your name')) {
        speech.text = 'my name is alexa';
        content2.innerText = speech.text
    }

    if (message.includes('what is your favorite color')) {
        speech.text = 'my favorite color is golden brown';
        content2.innerText = speech.text
    }

    if (message.includes('where do you live')) {
        speech.text = 'i live in the cloud';
        content2.innerText = speech.text
    }
    speech.volume = 10;
    speech.rate = 1;
    speech.pitch = 2;
    speech.speed = 1;
    window.speechSynthesis.speak(speech)
}