const timeH1 = document.querySelector('h1');
 let timeSecond = 60*prompt('geri sayim icin kac dakika gerekli??');

 

  const countDown = setInterval(() =>{
      timeSecond--;
     displayTime(timeSecond);
      if(timeSecond <= 0 ){
      endTime();
      //clearInterval(countDown);
      }
      
  },1000)


 function displayTime(second) {
     const min = Math.floor(second/60);
     const sec = Math.floor(second%60);

     timeH1.innerHTML =`${min < 10 ? '0' : '' } ${min}
                         : ${sec < 10 ? '0' : ''}${sec} ` 

 }
 function endTime(){
     timeH1.innerHTML = 'TIME TO BREAK!';

 }