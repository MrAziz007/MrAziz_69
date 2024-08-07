import axios from "axios";
import { createCards } from "./components/card.js";
import { createTable } from "./components/table.js";
import { reload } from "./libs/utils.js";

axios.get(`http://localhost:3001/transaction`)
    .then(res => {
        // console.log(res);
        reload(res.data, 'tbody', createTable);
    })
    .catch(error => console.error(error));

axios.get(`http://localhost:3001/cards`)
    .then(res => {
        // console.log(res);
        reload(res.data, 'dspGrid', createCards);
    })
    .catch(error => console.error(error));

axios.get(`http://localhost:3001/users?id=${'e45t'}`)
    .then(res => {
        // console.log(res.data);
        for (const item of res.data) {
            let userEmails = document.querySelectorAll('.userEmail');
            userEmails.forEach(elem => {
                elem.textContent = item.email;
            })
            let userName = document.querySelector('.userName');
            userName.textContent = item.sername + ' ' + item.name
        }
    })
    .catch(error => console.error(error));

let exit = document.querySelector('.exit');
exit.onclick = () => {
    window.location.replace('/pages/login/');
}