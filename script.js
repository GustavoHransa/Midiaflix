let count =1;
document.getElementById("radio1").cheked = true;

setInterval(function(){

    nextImage();

}, 2000)


function nextImage(){
count++;
if(count>10){
    count =1;

}

document.getElementById("radio"+count).checked =true;

}