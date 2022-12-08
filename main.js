
function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Qu_R6X2zk/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}