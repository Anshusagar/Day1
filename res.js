function assign(input) {
  window.location.assign(`./${input}`);
}
let payload;
let result = document.querySelector('#Results');

document.getElementById('btn').addEventListener('click', async function () {
  const response = await fetch('https://reqres.in/api/users?page=2').then((d) =>
    d.json()
  );
  payload = response.data;
  console.log(payload);
  let html="";
  
  for (let i = 0; i < payload.length; i++) {
    html += `<div class="persons">
            <img src="${payload[i].avatar}">
            <p>${payload[i].first_name}</p>
            <p>${payload[i].last_name}</p>
       </div>`;
    
  }
  result.innerHTML =(html);
});
