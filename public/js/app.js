console.log('client side js is loaded');



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');

weatherForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  const location = search.value;
  messageTwo.textContent = "loading..";
  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data)=>{
      if(data.error) {
        messageTwo.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forcast;
      }
    })
  })
})
