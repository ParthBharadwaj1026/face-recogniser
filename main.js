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

