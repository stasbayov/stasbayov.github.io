/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

  let OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  let defaultSlide = new Image();
  let currentPosition = 0;
  let btnPrev = document.getElementById('PrevSilde')
  let btnNext = document.getElementById('NextSilde')
  let slider = document.getElementById('slider');
  window.onload = function(){
      RenderImage();
  }

  function RenderImage() {
      defaultSlide.style.opacity = '0';
      slider.innerHTML = '';
      defaultSlide.src = OurSliderImages[currentPosition];
      slider.appendChild(defaultSlide)
      setTimeout(function () {
          defaultSlide.style.opacity = '1';
      }, 500)
  }
  btnNext.addEventListener('click', function () {
      if(currentPosition === (OurSliderImages.length - 1)){
          currentPosition = 0;
          RenderImage();
      } else if(currentPosition < (OurSliderImages.length - 1)){
          currentPosition++;
          RenderImage();
      }
  })
  btnPrev.addEventListener('click', function () {
    if(currentPosition === 0){
        currentPosition = (OurSliderImages.length - 1);
        RenderImage();
    } else if(currentPosition > 0){
        currentPosition--;
        RenderImage();
    }
  })












  // var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  // var currentPosition = 0;
  // var slider = document.getElementById('slider');
  // var btnPrev = document.getElementById('PrevSilde');
  // var btnNext = document.getElementById('NextSilde');
  //
  // window.addEventListener('load', function(){
  //   let firstSlide = OurSliderImages[currentPosition];
  //   let slideImg = document.createElement('img');
  //   slideImg.setAttribute('src', firstSlide);
  //   slider.appendChild(slideImg);
  //   slideImg.classList.add('visible');
  //   btnNext.addEventListener('click', function () {
  //     slideImg.classList.remove('visible');
  //     currentPosition++;
  //     if(currentPosition < OurSliderImages.length){
  //       firstSlide = OurSliderImages[currentPosition];
  //       slideImg.setAttribute('src', firstSlide);
  //       slider.appendChild(slideImg);
  //       setTimeout(function () {
  //         slideImg.classList.add('visible');
  //       }, 100)
  //     }
  //     else{
  //       currentPosition = 0;
  //       firstSlide = OurSliderImages[currentPosition];
  //       slideImg.setAttribute('src', firstSlide);
  //       slider.appendChild(slideImg);
  //       setTimeout(function () {
  //         slideImg.classList.add('visible');
  //       }, 100)
  //     }
  //   })
  //   btnPrev.addEventListener('click', function () {
  //     slideImg.classList.remove('visible');
  //     currentPosition--;
  //     if(currentPosition > -1){
  //       firstSlide = OurSliderImages[currentPosition];
  //       slideImg.setAttribute('src', firstSlide);
  //       slider.appendChild(slideImg);
  //       setTimeout(function () {
  //         slideImg.classList.add('visible');
  //       }, 100)
  //     }
  //     else{
  //       currentPosition = (OurSliderImages.length - 1);
  //       firstSlide = OurSliderImages[currentPosition];
  //       slideImg.setAttribute('src', firstSlide);
  //       slider.appendChild(slideImg);
  //       setTimeout(function () {
  //         slideImg.classList.add('visible');
  //       }, 100)
  //     }
  //   })
  // })
