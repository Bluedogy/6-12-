function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === '반짝') {
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      document.querySelector('#night_day').value = '짝반';

      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = 'aqua';
        i = i + 1;
      }
    } else {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    self.value = '반짝';

    var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = 'blueviolet';
        i = i + 1;
        }
      }
    }