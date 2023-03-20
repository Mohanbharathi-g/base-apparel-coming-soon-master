// creating elements

const submitEl = document.getElementById('btn-submit');
const errorMsg = document.getElementById('error-msg');
const inputEl = document.getElementById('input');

// creating global variable
const regaxEl = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

// event listener
submitEl.addEventListener('click', function () {
  let email = inputEl.value;
  console.log(email);
  if (errorMsg.classList.contains('close')) {
    if (email.match(regaxEl)) {
      errorMsg.innerText = 'thanks for your response';
      errorMsg.classList.remove('close');
      errorMsg.style.color = 'lightgreen';
    } else {
      console.log(`1bye`);
      errorMsg.classList.remove('close');
      inputEl.style.border = '2px solid hsl(0, 93%, 68%)';
    }
  } else {
    errorMsg.classList.add('close');
    inputEl.style.border = '2px solid hsl(0, 36%, 70%)';
  }
});
