var i = 0;
var image = [];
var time = 3000;
image[0] = 'image/img1 (1).jpg';
image[1] = 'image/img1 (2).jpg';
image[2] = 'image/img1 (3).jpg';
image[3] = 'image/img1 (4).jpg';
image[4] = 'image/img1 (5).jpg';
image[5] = 'image/img1 (6).jpg';
function slide(){
    document.imgs.src = image[i];
    if(i<image.length - 1){
        i++;
    }
    else
    {
        i = 0;
    }
    setTimeout("slide()", time);
}
window.onload = slide;