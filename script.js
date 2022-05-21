const color = document.getElementById('color');
const body = document.getElementById('body');
const reset = document.getElementById('reset');
const container = document.getElementById('container');

function me(){
  let inputNum = document.getElementById('number');
  let number = inputNum.value;

  for (i = 0; i < number; i++) {
  let div = document.createElement('div');
  div.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  container.appendChild(div);
  div.style.padding = "10px";
  div.style.width= "5px";
  div.style.backgroundColor = "#ffffff"
  
  
  color.addEventListener('input', function() {
  div.addEventListener('click', function(){
    div.style.backgroundColor = color.value;
  });
})
}
 inputNum.value = "";
}

me()
