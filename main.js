Webcam.set({
    width:400,
    height:450,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById('camera');
Webcam.attach('#camera');

function capture_img(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').hidden=false;
        document.getElementById('result').innerHTML="<img id='result_image' src='"+data_uri+"'>";
    });
    console.log('captured');
}

console.log('ml5 version=',ml5.version);
classfier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GpjatgLwS/model.json',modelloaded);

function modelloaded() {
    console.log("model loaded");
}

function identfy_img(){
    img = document.getElementById('result_image');
    classfier.classify(img, gotresult)
}

function gotresult(error,result){
 if (error) {
    console.error(error);
 } else {
    console.log(result);
    document.getElementById('result_person_name').innerHTML=result[0].label;
    document.getElementById('obj_accuracy').innerHTML=result[0].confidence.toFixed(3);
 }        
}
