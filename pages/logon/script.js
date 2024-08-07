import axios from "axios";

let form = document.forms[0];

form.onsubmit = (e) => {
    e.preventDefault();
    let obj = {};
    let fn = new FormData(form);
    fn.forEach((value, key) => {
        obj[key] = value;
    });
    form.reset();
    axios.post(`http://localhost:3001/users`, obj)
        .then(res => {
            localStorage.setItem('userId', res.data.id)
            window.location.replace('/')
        })
        .catch(error => console.error(error))
};

let loginBlock = document.querySelector('.loginBlock');
loginBlock.onclick = () => {
    window.location.replace('/pages/login/');
}