function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/train/audio/1ix3ut7xpo8JZRqC730AjzueJ6GqtoSyu', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}