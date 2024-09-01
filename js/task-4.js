const formInput = document.querySelector(".login-form");
const formSubmit = event => {

  event.preventDefault();
  const form = event.target.elements;
  const emailValue = form.email.value.trim();
  const passValue = form.password.value.trim();

  if (!emailValue || !passValue) {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    email: emailValue,
    password: passValue
  };
  
  console.log(data);
  formInput.reset();
  
}
formInput.addEventListener('submit', formSubmit);
