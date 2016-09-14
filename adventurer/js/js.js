var arrowRight = document.getElementById ('#arrowright');
var arrowLeft = document.getElementById('#arrowleft');
var slideArray = document.getElementsByClassName('slide');
var slide = slideArray[0];


    arrowRight.onclick = function(){
        slide.classList.add('activeslide');
        $('#header-text').css({'display': 'none'});
        $('.napoleon-slide').css({'display': 'block'});
};


    arrowLeft.onclick = function(){
        slide.classList.remove('activeslide');
        $('#header-text').css({'display': 'block'});
        $('.napoleon-slide').css({'display': 'none'});
};

    var buttonArray = document.getElementsByClassName('btn');
    var colorArray = ['#ec4848', 'blue', 'green', 'yellow'];
    for (var i = 0; i < buttonArray.length; i++){
        var button = buttonArray[i];
        button.dataColorIndex = 0;
        button.onclick = function(){
            button.dataColorIndex++;
            if (button.dataColorIndex >= colorArray.length) {
                button.dataColorIndex = 0;
            }
            $(this).css({'box-shadow': 'inset 2px 2px 2px black', 'background-color': colorArray[button.dataColorIndex]});
        };
    }

    var buttonArray = document.getElementsByClassName('btn');
    var colorArray = ['#ec4848', 'blue', 'green', 'yellow'];
    var button = buttonArray[0];
    function myFunc(){

    }
