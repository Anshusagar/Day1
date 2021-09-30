function assign(input) {
  window.location.assign(`./${input}`);
}

let text = document.querySelector('#textBox');
let addBtn = document.querySelector('#addItem');
let lists = document.querySelector('#list');

addBtn.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = text.value;
  li.setAttribute('class', 'task');
  console.log(li);
  lists.appendChild(li);
  fetchData();
});
function fetchData() {
  let task = document.querySelectorAll('.task');
  for (var i = 0; i < task.length; i++) {
    task[i].addEventListener('mouseover', function () {
      this.classList.add('check');
    });
    task[i].addEventListener('mouseout', function () {
      this.classList.remove('check');
    });

    task[i].addEventListener('click', function () {
      this.classList.toggle('done');
    });
  }
}
