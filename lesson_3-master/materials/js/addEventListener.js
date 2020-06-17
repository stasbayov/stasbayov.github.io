  // addEventListener
  function ChangeBackColor( e ){
    var color = e.target.dataset.color;
        console.log( e, e.target, color );
        document.body.style.background = color;
  }
  

  var buttonsSelector = document.querySelectorAll('._changeColor');
  // console.log( buttonsSelector );

  // var btn = document.getElementById('test_btn');
  //     btn.addEventListener('click', ChangeBackColor);

  buttonsSelector.forEach( function( btn ){
    btn.addEventListener('click', ChangeBackColor);
  });

  // var nButton = document.querySelector('._changeColor');
  //     nButton.removeEventListener('click', ChangeBackColor);

  /*
    Добавление несколько обработчиков на один элемент
  */

  // function getFunc( param ) { 
  //   if( param ){
  //     return function(){
  //       console.log('ITS TRUE');
  //     }
  //   } else {
  //     return function(){
  //       console.log('ITS FALSE');
  //     }
  //   }
  // }
  
  // function mFunc1(){ console.log('Log1');}
  // function mFunc2(){ console.log('Log2');}
  // function mFunc3(){ console.log('Log3');}

  // MultiEvent.addEventListener('click', mFunc1);
  // MultiEvent.addEventListener('click', mFunc3);
  // MultiEvent.addEventListener('click', mFunc2);

  /*

    Итог:
      Есть 3 способа назнчить обработчик событий:

      Атрибут HTML: onclick="...".
      Свойство: elem.onclick = function.
      Специальный методы: elem.addEventListener

  */

  // - - - -
  // В консоли для получения обработчиков (Работает только в хроме)
  // getEventListeners( MultiEvent );

