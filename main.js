const input = document.getElementById('pass');
const div = document.querySelector('.message');

const password = "12345";
const message = "Have a lovely day! :)";

//event input captures changes
input.addEventListener('input', (e) => {
if(password === e.target.value) {
div.textContent = message;
e.target.value = "";
} else {
    div.textContent = "";
}
})

//obiekt classList przechowuje wszystkie klasy inputa
input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})