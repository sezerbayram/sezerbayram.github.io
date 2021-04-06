
  let addHere = document.querySelector('.list-group');
  let li = document.createElement('li');
  let myBtn = document.querySelector('.myBtn')
  let input = document.querySelector('.input')

  myBtn.style.width = '100px';
  input.style.width = '500px';
  

      myBtn.onclick = function () {
      let myItem = input.value;
      input.value = '';
      let newBtn = document.createElement('button')
      newBtn.className = ' btn btn-warning';
      newBtn.innerText = 'DELETE';
      
      let myText = document.createElement('span');
      let li = document.createElement('li');
      li.textContent = myItem;
      li.appendChild(myText);
      li.appendChild(newBtn);
      addHere.appendChild(li);
      li.className = 'list-group-item';

      newBtn.onclick = function (){
          addHere.removeChild(li);
      }
      input.focus();
}


 
  




 
