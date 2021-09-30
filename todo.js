function assign(input) {
  window.location.assign(`./${input}`);
}
var lis = document.querySelectorAll('li');
let text = document.querySelector('#textBox');
let addBtn = document.querySelector('#addItem');
let lists = document.querySelector('#list');
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', function () {
    this.classList.add('check');
  });
  lis[i].addEventListener('mouseout', function () {
    this.classList.remove('check');
  });

  lis[i].addEventListener('click', function () {
    this.classList.toggle('done');
  });
}

addBtn.addEventListener('click', () => {
  let li = document.createElement('li');
  console.log(text.value);
  li.textContent = text.value;
  lists.appendChild(li);
});
const fetchData = () => {};
