let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let number = document.getElementById('number');
let btn = document.getElementById('btn');
let reset = document.getElementById('reset');
let hide = document.getElementById('hide');
let result = document.getElementById('result');
let users = JSON.parse(localStorage.getItem('users')) || [];
localStorage.setItem('users', JSON.stringify(users));
renderData();
btn.addEventListener('click', (e) => {
  e.preventDefault();
  ValidateEmail(email);
  phonenumber(number);
  //get all data from form
  let payload = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    number: number.value,
  };
  console.log(payload);
  //make a payload object of data and
  //set this payload into users array and save into localStorage
  users.push(payload);
  localStorage.setItem('users', JSON.stringify(users));
  //do dom to display all data from localStorage
  result.innerHTML = '';
  renderData();
});

function renderData() {
  for (let i = 0; i < users.length; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'user');
    div.setAttribute('id', 'user');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    p1.innerHTML = 'First Name - ' + users[i].fname;
    p2.innerHTML = 'Last Name - ' + users[i].lname;
    p3.innerHTML = 'Email - ' + users[i].email;
    p4.innerHTML = 'Mobile number - ' + users[i].number;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    console.log(div);
    result.appendChild(div);
  }
}

hide.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('click');
  document.getElementById('result').classList.toggle('hidden');
});

function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {
    alert('You have entered an invalid email address!');
    email.focus();
    return false;
  }
}

function phonenumber(inputtxt) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!inputtxt.value.match(phoneno)) {
    alert('You have entered an invalid Phone Number!');
    number.focus();
    return false;
  }
}
function assign(input) {
  window.location.assign(`./${input}`);
}
