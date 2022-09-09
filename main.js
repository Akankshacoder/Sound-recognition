function Sbtn()
{
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/i_hjKeQwl/model.json" , modelReady)
}
 function modelReady(){
    classifier.classify(gotResult)
 }

 function gotResult(error,results){
if (error){
  console.error(error)
}
else{
    console.log(results)
    document.getElementById("soundname").innerHTML = results[0].label;
    var p = results[0].confidence*100;
    document.getElementById("accuracy").innerHTML = p.toFixed(2) +" % ";
if(results[0].label=="Bell"){
    document.getElementById("ai1").src="aliens-01.gif"
    document.getElementById("ai2").src="aliens-02.png"
    document.getElementById("ai3").src="aliens-03.png"
    document.getElementById("ai4").src="aliens-04.png"

}
if(results[0].label=="Clap"){
    document.getElementById("ai1").src="aliens-01.png"
    document.getElementById("ai2").src="aliens-02.gif"
    document.getElementById("ai3").src="aliens-03.png"
    document.getElementById("ai4").src="aliens-04.png"
}
if(results[0].label=="Snap"){
    document.getElementById("ai1").src="aliens-01.png"
    document.getElementById("ai2").src="aliens-02.png"
    document.getElementById("ai3").src="aliens-03.gif"
    document.getElementById("ai4").src="aliens-04.png"
}
if(results[0].label=="Background Noise"){
    document.getElementById("ai1").src="aliens-01.png"
    document.getElementById("ai2").src="aliens-02.png"
    document.getElementById("ai3").src="aliens-03.png"
    document.getElementById("ai4").src="aliens-04.gif"
}
}
 }