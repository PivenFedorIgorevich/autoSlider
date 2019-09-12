/*document.getElementById('slider-left').onclick = sliderLeft; запуск по нажатию кнопки*/

let left=0;
let timer;
autoSlider();  
function autoSlider(){
   
    timer = setTimeout(function(){
        let polosa = document.getElementById('polosa');
        left=left - 128;
        if(left<-512){
            left=0;
            clearTimeout(timer);
        }
        polosa.style.left =left + 'px';
        autoSlider();    
    }, 1000);
}

