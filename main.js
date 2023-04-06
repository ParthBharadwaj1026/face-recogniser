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
        document.getElementById('result').innerHTML='<img id="result_img" src="'+data_uri+'">';
    });
}

console.log('ml5 version=',ml5.version);

//model link to be added
classfier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GpjatgLwS/model.json',modelloaded);

function modelloaded() {
    console.log("model loaded");
}
